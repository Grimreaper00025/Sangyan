# Virasat browser prototype

A private family nominee tracker for demat accounts, bank deposits and mutual fund folios. `dist/` is authored static source, not generated build output. No application dependency installation is needed.

```sh
npm run dev
npm test
```

Preview: `http://127.0.0.1:4173/`. The first visit offers six languages. Old locale entry URLs select a language and canonicalize to `/`. Modern ES modules, Web Crypto and native dialog support are required.

## Current journey

Four-stage account setup → local institution search → account-specific context → check/preparation → request submitted → user checks registration evidence → family record → deliberate readable handoff and encrypted resume.

The search directory has 36 banks, 14 brokers/DP labels and 25 mutual funds. It is not an exhaustive institutional registry. Reviewed routes cover HDFC Bank, SBI deposit-service channels, Axis savings, Zerodha first-addition versus correction, Groww demat and HDFC MF folios. Each route states its applicability; joint holders get assisted guidance. General fallbacks are labelled. Bank and securities rules are separate; mutual funds in demat follow their linked demat nomination, subject to the user's account/holding check.

Registration status, request receipt, and the user's review of nominee details are separate observations. No automatic verification or institutional submission occurs. Rechecking or changing account context invalidates stale confirmation. Personal follow-up dates can be exported to a calendar.

Family nicknames, optional last four digits, multiple nominee notes and record location have a dedicated form. Family review is recorded separately from nomination confirmation; omitted details can be intentional. Changes to nomination invalidate the previous family review. A readable HTML/print/PDF summary has sharing controls and excludes private evidence notes. It is not password-protected.

Encrypted `.virasat` saves include account records, incomplete new-account setup, an unfinished existing-account form, language and the originating fund for an unfinished demat-account addition. Returning from Save restores the correct form draft. Optional device storage contains only the encrypted envelope; it is off until requested. The application does not store the password or make automatic cloud requests. Changes require an explicit new save. Old schema-2 tracker files migrate to schema 3.

All six interface dictionaries are drafts: English, Hindi, Bengali, Marathi, Tamil and Urdu. Switching language preserves the current form. Urdu uses RTL text with the established left-aligned LTR page layout. Date fields normalize supported regional numerals. Every main view and help/confirmation dialog offers bundled audio of public guidance, with one Listen/Pause/Continue button, speed control, replay/skip, matching text and recoverable loading/network states. All six languages use build-time recordings; users need no installed speech voices. Private entered values cannot become audio requests. Public instructions load on demand and previously played clips can replay offline in supported browsers. A service worker caches the public shell and limits audio storage to 12 MiB / 256 files. First-use audio needs a connection; storage restrictions and browser eviction can remove offline copies. See [audio generation, provenance and review limits](audio/README.md). The reading dialog supports 90–200% text, contrast, spacing and reduced motion. These non-sensitive reading preferences are remembered locally; Reset restores defaults.

## Verification

`npm test` runs the current, shared/background and audio release checks. Browser acceptance steps are in [tests/browser-audit.md](tests/browser-audit.md); the previous-flow automation is archived and not a current runner. See the [audio checkpoint](../docs/audio-checkpoint-2026-10-03.md), fresh Lighthouse report, screenshots and exact limitations. None is a WCAG conformance claim, a fluent-language review or evidence of target-user completion.

## Security and hosting

Static files only. No analytics, third-party fonts, uploads, automatic account lookup or hidden plaintext account persistence. AES-256-GCM and PBKDF2-SHA256 (600,000 iterations), random salt/nonce, authenticated envelope version, bounded file sizes and schema validation protect saved copies. A forgotten password cannot be recovered. Downloaded files remain until the user deletes them; session clearing is not forensic erasure.

Production uses the existing Vercel `sangyan` project at **https://sangyan-xi.vercel.app**. Root directory: `app`. `vercel.json` serves `dist/`, preserves six locale entry routes and applies CSP/framing/MIME/referrer/permissions restrictions. Deploy only the authored static output and hosting configuration; research, archive and tests are not public assets. The older `.openai` manifest is historical and is not the current host.

The product does not discover accounts, authenticate records, adjudicate succession, allocate inheritance or process deceased-customer claims. Bank lockers and safe custody are outside the tracked deposit types. First-use audio connectivity, fluent-language and accent review, real screen-reader/low-end-device use and provider-specific coverage remain explicit limits.
