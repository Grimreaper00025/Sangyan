**Virasat: Track B product and website audit — 3 October 2026**

**Implementation follow-up:** This is the initial audit. See [the rebuild and second audit](ux-delivery-and-reaudit-2026-10-03.md) for delivered changes and current limits.

The current website is a working nomination-status prototype. It does too little of the difficult work between a family's uncertainty and a correctly completed nomination. Its next iteration needs a deeper task flow, useful institution guidance, reliable return-later behaviour, and a usable family handoff.

This audit concerns the selected **Nominee & Family Wealth Tracker** direction. It does not reopen the earlier acquisition-history or transmission product choice. No application code or deployment was changed during this audit.

**What was reviewed**

- The supplied [Sangyan brief](../references/problem-statement.pdf), including the complete Track B passage on pages 3–4 and rubric on page 6.
- The current [Track B decision](track-b.md), [build plan](build-plan.md), [implementation checks](implementation-checks.md), [nomination guidance](nomination-guidance.md), and earlier problem, inheritance, evidence, competition, validation, data-access and impact research.
- The previous build and deployment chats, to recover the user's explicit direction and design constraints.
- The [live Vercel website](https://sangyan-xi.vercel.app/), using synthetic account entries only: HDFC Bank with unknown status, Zerodha with missing nomination through submitted and confirmed states, and an HDFC Mutual Fund entry. Also inspected editing, family summary, saving, Hindi switching, and refresh behaviour. Reviewed a 1440-pixel desktop layout and 390-pixel phone layout.
- The current interface, account model, copy, styling and tests. All 24 existing tests passed on this audit run. Seven are current nominee-domain checks; the rest include shared utilities and archived product logic. This is not evidence of successful use by the intended audience.
- Reopened the primary SEBI, bank-rule and HDFC references; checked current public Zerodha and MFCentral documentation. No authenticated institutional account or real nomination submission was used.

**The problem we should solve**

A first-generation investor, or a trusted person helping them, cannot confidently establish which family accounts have a current nomination, work out how to fix missing or outdated nominations, and leave enough information for the family to find the accounts and supporting records later.

There are several separate failures: the family does not know an account exists; nobody knows whether nomination is recorded; an existing nomination needs updating; a request was sent but its result is unknown; or the relevant family member cannot find the information later. A yes/no list addresses only part of this.

The product outcome should be: **the family knows what was checked, what remains unresolved, the next action for each account, and where to find the record.** “Nomination registered” and “family information complete” need separate treatment. A user can legitimately choose not to store nominee identities in Virasat.

The supplied rubric assigns 30% to safety impact and 25% to target-user usability. The strongest demonstration is an observed user completing a meaningful task with fewer mistakes. Neither more screens nor a high performance score establishes that outcome.

**What the existing research contributes**

| Keep and apply | How it should change the product |
|---|---|
| Receipt, record, assertion and outcome are different | Preserve the existing submitted/confirmed distinction; explain it with a small fictional example when the user must decide |
| Rules depend on account type and circumstances | Select guidance using account class, holding mode and relevant exceptions |
| A nominee and a beneficial heir are different concepts | Put a short, reviewed explanation near the nominee question, with detail available on demand |
| Official sources can contain stale or conflicting details | Store the source, section, review date, applicability and known uncertainty with each guide |
| Real-world access is limited | Use official handoffs and user-reported checks honestly; do not invent all-account discovery or institutional verification |
| Family evidence must remain useful later | Make saving, record location and deliberate family sharing part of completion |

Much of the large earlier dossier validates share-history and transmission problems. It does not establish the usability, differentiation or effectiveness of this narrower nomination product. Its tax illustrations and recovery amounts should not become nominee-tracker impact claims. The current competition study also needs a short nomination-specific supplement; MProfit is no longer the central benchmark.

**Findings, ordered by effect on the journey**

| Priority | Finding and evidence | Required change |
|---|---|---|
| P1 | **The uncertainty branch has the wrong main action.** Live HDFC test: after choosing “Not sure,” the primary button is “I submitted a request.” The user has not yet established whether any request is needed. Finding no nominee requires discovering Edit account and changing the status there. | Make the next action “Help me check.” Then ask what the user found: nomination recorded, none recorded, details need changing, or still unclear. Preserve an already-submitted shortcut as a secondary option. |
| P1 | **Institution guidance is mostly generic.** The tested Zerodha and MF entries receive account-class text and regulator/association links. Only HDFC Bank has a dedicated path. The displayed institution name otherwise does little to determine the task. | Deliver a small, explicitly supported guide set with check/add/change routes, official destinations, offline alternatives, preparation help and expected evidence. Unsupported institutions need a clearly described fallback. |
| P1 | **The model cannot select important routes.** It has no holding mode, bank product subtype or link from demat-held mutual funds to their demat account. A sentence asks users to identify these themselves. | Ask the minimum branching questions at the point where they matter. Help users identify a folio versus demat holding from recognisable statement examples. Distinguish a deposit product when the bank path differs. |
| P1 | **The family record is too thin.** Owner and nominee are optional free-text fields hidden in Edit under “Add a nickname or last four digits.” A complete synthetic confirmation required neither. Multiple accounts at one institution can have indistinguishable default titles. | Ask “Whose account?” in plain language with a skip option; offer safe account labels and an optional structured nominee list. Show whether family details were intentionally omitted or still need attention. Support more than one nominee in the underlying model without turning intake into a long form. |
| P1 | **Progress is fragile across visits.** Reloading the live site erased all three synthetic accounts and returned to language selection, without a save prompt. Saving requires finding Save list and managing a password-protected file. | After the first useful result, make the unsaved state and return-later step visible. Give a clear save checkpoint before the external handoff. Keep encrypted export, include unfinished work where appropriate, and test finding and reopening it. Any persistent-device option must be deliberate and encrypted; do not silently add plaintext storage. |
| P1 | **Pending, changed and unsuccessful cases are incomplete.** The model contains reported/submitted/confirmed, with no explicit “needs correction,” rejected, blocked, follow-up due or recorded opt-out state. Confirmed pages have no guided recheck or change task. | Add only the states needed for the supported journey. Preserve a short history of what changed. Provide user-chosen follow-up and correction actions. A request still awaiting response must remain visibly unresolved. |
| P2 | **The family handoff is not yet practical enough.** The primary “Download summary” creates JSON. Browser print/PDF exists, but the summary largely repeats institution/status and omits all record-location notes. | Make a readable, language-appropriate family sheet the main handoff. Include selected family/account labels, status and date, concrete next action, official contact route and an explicitly shareable record-location field. Preview exactly what will be shared. Keep private notes excluded by default. |
| P2 | **Evidence guidance loses useful distinctions.** The statement option describes a record listing a nominee, while the current securities framework also permits a nomination Yes/No indicator. The UI does not separately teach “status exists” versus “person/details checked.” | Explain accepted evidence per account class, with fictional visual examples. Record whether the user checked status alone or the nominee details. A status-only statement must not imply that the intended person was confirmed. |
| P2 | **Regional-language availability exceeds the reviewed experience.** Six dictionaries exist, but fluent-reader review is pending. Hindi saving leads with technical vocabulary. HDFC matching recognises only whitespace/case variants of `hdfc` and `hdfcbank`; regional spelling or a suffix falls back silently. The read-aloud handler speaks a short heading/generic phrase rather than the displayed checklist. | Use canonical institution selection with familiar names and aliases. Review key journeys with fluent users. Make audio read the actual next instruction, with replay/stop, and show a useful fallback when the device lacks a suitable voice. Preserve the user's fixed-layout requirement for Urdu. |
| P2 | **The visual hierarchy reflects a record editor.** Home leads with adding an account even when unresolved work exists. The task page repeats account name/type, several status labels, a timeline and caveats. Small secondary type carries substantive guidance. | Give the current task and next action visual priority. On populated Home, surface the unfinished task before adding more accounts. Use comfortable instruction text, concise supporting copy and progressive disclosure. Keep the restrained identity, native language names and compact controls already requested. |

P1 means essential to a credible completed journey, rather than a security severity. P2 means the next layer of usefulness and usability. Usability consequences above are reasoned audit judgments; they still need target-user observation.

**Concrete research-to-product examples**

HDFC's official help distinguishes the NetBanking account path and the joint-holder branch alternative. The app already has part of that information, but does not ask which situation applies. Its broad “bank deposit” type also warrants a separate check of savings versus FD/RD paths before reusing one guide. [HDFC NetBanking FAQ](https://www.hdfc.bank.in/need-help/net-banking-faqs).

Zerodha publishes a Console nomination path, offline alternatives and separate guidance that Coin holdings use the demat nomination. These give us a concrete route to implement and a duplicate-record mistake to prevent. Public help is evidence of the published workflow, not a tested logged-in experience. [Nomination instructions](https://support.zerodha.com/category/your-zerodha-account/nomination-process/articles/add-nominee-online-zerodha), [Coin nomination](https://support.zerodha.com/category/mutual-funds/features-on-coin/others-coin/articles/nomination-mutual-funds).

The current SEBI circular distinguishes joint holdings, allows up to three nominees, supports opt-out, and allows statements to show names or a Yes/No nomination indicator. The bank rules separately allow up to four deposit nominees, simultaneously or successively. The data model should preserve these distinctions and apply reviewed rules per route. [SEBI, 29 May 2026, §§4–10](https://www.sebi.gov.in/sebi_data/attachdocs/jun-2026/1780397706130.pdf), [Banking Companies (Nomination) Rules, 2025, rule 2](https://thc.nic.in/Central%20Governmental%20Rules/Banking%20Companies%20(Nomination)%20Rules,%202025.pdf).

The retrieved Zerodha help calls nominee PAN mandatory, while the retrieved SEBI circular categorises nominee identifiers as optional. This is a concrete source discrepancy to resolve before publishing a universal preparation checklist; this audit does not adjudicate the institution's compliance. [Zerodha help](https://support.zerodha.com/category/your-zerodha-account/nomination-process/articles/add-nominee-online-zerodha), [SEBI §7](https://www.sebi.gov.in/sebi_data/attachdocs/jun-2026/1780397706130.pdf).

MFCentral already presents consolidated mutual-fund servicing. A nomination list with external links has a weak differentiation claim. Our candidate advantage is helping a novice complete the right task across account classes and leave an understandable family record. That remains a hypothesis until compared with the existing official routes. [MFCentral](https://www.mfcentral.com/).

**The journey to build next**

1. Keep the requested language-only opening. On Home, explain the immediate benefit in one sentence and invite the user to check one account.
2. Establish whose account it is and identify the institution/account type with recognisable choices. Offer “I don't know” assistance. Keep private identifying data optional and minimal.
3. Select a supported route. Ask joint/sole, product subtype or demat/folio questions only when they change the instructions. Make unsupported cases explicit.
4. Help the user check: one concrete instruction, an official destination, an optional small example, and “I found it / I couldn't find it.”
5. Interpret the finding without overclaiming. If the nomination is recorded and suitable, proceed to evidence and family record. If missing or outdated, offer the correct add/change path. If unclear, preserve uncertainty and give a specific question to ask.
6. Prepare the institutional action: what the user should have ready, where to get the correct form, and an offline alternative. Nomination submission and authentication remain with the institution.
7. Record submission, then confirm the result separately. Provide a follow-up action for pending or rejected requests. Show why a receipt is not registration with a fictional example.
8. Finish with an intelligible account record, deliberate family-sheet preview and encrypted return-later save. Make the remaining unresolved work apparent.

This does not mean eight mandatory screens. Familiar users can take shortcuts; novices see one decision at a time. The underlying route can be detailed while each screen remains small.

**Recommended build order and acceptance checks**

| Order | Deliverable | Observable completion test |
|---|---|---|
| 1 | Rewrite the journey and state model; settle the intended outcome of every screen | Every visible main action corresponds to something the user can do next. Unknown, missing, already recorded, needs change and waiting each have a coherent route. |
| 2 | Complete one real, named institution guide end to end | A novice can locate the official place to check, identify their result, prepare the action and recognise the correct confirmation without the developer explaining it. HDFC is a sensible first candidate because part is already researched. |
| 3 | Complete one demat route and one separate MF-folio service route | Demonstrate all three brief account classes. Correctly route a demat-held MF example and a joint-holder exception. Choose the MF provider/channel after checking its current help; MFCentral is a candidate. |
| 4 | Make return-later and family handoff work | The user can deliberately save, close, reopen and identify the same pending task. A chosen family member can understand the sheet and find the referenced records without opening JSON. |
| 5 | Redesign the screens around that functioning journey | Inspect empty, populated, pending, completed and error states on phone and desktop. Preserve native language names, fixed Urdu layout, one root address and restrained components. |
| 6 | Observe 3–5 intended users; make the video and PPT from demonstrated behaviour | Record task completion, assistance, mistakes and successful return-later use. Treat the small sample as formative evidence. Show the live task and an error prevented in the submission, with simulated institutional outcomes labelled. |

Use a small number of meaningful regression checks: wrong-route prevention; submitted versus registered; save/resume; change invalidating the relevant previous check; safe handoff; and important language/keyboard states. Re-run performance checks after substantive interface changes. More test count is not the objective.

**Design decisions worth retaining**

The short initial setup, calm visual palette, native-script language labels, compact Home and accessibility controls, text resizing, root-only language switching, local data handling and encrypted export are useful foundations. The receipt/registration distinction is especially worth preserving. Improve how these support the task instead of repeatedly replacing colours and components.

**Scope to keep bounded**

Keep this iteration focused on living holders arranging nominations and family records, including an authorised helper. A deceased-holder request needs an explicit explanation of the separate claim process rather than being pushed into nomination setup. Share-history reconstruction, valuations, will creation, automatic discovery, IEPF recovery and grievance filing remain outside this iteration. Full identities, credentials and nominee allocation decisions need not be collected merely to guide the user.

Do not claim that a completed tracker prevents all unclaimed inheritance, verifies legal entitlement, or proves an amount recovered. Measure supported nomination tasks completed, false-completion mistakes avoided, assistance needed and successful return-later use.

**Documentation and audit limits**

The implementation-checks document still includes an old “Unpublished” Sites failure even though the Vercel app is live. The recorded Lighthouse results also explicitly predate later UI corrections. The top-level product description overstates the breadth of institution-specific guidance relative to the single HDFC rule. These should be reconciled during the next implementation pass.

This audit verifies current behaviour and identifies product gaps. It is not fluent-reader approval, a full accessibility certification, a security assessment, a legal opinion, or evidence that the institutional procedures work for every account. No real investor data was entered, no institution was contacted and no financial action was submitted. The app remains unchanged; the only new deliverable is this audit.
