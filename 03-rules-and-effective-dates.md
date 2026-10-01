# 03 — Rules, dates and interpretation boundaries

**As of 1 October 2026.** This is a research map for designing and checking software, not a completed legal opinion. Follow the source locators before implementing a rule. The inheritance-specific current matrix is in [Chapter 12](12-inheritance-and-transmission.md).

## Legal versioning is part of the problem

The Income-tax Act, 2025 applies from 1 April 2026, while earlier tax years remain governed by the 1961 Act. The department also explains continuity of non-conflicting old circulars. A return filed after April 2026 is not automatically a new-Act computation. [S019](sources.md#s019)

The 2025 Act as amended by Finance Act 2026 contains these relevant anchors: section 67(7), demat FIFO; section 72, computation; section 73, special acquisition modes; section 90, cost definitions. Section 90(11) provides an FMV fallback where the **previous owner's** cost cannot be ascertained. Its scope must not be expanded into “use market price whenever any purchase record is missing.” [S018](sources.md#s018)

Research examples in this folder use FY 2025–26 where a tax-rate illustration is needed. They do not attempt a universal cross-year tax engine.

## Rule map

| Issue | Established anchor | Implementation consequence / unresolved edge |
|---|---|---|
| Demat FIFO | Circular 768, paragraphs 5(a)–(c) [S017](sources.md#s017) | Separate account identity, account-entry ordering and original acquisition evidence; review complex partial-transfer attribution |
| Receipt under a qualifying demerger | Issuer scheme and tax allocation guidance [S021](sources.md#s021), [S022](sources.md#s022) | Share-entitlement ratio, cost ratio and event dates are different fields |
| Paid rights entitlements | Broker limitation and existing MProfit treatment [S001](sources.md#s001), [S006](sources.md#s006) | Link all acquisition components; independently check tax treatment before filing |
| Inherited / gifted assets | Special-mode cost rules [S018](sources.md#s018) | Preserve predecessor evidence; receipt date is not automatically the relevant original date |
| Pre-2018 equity | Official capital-gains material [S054](sources.md#s054) | Grandfathering eligibility and adjusted security identity need a dedicated reviewed module |
| Nominee → legal heir | September 2025 SEBI circular [S058](sources.md#s058) | Preserve transmission reason and chain of custody; a new reporting code already addresses a known tax-reporting failure |
| Ordinary transmission | July 2026 framework [S057](sources.md#s057) | Use the current route, documentary category and completeness trigger, not old forms found through search |
| Qualifying old physical transfers | January 2026 special window [S023](sources.md#s023) | Separate purchased-but-unregistered securities from transmission on death |
| Investor service requests | January 2026 direct-credit reform [S024](sources.md#s024) | Do not build around the obsolete universal LOC workflow |
| IEPF claims | Official verification kit and current portal developments [S026](sources.md#s026), [S064](sources.md#s064) | Entitlement evidence and company verification remain material; portal functionality is evolving |

## Concrete issuer events for research fixtures

**Reliance / RSIL, later Jio Financial Services.** The issuer's 19 July 2023 communication sets a 1:1 entitlement and allocates historical cost 95.32% to RIL and 4.68% to RSIL, with record date 20 July 2023. The relevant input is the investor's pre-demerger cost, not a universally applicable market price. [S021](sources.md#s021)

**ITC / ITC Hotels.** The revised issuer guidance dated 28 January 2025 sets 86.49% / 13.51% cost allocation and one Hotels share per ten ITC shares. The revision corrects an illustration from ₹50,040 to ₹54,040. It does not establish that any investor lost ₹4,000. [S022](sources.md#s022)

These two examples expose different arithmetic. One is 1:1; the other allocates a percentage of the whole parent cost across fewer child shares. A system that uses the percentage directly as a child per-share price will fail.

## Version and provenance requirements

Every executable rule should carry:

- document issuer, title, URL, publication date and cited paragraph;
- effective-from date, applicability conditions and superseded rule;
- security class, account/holding mode and valuation date where relevant;
- source-document revision, retrieval date and content hash;
- reviewer status, unresolved interpretations and a narrow supported scope.

Store source documents and extracted facts separately. A newly published circular may be effective later; a revised issuer document can correct an earlier computation without changing the economic event date.

## Traps to exclude from a demo

1. **Blank means zero.** Absence of evidence does not establish zero tax cost.
2. **Every credit is a purchase.** Credit can represent transfer, allotment, corporate action or transmission.
3. **Every nominee is the ultimate heir.** Operational receipt and succession entitlement must be separated; see Chapter 12.
4. **Old circular equals current rule.** Search still returns obsolete NSDL thresholds. [S070](sources.md#s070)
5. **Consultation equals law.** March 2026 transmission proposals and January 2026 IEPF proposals must not be treated as operative rules merely because they are official. [S069](sources.md#s069), [S071](sources.md#s071)
6. **Any delay creates a cash entitlement.** No universal automatic compensation formula for these acquisition-history errors was established.
7. **A legal right can be inferred from a name match.** Entity matching assists investigation; it does not settle title.

## Remaining legal checks

Before a production implementation: obtain qualified review of inherited lot attribution, grandfathering through chains of events, state-specific stamp-paper requirements, personal-law succession, minors, contested wills, non-residents, and recognition of electronic documents. Keep them outside the automated decision scope until reviewed.
