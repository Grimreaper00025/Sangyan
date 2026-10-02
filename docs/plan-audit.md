# Current implementation audit — Virasat

**2 October 2026.** The user narrowed the product to the brief's Nominee & Family Wealth Tracker. Earlier history/inheritance planning remains background research. The current implementation follows that correction.

- Language question and six tiles are the entire first screen. Native language labels and root-only switching preserve ordinary draft/account state; Urdu glyphs flow RTL inside inline elements, while all blocks remain left-aligned and page geometry stays LTR.
- Home visibly exits the current view and keeps a new-account draft in memory; setup asks type, institution and nomination in three separate steps with Back.
- The account list prioritizes missing and uncertain nominations. Visible account-specific checklists explain the next task, request acknowledgement and registration evidence; locally recognized HDFC Bank deposits receive a verified NetBanking hint; no extra portfolio/history/grievance modules are shown.
- Submitted requests are separate from registration checked in a record. Confirmation requires a real nonfuture date, record type and explicit check. All states remain user-reported, not automatic verification.
- Account/nominee nicknames are optional. Only last four digits may be entered in the reference field. Summary inclusion is disclosed before export; free-text record notes are omitted.
- Six dictionaries are drafts. No fluent-reader approval or legal sufficiency is claimed.
- Local encryption, bounded saved schema, text escaping and no browser case persistence are retained.

[Implementation checks](implementation-checks.md) records what passed and the limits. The current nomination sources are in [nomination guidance](nomination-guidance.md). Review of institutional practices, human accessibility and actual users remains pending.

The initial nominee question excludes optional metadata and dates. Existing-account editing retains optional nicknames and last-four references. Confirmation uses two described record choices and labeled numeric date parts with inline errors; native calendar controls and native validation popups are absent.
