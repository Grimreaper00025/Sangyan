# Sangyan — Demat history, inheritance and investor-rights research

**Research cut-off: 1 October 2026. Version 1.0.**

**Direction:** a Track B evidence system connecting securities history, transmission and inheritance claims. Reconstruct acquisitions and corporate actions, identify the applicable claim route, detect documentary gaps, and preserve the history after assets reach the claimant.

**Authoritative brief:** the supplied [SANGYAN problem statement](SANGYAN-Problem-Statement.pdf). It supersedes the website for this dossier. Read [Track B alignment](13-track-b-and-system-directions.md) and [inheritance research](12-inheritance-and-transmission.md) first for the expanded direction requested during this research.

This folder contains desk research, source assessments, reproducible numerical illustrations, and a validation agenda. It is not a working product or a claim that investors have already recovered money through it.

## What the research establishes

The narrow problem is real: securities can arrive in a new account while usable acquisition information remains with the old broker or the investor. Broker documentation explicitly requires manual inputs in some transfer workflows. Public accounts describe families unable to supply those inputs after moving long-held shares. See [the cases](04-documented-cases.md) and [claim register](11-evidence-register.md).

**The competitive objection is substantial.** MProfit already covers imports, corporate actions, transfers, and reconciliation. Building another portfolio ledger would have weak differentiation. The remaining hypothesis is an evidence-reconstruction workflow for incomplete or contradictory records, with traceable conclusions and explicit unresolved fields. That hypothesis still needs a hands-on competitor comparison and real document packs.

**National financial harm is not established.** There are large relevant markets and quantified adjacent operational failures, but no defensible estimate here of how many investors have incorrect acquisition histories or how many rupees they lose. The impact chapter keeps population statistics, documented operational counts, and synthetic investor calculations separate.

## Reading guide

| File | What it answers |
|---|---|
| [01 — Problem and boundaries](01-problem-and-boundaries.md) | Exactly whose problem this is; what is and is not broken |
| [02 — Market plumbing](02-market-plumbing.md) | Where history fragments; ownership, cost, quantity and time are different records |
| [03 — Rules and effective dates](03-rules-and-effective-dates.md) | FIFO, corporate actions, legal versioning, current physical-share processes |
| [04 — Documented cases](04-documented-cases.md) | Ordinary investor anecdotes, issuer correction, court case, public commentary |
| [05 — Quantitative impact](05-quantitative-impact.md) | Verified scale, carefully bounded ₹ illustrations, impact measurement |
| [06 — Existing solutions](06-existing-solutions.md) | Competitors, substitutes, disconfirming evidence and the surviving gap |
| [07 — Data access](07-data-access-and-feasibility.md) | What can actually be obtained independently; unavailable data and permission constraints |
| [08 — Technical feasibility](08-technical-research.md) | Reconstruction model, ambiguity, invariants, evaluation and failure modes |
| [09 — Physical-share extension](09-physical-share-extension.md) | How it fits; what software can prepare and what institutions must decide |
| [10 — Decision and validation](10-decision-and-validation.md) | Strongest wedge, weak points, interview questions, stop/go criteria and Sangyan fit |
| [11 — Evidence register](11-evidence-register.md) | Auditable claims, strength, counterevidence and remaining gaps |
| [12 — Inheritance and transmission](12-inheritance-and-transmission.md) | Current rules, sequential deaths, nominee/heir distinction, claim-readiness research |
| [13 — Track B and system directions](13-track-b-and-system-directions.md) | How the components form one system; strongest complete user journey |
| [Sources](sources.md) | Annotated source catalogue with URLs and reading locators |
| [Machine-readable sources](sources.json) | Same catalogue for continued research |
| [Impact examples](impact-examples.json) | Inputs, outputs and assumptions for the numerical illustrations |
| [Reproduction script](reproduce-impact.py) | Standard-library Python calculations; run `python reproduce-impact.py --check` |
| [Research method and exclusions](RESEARCH-LOG.md) | Search scope, access limitations, corrections and rejected claims |

## The strongest formulation

> Your shares reached the new account. Can you still prove their financial history?

The proposed research target turns claimant-supplied records and authoritative documents into an evidence-linked securities history and claim-readiness dossier. It must distinguish what is documented, what is derived, what conflicts, and what cannot be recovered from the available evidence. Successful transmission and correct post-transmission acquisition history are separate outcomes.

The meaningful demonstration would be **a difficult historical case resolved correctly, including an honest refusal on an impossible case**. A tax calculator, company-name lookup, or polished dashboard alone would not establish that this problem has been solved.

## Evidence labels used throughout

- **Verified primary:** official rule, issuer filing, depository material, or provider documentation. Provider documentation establishes the provider's stated workflow, not independent performance.
- **Anecdote:** public investor account; not independently authenticated.
- **Derived:** arithmetic reproducible from stated inputs.
- **Hypothesis:** a proposed explanation, capability or business opportunity needing validation.
- **Open:** evidence was insufficient or access was incomplete.

Sources are linked by IDs such as [S001](sources.md#s001). Dates in a document take precedence over a search engine's crawl or publication label. The dossier uses short source summaries and original analysis; it does not reproduce entire articles, transcripts, or commercial manuals.
