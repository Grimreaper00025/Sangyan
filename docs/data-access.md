# Data access and independent feasibility

## What a standalone prototype can actually use

| Input | Access path | Useful fields | Principal gap |
|---|---|---|---|
| Contract notes / trade exports | User-selected files from authorised records | Trade date, security, quantity, consideration, charges, order/trade references | May not cover the full period; amended notes and duplicates |
| Depository transactions / CAS | Claimant or investor's lawfully obtained files | ISIN, dated movement, account identity, quantity, balance | Original acquisition facts may be missing |
| Holdings statement | User-supplied file | Current position and valuation reference | No unique history can be inferred from a snapshot |
| Corporate-action notices | Public issuer/exchange publications | Entitlement, dates, successor identity, cost allocation | Formats differ; rights and tax treatment are event-specific |
| Old certificate | User-supplied image/PDF | Company name, folio, certificate and distinctive numbers, stated face value, holder names | Does not by itself prove a current valid entitlement or market value |
| Transmission documents | Authorised claimant upload | Roles, dates, identity/relationship assertions, institutional references | Sensitive; authenticity and legal sufficiency require verification |
| RTA/DP correspondence | Claimant-provided letters/emails | Deficiency reasons, received/completed dates, accepted documents | Wording may be ambiguous; no assumed public API |
| Tax reports / AIS extract | User or authorised professional supplies it | Reported disposal and classifications where present | Neither an independent acquisition record nor automatic proof of correctness |
| IEPF references | User documents and official public resources | Claim/folio references, company verification, transfer history | No universal authorised search by a stranger's identity |

The core research demonstration can use files and a curated set of public events. It does not need universal broker integration.

## CAS is valuable but not a magic historical database

Official materials establish consolidation and account services. An NSDL e-services presentation lists month-wise statements and access to past CAS for specified recent windows. That is a user-interface description, not proof older records were destroyed or cannot be requested. [S012](../references/sources.md#s012), [S013](../references/sources.md#s013), [S014](../references/sources.md#s014)

Research must test what actual files contain. Distinguish opening balances, period transactions, market values and acquisition costs. Mutual-fund SOA data can have a different structure and history coverage from demat equity.

## Account Aggregator: useful possible input, not a dependency assumption

ReBIT's equities schema includes transaction fields such as ISIN, units, rate, timestamp, type and narration; holdings include current-value-related fields. Schema existence does not prove every participating provider supplies complete historical acquisitions, previous-owner basis, corporate-action interpretation or access for a legal heir. [S015](../references/sources.md#s015)

A standalone team cannot assume it is an authorised Financial Information User. Eligibility, regulated partnerships, consent, live provider coverage and permissible use would need separate validation. Upload-based evaluation avoids making access promises it cannot keep.

## Broker APIs: what the documented fields do and do not establish

Kite Connect's holdings endpoint includes quantity and average price. Those fields are useful observations, not a proof-carrying, multi-decade acquisition ledger. Its `average_price` should not be confused with similarly named market-quote fields. [S016](../references/sources.md#s016)

MProfit's external-trades workflow demonstrates that an API connection can still leave original acquisition inputs to the user. [S003](../references/sources.md#s003)

## Corporate-action corpus requirements

For each curated event, retain the issuer document link, precise event type, relevant security identifiers, entitlement rule, effective/record dates, cost-allocation source, fractional treatment and revision status. Unverified fields remain blank.

Start with a deliberately small corpus whose calculations can be independently checked. Expansion to thousands of issuers is a data-maintenance and licensing problem as well as a scraping problem. A publicly viewable document is not automatically licensed for unrestricted redistribution or bulk commercial extraction.

## Physical certificate matching

Use a staged match:

1. Extract visible text and document identifiers with page/image coordinates.
2. Generate issuer candidates from historical names and current public references.
3. Ask the user to confirm evidence when several candidates remain.
4. Reconstruct only the company events supported by authoritative documents.
5. Require institutional confirmation of the folio/security entitlement before labelling assets recoverable.

A company logo, similar name or denomination is insufficient. Old certificates can be cancelled, replaced, partly paid, pledged, or associated with extinguished capital. This investigation did not establish a public API that validates every physical folio and certificate for a claimant.

## Data handling for a family workflow

Use a user-initiated upload flow, document-specific permission, redaction in shared reports and local processing where practical. Preserve the original separately from the extracted text. Do not request access to a deceased person's OTP, impersonate them, or treat possession of a document as consent to obtain unrelated accounts.

Names, PAN, signatures, addresses, family relationships and full statements are highly sensitive. A research demo should use synthetic or expressly consented/redacted records. A hash establishes file consistency, not that the document is authentic.

## Availability verdict

**Available for a credible bounded prototype:** user documents, public legal/issuer sources, deterministic calculations, source links, uncertainty and review workflows.

**Not established:** complete old broker exports after closure; automatic all-account discovery for heirs; authoritative RTA-register APIs; live access to TLH reporting fields; universal statement formats; automatic institution acceptance; complete nationwide corporate-history coverage.

Those unknowns belong in the product's boundaries, not hidden behind an integration slide.
