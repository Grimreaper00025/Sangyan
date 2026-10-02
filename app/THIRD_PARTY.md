# Third-party code

PDF.js / pdfjs-dist **6.3.289**, Apache License 2.0. Obtained from the official npm distribution; archive and asset digests are recorded in `vendor-lock.json`. Distribution: `archive/vendor/pdf.js`, `archive/vendor/pdf.worker.js`; license: `archive/vendor/LICENSE.pdfjs`.

The parser is archived research code and is not loaded or shipped in Virasat’s public static output. Its earlier prototype used a same-origin worker. No CDN or document-processing API is used. Version pinning is not a vulnerability audit: review upstream security releases before accepting real investor records.

Official project: https://github.com/mozilla/pdf.js

Security review on 2 October 2026 found upstream GHSA-hq66-cqwq-w95j / CVE-2026-16633 (patched in 6.2.108). The older bundled 5.6.205 was replaced before publication. Scripting is disabled, eval is disabled, and the viewer/sandbox package is not shipped. Advisory: https://github.com/mozilla/pdf.js/security/advisories/GHSA-hq66-cqwq-w95j
