**Latest checkpoint:** See [the major UX checkpoint and release audit](major-checkpoint-2026-10-03.md) for the current implementation, deployment and remaining human-validation work. Earlier scores and coverage below describe prior iterations.

# Virasat — UX rebuild and second audit

**3 October 2026.** This follows the [initial website audit](track-b-website-audit-2026-10-03.md) and the selected second Track B direction: Nominee & Family Wealth Tracker. It supersedes the initial audit's implementation status, not its diagnosis.

## The problem the product now follows

The practical failure is a chain: a family cannot confidently identify the right account/provider; the holder does not know where nomination is recorded; an online request is mistaken for completed registration; and the family still cannot locate a useful record later. Language, literacy, unfamiliar account terms, intermittent access and privacy concerns make each handoff harder. These are research-informed design hypotheses, not findings from interviews we have conducted.

The brief values depth on a complete journey. The core outcome is therefore a **user-recorded nomination check, an explicit outstanding task, and a usable family handoff**. No account discovery, legal entitlement decision, institutional submission or automatic verification is claimed. The deceased-holder process is clearly separated from a living holder arranging nomination.

## What changed

| Earlier gap | Delivered behaviour |
|---|---|
| Blank institution field | Local search across 36 banks, 14 brokers/DP labels and 25 mutual funds; abbreviations and selected regional aliases; keyboard selection; custom names remain possible. This is a starting directory, not an official exhaustive registry. |
| Three questions without enough context | Four short stages: account type, institution, ownership/holding context, and current nomination knowledge. Savings/deposit and folio/demat choices change the guidance. “Not sure” remains legitimate. |
| Generic instructions | Reviewed HDFC savings, HDFC deposits, HDFC joint-holder branch route, Zerodha and HDFC MF folio routes. Other institutions show labelled general guidance and official rules rather than invented screen paths. |
| Unknown status pointed toward submission | Unknown → check instructions → what was found → missing/change/unknown/opt-out. Preparation precedes the separate submitted-request record. |
| Receipt looked like completion | A submitted request stays awaiting confirmation. Completion needs a statement or registration confirmation, a real nonfuture record date, and the user's explicit registration check. Status-only evidence is distinct from reviewing nominee details. |
| No difficult-request path | “Needs help,” an institution question, offline preparation and personal follow-up dates. Calendar export is a personal reminder, never an invented institutional deadline. |
| Mutual funds in demat could become a duplicate task | Link to the actual demat account, with an explicit check that the statement shows the same units and holders. Linked funds do not create a second unresolved nomination task or inherit a false “confirmed” label. |
| Family details hidden in general editing | Dedicated family record: owner/account nicknames, optional last four digits, multiple nominee notes and a shareable record location. These notes are not legal allocations. |
| Technical JSON handoff | Readable HTML family sheet, preview, selective omission of family/nominee notes and location, and print/PDF. Private evidence notes are excluded. |
| Reload lost all unfinished work | Password-protected save includes the account list, a new-account draft, an unfinished existing-account form and language. Optional device storage contains the encrypted envelope only. No password is stored by the app. Saving after changes remains explicit. |
| Confusing menu and native dropdowns | Searchable bank combobox; language dialog; compact Reading & listening dialog; explained radio choices. Native dialog focus containment and Escape restoration. |
| Generic TTS | Per-page guidance, language-matched local voices, preference for Indian locale, voice preview, speed, sentence queue, pause/resume/stop, cancellation on navigation. Private entries are excluded from the speech source. Missing voices produce a written explanation. |
| Incomplete low-vision/local-script support | 90–200% text, contrast, spacing, reduced motion, 44px button targets, visible keyboard focus, labelled errors, regional numeric input, and preserved Urdu text direction with the established page geometry. |
| Example and personal data could be mixed | Example labels on the demo's views; “Start my own list” creates a clean personal list. |

## Second audit: observed evidence

- **34 automated checks pass**: 17 current tracker/journey checks and 17 retained shared/background checks. They cover institution separation, context routing, stale-confirmation invalidation, calendar-independent date validation, old-file migration, partial draft persistence, encrypted round trips/tampering, linked-account integrity and speech state.
- Browser-tested the new bank setup, abbreviation search and keyboard selection, contextual questions, unknown → missing → preparation → submitted, and separate confirmation validation. The unsupported future/impossible/date-order cases are also covered at model level.
- Entered a synthetic evidence note and partial confirmation state, changed to Hindi, saved an encrypted device copy, reloaded, unlocked it, resumed the same form, and completed confirmation. The record stayed unconfirmed until the explicit final check.
- Entered Devanagari date digits; they normalized correctly and survived language switching and encrypted resume.
- Started Hindi page speech, paused it and stopped it. English selected the available local `en-IN` voice. Urdu correctly reported that this test device had no matching offline voice. **This does not establish accent quality in all six languages.**
- At **320px width and 200% text**, all six languages' account-type form rendered without horizontal document overflow; referenced error-description IDs existed. The Urdu home and open reading dialog also had no horizontal overflow. Escape restored focus to the reading-controls trigger.
- The readable family sheet omitted the synthetic private evidence note. Its Hindi narrow layout was visually inspected. The family handoff is an unencrypted export, clearly described before download.
- Tested MF-to-demat linking, its separate linked status and exclusion from the unresolved nomination count. Then added and checked the required holdings/holder verification before a link can be saved.
- Browser console inspection of the exercised release journey returned no application errors.
- Fresh **Lighthouse mobile navigation** reports and source hash are in [audit-state.json](audits/2026-10-03/audit-state.json) and [the visual report](audits/2026-10-03/lighthouse-home.html). This measures the English home under simulated mobile conditions, not every state or a real low-end handset. The prior 2 October flow report is historical evidence only.
- [Dashboard](audits/2026-10-03/dashboard.jpg) and [reading-panel](audits/2026-10-03/reading-panel.jpg) screenshots document the revised UI. A reproducible [browser acceptance checklist](../app/tests/browser-audit.md) replaces the obsolete previous-flow smoke script.

## Findings corrected during the second audit

1. The first voice panel exposed too many installed voices. It now shows the selected voice, with alternatives behind one disclosure.
2. Uncommitted confirmation/family fields could disappear on Home or Save. They now remain a separate draft; saving them cannot change an account's completion status. Starting a different edit warns before replacing that draft.
3. Changing account context could retain stale confirmation. Identity/holding/product changes now require a fresh check.
4. Pseudo-element arrows/numbers were entering accessible names. Answer arrows and step numbers are now explicitly decorative.
5. The original MF link chooser allowed a one-click association. It now requires checking the exact account, units and holders in a statement.
6. The saved-status message could lag behind new typing. It updates immediately when the form changes.
7. A due review on a confirmed record could be overlooked. It now returns to the dashboard's next task.
8. Enlarged, wrapping search labels could overlap the suggestions popup. Its position now follows the input; measured at 320px/200% with a 4px gap and no document or popup-width overflow.
9. Existing-account opt-out and a clear exit from the fictional example were missing. Both are now explicit.

## Published release

The revised website is live at [sangyan-xi.vercel.app](https://sangyan-xi.vercel.app). The final Vercel deployment is `dpl_AWB3AYd1fzfUVRdtKhUqJMJT24En`. All 12 public assets matched the local audited files byte-for-byte; `/` and all six language entry routes returned the current page. Security headers were verified, and the sampled research, test, archive and hosting-metadata paths returned 404. See [live verification](audits/2026-10-03/live-verification.json) and the [published dashboard screenshot](audits/2026-10-03/live-dashboard.jpg).

The exact final source hash matches the Lighthouse audit. Its English-home scores are 100 performance, 100 accessibility, 100 best practices and 100 SEO, with simulated mobile LCP 1.6 seconds, zero blocking time and zero layout shift. The live browser opened the revised example dashboard without console errors. These observations do not replace target-user or assistive-technology testing.

## Limits and the next depth milestone

The implementation is substantially deeper, but a high Lighthouse score is not evidence that a senior or first-time regional-language user can finish this journey. The next high-value work is **observed completion by target users**, followed by revisions to the misunderstood steps. Use one bank savings case, one deposit/joint case and one mutual-fund-in-demat case. Measure whether users identify the right institution/account, distinguish receipt from registration, recover after returning later, and give a family member a useful sheet without exposing a private note.

Before describing this as broadly accessible, conduct VoiceOver/TalkBack sessions and low-end Android/poor-network tests. Have fluent speakers review wording and actual speech output for Hindi, Bengali, Marathi, Tamil and Urdu. Local TTS availability remains device-dependent; reliable coverage on every device needs a reviewed voice-delivery strategy, not silent fallback to an unrelated accent.

Provider coverage is intentionally bounded. Expand one provider at a time with dated official instructions, explicit applicability and a regression case. No user study, fluent-reader approval, professional legal review, institutional integration or field outcome is fabricated. The brief's PPT and 3–5 minute video are separate deliverables and are not claimed completed here.
