import { questions, topics, sources } from './bank.js';
import { BANK_VERSION, isCorrect, selectQuestions, validSession } from './engine.js';

const $ = selector => document.querySelector(selector);
const main = $('#main');
const storageKey = 'ergo-study-session-v1';
const labels = { mcq: 'Multiple choice', tf: 'True or false', identification: 'Identification' };
const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const byId = new Map(questions.map(q => [q.id, q]));
let session = null;
let storageAvailable = true;
let setup = { topic: 'all', type: 'all', count: '50' };

try {
  const saved = JSON.parse(localStorage.getItem(storageKey));
  if (validSession(saved, questions)) session = saved;
  else localStorage.removeItem(storageKey);
} catch { storageAvailable = false; }

function save() {
  try { localStorage.setItem(storageKey, JSON.stringify(session)); }
  catch { storageAvailable = false; }
}

function focusHeading() {
  const heading = main.querySelector('h1');
  heading?.setAttribute('tabindex', '-1');
  heading?.focus({ preventScroll: true });
  window.scrollTo({ top: 0 });
}

function sourceText(q) {
  const source = sources[q.source];
  return `${source.short} · ${q.source === 'book' ? 'printed pp. ' : 'PDF pp. '}${q.pages}${q.source === 'book' ? ` (viewer pp. ${String(q.pages).split('–').map(Number).map(p => p + 14).join('–')})` : ''}`;
}

function feedbackHTML(q, response) {
  return `<div class="feedback ${response.correct ? 'correct' : 'incorrect'}" role="status"><h3>${response.correct ? '✓ Correct. Nicely done.' : '✕ Not quite. Here’s the answer.'}</h3>${!response.correct ? `<p class="answer-line">Correct answer: ${escape(q.answer)}</p>` : ''}<p>${escape(q.explanation)}</p><p class="source-ref">${escape(sourceText(q))}</p></div>`;
}

function home() {
  const answered = session ? Object.keys(session.responses).length : 0;
  main.innerHTML = `<div class="page-heading"><div><span class="eyebrow">A LITTLE PRACTICE. A CLEARER MIND.</span><h1>Your midterm, made manageable.</h1><p>One question at a time. Understand the why, then move forward.</p></div><span class="small-tag">MIDTERM REVIEW</span></div>
  ${session ? `<div class="resume-banner"><div><h3>${answered === session.ids.length ? 'Your last practice is ready to review.' : 'Pick up where you left off.'}</h3><p>${answered} of ${session.ids.length} answered · Saved on this browser</p></div><div class="session-actions"><button class="text-button" id="discard-session">Clear attempt</button><button class="primary" id="resume-session">${answered === session.ids.length ? 'View results' : 'Continue'} →</button></div></div>` : ''}
  ${!storageAvailable ? '<p class="warning-note">This browser cannot save progress. You can still practice; keep this tab open.</p>' : ''}
  <section class="hero" aria-labelledby="hero-title"><div><span class="eyebrow">DESIGNED AROUND YOU</span><h2 id="hero-title">Learn the concept.<br>Not just the correct letter.</h2><p>Practice from your assigned readings, with instant feedback and a short explanation for every answer.</p></div><div class="hero-graphic" aria-hidden="true"><div class="ring"></div><div class="ring second"></div><div class="ring third"></div><span class="person">⌁</span><span class="dot"></span><span class="annotation">HUMAN × SYSTEM</span></div></section>
  <div class="stats"><div class="stat"><span class="stat-symbol" aria-hidden="true">▤</span><div><strong>${questions.length}</strong><small>Source-based questions</small></div></div><div class="stat"><span class="stat-symbol" aria-hidden="true">◷</span><div><strong>3</strong><small>Ways to test yourself</small></div></div><div class="stat"><span class="stat-symbol" aria-hidden="true">◎</span><div><strong>${Object.keys(topics).length}</strong><small>Topics to work through</small></div></div></div>
  <div class="section-title"><h3>Make this session yours</h3><span>No timer. Just progress.</span></div>
  <div class="study-grid"><section class="setup-card" aria-labelledby="setup-title"><div class="card-heading"><span class="number-badge" aria-hidden="true">01</span><div><h3 id="setup-title">Set up your practice</h3><p>A quick warm-up or the whole reading list.</p></div></div>
  <form id="setup-form"><label class="field">What would you like to cover?<select id="topic-filter"><option value="all">All topics · Full midterm scope</option>${Object.entries(topics).map(([id, t]) => `<option value="${id}">${escape(t.name)}</option>`).join('')}</select></label><div class="field-row"><label class="field">Question type<select id="type-filter"><option value="all">Mix of all three</option>${Object.entries(labels).map(([id, name]) => `<option value="${id}">${name}</option>`).join('')}</select></label><label class="field">Session length<select id="count-filter"><option value="20">20 questions</option><option value="50">50 questions</option><option value="all">All matching questions</option></select></label></div><button class="start-button" id="start-practice" type="submit"><span>Start practice</span><span aria-hidden="true">→</span></button><p class="setup-foot" id="match-count" role="status"></p></form></section>
  <section class="coverage-card" aria-labelledby="coverage-title"><h3 id="coverage-title">On the reading list</h3><p>Your assigned scope, in six smaller pieces.</p>${Object.entries(topics).map(([id, t]) => `<button class="topic-row" data-topic="${id}" aria-label="Practice ${escape(t.name)}"><span class="topic-icon" aria-hidden="true">${t.icon}</span><span class="topic-info"><strong>${escape(t.name)}</strong><small>${escape(t.subtitle)}</small></span><span class="topic-count">${questions.filter(q => q.topic === id).length}</span></button>`).join('')}</section></div>`;
  $('#topic-filter').value = setup.topic;
  $('#type-filter').value = setup.type;
  $('#count-filter').value = setup.count;
  function updateCount() {
    setup = { topic: $('#topic-filter').value, type: $('#type-filter').value, count: $('#count-filter').value };
    const matching = questions.filter(q => (setup.topic === 'all' || q.topic === setup.topic) && (setup.type === 'all' || q.type === setup.type)).length;
    const count = setup.count === 'all' ? matching : Math.min(matching, Number(setup.count));
    $('#match-count').textContent = matching ? `${count} questions · Shuffled each session · Instant feedback` : 'No questions match. Choose another topic or question type.';
    $('#start-practice').disabled = !matching;
  }
  main.querySelectorAll('select').forEach(select => select.addEventListener('change', updateCount));
  updateCount();
  $('#setup-form').addEventListener('submit', event => {
    event.preventDefault();
    if (session && Object.keys(session.responses).length < session.ids.length && !window.confirm('Start a new practice? This replaces the saved attempt.')) return;
    start(selectQuestions(questions, setup));
  });
  main.querySelectorAll('[data-topic]').forEach(button => button.addEventListener('click', () => {
    $('#topic-filter').value = button.dataset.topic;
    updateCount();
    $('#topic-filter').focus();
  }));
  $('#resume-session')?.addEventListener('click', () => { renderSession(); focusHeading(); });
  $('#discard-session')?.addEventListener('click', () => {
    if (!window.confirm('Clear this saved attempt?')) return;
    session = null;
    save();
    home();
  });
}

function start(selected) {
  if (!selected.length) return;
  session = { version: BANK_VERSION, ids: selected.map(q => q.id), responses: {}, index: 0 };
  save();
  renderSession();
  focusHeading();
}

function renderSession() {
  if (Object.keys(session.responses).length === session.ids.length && session.responses[session.ids.at(-1)]) return results();
  const q = byId.get(session.ids[session.index]);
  const response = session.responses[q.id];
  const answered = Object.keys(session.responses).length;
  const score = Object.values(session.responses).filter(r => r.correct).length;
  main.innerHTML = `<div class="exam-header"><div><span class="eyebrow">ONE QUESTION AT A TIME</span><h1>Your practice session</h1><p>${escape(topics[q.topic].name)} · ${labels[q.type]}</p></div><button class="secondary" id="back-home">Save & leave</button></div>
  ${!storageAvailable ? '<p class="warning-note">Progress is kept in this tab only; browser saving is unavailable.</p>' : ''}
  <div class="progress-top"><span>Question ${session.index + 1} of ${session.ids.length}</span><span>${score} correct / ${answered} answered</span></div><div class="progress-track" role="progressbar" aria-label="Questions answered" aria-valuenow="${answered}" aria-valuemin="0" aria-valuemax="${session.ids.length}"><div class="progress-fill" style="width:${answered / session.ids.length * 100}%"></div></div>
  <article class="question-card"><div class="question-top"><span class="type-label">${labels[q.type]}</span><span class="question-topic">${escape(topics[q.topic].name)}</span></div><h2 id="question-prompt">${escape(q.prompt)}</h2><form id="answer-form">
  ${q.type === 'identification' ? `<label class="answer-label" for="answer-input">Your answer</label><input id="answer-input" class="answer-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-describedby="answer-help" ${response ? 'disabled' : ''} value="${escape(response?.value || '')}"><p class="input-help" id="answer-help">Type the term, then press Enter or check your answer. Capitalization doesn’t matter.</p>` : `<fieldset class="options"><legend class="sr-only">Choose one answer for: ${escape(q.prompt)}</legend>${(q.type === 'tf' ? ['True', 'False'] : q.choices).map((choice, i) => `<label class="option ${response && choice === q.answer ? 'correct-option' : response && !response.correct && choice === response.value ? 'wrong-option' : ''}"><input type="radio" name="answer" value="${escape(choice)}" ${response?.value === choice ? 'checked' : ''} ${response ? 'disabled' : ''}><span class="option-letter" aria-hidden="true">${String.fromCharCode(65 + i)}</span><span>${escape(choice)}</span></label>`).join('')}</fieldset>`}
  <p class="form-error" id="answer-error" role="alert"></p><div id="feedback-area" aria-live="polite">${response ? feedbackHTML(q, response) : ''}</div><div class="question-bottom"><small>${response ? 'A mistake is a useful thing to learn from.' : 'Commit to an answer. We’ll explain the rest.'}</small>${response ? `<button class="primary" type="button" id="next-question">${session.index === session.ids.length - 1 ? 'See results' : 'Next question'} →</button>` : '<button class="primary" type="submit" id="check-answer">Check answer →</button>'}</div></form></article>`;
  $('#back-home').addEventListener('click', () => { home(); focusHeading(); });
  $('#answer-form').addEventListener('submit', event => {
    event.preventDefault();
    if (session.responses[q.id]) return;
    const value = q.type === 'identification' ? $('#answer-input').value.trim() : main.querySelector('input[name="answer"]:checked')?.value;
    if (!value) {
      $('#answer-error').textContent = q.type === 'identification' ? 'Type an answer before checking.' : 'Choose an answer before checking.';
      (q.type === 'identification' ? $('#answer-input') : main.querySelector('input[name="answer"]')).focus();
      return;
    }
    session.responses[q.id] = { value, correct: isCorrect(q, value) };
    save();
    showFeedback(q);
  });
  $('#next-question')?.addEventListener('click', next);
}

function showFeedback(q) {
  const response = session.responses[q.id];
  main.querySelectorAll('#answer-form input').forEach(input => { input.disabled = true; });
  $('#answer-error').textContent = '';
  $('#feedback-area').innerHTML = feedbackHTML(q, response);
  main.querySelectorAll('.option').forEach(option => {
    const value = option.querySelector('input').value;
    if (value === q.answer) option.classList.add('correct-option');
    else if (value === response.value) option.classList.add('wrong-option');
  });
  const answered = Object.keys(session.responses).length;
  $('.progress-fill').style.width = `${answered / session.ids.length * 100}%`;
  $('.progress-track').setAttribute('aria-valuenow', answered);
  $('.progress-top').lastElementChild.textContent = `${Object.values(session.responses).filter(r => r.correct).length} correct / ${answered} answered`;
  $('.question-bottom').firstElementChild.textContent = 'Take a moment to read the explanation.';
  $('.question-bottom').lastElementChild.outerHTML = `<button class="primary" type="button" id="next-question">${session.index === session.ids.length - 1 ? 'See results' : 'Next question'} →</button>`;
  $('#next-question').addEventListener('click', next);
  $('#next-question').focus({ preventScroll: true });
}

function next() {
  if (session.index === session.ids.length - 1) results();
  else { session.index++; save(); renderSession(); focusHeading(); }
}

function results() {
  const answered = Object.values(session.responses).length;
  const score = Object.values(session.responses).filter(r => r.correct).length;
  const missed = session.ids.filter(id => !session.responses[id]?.correct);
  const percentage = Math.round(score / session.ids.length * 100);
  main.innerHTML = `<div class="page-heading"><div><span class="eyebrow">THAT’S A SESSION WELL SPENT</span><h1>Progress, one answer at a time.</h1><p>Keep what clicked. Revisit what didn’t.</p></div></div><section class="results-card"><span class="eyebrow">YOUR PRACTICE RESULTS</span><h2>${percentage === 100 ? 'Everything clicked this time.' : percentage >= 70 ? 'You’re building a solid foundation.' : 'You’ve found what to focus on.'}</h2><div class="score-circle"><strong>${percentage}%</strong><span>${score} of ${session.ids.length} correct</span></div><p>${answered} answered · ${missed.length} to revisit</p><div class="result-actions">${missed.length ? '<button class="primary" id="retry-missed">Retry missed questions →</button>' : ''}<button class="secondary" id="practice-again">New shuffled session</button><button class="text-button" id="results-home">Back to study room</button></div></section>
  ${missed.length ? `<section class="review" aria-labelledby="review-title"><h3 id="review-title">Your review list <span class="topic-count">${missed.length}</span></h3>${missed.map((id, i) => { const q = byId.get(id); return `<details class="review-item"><summary>${i + 1}. ${escape(q.prompt)}</summary><p class="your-answer">Your answer: ${escape(session.responses[id]?.value || 'Unanswered')}</p><p class="right-answer"><strong>Correct answer: ${escape(q.answer)}</strong></p><p>${escape(q.explanation)}</p><p class="source-ref">${escape(sourceText(q))}</p></details>`; }).join('')}</section>` : ''}`;
  $('#retry-missed')?.addEventListener('click', () => start(selectQuestions(missed.map(id => byId.get(id)))));
  $('#practice-again').addEventListener('click', () => start(selectQuestions(session.ids.map(id => byId.get(id)))));
  $('#results-home').addEventListener('click', () => { home(); focusHeading(); });
  focusHeading();
}

$('#source-list').innerHTML = Object.entries(sources).map(([id, s]) => `<div class="source-entry"><strong>${escape(s.name)}</strong><p>${escape(s.scope)}</p>${s.url ? `<a href="${escape(s.url)}" target="_blank" rel="noopener noreferrer">Open course reading ↗</a>` : '<p>Attached local book · 2nd edition · Original PDF is not hosted here.</p>'}</div>`).join('');
function openSources() { $('#sources-dialog').showModal(); }
$('#sources-nav').addEventListener('click', openSources);
$('#sources-top').addEventListener('click', openSources);
$('#close-sources').addEventListener('click', () => $('#sources-dialog').close());
$('#home-nav').addEventListener('click', () => { home(); focusHeading(); });
$('.brand').addEventListener('click', event => { event.preventDefault(); home(); focusHeading(); });
$('#sources-dialog').addEventListener('click', event => { if (event.target === event.currentTarget) { const r = event.currentTarget.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) event.currentTarget.close(); } });
home();
