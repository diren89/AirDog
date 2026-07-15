# design-sync notes — AirDog

## Repo shape
- The synced package lives at `design-system/` (subdir of repo root, not repo root itself). All commands (`buildCmd`, `--node-modules`, `--entry`) are relative to repo root but point into `design-system/`.
- No Storybook — `shape: package`. No `.d.ts` docs/examples existed pre-sync; all 10 components were authored fresh in `.design-sync/previews/`.
- Playwright + chromium were not previously installed on this machine; installed during this sync (`npx playwright install chromium`, ~171MB, cached at `~/Library/Caches/ms-playwright/chromium-1228`). A fresh clone/machine will need this again before `package-validate.mjs`'s render check can run.

## Fonts
- Outfit + Material Symbols Rounded are loaded via a Google Fonts CDN `@import` in `design-system/src/tokens.css` — matches how the original prototype (`index.html`/`auth.html`) loads them (`<link>` tag to the same Google Fonts URL). This is intentionally NOT a shipped `@font-face`/woff2 — `[FONT_REMOTE]` is the expected, accepted validate outcome, not a gap to fix.

## Known render warns (triaged, not new)
- `[GRID_OVERFLOW]` on `BottomNav` — fixed via `cfg.overrides.BottomNav: {"cardMode": "column"}` (it's a 390px-wide fixed nav bar, doesn't fit a normal grid cell). A re-sync should NOT re-flag this (column exempts it by construction) — if it does, something regressed.

## Re-sync risks
- `design-system/dist/` is gitignored by the design-system package itself (not committed) — a fresh clone MUST run `npm install && npm run build` inside `design-system/` before the converter's `--entry ./design-system/dist/ds-bundle.js` resolves. `.ds-sync/` staging + its own `npm i esbuild ts-morph @types/react playwright` also needs redoing per the skill's standard re-sync steps.
- All 10 components are hand-composed React (not extracted from any pre-existing docs/examples repo) — if `design-system/src/components/**` changes shape (new props, renamed variants), the authored previews in `.design-sync/previews/*.tsx` need matching updates or they'll fail to compile against the new `.d.ts` (falls to floor card, not a crash).
- Nothing was inlined from upstream code into config (no `dtsPropsFor`, no `provider` — the DS genuinely has neither complex generics nor a context provider), so there's no stale-copy risk there.
