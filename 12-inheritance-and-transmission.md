# 12 — Inheritance and transmission: the expanded Track B research

## The common thread with demat history

Inheritance changes the question from “which purchase created these shares?” to “which documented events connect these securities to this claimant?” Both require identity, account/security history, dated evidence and explicit unresolved links.

The financial history should survive the claim. A family can complete a transmission yet still lack the predecessor's acquisition records. Conversely, reconstructing a purchase does not prove that the person presenting it is entitled to inherit.

## The most important update: use the July 2026 framework

**Primary source synopsis — S057:** circular dated 23 July 2026, effective 30 days later. QTP ceilings are ₹10,000 for physical holdings and ₹30,000 for demat; simplified-documentation ceilings are ₹10 lakh and ₹30 lakh respectively. Physical/SOA aggregation is per listed entity/AMC; demat is per beneficial owner. The no-nominee QTP route is restricted to specified immediate relatives. Disputed or competing claims are excluded. The settlement period is 21 calendar days after receipt of all required documents. The framework covers nominee/no-nominee branches, standard forms, document alternatives and survivorship; it removes mandatory probate requirements. Read Annexure §§1–7 and the grid, especially exceptions, before applying it. [S057](sources.md#s057)

The old ₹5 lakh/₹15 lakh values must therefore not drive a current application. The March consultation records the older thresholds; an old NSDL form also still surfaced in search, illustrating the danger of using accessible documents without checking their version. [S069](sources.md#s069), [S070](sources.md#s070)

This is **not** a claim that no-nominee cases need no evidence, that all large cases require court proceedings, or that “probate optional” resolves a contested will.

## Nominee and heir are different roles

The Supreme Court's *Shakti Yezdani* judgment, 14 December 2023, rejects the idea that nomination creates a separate succession route overriding succession law. [S060](sources.md#s060)

Software should therefore record at least `registered_holder`, `surviving_holder`, `nominee`, `claimant`, `executor_or_representative`, and `asserted_legal_heir` as distinct roles. One person may have several roles. An upload should not silently convert an asserted relationship into an adjudicated entitlement.

## A regulator-confirmed link between inheritance and tax reporting

SEBI's 19 September 2025 circular identifies possible inappropriate capital-gains assessment when a nominee passes securities to legal heirs. It requires reporting entities to use the **TLH** reason code from 1 January 2026. [S058](sources.md#s058)

This validates the relevance of preserving the **reason for a movement**, not just the quantity. It also weakens a pitch claiming the regulator has never addressed the problem. A proposed tool could compare claimant evidence with available transaction records and flag missing or contradictory classification; it cannot directly alter CBDT or depository reporting. No post-implementation error rate was found.

## Existing centralised reporting must be acknowledged

The October 2023 KRA circular introduced centralised demise reporting effective January 2024. Linked intermediaries have defined notification and verification duties. Physical holdings have additional connectivity/PAN qualifications. [S059](sources.md#s059)

Accordingly, a new “tell every broker somebody died” service is not novel by itself. The research opportunity is preparing a correct, consistent evidence packet and tracking what each institution actually acknowledged, with claimant authorisation.

## Research directions within one system

| Priority | Direction | What software could establish | What remains outside its authority |
|---|---|---|---|
| 1 | **Claim-route and document consistency checking** | Correct rule version; supplied/missing/conflicting records; traceable draft checklist | Authenticity decisions, entitlement adjudication, institutional acceptance |
| 2 | **Historical holder and security reconstruction** | Dated chain of certificates, accounts, corporate actions and asserted holder transitions | Unrecorded transfers, undisclosed heirs, disputed rights |
| 3 | **Acquisition-history continuity after transmission** | Which predecessor cost/date facts are supported and which are absent | Personal tax opinion where evidence or law is ambiguous |
| 4 | **Acknowledgement and deficiency reconciliation** | Differences between the submitted pack and the institution's response; supported procedural timeline | Inventing a complete-file date or promising a recovery deadline |
| 5 | **IEPF entitlement preparation** | Issuer/folio matching, action history and consistency with known claim references | Private register search without access; authority's verification and sanction |
| 6 | **Family evidence preservation** | A portable record usable by an authorised future helper | Guaranteeing that future laws or family circumstances remain unchanged |

These are investigation directions, not six features to implement during four days.

## Difficult fact patterns worth collecting

**Sequential deaths in a joint holding.** Case C6 gives a real research lead. The system should show the sequence, which documents cover each transition and where a legal interpretation is needed. It should not simply read the latest will and ignore the earlier holder.

**Nominee differs from intended heir.** Preserve both roles and the movement reason. A family tree alone is not enough to determine the legal allocation.

**No nominee, uncontested family.** This is more suitable for a bounded claim-readiness demonstration than a contested estate. The rule engine must select a current pathway using actual holding mode, value and documents.

**Demat plus several physical folios.** An account-level process and issuer-level processes may coexist. The product must track the scope of each evidence item rather than ask repeatedly for identical information or imply one submission covers all institutions.

**Name/address mismatch.** A spelling variation can be consistent with the same person, but similarity is not proof. The July 2026 mutual-fund announcement explicitly addresses operational mismatch handling; the detailed relevant procedures must govern any document recommendation. [S065](sources.md#s065)

**Shares already in IEPF.** Determine whether the case needs an entitlement/verification route before treating it as an ordinary demat move. The 2024 official verification kit contains fields for company and transfer history, including amalgamation-related data. [S026](sources.md#s026)

## A credible research fixture

Use a clearly synthetic, uncontested case with an independently reviewed answer:

1. The claimant uploads a known holding statement, relevant death/relationship documents, an issuer event notice and available old acquisition records.
2. The system extracts facts with page references and asks only questions that change the route.
3. It checks the current procedural category, identifies a deliberate document mismatch and explains the evidence needed to resolve it.
4. It reconstructs quantities through a corporate action and produces a reviewable claim pack.
5. After a **simulated** credit confirmation, it preserves the supported acquisition history for the new holder and marks unresolved cost explicitly.

The result can honestly be described as “a correctly reconstructed, reviewed claim pack.” It cannot be described as real assets recovered until an institution actually credits them.

## Where the idea is weak

- The hardest family cases may be legal disputes rather than information problems.
- Existing recovery services can already coordinate paperwork and institutional contact.
- The current framework itself provides standard forms and a documentation grid; merely digitising it is thin differentiation.
- A larger system increases the risk of producing confident but wrong legal guidance.
- Public documents cannot reveal every deceased investor's private accounts or undisclosed family relationships.
- Successful extraction from one scanned certificate says little about real-world robustness.

The defensible technical challenge is evidence reconciliation under uncertainty, tied to a specific user's securities. The defensible impact must be measured through reduced errors/rework or verified outcomes.
