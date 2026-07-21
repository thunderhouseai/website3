# Motion spec — behaviors in scope
<!-- Populated by `setup` (section C). Defines WHAT and WHEN, never HOW.
     Implementation choices belong to stage 04. -->

## In-scope behaviors
<!-- v2 (Patch reference). v1's LOUD-era table (section-synced nav, route
     transitions, pillars panel) retired — see tag v1-loud-attempt. This
     table is the complete motion inventory. -->

| Behavior | In/Out | Parameters |
|---|---|---|
| Scroll-triggered reveals | In | element groups reveal once as their section enters view; page fully readable without them |
| Pivot beat transition | In | the page's single strongest transition moment (philosophy line) |
| Language switch | In | EN⇄ES without full-reload feel; place in page preserved |
| Hero video slot poster state | In | designed poster frame until real video exists; never autoplay with sound |
| CTA emphasis (Book-a-call) | In | subtle hover/attention motion on primary buttons; never looping/pulsing |
| Floating WhatsApp button | In | one subtle entrance; persistent; no attention-seeking loops |

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
Reference site for v2 behaviors: thepatchsystem.com/ai (see stage 01
references/thepatchsystem-analysis.md).
