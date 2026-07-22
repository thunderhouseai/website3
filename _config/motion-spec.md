# Motion spec — behaviors in scope
<!-- Populated by `setup` (section C). Defines WHAT and WHEN, never HOW.
     Implementation choices belong to stage 04. -->

## In-scope behaviors
<!-- v2 (Patch reference). v1's LOUD-era table (section-synced nav, route
     transitions, pillars panel) retired — see tag v1-loud-attempt. This
     table is the complete motion inventory. -->

| Behavior | In/Out | Parameters |
|---|---|---|
| Scroll-linked choreography | In | sticky holds + presentation driven by scroll progress on the narrative acts (see per-section contracts in component-specs.md); the reference's defining mechanic |
| Scroll-triggered reveals | In | simple reveal-once for non-choreographed acts (founder proof, final CTA, contact); page fully readable without them |
| Pivot beat | In | the page's single strongest moment; MAY hold briefly at full emphasis, then releases — never traps scroll |
| Language switch | In | EN⇄ES without full-reload feel; place in page preserved |
| Hero video slot poster state | In | designed poster frame until real video exists; never autoplay with sound |
| CTA emphasis (Book-a-call) | In | subtle hover/attention motion on primary buttons; never looping/pulsing |
| Floating WhatsApp button | In | one subtle entrance; persistent; no attention-seeking loops |

## Global motion rules

- Timing tokens (duration-fast, duration-page, easing) live in design-tokens /
  tokens.ts. No literal ms values in components.
- BANNED: scroll-jacking — overriding native scroll speed, direction, or
  wheel behavior.
- ALLOWED and REQUIRED: scroll-linked choreography — sticky/pinned
  positioning and animations driven by scroll progress, with native scroll
  fully intact.
- Reduced-motion collapses all choreography to simple fades with normal
  document flow.
- Every animated element has a defined resting state; the site is fully readable
  with JavaScript disabled or animations off.

## Reference notes

Stage 01's output (`stages/01-reference-capture/output/reference-decomposition.md`)
holds the detailed per-behavior descriptions as edited/approved by the founder.
Stage 03 translates the combination of that file + this spec into component specs.
Reference site for v2 behaviors: thepatchsystem.com/ai (see stage 01
references/thepatchsystem-analysis.md).
