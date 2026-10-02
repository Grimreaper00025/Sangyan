# Where acquisition history breaks

## Record map

This is an analytical map of roles, not a claim that every institution uses the same implementation.

| Record holder | Information ordinarily useful to the investigation | Important limitation |
|---|---|---|
| Investor's old broker | Trade dates, quantities, prices, contract notes and trade exports | Access and history depth after account closure need case-specific verification |
| Investor's new broker | Current holdings, new trades and locally recorded acquisition entries | Imported or manually entered historical values need provenance |
| Depository / DP | Account credits, debits, ISINs, balances, demat movements | A movement record alone need not describe original economic acquisition |
| Issuer / RTA | Registered holding details, certificate/folio history, corporate-action processing | Private register access and acceptance of a claimant remain controlled |
| Issuer / exchange public disclosures | Schemes, exchange ratios, record dates, cost-allocation guidance, corrections | Public documents describe events, not a particular investor's entire history |
| Investor's records | Old emails, statements, contract notes, applications, payment evidence | May be incomplete, contradictory, duplicated or poorly scanned |
| Tax report / accountant | Fiscal treatment and resulting computation | Accuracy depends on inputs and legal classification |

CAS already consolidates holdings and transactions across covered accounts and mutual-fund records. Therefore, “one screen for all assets” is not the unmet problem. [S012](../references/sources.md#s012), [S013](../references/sources.md#s013)

## Failure modes and the evidence needed to resolve them

| ID | Failure mode | What can go wrong | Minimum useful evidence | Software limit |
|---|---|---|---|---|
| F1 | Transfer-in history missing | The destination has shares but cannot calculate the investor's acquisition history | Prior trades, source-account movements, destination credit | Cannot infer an exact purchase price merely from a current balance |
| F2 | Transfer-out not matched | A reconstructed ledger retains shares that left, or treats a move as disposal | Both account statements and common-owner evidence | Equal quantity and date alone do not prove a self-transfer |
| F3 | Corporate-action chain split across records | Parent and child securities carry inconsistent quantities or allocated costs | Issuer documents plus eligible holdings at each event | Ratios cannot be applied to shares the investor sold before eligibility |
| F4 | Performance average mistaken for tax-lot history | Final sale gain or holding classification is wrong | Individual acquisition lots and account ordering | An average is not reversible into unique lots |
| F5 | Corporate-action correction missed | An earlier document remains in a downstream calculation | Original and revised issuer notices | “Latest” must mean authoritative revision, not newest search result |
| F6 | Paid rights entitlement separated from resulting share | Acquisition components are disconnected | RE purchase, subscription, calls and resulting credit | Must distinguish exercise, sale and lapse of the entitlement |
| F7 | Old physical shares enter demat later | Demat date is confused with original acquisition date | Original acquisition evidence and demat credit | A certificate's issue date may reflect a replacement, not original purchase |
| F8 | Gift or other change of owner | New-holder acquisition fields reflect a display convention | Transfer route, original-owner history, relevant tax facts | Self-transfer assumptions cannot be reused automatically |
| F9 | Grandfathering applied to wrong security state | Historic price and current quantity are incompatible | Applicable price record and subsequent action chain | A chart's back-adjusted price is not automatically the statutory FMV |
| F10 | Cancelled or extinguished security lacks normal sale | A holding disappears without a broker sell trade | Legal event, effective dates and depository entry | Claim timing/treatment requires specific legal analysis |

F1, F2, F6, F8 and F9 have explicit broker-report support in [S001](../references/sources.md#s001); the issuer correction in F5 is documented in [S022](../references/sources.md#s022). F10 is an adjacent research direction, not part of the initial scope; see [S048](../references/sources.md#s048), [S049](../references/sources.md#s049).

## Two separate timelines

The system needs to preserve **when an asset was acquired** and **when it entered a particular demat account**. CBDT Circular 768 explicitly addresses account-wise FIFO and later dematerialisation of older physical holdings. Its example makes these two dates operationally significant. [S017](../references/sources.md#s017)

For a model, this means storing at least:

`economic_acquisition_date`, `account_credit_date`, `trade_date`, `settlement_date`, `event_effective_date`, `record_date`, and `evidence_date`.

Not all fields exist for every event, and they must never be collapsed merely to make a clean timeline. The circular directly discusses physical-to-demat ordering; lot attribution across more complicated partial off-market transfers should be separately reviewed before automation.

## Quantity can reconcile while history is wrong

Consider a synthetic holding of 100 shares acquired in two lots. Many pairs of dates and prices can produce the same present quantity and even the same total cost. A current statement can confirm that 100 shares exist without proving which purchase lots remain after earlier sales.

Consequently, three reconciliations should be distinct:

1. **Quantity reconciliation:** does the event sequence explain every credit, debit and final balance?
2. **Cost reconciliation:** does each cost change follow from supported consideration or a valid allocation rule?
3. **Evidence reconciliation:** can each result be traced to the documents that establish it?

A green tick on the first is not a green tick on the other two.

## Why a company-name lookup is insufficient

A corporate lineage may branch through demergers and later merge into another issuer. Names can change without an economic exchange; ISINs can change for reasons that need event interpretation. The same investor may hold both old and newly purchased lots around an event.

The relevant object is therefore an **investor-specific event history**, anchored to a versioned issuer/security history. A public company genealogy is useful infrastructure, but it does not independently establish ownership, record-date eligibility or acquisition cost.

## Where a software intervention could sit

An upload-based research prototype can sit beside existing systems. It can inspect documents, expose contradictions, perform supported transformations and produce a portable evidence pack. It does not need to initiate transfers, access live trading credentials or update broker records to demonstrate value.

The human outcome is a better-supported history ready for review. A verified institutional correction, accepted tax filing or recovered asset is a later outcome and must be measured separately.
