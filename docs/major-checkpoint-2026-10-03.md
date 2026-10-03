# Virasat — major UX checkpoint and release audit

**3 October 2026 · Track B, second direction: Nominee & Family Wealth Tracker**

This checkpoint turns the earlier status list into a guided check, correction, confirmation and family-record journey. It includes the preceding rebuild and the deeper pass requested afterwards. The implemented outcome is narrower than solving inheritance: help a living holder or authorised helper establish what is known, choose an appropriate institutional route, preserve unfinished work, and leave a readable record for the family.

The [initial audit](track-b-website-audit-2026-10-03.md) and [first rebuild audit](ux-delivery-and-reaudit-2026-10-03.md) remain historical evidence. This document is the current checkpoint. The reports under `audits/2026-10-03/lighthouse-home.*`, `audit-state.json` and `live-verification.json` now describe this release.

## What materially changed

| User difficulty | Delivered behaviour |
|---|---|
| “I do not know what I have or whether a nominee exists.” | Four labelled setup stages, searchable institutions, examples of the account classes, unknown choices, contextual bank product/holding questions and a check-first path. |
| “The bank name is hard to enter.” | Local name/abbreviation/regional-alias search across 75 directory entries, canonical identity, keyboard selection, and a custom-name fallback. The directory is not claimed to be exhaustive. |
| “The instructions do not fit my case.” | Reviewed provider routes for HDFC Bank, SBI deposit-service channels, Axis savings, Zerodha, Groww demat and HDFC MF folios. Each route carries scope, date and source. Axis FD/RD remains a general fallback. Joint holders receive assisted guidance. |
| “I need to change an existing nominee.” | Zerodha's correction/additional-nominee procedure is separate from its first-addition procedure. Missing and correction states can return to the evidence decision; people who already sent a request have a shortcut. |
| “I cannot complete this online.” | Explicit online/in-person choice; ask about the right service centre before travelling, current forms/signatures/documents, and dated receipt plus final confirmation. This is preparation, not a guarantee that every centre supports every case. |
| “I sent a form, so am I finished?” | Submission, registration shown, nominee details checked and family review are separate observations. A receipt cannot create a confirmed record. |
| “My family still will not know where to look.” | Dedicated family form with safe nicknames, nominee notes and record location; explicit review; intentional omission distinguished from unfinished information; readable sharing preview. Nomination changes invalidate the previous family review. |
| “I have to stop now.” | Save checkpoint before official handoff, password-protected file and optional encrypted browser copy. New setup, existing form drafts and a pending fund-to-demat addition survive a save. Back/Return to my task restores the appropriate form. |
| “Reading is difficult.” | Redesigned reading dialog, 90–200% text, contrast, spacing, reduced motion and remembered non-sensitive reading preferences. Dialog focus and mobile reflow are checked. |
| “I cannot follow the audio.” | Correct-language device-local voice selection, Indian locale preference, preview/speed, pause/resume/stop, previous/repeat/next sentence, visible sentence and source highlight. Private field values are not spoken. Missing voices have setup references and a written fallback. |

The key product distinction is now visible: **a nomination can be checked while the family record is still unfinished**. Conversely, family details can be reviewed without asserting that an institution has registered a nomination. The app remains a user-maintained planning record.

## Findings caught during this pass

- The original single Zerodha action route wrongly combined first addition with correction. Current published modification instructions now have their own route and regression check.
- Back from Save could reopen an existing family/progress form after its draft had been cleared. It now restores the correct draft. The browser test entered a fictional nickname and location, visited Save, returned, and observed both values intact.
- The source MF for an unfinished new demat account was memory-only. It now survives encrypted save/restore, validates against the existing MF record, and still requires explicit holder/unit confirmation before linking.
- Changing a linked account's identity/context could leave a stale fund connection. Context changes now clear those links for a new explicit check.
- A browser may return new voice objects on each enumeration. Voice selection now matches the chosen local voice by name/language, rather than object identity, so the selected accent is retained.
- Cancelling while paused can leave a speech engine paused. Cancellation now resumes that engine state before starting a new sentence. Stale events cannot advance a new reading session.
- A device copy can remain older if a subsequent save deliberately omits the device option. The completed-save view explains this instead of implying the device copy was updated.

## Verification and evidence

**41 automated checks pass.** Of these, 24 cover the current nominee/tracker/journey behaviour; 17 are retained shared/background checks including crypto, intake and older domain logic. Tests exercise date/status gates, source routing and product limits, import validation, encrypted round trips, family review, pending demat links, speech cancellation and chosen voice identity. All route step keys exist in all six dictionaries. This is not a count of human usability successes.

Observed browser checks used fictional accounts only:

- Keyboard-selected Axis Bank from search; completed sole-holder savings setup; verified online and assisted routes and the save checkpoint.
- Confirmed a fictional HDFC record, left family review pending, filled family fields, interrupted through Save, returned without losing changes, deliberately reviewed omitted nominee information, and inspected the family sheet.
- Saved a synthetic Axis record to an encrypted device copy; opened a new visit, unlocked it, and observed the same missing-nominee state. Removed the synthetic browser copy after the test.
- Increased reading size to 120%, opened a new visit, and observed the same setting. Reset settings after testing.
- Checked the assisted route in English, Hindi, Bengali, Marathi, Tamil and Urdu at **320px width and 200% text**: document width remained 320px, with no broken `aria-describedby` targets. This is a reflow check, not a fluent-reader review.
- Used sentence next and pause in English and observed the corresponding displayed sentence. Voice/accent quality was not scored by a listener.
- Followed Zerodha missing → check result → correction → preparation and observed the current modification-form route and correct official link.
- Inspected final desktop guidance and reading-dialog screenshots; checked the published dashboard and preparation route. No browser console errors were observed in the checked local/live tabs.

Artifacts: [browser observations](audits/2026-10-03/checkpoint-browser.json), [guidance screenshot](audits/2026-10-03/checkpoint-guidance.jpg), [reading panel](audits/2026-10-03/checkpoint-reading.jpg), [published screen](audits/2026-10-03/checkpoint-live.jpg).

The final Lighthouse navigation to English Home scored **Performance 99, Accessibility 100, Best Practices 100, SEO 100**. FCP 1.4s, LCP 1.7s, TBT 10ms, CLS 0. This is localhost with simulated mobile conditions, covering that navigation only. The report still identifies normal CSS render blocking and no-store restrictions on the back/forward cache. There is no measured layout shift or failed automated accessibility audit on that page. [Exact source hash and settings](audits/2026-10-03/audit-state.json), [full report](audits/2026-10-03/lighthouse-home.html).

## Publication

Live: **https://sangyan-xi.vercel.app**

Deployment: `dpl_6Ew3RQ3m5eD3nf1LRWqUDJzcsaoR` · [immutable deployment](https://sangyan-9ld304fp2-yashashwi-singhanias-projects.vercel.app).

Only the 12 authored public assets and existing hosting configuration were staged for deployment. All 12 live assets match the local checkpoint bytes. Root and all six language entry URLs return the expected HTML. CSP, framing, MIME, referrer, permissions and no-store headers were verified. Four sampled private repository paths return 404. [Verification record](audits/2026-10-03/live-verification.json).

## What still needs evidence before calling the solution validated

1. **Observed use by intended users.** Test with seniors, homemakers and regional-language users. Ask them to check one fictional account, correct an uncertain answer, distinguish a receipt from registration, save/reopen, and explain the family sheet. Record completion, assistance and false-completion mistakes. No target-user study has happened in this work.
2. **Fluent language and accent review.** All six dictionaries are complete enough to render the supported flows but remain drafts. Have fluent speakers review the central decisions and listen on representative phones. Device voices vary; installation cannot guarantee the browser exposes every language. No remote TTS or invented voice quality claim was added.
3. **Real assistive technology and constrained devices.** VoiceOver/TalkBack, keyboard-only sessions, low-end Android and unreliable-network return visits need direct observation. Automated scores do not establish WCAG conformance.
4. **Provider maintenance and wider coverage.** Public help was researched, not authenticated workflows. ICICI's retrieved NRI instructions were not generalized to resident accounts. Additional providers should be added only with product/holding applicability, current sources and a route regression, rather than more names in the directory.
5. **Nomination-specific differentiation validation.** Compare supported task completion with an official bank/broker/AMC route and existing consolidated fund servicing. The hypothesis is fewer wrong-route and false-completion mistakes plus a useful family handoff; no recovery amount or prevention percentage is claimed.

The next major checkpoint should be driven by those observed failures. The current checkpoint is implementation and release evidence, not proof that every intended user can independently complete the journey.
