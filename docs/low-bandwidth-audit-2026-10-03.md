# Virasat: low-bandwidth and low-end-device audit

Date: 3 October 2026. Scope: the chosen Track B nominee and family account journey. Baseline: `af4bd35`, the bundled-audio checkpoint. This audit prioritises whether a person can open the guide, find their bank, keep a draft, listen and recover from lost connectivity.

**Verdict:** the first download and first-use waiting time had substantial avoidable costs. These have been reduced. The release has stronger lab and offline evidence, but it is not yet validated on a physical 1 GB or 2 GB Android phone, with a human screen-reader user, or by fluent reviewers of every language.

## What the audit found and changed

| Finding | Effect on the intended user | Change |
|---|---|---|
| Every visit loaded six complete translation tables, including overridden authoring copy. | A Hindi user paid for five other languages before starting. | Load one effective, content-addressed JSON dictionary. Each language is 8.8–11.1 KB gzipped. Failed changes leave the current language and draft intact. |
| The offline installer fetched most page files a second time because all public files were `no-store`. | First-visit data was substantially higher than the navigation-only score reported. | Public code now revalidates with ETags; language packs and recordings use immutable URLs. Remove duplicate root precaching and cache only chosen languages. Private account values are never part of either cache. |
| Localised entry links started with an empty main region and several sequential dependencies. | The visitor saw no useful explanation while scripts downloaded. | Generate six small entry pages with actual translated introductory text, a loading message and an early request for the chosen dictionary. The language chooser also exists in the root HTML before scripts run. |
| Cold audio range requests were read into a complete buffer before returning to the player. | Weak connections could delay the first audible word until the entire clip downloaded. | Preserve the network stream and range headers. Cache a complete clip in the background; never mistake a small range probe for a complete recording. |
| Every newly cached clip reread all existing cached response sizes. | Increasing storage work during an audio session. | Reuse known size metadata, reconcile the cache and evict within the same byte/entry limits. Storage failures fall back to the network. |
| Initialisation focused the newly rendered main region, forcing an immediate layout. | A measurable startup pause under the severe CPU throttle. | Keep intentional focus for user navigation and language choices; omit the unnecessary focus on initial navigation. |
| Offline shell versioning depended on a handwritten revision. | A later edit could leave users with an incompatible cached release. | Generate the worker revision from the public shell and worker code. Repeated generation is deterministic. |

## Measured data costs

Measurements use exact response-body accounting on a local gzip server, including background offline installation. They exclude HTTP headers, TLS handshakes, DNS and mobile-provider overhead. KB means 1,000 bytes. This is separate from Lighthouse's navigation transfer accounting.

- First English visit plus offline preparation: **207,852 bytes before → 53,321 bytes after** (approximately 208 KB → 53 KB), about **74% less data**.
- A repeat visit after offline installation transferred **zero response-body bytes** in the observed run. A small conditional worker update request still occurred; this is not a claim of zero network activity forever.
- No MP3 requests occurred before pressing Listen, before or after.
- Navigation-only Hindi transfer, including Lighthouse's HTTP accounting: approximately **108 KB before → 57 KB after**.
- The selected language is the only language pack downloaded. Choosing another language later adds roughly **9–11 KB gzipped**.

The exact logs are [cold traffic](audits/2026-10-03-lowend/cold-traffic.json), [repeat traffic](audits/2026-10-03-lowend/warm-traffic.json), and [per-language budgets](audits/2026-10-03-lowend/data-budgets.json).

## Performance measurements

Final numbers and run ranges are recorded in [performance summary](audits/2026-10-03-lowend/performance-summary.json). The baseline and final release are tested with the same Lighthouse 13.5.0 mobile viewport, gzip server and Chrome installation. Real-time throttling uses **160 kbps download, 64 kbps upload, 800 ms request latency and 8× CPU slowdown**. Each final/baseline comparison uses three fresh navigation runs. This is desktop browser emulation, not a claim to emulate a specific phone's RAM, GPU, thermal behaviour or operating system.

| Severe-profile metric | Before: median (range) | After: median (range) |
|---|---:|---:|
| First useful content / largest visible content | 8.68 s (8.15–10.34 s) | 3.87 s (3.64–4.31 s) |
| Controls ready | Not instrumented in the old release | 5.38 s (5.22–5.99 s) |
| Navigation transfer | 107,715 bytes | 56,265 bytes |
| Total blocking time after first paint | 0 ms (0–32 ms) | 346 ms (109–900 ms) |
| Layout shift | 0 | 0 |
| Lighthouse performance score | 62 (61–63) | 70 (54–81) |

All three final runs also scored 100 for the automated accessibility, best-practices and SEO categories. These are automated navigation checks, not accessibility certification. Total blocking time was worse and variable in the final sample, including a 900 ms outlier. Painting earlier changes its measurement window, but this does not explain away the result. Its cause is not established; interaction testing on physical phones remains a release concern. We do not imply every performance metric improved.

One additional **64 kbps / 1,500 ms latency / 8× CPU** run showed content at **8.81 s**, controls ready at **11.52 s**, TBT **210 ms**, CLS **0**, and performance **53**. Extremely weak first-use connections remain a limitation. Cached revisits are a substantially better experience. Audio quality or continuous audio playback under that throttle was not measured by this navigation test.

The final medians above include all three `verified-final` runs after the reading-panel CSS repair, including the slow outlier. The earlier `release-1/2/3` sample had a median score of 83 and is retained separately; it is not presented as the final result. The 64 kbps run preceded only that small CSS repair.

The `virasat-ready` mark records completion of the initial dictionary load and UI setup. It is not field INP or a measurement of every form interaction. The introductory text can appear before the buttons are ready; the report distinguishes the two rather than treating early visible text as a complete interactive application.

Earlier simulated-network runs are retained alongside the real-time runs. They predict materially different absolute times and must not be blended into one average. One simulated final trace failed with `NO_NAVSTART`; its null performance result is preserved and excluded. The intermediate release's long startup task motivated the focus fix; those intermediate results are not final-release medians.

A high default Lighthouse score is insufficient evidence for Bharat-first readiness. Google's [Lighthouse scoring explanation](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring) also describes score variability. [Core Web Vitals](https://web.dev/articles/vitals) evaluates LCP, INP and CLS at the 75th percentile of real visits; our navigation tests do not establish field Core Web Vitals compliance.

## Audio, memory and offline boundaries

| Resource | Actual constraint / observation |
|---|---|
| Audio on initial page load | 0 bytes; listening is explicit. |
| Recording bitrate | 32 kbps mono; approximately 240 KB per minute of encoded recording, excluding transport overhead. Slower playback extends wall-clock duration without changing the file's bytes. |
| Typical individual recording | Median 9.6–11.8 KB across the six languages. |
| Largest individual recording | 72,929 bytes. At 64 kbps, transferring that whole file alone has a theoretical lower bound of about 9.1 seconds, before latency. Streaming avoids waiting for its entire body before handing data to the player. |
| First five collapsed-home instruction clips | 81–98 KB, depending on language; not downloaded as one bundle. |
| Offline audio | At most 12 MiB or 256 recent complete clips. This is a storage cap, not a RAM measurement. |
| Offline text | Public shell plus languages already loaded and cached. A language not previously downloaded still needs connectivity. |
| Models on the phone | None. Synthesis happens before publishing; no model weights or synthesis service are sent to the visitor. |
| Private records | Maximum 50 accounts; explicit encrypted saves. No weakening of PBKDF2/AES to chase a performance score. |
| Hardware RAM and battery | Not measured. Browser memory eviction, background-tab termination and battery/thermal performance remain physical-device tests. |

Offline availability depends on successful first download, permitted storage and the browser retaining its cache. Official institution websites remain external and require connectivity. A new uncached audio clip still needs a connection. At very poor sustained bandwidth, reading the complete text remains available; the app does not demand installing voices or changing device settings.

The six synthetic voices remain draft recordings awaiting fluent-language and accent review. Cache/streaming tests do not establish pronunciation quality.

## Functional checks

**63 automated tests passed.** The automated checks cover language isolation, failed-download retry, complete current copy/audio matching, valid media ranges, streaming before body completion, rejection of incomplete media probes, cache byte/count caps, storage denial, and the existing encrypted-save and account workflow. See [test output](audits/2026-10-03-lowend/tests.txt).

A 320-pixel / 200% Tamil check found horizontal overflow in the line-spacing switch and crowded text-size controls. The fix makes the long label wrap and gives the percentage its own flexible column. Rechecked dialog width and scroll width both equal 286 px; the page stays at 320 px.

Browser checks include Hindi-to-English switching with `State Bank of India` preserved at form step 2; an uncached Tamil language failing with a Tamil retry message while offline; successful Tamil retry after reconnection; reopening Hindi with the preview server stopped; and replaying previously loaded Hindi audio while that server remained stopped. These use synthetic local drafts. Evidence is in [browser observations](audits/2026-10-03-lowend/browser-observations.json), [offline language retry](audits/2026-10-03-lowend/offline-language-retry.jpg), and [offline listening](audits/2026-10-03-lowend/offline-audio.jpg).

## What must still happen before claiming real-device readiness

1. Run the whole account → nomination check → family handoff → encrypted save/reopen journey on physical 1 GB and 2 GB Android devices. Record browser version, available memory, app readiness, typing delay, save/unlock time, audio stalls and any reload/eviction. Include 50-account lists and a keyboard open on a small screen.
2. Observe seniors/homemakers completing the journey on unstable connectivity. Measure independent completion, wrong turns, help required, unsaved-work loss and ability to retry. There are no measured user completion rates yet.
3. Review all regional recordings with fluent speakers, including acronyms and institution names. The code now avoids device-voice dependence, but accent quality cannot be certified by automated tests.
4. Test TalkBack, actual 200% text, interrupted saves, storage-full behaviour and returning after Android kills the tab. Preserving an in-memory draft across language changes does not preserve it after the OS terminates the browser; explicit encrypted saving remains necessary.

The release budget is a small first text journey, one chosen language, optional audio, no browser model, no analytics or external fonts, and bounded local storage. The final physical-device and user-comprehension gates remain necessary even if the lab score improves.

## Publication and update behaviour

The final release, including the reading-panel repair, is deployed at https://sangyan-xi.vercel.app as `dpl_5yA11ugSENbJSdLzw5xjSjM4dZvs` (immutable release: https://sangyan-aa4n5f2b6-yashashwi-singhanias-projects.vercel.app). A transient Vercel authentication failure cleared after the existing-account check; the final publish succeeded. Final verification passed for all 2,172 public files, seven entry routes and six audio range requests. The live Tamil reading panel also passed the 320 px / 200% check ([live evidence](audits/2026-10-03-lowend/live-reflow.json)). Verification checks every public file against its local hash, the root plus six locale routes, six audio byte ranges, immutable language/audio headers, and exclusion of source/test/research paths. See [live verification](audits/2026-10-03-lowend/live-verification.json). Existing open tabs can keep the previous offline worker active until they are closed; the release does not forcibly reload unsaved work. Save any draft before closing old Virasat tabs and reopening.
