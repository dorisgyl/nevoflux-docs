// Static export has no server/middleware, so the root `/` route is not emitted.
// This writes an `out/index.html` that redirects visitors to the default locale,
// so docs.nevoflux.app/ lands on /en/. Hosts can still override via their own rules.
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const DEFAULT_LOCALE = 'en';
const OUT_DIR = 'out';
const target = `/${DEFAULT_LOCALE}/`;

const html = `<!doctype html>
<html lang="${DEFAULT_LOCALE}">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0; url=${target}" />
    <link rel="canonical" href="${target}" />
    <script>location.replace(${JSON.stringify(target)} + location.search + location.hash);</script>
    <title>NevoFlux Docs</title>
  </head>
  <body>
    Redirecting to <a href="${target}">${target}</a>…
  </body>
</html>
`;

await writeFile(join(OUT_DIR, 'index.html'), html, 'utf8');
console.log(`[static-root-redirect] wrote ${OUT_DIR}/index.html → ${target}`);
