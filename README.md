# Virasat — understand and prepare nomination

**Functionality branch, 4 October 2026.** Virasat follows SANGYAN Track B's Nominee & Family Wealth Tracker direction. It helps a living account holder or authorised helper understand nomination, identify the appropriate institutional route, prepare a request and distinguish receipt from registration. The authoritative brief is [the supplied problem statement](references/problem-statement.pdf).

## Current journey

1. Choose a language, then identify the account type, institution, holding context and nomination status in four setup stages.
2. Follow the account-specific check/preparation route. Supported provider routes and clearly labelled general fallbacks remain separate.
3. Select **Understand the form & process** to open six learning steps: your route, fields, fictional practice, preparation, after submission and troubleshooting.
4. Read what a field means, why it exists, where to find the information and what to check. Securities guidance cites SEBI's 29 May 2026 circular, sections 6, 7, 9.3, 10.1 and Annexure A. Bank deposits and MF units held in demat receive distinct routing; this is not a universal or official form.
5. Practise with fixed fictional choices. Practice and checklist completion never submit a request or change the account's registration status.
6. Record submission and a later user-reported institutional record check separately. Family information can be reviewed on screen during the current session.

## No personal-data persistence

Account entries and unfinished drafts exist only in this tab's memory. Reload, page exit and Clear session reset them, including when the browser restores a back-forward cache page. **Personal save, import, export, print and calendar controls have been removed.** The app deletes its known legacy encrypted browser copy on startup without reading/decrypting it. Previously downloaded files and other devices are outside the app's control.

Only bounded, non-sensitive reading preferences and public code, language and audio files may persist. The app sets no cookies and has no analytics, record server, account uploads, document intake or remote speech synthesis. Full account numbers, PAN, passwords, OTPs and identity documents must not be entered. Memory reset is not forensic erasure; the host can retain ordinary static-request logs. See [guardrails](docs/website-guardrails.md).

## Run and verify

Node.js 22+; no application dependencies to install.

```sh
npm --prefix app run build:public
npm --prefix app test
npm --prefix app run dev
```

Preview: `http://127.0.0.1:4173/`. Run the [browser acceptance checklist](app/tests/browser-audit.md) after functional changes. Verification evidence and remaining release gates are in [the branch checkpoint](docs/nomination-expansion-2026-10-04.md). Build generation must run after every public asset change so offline clients receive a consistent shell.

## Language and accessibility integration

The existing six-language tracker and bundled recordings remain. The **new coach is explicitly an English text-only preview**, isolated in `app/dist/nomination-coach.js` and its stylesheet for integration with the parallel language/accessibility branch. Essential session-policy notices have six draft translations in `session-policy.js`. New/overridden text is not falsely matched to old audio. Translation, narration, fluent-reader and real assistive-technology review remain release work. Existing automated scores are not accessibility certification.

## Boundaries

No buy/sell/hold advice, predictions, returns-based nudges, broker promotion, commissions or paid upsells. No automated institutional verification, legal entitlement determination, nomination submission or deceased-holder claim processing. No guaranteed acceptance, timelines, financial savings or recovery claims. Nomination status does not decide inheritance rights.

The existing production URL is documented in [app/README.md](app/README.md); this branch is not a production deployment. Older research/audits describe earlier versions and are not current behavior specifications. Crypto/schema tests remain historical regression coverage, not evidence that personal-data saving is enabled.
