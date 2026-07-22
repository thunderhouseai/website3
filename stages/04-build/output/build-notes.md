# Build notes — site-production stage 04 v2 (Patch reference)

## Revision — scroll choreography (round 2)

The reference's defining mechanic — scroll-linked choreography — was missing
from the first v2 build (it had only reveal-once fades). Motion-spec's global
rule was corrected first (scroll-JACKING banned: overriding native scroll
speed/direction/wheel; scroll-LINKED choreography required: sticky holds +
scroll-progress animation with native scroll intact), stage 03 gained a
per-section choreography contract, and this stage rebuilt the page's
structural scroll behavior.

**Architecture — progressive enhancement over a readable static base.**
Every choreographed act (Hero, PainMirror, PivotBeat, ModulesSection,
HowItWorks) renders a fully-readable, normal-flow static version on the
server. `useChoreographyActive()` (mounted && !reduced-motion, via
`useSyncExternalStore` so hydration matches the server's static render) is
the single gate; only when true does an act switch to its sticky,
scroll-progress-driven form. Verified: SSR HTML on all four routes contains
the STATIC branch markup (`.mirror`/`.block`/`.how`/`.pivot`, never the
`.track` sticky classes) with complete content in both languages — so the
site is fully readable with JavaScript disabled and under reduced motion,
and there is no hydration mismatch (server and hydration both render
static; the swap to choreography is a post-commit update). The swap is
visually seamless because every choreographed act sits below the fold —
it flips before the visitor scrolls it into view. The hero is the one
above-the-fold act; it recedes from opacity 1, so progress 0 already
equals its static state (no jump).

**Per-section behavior built to the stage 03 contracts:**
- ModulesSection — each module is a sticky track (`--scroll-module-hold`);
  as you scroll it holds while its text advances (number→name→keywords→
  paragraph by scroll progress) and the visual slot holds steady, then it
  releases and the next module's opaque sticky covers it: the 01→05 guided
  stack/hand-off walk.
- PainMirror / HowItWorks — one sticky track (`--scroll-sequence-hold`);
  the beats/steps reveal across scroll-progress sub-ranges, so arriving
  mid-section shows the sequence mid-story.
- PivotBeat — sticky track (`--scroll-pivot-hold`); the line builds to
  full emphasis, holds, then releases back into flow. Native scroll never
  trapped (supersedes the earlier no-pinning reading of ruling 2).
- Hero — content recedes (opacity/lift/scale) as it scrolls away.
- Determinism: all presentation is a pure function of scroll position
  (framer-motion `useScroll` progress + `useTransform`, clamped), so any
  scroll speed, wheel/trackpad, or keyboard scroll (space/arrows) lands the
  same states. Mobile shortens the holds via `--scroll-mobile-scale` (spec:
  simplifies, does not disappear). Reduced motion → the static branch.

**New tokens** (tokens.ts `scroll` group, mirrored to design-tokens.md):
`moduleHoldVh` 175, `sequenceHoldVh` 230, `pivotHoldVh` 150,
`mobileHoldScale` 0.62 — the scroll DISTANCE (viewport-heights) each act
holds. Tunable if any act's pacing feels off; grep audit confirms no bare
vh literals in components outside the token-driven CSS vars.

**Needs human review specifically** (structural checks can't see it): the
choreography feel at multiple scroll speeds and with keyboard scrolling
(space/arrows/Page Down), that the module hand-off reads as a guided walk
and not a jump, and that ES routes — identical choreography by construction,
same components with a lang prop — hold the longer Spanish strings inside
the sticky viewports without overflow.

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
