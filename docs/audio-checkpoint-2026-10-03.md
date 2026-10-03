# Audio access checkpoint — 3 October 2026

**Implemented, deployed and verified.** This checkpoint replaces the device-voice design described in `major-checkpoint-2026-10-03.md`. The user's objection is correct: asking a nontechnical user to install a speech voice does not solve access.

## Product requirements and implementation

| Requirement | Implementation / acceptance evidence |
|---|---|
| Listen works without an installed language voice | Static, same-origin MP3s; no `speechSynthesis` or `SpeechSynthesisUtterance` dependency. Controller tests run with both APIs absent. Real media playback is checked separately. |
| All six interface languages | Public-copy recordings in English, Hindi, Bengali, Marathi, Tamil and Urdu. The release gate requires every exported key in every language, matching current text and audio checksums. |
| Simple use | One Listen/Pause/Continue control; Stop; previous/repeat/next part; matched visible text. Help and confirmation dialogs share the same player. No installation guide or technical voice menu. |
| Recover from weak connectivity | Loading indication, a bounded wait, retry at the same instruction and explicit continuation if a browser blocks playback. Nothing automatically starts on page entry. |
| Low-end phones | Native media decoding only. No model, inference framework, server call or generated text is needed at playback time. |
| Low bandwidth | Mono 24 kHz MP3, 32 kbps; one requested instruction at a time. No automatic language-pack download. Text/app shell compressed separately. |
| Offline reuse | Public shell cached atomically; previously requested audio cached up to 12 MiB and 256 files. Byte-range responses supported. First-time listening needs internet; private browsing, restrictions or eviction can remove cached content. |
| Private entries remain private | Playback accepts exact allowlisted public dictionary content only. URLs contain language, content revision and public key. No account names, identifiers, notes, passwords or uploaded files go to a voice service. Hosting still sees ordinary IP/request logs. |
| Track B safety preserved | A receipt still leaves the task awaiting confirmation. Registration evidence requires record type, date and explicit confirmation; family handoff remains a separate review. No account discovery, institutional submission, recommendations or inheritance determination is claimed. |
| Feasible maintenance | Pinned, licensed build-time models; documented reproduction; script-to-recording checksums; pronunciation mappings; versioned media URLs; synthetic/translation review status visible. |

## What changed after the journey recheck

The first pass exposed validation messages and one confirmation-scope explanation that were visible but omitted from listening. These are now marked as public audio guidance. Public save/continue actions and summary privacy notices are also included; private sheet contents remain excluded. Keyboard bank search and the submitted → registered → family-reviewed distinction were rechecked with synthetic data.

## Meaning of the audio quality evidence

The generator checks supported letters, explicit mixed-language pronunciation spellings, finite/non-silent waveforms, size and duration. Numbers and Latin bank/menu labels are expanded before synthesis rather than silently dropped by a monolingual tokenizer. Playback evidence proves files load and controls function. It **does not prove comprehension, naturalness or accent suitability**. These recordings and translated text still need fluent-speaker review. The English MMS voice is not guaranteed to have an Indian accent. The app discloses synthetic voice/review status in listening settings.

## Judging rubric interpretation

- **Resilience and safety (30%)**: demonstrate the error prevented—treating a receipt as final nomination registration—and the separate family-record check. Current validation and journey evidence support this bounded claim; no real institution verification or recovered assets are claimed.
- **Bharat-first usability (25%)**: the device-voice barrier is removed; small on-demand recordings and reuse reduce data costs; visible text, keyboard operation, large text and simple controls give alternatives. Low-end physical-device and target-user task-completion evidence remain necessary before broad usability claims.
- **Guardrails and trust (15%)**: non-commercial recordings, public-source guidance, clear source scope, no tips/referrals, bounded retention and explicit hosting-log disclosure. AI never improvises financial procedure at runtime.
- **Technical execution (15%)**: language-specific synthesis is used to ship a concrete access capability. The heavy work happens once during publishing; the phone receives ordinary audio. Tests cover missing speech APIs, cancellation races, media failures, stale assets and offline byte ranges.
- **Feasibility and scale (15%)**: static hosting reuses recordings across all users with no per-listening model inference. Text changes invalidate recordings; fluent-reviewed narration can replace them under the same player/catalog contract. Institution guidance still needs scheduled editorial review.

## Remaining validation before describing this as ready for real households

Recruit fluent speakers across the six languages, including seniors and homemakers. Test whether they can identify a bank, distinguish unknown nomination from missing nomination, understand the receipt/registration difference, and recover after a weak connection without help. Record task success, incorrect completions, prompts needed and the meaning of key instructions—not just subjective accent preference. Include a low-memory Android device and an actual screen-reader session. Preserve the narrow non-commercial scope and current-source maintenance process.

## Checkpoint evidence

- **52 automated checks passed**, including every one of the 2,142 recording files against its current public text and audio checksum, all six dictionaries, absent device speech APIs, pause/resume cancellation, browser playback refusal, connection timeout/retry, encryption and nomination-state guards. [Full results](audits/2026-10-03-audio/tests.txt).
- **54 representative files decoded successfully** with a media decoder. This is file validity evidence, not a pronunciation evaluation. [Decode results](audits/2026-10-03-audio/decoded-samples.json).
- **All six languages reached playing state in the browser** with the matching transcript. English account setup, SBI keyboard search, preparation, submission, required-evidence validation, confirmation, family record, summary and save guidance were exercised with synthetic data. Opened private notes stayed outside the audio-marked content. Dialog audio was also exercised.
- **320 px / 200% text:** all six home players and the English settings player stayed within the viewport. [Browser observations](audits/2026-10-03-audio/browser-observations.json).
- **Actual unavailable-origin check:** stopped only the owned local preview server, reloaded from the public-shell cache and played cached Urdu instructions. An uncached Urdu setup instruction showed Retry; after restarting the server, Retry kept its place and the complete queue finished. [Offline](audits/2026-10-03-audio/offline-browser.json), [recovery](audits/2026-10-03-audio/retry-browser.json).
- **Fresh Lighthouse mobile navigation:** performance 99, accessibility 100, best practices 100, SEO 100; FCP 1.4 s, LCP 1.7 s, TBT 20 ms, CLS 0. About 106 KiB transferred and zero audio requests before Listen. First attempt had a trace-capture error; one retry produced the reported result. These are localhost/simulated-navigation scores, not a conformance certificate or physical-device benchmark. [Report](audits/2026-10-03-audio/lighthouse-home.html), [scope and source hash](audits/2026-10-03-audio/audit-state.json).
- **Audio payload:** 357 clips per language, median 9.6–11.8 KB; no clip above 73 KB. All six languages total about 37.6 MB on the server; no user downloads that bundle on arrival. [Per-language measurements](audits/2026-10-03-audio/audio-metrics.json).

Published to the existing [Virasat site](https://sangyan-xi.vercel.app), deployment `dpl_A5J4pKKTZzirgPLPZoTTpPZWSDDf`. The release contains only authored public assets and recordings; model weights, generation scripts, private data, research and test reports are excluded.

Live verification passed for **all 2,158 public files**, all seven entry routes and all six media byte-range checks. Every deployed file matched the local release hash; media headers allow same-origin playback and immutable caching. Research, model reports, scripts, tests and project configuration returned 404. [Full live results](audits/2026-10-03-audio/live-verification.json). Published Hindi playback completed without a console error; replay/pause was then captured in the [live screenshot](audits/2026-10-03-audio/live-hindi.jpg).
