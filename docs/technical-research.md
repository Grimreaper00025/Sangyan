# Technical research: what would make the system substantive?

This is a feasibility model and evaluation design. No working reconstruction engine has been built in this research task.

## The core problem is constrained reconciliation

The system observes fragments of a securities history and tries to construct event sequences consistent with them. It should produce one of three results:

1. A uniquely supported reconstruction, with a derivation for every output.
2. Several feasible reconstructions, with the exact evidence needed to distinguish them.
3. Inconsistent or insufficient evidence, with a concrete reason to stop.

An LLM's plausible narrative is not a fourth acceptable outcome.

## Shared data model for history and inheritance

| Object | Minimum useful fields |
|---|---|
| Evidence document | ID, hash, type, issuer, date, authorised source, page coordinates, original file reference |
| Assertion | Subject, predicate, value, source span, extraction confidence, verification status |
| Person / role | Stable case-local ID, supported identifiers, holder/nominee/claimant roles, conflicting identity evidence |
| Security | ISIN when known, issuer identity, class, denomination, validity interval, aliases |
| Account / folio | Institution, account type, holder order, opening/closing observations, masked identifiers |
| Event | Type, predecessor/successor objects, quantities, dates, cost components, consideration, evidence IDs |
| Acquisition lot | Original supported date/cost, account-entry ordering, remaining quantity, provenance and legal treatment status |
| Claim | Route/version, claimant roles, evidence requirements, submissions, deficiencies, acknowledgement states |
| Rule | Conditions, effective interval, source, supersession, reviewer and supported scope |

Use rational quantities and decimal monetary arithmetic. Store null separately from zero. Keep machine extraction confidence separate from legal or factual certainty.

## Difficult engineering components

**Document extraction.** Tables can continue across pages; Indian digit grouping, decimals, scanned stamps and repeated headers create errors. Extract with location references so users can check a disputed field. Preserve a rejected extraction rather than overwriting it silently.

**Entity resolution over time.** Resolve company, security and person separately. A name change is not a merger; a matching name is not a matching person. Candidate generation may use text similarity, but acceptance needs stronger identifiers or review.

**Event sourcing and reversibility.** Keep imported observations immutable. A corrected issuer notice or new contract note should recompute downstream results from a known event version. Maintain both the old and corrected result for audit.

**Cross-document matching.** Match movements using security, quantity, dates, account relationships and references. Time/quantity similarity alone must not equate a gift to a self-transfer or identify a purchase price.

**Corporate-action transformations.** Represent splits, demergers and other supported events as typed transformations. Cost conservation applies where the applicable event is a pure allocation; cash, fractional sale proceeds, taxes and cancellation must be represented explicitly where relevant.

**Claim-document consistency.** Check that names, dates, holder order, security quantities and references agree across the proposed pack. Detect a contradiction without adjudicating who should inherit.

**Versioned procedural rules.** Route the case using a rule valid on the relevant date. Record the assumptions the route depends on. A classifier must support an “expert review required” branch.

## Why a graph helps—and where it does not

A graph naturally represents one old security producing two descendants, several documents supporting one acquisition, or an unchanged folio spanning successive holder events. It also allows every output to expose its supporting path.

A graph does not create missing evidence. If two purchase histories are observationally identical, no choice of database or model can establish which occurred. A simple counterexample should be part of evaluation: same final quantity and average cost, different dates and lots. The correct output is ambiguity.

## Useful invariants

- No event consumes more supported quantity than available, unless explicitly identified as an unresolved opening-balance problem.
- A transfer between confirmed accounts of the same owner must not create wealth or duplicate cost.
- A pure split changes units and per-unit basis consistently without creating aggregate consideration.
- An allocation event's cost fractions reconcile to the supported input, subject to explicitly modelled exceptions.
- Duplicate imports do not duplicate transactions.
- A claim's “all documents received” state requires an institutional acknowledgement or is labelled a simulation/user assertion.
- A revised source invalidates affected derived outputs until recomputation/review.
- Unsupported values never become zero silently.

## Evaluation corpus proposal

Create at least twelve labelled cases, reviewed independently. This is a proposed research target, not a claim that such a dataset currently exists.

| Group | Example | Required result |
|---|---|---|
| Controls | Complete same-broker history; complete cross-broker transfer | Matches an established calculation with little manual work |
| Acquisition gaps | Partial tradebook; missing original date; contradictory cost | Resolves only supported facts; requests discriminating evidence |
| Corporate actions | 1:1 demerger; unequal child ratio; revised notice | Correct quantities, allocations and version selection |
| Inheritance | Uncontested nominee; no nominee with sufficient documents; sequential deaths | Correct supported route or explicit escalation |
| Adversarial | Duplicate file; wrong person's similar name; missing critical evidence | Refusal/flag instead of a confident false result |

## Metrics that test the hard part

Measure exact quantity/cost agreement, field extraction accuracy, unsupported-assertion rate, ambiguity detection, source-link correctness, manual interventions, time to reviewed dossier and route-selection errors. For inheritance, a false positive declaring a pack legally sufficient is more damaging than a transparent request for review.

Report performance separately for clean electronic documents, scans, and unsupported issuer events. Do not average easy cases into a misleading headline accuracy.

## What AI could usefully do

OCR correction suggestions, document classification, candidate entity matching, extraction proposals and plain-language explanations. Deterministic checks should verify arithmetic and structural constraints. Legally consequential conclusions should stay rule-bound and reviewable.

## What a technically honest demo should show

Show the source page, the extracted facts, a mismatch, the corrected event history and the numerical effect. Then remove a critical document and show the system stop making the claim it can no longer support. This demonstrates both computational capability and a meaningful trust boundary.
