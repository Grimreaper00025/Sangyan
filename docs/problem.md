# The problem and its boundaries

## Working problem statement

An ordinary long-term investor can possess the correct number of shares yet lack a reliable, usable record of how those shares were acquired. Moving brokers, holding shares through corporate restructurings, dematerialising old certificates, or receiving securities from another person can separate today's holding from the documents needed to explain its history.

The immediate symptom may be an empty purchase-price field. The harder underlying problem is reconstructing the correct lots, dates, cost allocations and supporting evidence without quietly treating a guess as a fact.

**Evidence anchor:** Zerodha identifies transfer-related adjustments its tax reports do not perform automatically; Groww directs investors to previous-broker records for missing purchase information. These are acknowledged workflow boundaries, not allegations of misconduct. [S001](../references/sources.md#s001), [S002](../references/sources.md#s002)

## Four distinct questions

| Question | Useful evidence | Why the answer does not settle the other questions |
|---|---|---|
| Do I currently hold this security? | Depository statement, CAS, issuer/RTA confirmation | Current possession does not establish the amount originally paid |
| What legal route gave it to me? | Trade, gift, transfer, allotment or other records | An identical-looking credit can arise through different routes |
| What is the correct acquisition history? | Original transactions plus subsequent events | An average price suppresses individual dates and lots |
| What amount and date should a particular tax computation use? | History plus applicable statutory treatment | A performance-report entry is not necessarily a tax basis |

An acquisition-history tool should avoid implying that it is an ownership adjudicator. In a disputed physical-share case, institutional or judicial decisions remain necessary.

## People most likely to have a painful case

These are **research segments**, not measured prevalence rankings.

1. **An older investor consolidating accounts.** Shares bought over many years move successfully; the old account is closed; the family discovers the receiving app needs historical inputs. This has a particularly clear documented anecdote in Case C1.
2. **A family member helping a living parent.** The helper can obtain recent holdings but cannot reconstruct the parent's older transaction trail. This is a records problem without requiring a death/nominee product.
3. **An investor holding a reorganised company across brokers.** The issuer's current name and quantity look correct, while one broker's report, the old trade file and the corporate-action notice describe different securities.
4. **A shareholder receiving demat credit after a physical-share process.** The immediate recovery may be successful, but purchase-history reconstruction remains unfinished.
5. **A CA or small advisory office asked to fix one difficult family portfolio.** The customer has enough evidence somewhere, but it is scattered and expensive to reconcile. Willingness to use or pay for assistance is unmeasured.

## What hurts

- **Financial misstatement:** gains or losses may be wrong if the acquisition history is wrong. Either overstatement or understatement is possible.
- **Unusable records:** the investor cannot confidently complete a transaction review, tax computation, or professional hand-off.
- **Rework:** collecting old statements, matching renamed issuers and checking adjustments consumes time. No credible average-hours figure was found.
- **Opportunity cost and delayed access:** physical-share cases may take longer when documentary requirements are unmet. The contribution of missing history must be separated from institutional queues, disputes and identity problems.
- **Loss of trust:** two reports can disagree even though the shares themselves are safe. Showing a fabricated exact answer would worsen this problem.

The research does **not** establish that a blank broker field automatically becomes a zero-cost tax filing, that every transfer produces an error, or that affected investors necessarily overpay tax.

## The structural explanation — a hypothesis supported by workflow evidence

Records are maintained for different purposes. A depository statement establishes account movements and holdings; a broker records its trades; an issuer publishes company-wide corporate actions; a taxpayer or accountant must determine the investor-specific fiscal treatment. The product opportunity lies in joining these records when continuity breaks.

This division of responsibilities is not itself proof of a regulatory violation. The research did not establish a universally enforced mechanism that sends a complete, verified, lot-level tax history with every retail demat transfer. Nor did it establish that such a mechanism cannot exist privately in some workflows.

## Scope recommended for further validation

Following the supplied Track B brief, research **Indian listed-equity history plus an uncontested transmission journey**, with a small set of verified corporate actions. A self-transfer remains a useful control case; inheritance adds route selection and entitlement evidence. A complete old tradebook is another control; the research challenge is a partially missing or inconsistent history.

Include document parsing, entity resolution, event ordering, reconciliation and evidence export in the technical investigation. These all address the same user outcome.

Defer derivatives, intraday trading, employee compensation, cross-border assets, active ownership disputes, property/insurance inheritance and automated tax filing. Securities inheritance is now in scope; a generic estate-management service is not the research target.

## What would invalidate the thesis?

- Most relevant users can retrieve and import complete original records quickly using existing products.
- Existing software already repairs the same incomplete cases, with equally good evidence trails and less effort.
- Users' missing information is genuinely absent rather than scattered; software cannot determine it uniquely.
- The only available path depends on inaccessible broker/RTA data or legal adjudication.
- Document preparation saves too little time or error to justify the complexity.

These are falsification criteria, not minor presentation objections. The next research stage should actively test them.
