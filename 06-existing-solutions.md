# 06 — Existing solutions and the remaining hypothesis

**There is no defensible “no existing solutions” claim.** Several products and public systems address substantial portions of this journey. This is a documentation review, not hands-on testing of paid software or an audit of service quality.

## Competitive map

| Existing option | Documented coverage | What remains to test |
|---|---|---|
| **MProfit** | Historical trade import, corporate-action adjustments, portfolio transfers, rights/partly-paid handling, NSDL eCAS reconciliation | Can it reconstruct missing evidence rather than ask the user to provide the answer? Does it expose a claimant-ready documentary chain? |
| **Broker reporting tools** | Portfolio and tax reports, manual correction workflows, corporate-action support varying by broker | Cross-broker incomplete histories, source provenance and differing display/tax conventions |
| **Quicko** | Capital-gains statements based on available connected-broker trade data | Treatment when the connected data omit earlier acquisitions; this was not hands-on tested |
| **NSDL/CDSL CAS and depository services** | Consolidated holdings/movements, statements and existing account access | Sufficiency for original purchase evidence and long historical reconstruction in each case |
| **Share Samadhan** | Recovery services including physical shares and investor-service problems | Digital self-service depth, pricing, proof requirements and amount of manual work |
| **Recoversy** | Search and recovery services for unclaimed investments | Verification quality, lineage handling and portability of the evidence produced |
| **Zerodha dematerialisation assistance** | Existing help for physical certificates, including a dedicated public assistance initiative | Coverage of complex claimant cases and post-credit acquisition history |
| **Yellow SMART** | Expert-led post-demise asset recovery and transfer assistance | Whether a narrower software layer materially outperforms or complements its workflow |
| **EasyInherit** | Inheritance, succession documentation, death-claim and dispute services | Securities-specific reconstruction depth; do not assume the service lacks internal software |
| **MITRA / MF Central** | Existing mutual-fund tracing and related investor services | It is not evidence of a universal demat-equity inheritance search, but removes novelty from generic “find forgotten mutual funds” |
| **IEPFA systems / Portal 2.0 roadmap** | Claim and verification infrastructure, with announced digital improvements | Reconstructing missing upstream evidence versus duplicating a government form or search screen |
| **KRA demise reporting** | Existing centralised notification/verification mechanism | A family-facing evidence workflow should complement it, not claim to invent it |

## MProfit is the first benchmark, not a footnote

Its published workflows cover transfer between portfolios [S007](sources.md#s007), historical trade imports [S008](sources.md#s008), corporate actions [S004](sources.md#s004), and eCAS reconciliation [S005](sources.md#s005). Rights entitlements and partly paid shares already have a handling workflow [S006](sources.md#s006). Gifts and traded-bond transfers broaden that coverage [S009](sources.md#s009), [S045](sources.md#s045).

The particularly relevant limitation is precise: MProfit's Zerodha external-trades integration instructs the user to supply actual purchase date and amount for accurate calculations. [S003](sources.md#s003)

This supports a **hypothesis**, not proof, that incomplete-evidence reconstruction remains a differentiated task. A competitor may have workflows not described in the inspected page. Do not state that MProfit cannot preserve cost through transfers or calculate corporate actions; its documentation contradicts that.

## Physical recovery and inheritance are also occupied markets

Share Samadhan and Recoversy directly address difficult recovery work. Yellow and EasyInherit offer broader inheritance assistance. Their marketing does not establish independently verified recovery rates; similarly, their existence does not establish that every low-value retail case is served affordably. [S039](sources.md#s039), [S040](sources.md#s040), [S041](sources.md#s041), [S062](sources.md#s062), [S063](sources.md#s063)

An honest differentiation test asks: **Can a claimant obtain a correct, evidence-linked, portable dossier with less expert rework, using documents they already possess?** A chat interface or a directory of RTAs would not answer this.

## Public infrastructure can absorb a weak product

The August 2026 IEPFA announcement describes a Portal 2.0 roadmap with entitlement search, prefilled IEPF-5 and claimant/verification improvements; pilot and launch were planned for October and November respectively. These are announced milestones, not verified completed deployment. [S064](sources.md#s064)

MITRA already covers inactive/unclaimed mutual-fund discovery, while KRA demise reporting exists independently. [S061](sources.md#s061), [S059](sources.md#s059)

Therefore, generic form filling, asset discovery and death notification are weak standalone novelty claims. A durable contribution would sit upstream of these systems: reconciling the underlying records and explaining precisely which evidence supports each claim.

## Hands-on comparison still required

Use identical anonymised packs, and give existing tools a fair chance:

1. Complete tradebook plus simple transfer — expected to be largely solved already.
2. Partial tradebook plus matching depository entries — test reconstruction and unresolved-field handling.
3. Two corporate actions plus a revised issuer notice — test version awareness and cost conservation.
4. Inherited holding with existing nominee documentation — test whether history survives the claimant transition.
5. Conflicting names or dates — test escalation rather than invented certainty.
6. No original purchase evidence — test whether the product admits insufficiency.

Record supported outputs, manual corrections, hands-on minutes and evidence traceability. “Not mentioned on the website” should be recorded as **unknown**, not “unsupported.”

## Surviving differentiation hypothesis

An investor-controlled **securities evidence and continuity layer**: connects fragmented records, maintains an auditable event history, checks claim-document consistency, and exports the same underlying evidence for brokers, RTAs, accountants and heirs.

This could grow into infrastructure, but the research has not established product-market fit, a unique algorithm, a defensible moat, or zero competition. Its strongest potential asset would be verified event/rule data and a benchmark of difficult real cases—not the mere use of AI.
