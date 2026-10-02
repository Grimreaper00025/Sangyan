# Virasat browser prototype

A local family nominee tracker for demat accounts, bank deposits and mutual fund folios. `dist/` is authored static source, not generated build output. No application dependency installation is required.

```sh
npm run dev
npm test
```

Use the existing preview at `http://127.0.0.1:4173/`. The first visit is language-only; native-script language switching keeps the root URL. Old locale entry links open the selected language and canonicalize to `/`. Modern browsers with ES modules and Web Crypto are needed.

## Current capabilities

- Add through three guided questions, edit and remove up to 50 family accounts, with institution and nominee status; optional nicknames/last-four references are available later through Edit.
- Prioritize missing and uncertain nomination records. A submitted request remains awaiting confirmation.
- Submission/confirmation dates use small labeled day/month/year fields. Record types are two explained radio choices; inline errors replace browser validation popups.
- Record a user's check of a statement or institutional registration confirmation. Date, record type and explicit registration check are required; request receipt alone does not count.
- Provide concise institution-class guidance and official sources. No universal form or mandatory-nomination claim.
- Preview and download a family JSON summary or print/save PDF. The preview explains which labels and partial identifiers are included; free-text evidence notes are omitted.
- Save/resume `.virasat` downloads with password encryption. No case is stored in localStorage, sessionStorage, IndexedDB or on an application server.
- English, Hindi, Bengali, Marathi, Tamil and Urdu draft dictionaries; inline-only Urdu RTL text with the same left-aligned page geometry; state-preserving language changes on `/`.
- Icon-only Home beside the language selector exits the current view and retains an unfinished new-account draft for Continue.
- Flat warm-white/charcoal layout, native language controls and plain account-type radio explanations.
- Compact A−/A+, contrast and motion settings, keyboard focus, accessible status messages and optional suitable device-local voice.

This build does not discover accounts, submit nominations, authenticate records, adjudicate succession or process deceased-customer claims. Bank guidance is limited to deposits; lockers and safe custody are outside the tracked account types.

## Verification

`npm test` runs current nominee-state tests plus retained background arithmetic, encryption and intake checks. The single optional browser smoke uses a running local server and synthetic inputs:

```sh
VIRASAT_PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.mjs node tests/ui-check.mjs
```

It covers the main account/progress flow, translations and unsaved state, encryption/resume, keyboard entry and narrow RTL layouts. It reports observations under `/private/tmp/`. See [implementation checks](../docs/implementation-checks.md) for exact counts and limits. These observations are not WCAG certification or low-end-device performance measurements.

## Security and publication

No analytics, external fonts, automatic cloud requests, uploads or hidden persistence. Same-origin CSP, MIME protection, no referrer, browser permissions restrictions and framing restrictions are configured. Static hosting must honor configured headers; hosted enforcement is not independently verified here.

Encryption uses AES-256-GCM and PBKDF2-SHA256 (600,000 iterations), random salt/nonce, authenticated version data and a bounded/validated saved schema. Old encryption envelopes can be decrypted for compatibility, but only the current Virasat schema resumes in this UI. A forgotten password cannot be recovered. Downloads remain until the user deletes them; JavaScript memory clearing is not a forensic-erasure guarantee.

The Site manifest retains the existing project identity. Publication is currently blocked: the existing Site returns HTTP 404 / `project_not_found`; no source push, archive or deployment occurred. Any later publication must use an isolated `/private/tmp/` checkout with no nested `app/.git` or credentials on disk. Only `dist/` is the public static output. Background engines and parser code are retained outside the public output for research/security regression checks.
