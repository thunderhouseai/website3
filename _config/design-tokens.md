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
| scale | 1.25 modular, base 16px (default, confirm) |
| headline-weight | 700 (Bold, default for Montserrat display) |

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
