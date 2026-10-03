# Virasat browser prototype

Static, session-only nomination tracker with a six-step learning companion. `dist/` contains authored assets and generated language entry pages. Node.js 22+; no application dependency installation.

```sh
npm run build:public
npm test
npm run dev
```

Preview: `http://127.0.0.1:4173/`. Generate public assets after editing JS, CSS, HTML or worker files. The builder hashes the complete public shell and emits language entry pages; no model runs in the browser.

## Functionality

Account setup → institutional check → form/process learning → preparation → reported submission → user checks registration evidence → in-session family review.

The learning companion explains fields with meaning, purpose, information location and mistakes; fixed fictional exercises provide corrective feedback. Temporary checklists and a six-reason troubleshooting guide support real-world handoff. Learning cannot mutate account records. Bank deposits, securities folios, demat-held funds, unknown contexts and deceased-holder requests receive different guidance. Only the applicable securities path shows the detailed SEBI-based field guide. This is an explainer, not an official form, a personal-data form filler, or a guarantee of acceptance.

The directory and existing reviewed provider routes remain: HDFC Bank, SBI deposit channels, Axis savings, Zerodha first addition versus correction, Groww demat and HDFC MF folios. Directory inclusion does not imply detailed route coverage. Official sources and scope stay alongside guidance. Submission, registration and family review are separate observations; institution/context changes invalidate stale checks.

## Strict session-only privacy

No personal-data storage, uploads, save/import/export or app print/calendar controls. State and drafts exist only in memory and clear on reload, exit or Clear session. Back-forward cache restoration also clears state. Startup removes `virasat-locked-workspace-v1`, the older encrypted device copy, without reading/decrypting it. It cannot remove earlier user downloads, copies elsewhere or forensic/browser/OS traces.

`virasat-reading-settings-v1` is the only application preference write: validated text size, speech speed and boolean appearance settings. No cookies, analytics, account database, remote speech service or user-derived URLs. The service worker caches only public allowlisted assets and public recordings, never account content. The app cannot stop a person taking a screenshot or copying visible text. Hosting providers may log ordinary requests; deployment log retention must be reviewed separately.

Old crypto/schema helpers/tests remain for historical regression coverage. They are not wired into the public UI. This privacy policy supersedes the 3 October save/reopen requirements.

## Language / accessibility handoff

The established tracker uses six draft dictionaries and recorded public instructions. The coach is a marked English text-only preview; its `lang="en"` content must not inherit Urdu text direction. Essential policy overrides have six draft translations and are excluded from old audio lookup. Keep the coach API (`createNominationCoach`, `render`, `handle`, `reset`) separate from tracker mutations. Coordinate reviewed translations and recordings with the parallel accessibility branch. Do not silently call an English lesson translated or narrated.

Reading settings, keyboard focus, regional digits and public audio caching remain. New lesson controls use semantic buttons/checkboxes, visible focus and responsive layouts. Physical low-end Android, TalkBack/VoiceOver, fluent-language review and target-user completion remain release gates.

## Verification and hosting

Run `npm test`, then [browser acceptance](tests/browser-audit.md). The current checkpoint is [nomination expansion](../docs/nomination-expansion-2026-10-04.md). The full suite includes historical crypto/domain cases; report current feature evidence separately.

Existing production: **https://sangyan-xi.vercel.app**, Vercel project `sangyan`, root `app`, output `dist`. This branch has not been deployed. Preserve CSP, no-referrer, framing, MIME and permissions protections. Do not publish research, tests, audit artifacts or private records. Existing worker-controlled tabs may use the previous release until closed; review rollout before claiming the production site uses the no-storage policy.
