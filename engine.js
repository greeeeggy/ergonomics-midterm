export const BANK_VERSION = '2026-10-18-v1';

export function normalize(value) {
  return String(value).normalize('NFKC').trim().toLocaleLowerCase('en').replace(/\s+/g, ' ').replace(/[\u2010-\u2015]/g, '-');
}

export function isCorrect(question, value) {
  if (!normalize(value)) return false;
  const accepted = question.type === 'identification' ? [question.answer, ...(question.aliases || [])] : [question.answer];
  return accepted.some(answer => normalize(answer) === normalize(value));
}

export function shuffle(items, random = Math.random) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function selectQuestions(bank, { topic = 'all', type = 'all', count = 'all' } = {}) {
  const eligible = bank.filter(q => (topic === 'all' || q.topic === topic) && (type === 'all' || q.type === type));
  const shuffled = shuffle(eligible);
  return count === 'all' ? shuffled : shuffled.slice(0, Number(count));
}

export function validSession(value, bank) {
  if (!value || value.version !== BANK_VERSION || !Array.isArray(value.ids) || !value.ids.length) return false;
  const known = new Map(bank.map(q => [q.id, q]));
  if (new Set(value.ids).size !== value.ids.length || value.ids.some(id => !known.has(id))) return false;
  if (!Number.isInteger(value.index) || value.index < 0 || value.index >= value.ids.length || typeof value.responses !== 'object' || value.responses === null || Array.isArray(value.responses)) return false;
  const ids = Object.keys(value.responses);
  if (ids.some(id => !value.ids.includes(id))) return false;
  return ids.every(id => {
    const response = value.responses[id];
    return response && typeof response.value === 'string' && normalize(response.value) && response.correct === isCorrect(known.get(id), response.value);
  }) && ids.every(id => value.ids.indexOf(id) <= value.index) && value.ids.slice(0, value.index).every(id => value.responses[id]);
}
