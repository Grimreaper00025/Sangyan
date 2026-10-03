**Latest checkpoint:** See [the major UX checkpoint and release audit](major-checkpoint-2026-10-03.md) for the current implementation, deployment and remaining human-validation work. Earlier scores and coverage below describe prior iterations.

# Virasat implementation checks

**Current release:** See the [3 October rebuild and second audit](ux-delivery-and-reaudit-2026-10-03.md). The observations below describe earlier builds and do not establish the current source's behaviour.

**Observed 2 October 2026, after the guided UX redesign and focused header/guidance corrections.** The current product is the family nominee tracker. Earlier share-history UI reports are background evidence only.

| Check | Observed result | Scope |
|---|---|---|
| Current nominee domain checks | 7 passed | Missing/unknown priority; submitted ≠ registered; explicit registration-record guard; dates/partial identifiers; schema; deliberate summary; encrypted roundtrip/wrong password/tampering |
| Shared/background regression checks | 17 passed | 10 archived history-domain checks, 2 shared encryption checks, 1 six-dictionary completeness check, 4 archived parser checks. History/parser are outside the current public UI. |
| Single browser smoke | Passed, 16 grouped observations | Keyboard language entry; Home exits and resumes unfinished setup; six native labels and drafts on `/`, fixed left-aligned LTR blocks with inline-only Urdu text; account→submitted→record-confirmed; escaping; summary; encrypted resume/wrong password; settings/focus; Urdu 200% at 320px; no storage/submission/runtime errors; legacy-entry canonicalization. Focused assertions also cover the locally matched HDFC hint, rejected HDFC Securities alias, visible receipt/registration distinction and cleared voice feedback. |
| Visual inspection | Reviewed | Flat warm-white/charcoal Home, icon-only Home beside the native selector, thin keyboard focus/field underline, concise initial nominee question without optional metadata, consistent chevron Back and visible contextual checklists. Confirmation has two explained record radios, explicit day/month/year inputs and inline field errors; no native date picker or validation popup. English/Urdu desktop/mobile screenshots were inspected. Tamil 200% heading overflow was corrected with natural word wrapping. |
| Short-screen scroll | Verified in fresh contexts | Root and empty Home: desktop scroll/client height 900/900; mobile 844/844. Flex page sizing uses actual header/footer heights rather than a viewport subtraction. No global overflow clipping. |
| Long-content reflow | Verified | Tamil 200% at 390px: form scroll/client height 1518/844; detail 3337/844; both scroll/client width 390/390. Long content remains vertically scrollable. |
| Language navigation | Root only | Language changes use native-script labels, preserve session state and keep `/`. The local preview canonicalizes legacy locale entry links to `/`; duplicate locale output folders were removed. |
| Public scope | Reviewed | Current tracker/interface/encryption only. Historical engines/parser remain in `app/archive/`, outside public `dist/`. |

The latest smoke output is `/private/tmp/virasat-smoke-results.json`; scroll measurements are `/private/tmp/virasat-scroll-measurements.json`. The guided-redesign screenshots use `/private/tmp/virasat-redesign-` names: `desktop-home.png`, `mobile-home.png`, `mobile-type.png`, `mobile-accounts.png`, `mobile-next-step.png`, and corrected `mobile-tamil-form-200.png` / `mobile-tamil-200.png`.

## Actual Lighthouse evidence

**Prior tested state:** these Lighthouse reports were captured before the later header, inline-only Urdu direction, focus, voice-feedback, contextual guidance and simplified forms/date-validation corrections. They are retained as dated evidence, not claimed as a fresh audit of the latest interface. No full audit rerun was performed for this focused patch.

Lighthouse **13.5.0**, installed Chrome, the existing localhost preview. [Exact tested state and source hashes](audits/audit-state.json) retain the full settings and the prior public-source hash. The navigation audit used Lighthouse's simulated mobile profile: 412 × 823, 4× CPU slowdown, 150 ms modeled RTT and 1,638.4 Kbps throughput. The interaction audit used a 390 × 844 mobile/touch viewport with provided execution speed, without additional CPU/network throttling.

| Tested state | Performance | Accessibility | Best practices | SEO |
|---|---:|---:|---:|---:|
| Initial language screen, mobile navigation | 100 | 100 | 100 | 100 |
| Language→synthetic example→missing-nomination task, timespan | 95 | Not available | 100 | Not available |
| Missing-nomination task, snapshot | Not measured | 100 | 100 | 100 |
| Family list, snapshot | Not measured | 100 | 100 | 100 |
| Guided setup, snapshot | Not measured | 100 | 100 | 100 |

Navigation observations: FCP **1.1 s**, LCP **1.2 s**, total blocking time **0 ms**, CLS **0**. The interaction timespan recorded **0.105 CLS**, including movement when replacing the current view and changing page height; this remains disclosed. Snapshot reports contain a placeholder performance value, not a measured navigation score.

The measured delivery improvements are gzip compression of supported static text resources and module preloads that shorten the translation dependency chain. No external fonts, images, analytics or application runtime packages were added. Remaining diagnostics include render-blocking CSS and CSS unused on the language screen but used later. `no-store` remains intentional, so Lighthouse flags back/forward-cache restrictions. No audit was suppressed to improve the score.

- [Navigation HTML report](audits/lighthouse-initial.html) and [raw navigation JSON](audits/lighthouse-initial.json)
- [Interaction HTML report](audits/lighthouse-flow.html) and [raw interaction JSON](audits/lighthouse-flow.json)

## Limits

These are local synthetic observations, not production/field performance, WCAG conformance, legal review, penetration testing, institution acceptance or a real-user study. TalkBack/VoiceOver, fluent-reader review, low-end Android testing and hosted header enforcement remain pending. Browser/device/hosting security remains outside the tracker guarantee. The narrow official sources are recorded in [nomination guidance](nomination-guidance.md).

## Publication

**Unpublished: the existing Sites project returns HTTP 404 / `project_not_found`.** The root agent independently confirmed the same result. No new Site was created, no credential was minted, no source was pushed, and no archive or deployment was produced. Publication was not retried during this redesign.

The complete local source/static output remain ready at the existing preview. Any later publication must use the same Site identity through an isolated `/private/tmp/` checkout, with matching source head/archive and credentials only in session memory/hidden stdin. Production compression, routing and header enforcement are unverified.

Latest focused screenshots: `/private/tmp/virasat-corrections-desktop-institution-en.png`, `/private/tmp/virasat-corrections-desktop-institution-ur.png`, `/private/tmp/virasat-corrections-mobile-institution-en.png`, `/private/tmp/virasat-corrections-mobile-institution-ur.png`, and desktop/mobile `hdfc-task.png` with the same prefix.

Latest bounded form correction: optional account/nominee nicknames and last-four references are available only when editing an existing account; the initial third question explains a nominee and offers Yes/No/Not sure. Intake does not request a last-checked date. Submission/confirmation dates remain required where the existing domain requires them and normalize to validated ISO dates. Errors use `novalidate`, linked messages, `aria-invalid`, and first-invalid-field focus. The same single smoke covers empty institution, missing record choice, rejected 31 February, preserved date parts on language switch and successful confirmation.

Scoped screenshots: `/private/tmp/virasat-simple-desktop-nominee-en.png`, `/private/tmp/virasat-simple-desktop-nominee-ur.png`, `/private/tmp/virasat-simple-mobile-nominee-en.png`, `/private/tmp/virasat-simple-mobile-nominee-ur.png`, `/private/tmp/virasat-simple-mobile-confirmation-error.png`, `/private/tmp/virasat-simple-mobile-date-error.png`, and `/private/tmp/virasat-simple-mobile-completed-ur.png`. Measurements are in `/private/tmp/virasat-simple-measurements.json`.
