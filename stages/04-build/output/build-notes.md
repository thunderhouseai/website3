# Build notes — site-production stage 04 v2 (Patch reference)

## Env vars (documented per build-conventions; nothing baked in)

| Name | Used by | Required? |
|---|---|---|
| `CALENDLY_URL` | contact pages' embed + failure fallback link | No — the embed region is absent entirely (not an empty box) if unset; WhatsApp secondary still offered |
| `WHATSAPP_URL` | floating button (all routes) + contact secondary line | No — both absent, not broken, if unset |
| `SITE_URL` | metadataBase for canonical/hreflang URLs | No — defaults to `https://thunderhouseai.com` |

All four routes are `force-dynamic`: every env var is read per-request, so
changing them in Coolify needs no rebuild (v1 lesson, applied from the
start this time).

## Architecture decisions (HOW — spec allowed freedom)

- **Two root layouts via route groups** — `(en)` with `<html lang="en">`
  holding `/` and `/contact`; `(es)` with `<html lang="es">` holding `/es`
  and `/es/contacto`. This is the only way to get a correct
  server-rendered lang attribute per language without forcing dynamic
  rendering through request inspection. Trade-off: switching languages
  crosses root layouts, which Next performs as a document navigation. The
  spec's "no full-reload feel" is served by fast server renders plus
  LanguageSwitcher's scroll restore — it records the scroll position at
  switch time and the mirrored page restores it on load, so the visitor's
  place is genuinely preserved. Worth judging in human review.
- **Language persistence** per checkpoint ruling 1(b): explicit switches
  persist in the browser; direct links ALWAYS load the URL's language (no
  redirects — matters for language-targeted outreach/ads); return
  visitors whose saved preference differs from the URL get a quiet
  dismissible offer in their saved language; dismissal persists
  permanently. Implemented with useSyncExternalStore over localStorage
  (server snapshot renders no offer, so SSR HTML is stable).
- **EN/ES parity is compile-checked**: content/copy.ts types both
  languages as the same `SiteContent` shape — a missing ES string is a
  build error, not an audit finding.
- **RevealGroup** implements Behavior 1 once (framer-motion, reveal-once
  on viewport entry, `strength="pivot"` variant at durationPivot for the
  pivot beat); reduced motion renders content in place with no travel.
  All motion values flow from tokens via the CSS-vars bridge or the
  toFramerEasing mapper.
- **Design values through CSS custom properties** generated from
  lib/tokens.ts (lib/css-vars.ts), injected once per root layout. Grep
  audit: no hex/px-font-size/ms in app/components CSS outside
  tokens/css-vars. Documented exceptions, none of them brand values:
  0.01ms reduced-motion technique (globals.css); 44px quality-floor tap
  targets (spec-conventions); the WhatsApp button's 52px circle; the
  Calendly widget's 320px/700px region (the provider's documented embed
  minimums); LOAD_TIMEOUT_MS 8000 in CalendlyEmbed (a network timeout,
  not a motion duration).
- **Calendly embed** loads the provider's script client-side with an
  8-second timeout; failure/blocked renders the copy.md fallback line +
  direct link (never a blank region). This is the one external script on
  the site — inherent to the "embedded scheduler" ruling.
- **Video slot** is a fixed 16:9 aspect box with a pure-CSS designed
  poster (surface base, contained glow, bolt-angled gradient slash — all
  palette tokens). No play affordance, since nothing plays yet; real
  video drops into the same box later with no layout shift.
- **No images anywhere** — every visual (poster, module visual slots,
  glows) is token-driven CSS, so there are no undimensioned images and
  nothing to optimize yet. Real photography/video will come through
  next/image with explicit dimensions when it exists.

## Flags for the founder

1. **Module visual slots are palette placeholders** (bolt-slash mark on a
   primary-navy panel). Same status as the hero poster: designed, not
   final. Real per-module visuals are a future asset drop.
2. **The "punchy transition beats" ceiling**: within the no-scroll-jack
   rule, the pivot beat is a full-viewport isolated act with the site's
   longest, largest reveal. If it underwhelms in browser review, we tune
   isolation/scale per your ruling — never pinning.
3. **ES overflow**: structurally safeguarded (all display type is
   clamp()-based, text containers measured in ch, fluid grids, no fixed
   text widths), and the longest ES strings render in the served HTML.
   The audit's visual spot-check of ES pages still needs your browser
   pass — structural checks can't see wrapping aesthetics.

## Audit results

- [x] `npm run build` zero errors; all four routes present (ƒ dynamic by
      design)
- [x] `npx eslint .` clean (one real finding — setState-in-effect in the
      switcher — fixed properly with useSyncExternalStore, not suppressed)
- [x] Grep check clean (exceptions documented above)
- [x] 17/17 spec'd components exist; behavior contracts implemented
- [x] Copy spot-checked verbatim in the served HTML, both languages:
      philosophy line exactly once per language page (protected
      renderings intact), hero headlines, module names, pain-mirror
      beats, final CTA, contact copy
- [x] `<html lang>` correct per tree; hreflang alternates (en/es/
      x-default) emitted on every route; language choice + offer
      dismissal persisted
- [x] Reduced-motion and mobile variants implemented per spec
- [x] Unconfigured-env edges verified live: no WhatsApp button, no
      secondary line, no embed region — absent, not broken
- [x] Fonts self-hosted via next/font; no images without dimensions
      (no images at all)
- [x] ES pages: longest strings verified present; structural overflow
      safeguards in place (visual spot-check reserved for human review)

## Human review

```
cd stages/04-build/output/site
npm install
npm run dev
```

Check especially: the pivot beat's weight, ES pages at mobile widths
(overflow spot-check), the language offer flow (switch on one visit,
revisit the other language's URL), and the scroll-restore feel when
switching languages mid-page.
