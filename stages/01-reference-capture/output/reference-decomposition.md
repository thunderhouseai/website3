# Reference decomposition — v2 (Patch reference)
<!-- Founder: this is your edit surface. Whatever this file says after you
     save is law for stages 02–04. Confirmed at stage 01 checkpoint. -->

## Approved page structure

Single scroll-driven narrative page, acts in fixed order: Hero → Pain
mirror → Pivot beat → Modules 01–05 → Founder proof → How it works → Final
CTA → Footer. Plus `/contact` as a real route (direct conversion URL for
outreach/ads). Language mirrors: `/es` and `/es/contacto`. Calendly embed
vs. link is a stage 02/03 decision.

## Behavior 1 — Scroll narrative arc

What the user sees: one continuous page telling one story — their problem,
the turn, what we build, who we are, how it works, the ask. Each act is a
distinct full-attention section with strong rhythm between acts; element
groups reveal once as their section enters view, then rest.
Trigger: scroll; a section's entrance starts its reveal.
State: the page is fully readable top to bottom with no interaction beyond
scrolling; every revealed element has a permanent resting state.
Direct/anchor entry mid-page: that act renders fully revealed; acts above
never block or replay.
Mobile: same act order, tighter spacing, shorter reveal travel.
Reduced motion: content appears in place with no travel; nothing withheld.

## Behavior 2 — Pain-mirror pattern

What the user sees: the SMB owner's reality named in their own words, one
beat per line with a small mark per beat; beats land in sequence as the
act enters view. (Beat copy is stage 02's job, in both languages.)
Trigger: section entering view starts the beat sequence.
Mobile: beats stack full-width, same order.
Reduced motion: all beats visible immediately as a plain list.
Edge: with animations off or JS off, the act must read as a complete list.

## Behavior 3 — Pivot beat

What the user sees: the page's hard turn. The pain act gives way to the
philosophy line — verbatim, and its ONLY appearance anywhere on the site —
held alone with maximum emphasis before releasing into the modules.
This is the single strongest transition moment on the page (motion-spec).
Spanish rendering of the line: flagged for explicit founder approval at
the stage 02 checkpoint — never auto-translated.
Mobile: same isolation; the line is never crowded by neighboring acts.
Reduced motion: the line appears statically, still isolated and dominant.

## Behavior 4 — Numbered module walkthrough (01–05)

What the user sees: the five service modules from brand.md in fixed order,
each numbered 01–05 with number, name, short description, and a visual
slot — one consistent template, so the set reads as a complete, finite
system rather than an open-ended service list.
Trigger: each module reveals as it enters view.
State: every module reachable by scroll alone — none hidden behind
interaction.
Mobile: modules stack full-width, numbering intact.
Reduced motion: modules render statically in order.

## Behavior 5 — Founder-proof pattern

What the user sees: a dedicated credibility act — 20+ years across
development, product, and strategy; the global digital-strategy role at
the 107-year-old amusement-industry association (never named, anywhere —
auditable rule); Tribune; the billion-dollar manufacturer; daily work with
C-suite executives of the world's largest attractions brands; named client
work per brand.md. No testimonials, no logo strips, no marquees.
Trigger: reveals on entry like other acts.
Mobile: stacked; the client list stays scannable.
Reduced motion: static.

## Behavior 6 — How-it-works pattern (engagement model)

What the user sees: the engagement model as a plain sequence — discovery
call → we understand the business and goals → a concrete plan with a price
→ you buy it or you don't → we build → a small monthly retainer keeps it
running. "No packages, no pressure" stated explicitly. Step rhythm echoes
the numbered modules so the page keeps one visual language.
Mobile: steps stack in order.
Reduced motion: static sequence.

## Behavior 7 — Repeated CTA pattern

What the user sees: one action — book a discovery call — re-asked at
natural decision points: persistent in the nav, in the hero, after the
modules, after founder proof, and as the final full CTA act. Same
destination everywhere. `/contact` (and `/es/contacto`) is that same
conversion content as a real, directly linkable route for outreach and
ads; the narrative page still ends in the full CTA act.
Motion: subtle emphasis on primary buttons only — never looping/pulsing.
Direct entry to /contact: full conversion page immediately, with nav and
language switcher present.
Mobile: CTA always reachable without covering content.
Reduced motion: static buttons, focus states intact.

## Behavior 8 — Language switcher

What the user sees: EN/ES always visible in the nav — reachable without
opening any menu, on every screen size (Spanish is first-class; hiding it
inside a menu undercuts the trust signal).
Trigger: selecting the other language swaps to the mirrored URL
(/ ⇄ /es, /contact ⇄ /es/contacto), preserving the visitor's place in the
narrative without a full-reload feel.
State: exactly one language active; choice persists for return visits.
Direct entry to /es or /es/contacto: Spanish active immediately, no flash
of English.
Mobile: switcher stays outside the collapsed menu.
Reduced motion: instant swap.

## Behavior 9 — Hero video slot

What the user sees: a reserved video region in the hero with a designed
poster frame built from the brand palette. Until real video exists, the
poster IS the finished state — never a broken or empty player. When real
video lands later, it drops into the slot without a rebuild.
Rules: never autoplays with sound; poster shows even with JS off.
Mobile: poster sized for small screens.
Reduced motion: static frame, no ambient poster animation.

## Behavior 10 — Floating WhatsApp button

What the user sees: a small persistent floating element that opens a
WhatsApp conversation (manual messaging — the chatbot is deferred).
Motion: one subtle entrance, then still; no attention-seeking loops.
Placement: defined clearance from CTAs and footer — never overlaps either.
Mobile: primary use case; tap opens the conversation directly.
Reduced motion: appears statically.
Edge: if the WhatsApp destination is not configured, the element is
absent, not broken.

## Out of scope (confirmed)

- Chatbot and FAQ — deferred to a future run (art-direction.md).
- Pricing tables; marquee star-strips (observed on Patch, not adopted).
- v1's pillars panel, section-synced nav, and route-transition
  choreography — retired with tag v1-loud-attempt.
