# Motion spec — behaviors in scope
<!-- Populated by `setup` (section C). Defines WHAT and WHEN, never HOW.
     Implementation choices belong to stage 04. -->

## In-scope behaviors

| Behavior | In/Out | Parameters |
|---|---|---|
| Section-synced nav | In | active state when section crosses 50% viewport |
| Route transitions | In | max duration 400ms; nav persists |
| Pillars panel (bottom-left) | In | trigger: hover/click only (no auto-cycle) |
| Background treatment | In | subtle motion/parallax on imagery; static on mobile and reduced-motion |

## Global motion rules

- Timing tokens (duration-fast, duration-page, easing) live in design-tokens /
  tokens.ts. No literal ms values in components.
- Motion must degrade gracefully: honor `prefers-reduced-motion` — transitions
  collapse to opacity fades, background motion pauses.
- Nothing animates on scroll-jack. Native scroll is never hijacked.
- Every animated element has a defined resting state; the site is fully readable
  with JavaScript disabled or animations off.

## Reference notes

Stage 01's output (`stages/01-reference-capture/output/reference-decomposition.md`)
holds the detailed per-behavior descriptions as edited/approved by the founder.
Stage 03 translates the combination of that file + this spec into component specs.
