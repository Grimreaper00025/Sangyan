# Sangyan — Demat history, inheritance and investor-rights research

**Research cut-off: 1 October 2026. Version 1.0.**

**Direction:** a Track B evidence system connecting securities history, transmission and inheritance claims. Reconstruct acquisitions and corporate actions, identify the applicable claim route, detect documentary gaps, and preserve the history after assets reach the claimant.

**Authoritative brief:** the supplied [SANGYAN problem statement](references/problem-statement.pdf). It supersedes the website for this dossier. Read [Track B alignment](docs/track-b.md) and [inheritance research](docs/inheritance.md) first for the expanded direction requested during this research.

This folder contains desk research, source assessments, reproducible numerical illustrations, and a validation agenda. It is not a working product or a claim that investors have already recovered money through it.

## What the research establishes

The narrow problem is real: securities can arrive in a new account while usable acquisition information remains with the old broker or the investor. Broker documentation explicitly requires manual inputs in some transfer workflows. Public accounts describe families unable to supply those inputs after moving long-held shares. See [the cases](docs/cases.md) and [claim register](docs/evidence-register.md).

**The competitive objection is substantial.** MProfit already covers imports, corporate actions, transfers, and reconciliation. Building another portfolio ledger would have weak differentiation. The remaining hypothesis is an evidence-reconstruction workflow for incomplete or contradictory records, with traceable conclusions and explicit unresolved fields. That hypothesis still needs a hands-on competitor comparison and real document packs.

**National financial harm is not established.** There are large relevant markets and quantified adjacent operational failures, but no defensible estimate here of how many investors have incorrect acquisition histories or how many rupees they lose. The [impact research](docs/impact.md) keeps population statistics, documented operational counts, and synthetic investor calculations separate.

## Repository layout

```text
README.md    Start here and follow the reading guide below
docs/        Research notes, evidence register and research log
references/  Original problem statement and source catalogues
examples/    Reproducible calculations and their saved results
```

## Reading guide

| File | What it answers |
|---|---|
| [Problem and boundaries](docs/problem.md) | Exactly whose problem this is; what is and is not broken |
| [Market plumbing](docs/market-plumbing.md) | Where history fragments; ownership, cost, quantity and time are different records |
| [Rules and effective dates](docs/rules.md) | FIFO, corporate actions, legal versioning, current physical-share processes |
| [Documented cases](docs/cases.md) | Ordinary investor anecdotes, issuer correction, court case, public commentary |
| [Quantitative impact](docs/impact.md) | Verified scale, carefully bounded ₹ illustrations, impact measurement |
| [Existing solutions](docs/existing-solutions.md) | Competitors, substitutes, disconfirming evidence and the surviving gap |
| [Data access](docs/data-access.md) | What can actually be obtained independently; unavailable data and permission constraints |
| [Technical feasibility](docs/technical-research.md) | Reconstruction model, ambiguity, invariants, evaluation and failure modes |
| [Physical-share extension](docs/physical-shares.md) | How it fits; what software can prepare and what institutions must decide |
| [Decision and validation](docs/validation.md) | Strongest wedge, weak points, interview questions, stop/go criteria and Sangyan fit |
| [Evidence register](docs/evidence-register.md) | Auditable claims, strength, counterevidence and remaining gaps |
| [Inheritance and transmission](docs/inheritance.md) | Current rules, sequential deaths, nominee/heir distinction, claim-readiness research |
| [Track B and system directions](docs/track-b.md) | How the components form one system; strongest complete user journey |
| [Sources](references/sources.md) | Annotated source catalogue with URLs and reading locators |
| [Machine-readable sources](references/sources.json) | Same catalogue for continued research |
| [Impact examples](examples/impact-examples.json) | Inputs, outputs and assumptions for the numerical illustrations |
| [Reproduction script](examples/reproduce-impact.py) | Standard-library Python calculations; run `python3 examples/reproduce-impact.py --check` from the repository root |
| [Research method and exclusions](docs/research-log.md) | Search scope, access limitations, corrections and rejected claims |

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

Sources are linked by IDs such as [S001](references/sources.md#s001). Dates in a document take precedence over a search engine's crawl or publication label. The dossier uses short source summaries and original analysis; it does not reproduce entire articles, transcripts, or commercial manuals.
