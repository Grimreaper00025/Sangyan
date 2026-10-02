# Virasat — Family accounts and nominees

**Current prototype: 2 October 2026.** Virasat follows the supplied Track B brief's **Nominee & Family Wealth Tracker** direction. One focused journey helps a family list demat accounts, bank deposits and mutual fund folios, notice missing or uncertain nominations, and follow one request through to a record check.

The authoritative brief is the supplied [SANGYAN problem statement](references/problem-statement.pdf). Earlier securities-history and transmission research is preserved as background; it does not define the current product journey.

## Working journey

1. Choose English, Hindi, Bengali, Marathi, Tamil or Urdu. The first screen contains only the language question and tiles.
2. Answer three short questions: account type, institution and nominee status. Home exits the current step and offers the unfinished account when you return. The last question explains what a nominee means and offers Yes/No/Not sure. Optional family/account nicknames, nominee nickname or relationship, and last four digits can be added later through Edit account. Full account numbers, PAN, passwords and identity documents are not requested.
3. Open a missing or uncertain account and follow its institution-specific next task. A visible checklist explains what to check, what to ask and what confirms registration. Official sources stay alongside the task; HDFC Bank deposit accounts have a narrowly verified NetBanking hint.
4. Record that a request was submitted. This leaves registration unconfirmed.
5. Check a statement or institution confirmation that actually records nomination. A receipt alone does not satisfy this step. This remains the user's reported record check; Virasat does not authenticate it.
6. Review a family summary or save a password-encrypted `.virasat` file to resume later.

This build has no death intake, inheritance decision, portfolio calculator, prices, grievance filing, IEPF claims, account discovery or live institutional submission. A nominee flag does not determine inheritance rights.

## Run and check

```sh
npm --prefix app run dev
npm --prefix app test
```

The existing preview runs at `http://127.0.0.1:4173/`. Language switching stays on `/`, uses native-script labels, and preserves the current list and unfinished ordinary form edits. Old locale entry links are canonicalized to `/` by the preview. Urdu glyphs read right to left within inline text; all blocks keep the same left alignment and layout order as English.

See [app instructions](app/README.md), [current build plan](docs/build-plan.md), and [recorded implementation checks](docs/implementation-checks.md).

## Boundaries that matter

- **Local preparation:** no account login, case server, database, analytics, automatic uploads or case persistence in browser storage. Reload clears the session. Downloaded files remain on the user's device.
- **Encrypted resume:** explicit local download using AES-256-GCM, PBKDF2-SHA256 with 600,000 iterations, random salt/nonce and authenticated version data. Passwords are not recoverable. Browser memory release is not forensic erasure.
- **Deliberate sharing:** the plaintext summary preview discloses institution labels, family/nominee nicknames and optional last four digits. Private free-text record notes are omitted. Share only deliberately.
- **Evidence states:** reported by the user, request submitted, and registration checked in a record are separate. None is automated institutional verification.
- **Current guidance:** demat/MF nomination guidance uses SEBI's 29 May 2026 circular, effective 1 September 2026. Bank deposits use the Banking Companies (Nomination) Rules, 2025. Actual forms and eligibility are confirmed with the institution. These are different regimes; the app does not impose one universal document checklist.
- **Languages:** six complete draft interface dictionaries; fluent-reader and legal-language review remain pending. No approved fluency claim. Official forms are not translated.
- **Accessibility:** keyboard entry, visible focus, text-size A−/A+, contrast, reduced motion and optional device-local voice. The design targets WCAG 2.2 AA; human assistive-technology review remains a release gate.

No recovery, financial saving, legal compliance certification, institutional acceptance or performance guarantee is claimed. Actual local Lighthouse reports and their tested conditions are recorded in [implementation checks](docs/implementation-checks.md).

## Repository guide

| Path | Purpose |
|---|---|
| [app/](app/README.md) | Current Virasat interface, tracker logic and checks |
| [Track B](docs/track-b.md) | Current selected direction and original brief analysis |
| [Nomination guidance](docs/nomination-guidance.md) | Source locators, current scope and limitations |
| [Implementation checks](docs/implementation-checks.md) | Observed verification and untested limits |
| [Background problem research](docs/problem.md) | Earlier acquisition-history thesis |
| [Background technical research](docs/technical-research.md) | Earlier reconstruction research model |
| [Background validation](docs/validation.md) | Earlier candidate directions and validation gaps |
| [Background inheritance research](docs/inheritance.md) | Earlier transmission research |
| [Evidence register](docs/evidence-register.md) | Prior research claim register |
| [Sources](references/sources.md) | Prior annotated source catalogue |

Original research documents retain their dated context and evidence labels. Their earlier scope recommendations are superseded by the current focused product choice above.
