# Ergo Study

A responsive, static ergonomics midterm practice site with **200 original questions**:

- 99 multiple choice, 49 true/false, and 52 identification.
- Green correct feedback and red incorrect feedback, with answers, explanations, and source pages.
- Topic/type filters, 20-question and 50-question sessions, or all matching questions.
- Shuffled sessions, saved progress in the current browser, results, and missed-question retries.
- Explicit identification aliases; no fuzzy or substring grading.

## Use

Open the published GitHub Pages site, or serve this directory with any static web server. For example, `python -m http.server 8765`, then visit `http://localhost:8765`. There is no build step or package installation. Node.js is needed only for the unit tests: `npm test`.

The interface uses Google Fonts when available, with local system-font fallbacks. Questions and grading run in the browser. No API key, account, backend, analytics, or answer upload is required. Progress is stored on the browser/device where the session began. This is practice material, not an official exam or an exam prediction.

## Coverage

| Topic | Questions | Source |
|---|---:|---|
| HFE foundations | 24 | Attached Helander book, printed pp. 3–16 |
| Vision and illumination | 36 | Attached Helander book, printed pp. 41–67 |
| Anthropometric design | 30 | Attached Helander book, printed pp. 147–166 |
| Lifting and ergonomic analysis | 40 | Ergonomic Analysis and Design.pdf |
| Body mechanics at work | 35 | Mechanics at Work Assessment and Design.pdf |
| Physical environment | 35 | Factors Affecting the Physical Environment.pdf |

The source PDFs, screenshots, OCR output, and textbook extracts are intentionally excluded from the repository. See [SOURCE_AUDIT.md](SOURCE_AUDIT.md) for scope, numbering, and content limitations. Each question in `bank.js` has its source and page reference.

## Files

`index.html`, `styles.css`, and `app.js` provide the interface. `bank.js` contains the questions and source inventory. `engine.js` contains grading, filtering, shuffling, and saved-session validation. `tests/engine.test.js` checks those rules, evidence boundaries, and worked calculation keys.

## Hosting

GitHub Pages can serve the repository directly from `main`, directory `/`. All asset URLs are relative, so the site works under a repository subpath. `.nojekyll` keeps the static files unchanged.
