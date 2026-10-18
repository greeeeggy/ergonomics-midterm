import test from 'node:test';
import assert from 'node:assert/strict';
import { questions, topics, sources } from '../bank.js';
import { BANK_VERSION, normalize, isCorrect, shuffle, selectQuestions, validSession } from '../engine.js';

test('all questions have distinct IDs and prompts, valid answer keys and in-scope evidence', () => {
  assert.equal(questions.length, 200);
  assert.equal(new Set(questions.map(q => q.id)).size, questions.length);
  assert.equal(new Set(questions.map(q => q.prompt)).size, questions.length);
  const bounds = { analysis: 56, environment: 92, mechanics: 85 };
  for (const q of questions) {
    assert.ok(topics[q.topic] && sources[q.source]);
    assert.ok(q.prompt && q.answer && q.explanation && q.pages);
    assert.ok(['mcq','tf','identification'].includes(q.type));
    assert.equal(isCorrect(q, q.answer), true);
    const pages = q.pages.split(/[,–]/).map(p => Number(p.trim()));
    assert.ok(pages.every(Number.isInteger));
    if (q.source === 'book') assert.ok(pages.every(p => p >= 3 && p <= 16 || p >= 41 && p <= 67 || p >= 147 && p <= 166));
    else assert.ok(pages.every(p => p >= 1 && p <= bounds[q.source]));
    if (q.type === 'mcq') {
      assert.equal(q.choices.length, 4);
      assert.equal(new Set(q.choices).size, 4);
      assert.equal(q.choices.filter(c => isCorrect(q, c)).length, 1);
    }
    if (q.type === 'tf') assert.ok(['True','False'].includes(q.answer));
  }
});

test('each topic offers all three formats and a substantial set of questions', () => {
  for (const topic of Object.keys(topics)) {
    const items = questions.filter(q => q.topic === topic);
    assert.ok(items.length >= 20);
    assert.equal(new Set(items.map(q => q.type)).size, 3);
  }
});

test('identification accepts explicit aliases and normalized whitespace, but rejects nearby concepts', () => {
  const q = questions.find(q => q.answer === 'Electromyography');
  assert.equal(isCorrect(q, '  eMg  '), true);
  assert.equal(isCorrect(q, 'electroencephalography'), false);
  assert.equal(isCorrect(q, 'not EMG'), false);
  assert.equal(isCorrect(q, 'EM'), false);
  assert.equal(isCorrect(q, ''), false);
  assert.equal(isCorrect(q, '   '), false);
  assert.equal(normalize(' ＥＭＧ '), 'emg');
  assert.equal(isCorrect({type:'identification',answer:'10 kg'}, '10'), false);
});

test('every declared identification alias is accepted', () => {
  for (const q of questions.filter(q => q.type === 'identification')) {
    for (const alias of q.aliases) assert.equal(isCorrect(q, alias), true, q.id);
  }
});

test('filters and session limits select only the requested questions without duplicates', () => {
  const selected = selectQuestions(questions, { topic:'vision', type:'mcq', count:'20' });
  assert.equal(selected.length, 17);
  assert.ok(selected.every(q => q.topic === 'vision' && q.type === 'mcq'));
  assert.equal(new Set(selected.map(q => q.id)).size, selected.length);
  assert.deepEqual(selectQuestions(questions, {topic:'missing'}), []);
  assert.equal(selectQuestions(questions).length, questions.length);
  assert.equal(selectQuestions(questions, {count:'20'}).length, 20);
});

test('shuffle does not mutate or lose items', () => {
  const initial = ['a','b','c','d'];
  const result = shuffle(initial, () => 0);
  assert.deepEqual(initial, ['a','b','c','d']);
  assert.deepEqual([...result].sort(), initial);
  assert.notDeepEqual(result, initial);
});

test('restored sessions reject stale, corrupt, duplicated, unknown, and forged answer state', () => {
  const q = questions[0];
  const value = {version:BANK_VERSION,ids:[q.id,questions[1].id],index:0,responses:{}};
  assert.ok(validSession(value, questions));
  assert.ok(!validSession(null, questions));
  assert.ok(!validSession({...value, version:'old'}, questions));
  assert.ok(!validSession({...value, ids:['unknown']}, questions));
  assert.ok(!validSession({...value, ids:[q.id,q.id]}, questions));
  assert.ok(!validSession({...value, index:5}, questions));
  assert.ok(!validSession({...value, index:1}, questions));
  assert.ok(!validSession({...value, responses:[]}, questions));
  assert.ok(!validSession({...value, responses:{[q.id]:{value:'wrong',correct:true}}}, questions));
  assert.ok(validSession({...value, responses:{[q.id]:{value:q.answer,correct:true}}}, questions));
});

test('worked calculation keys agree with independent arithmetic', () => {
  const expect = (snippet, value) => assert.equal(questions.find(q => q.prompt.includes(snippet)).answer, value);
  expect('E = 500 lux', `${(500*.6/Math.PI).toFixed(1)} cd/m²`);
  expect('80 and 20 cd/m²', ((80-20)/(80+20)).toFixed(2));
  expect('mean 170 cm', `${170-1.65*10} cm`);
  expect('H = 50 cm', (25/50).toFixed(2));
  expect('A = 45°', (1-.0032*45).toFixed(3));
  expect('18 kg and its RWL', String(18/12));
  expect('age 30', `${220-30} beats/min`);
});
