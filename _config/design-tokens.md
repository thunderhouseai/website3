# Design tokens — canonical values
<!-- Populated by `setup`. Canonical until stage 03 emits shared/constants/tokens.ts;
     after that, tokens.ts is canonical for code and this file mirrors it. -->

## Color

Verified — sampled from the logo source file (`shared/assets/logo/thunderhouse-logo.png`).

| Token | Value | Use |
|---|---|---|
| bg-primary | #0A1628 | page background — dark primary (brand navy deepened ~2 stops) |
| bg-surface | #112549 | cards, panels, pillars panel (logo navy exactly) |
| bg-inverse | #FDFAF9 | light sections (matches logo bg so logo sits seamlessly) |
| text-primary | #F5F2ED | warm off-white on dark |
| text-muted | #8FA0BD | desaturated navy tint |
| text-on-light | #112549 | navy on light sections |
| accent | #FEA204 | bolt amber core — links, active nav, highlights |
| accent-hover | #F97405 | bolt orange tip — hover state |
| accent-gradient | linear #F9D406 → #F97405 | reserve for ONE hero element only (e.g. active pillar indicator, CTA underline) — everywhere else use flat accent |

## Typography

| Token | Value |
|---|---|
| font-display | Montserrat |
| font-body | Poppins |
| scale | 1.333 modular, base 16px (bumped from 1.25 in composition revision) |
| headline-weight | 700 (Bold, default for Montserrat display) |

## Display type (viewport-relative)

| Token | Value | Use |
|---|---|---|
| display-hero | clamp(2.75rem, 6vw + 1.5rem, 8rem) | hero headline — dominant element per view |
| display-module-title | clamp(2.5rem, 5.5vw + 1.5rem, 7rem) | module titles — hero-adjacent scale (renamed from display-pillar-title, stage 03 v2 ruling) |
| display-statement | clamp(1.75rem, 3vw + 1rem, 4.25rem) | full-viewport statements (pivot line, CTA headings) — between body and hero |

Sizing rule (stage 03 v2 ruling): Spanish is the sizing reference —
containers and type must fit the longer ES rendering; no per-language
size hacks.

## Placeholder background treatment

Until real photography exists, every full-viewport section/pillar background
is: bg-primary base + ONE low-opacity amber radial glow anchored to an edge
or corner. Pillars differ by glow position/size only, never hue. Follows the
gradient rule in `art-direction.md`: never blend amber into navy across a
full field (produces olive) — glows are contained.

| Token | Value | Use |
|---|---|---|
| glow-color | #FEA204 (accent) | the one glow per view |
| glow-opacity | 0.15 | keeps the glow a glow, not a field |

## Motion (mirrored from tokens.ts — complete inventory, stage 03 v2)

| Token | Value |
|---|---|
| duration-fast | 150ms — micro-interactions, CTA emphasis |
| duration-reveal | 600ms — scroll-triggered reveals |
| duration-pivot | 900ms — the pivot beat's single strongest moment |
| easing-standard | ease-out — reveals, entrances |
| easing-micro | ease-in-out — hovers, micro-interactions |

Retired with the v1 LOUD behaviors (tag v1-loud-attempt):
duration-page, duration-page-reduced, duration-background-drift.

## Scroll choreography (mirrored from tokens.ts, v2 round-2)

Scroll DISTANCE each choreographed act holds, in viewport heights — how
much page a sticky act occupies while its content presents. Native scroll
is never overridden; these only size the sticky track.

| Token | Value |
|---|---|
| module-hold | 175vh — each numbered module's sticky walkthrough |
| sequence-hold | 230vh — pain-mirror / how-it-works multi-beat sequences |
| pivot-hold | 150vh — the pivot beat's build-hold-release |
| mobile-hold-scale | 0.62 — multiplier shortening holds on small screens |

## Spacing & layout

| Token | Value |
|---|---|
| space-unit | 8px (default, confirm) |
| max-width | full-bleed with 5vw gutters, LOUD-style (default, confirm) |
| nav-height | 80px (default, confirm) |

## Assets

- Logo: `shared/assets/logo/thunderhouse-logo.png` — wordmark "THUNDERHOUSE" in
  navy (#112549) with an amber-to-orange gradient lightning bolt overlay
  (#F9D406 → #FEA204 → #F97405), tagline "AI DIGITAL STRATEGY" beneath, on a
  warm off-white background (#FDFAF9).

## Rules

- No component may hardcode a color, font, size, or duration. Everything imports
  from `shared/constants/tokens.ts` (emitted in stage 03 from this file).
- Changing a value here (then re-running stage 03) updates the whole site.
