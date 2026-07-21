# loudsrl.com — observed mechanics (reference material)

Captured Jul 2026. LOUD is a Milan digital product studio; site is Next.js
(image URLs show /_next/image). This file records what the founder liked and how
the site behaves. It is reference material, not a spec — stage 01 turns the
in-scope subset into the decomposition.

## 1. Top navigation

- Fixed, persistent across route changes; logo left, items right.
- Items: Think. / Design. / Develop. (anchor-style section links) plus
  Manifesto and Studio (routes).
- Active item updates as the corresponding section enters the viewport while
  scrolling — the nav is a live position indicator, not just links.
- On route change the nav does NOT unmount; content transitions beneath it, and
  the active state flips to the destination.

## 2. Industries / specialties panel (bottom-left)

- Toggle labeled "Show Industries" sits low-left.
- Expands a stacked uppercase list: ARTIFICIAL INTELLIGENCE, E-COMMERCE,
  MOBILE APPS, REAL ESTATE. List text repeats/loops (marquee feel).
- Selecting an item swaps the main viewport content to that industry's pillar:
  large H2, three-keyword strapline (e.g. "Efficiency, Data-Driven, Secure"),
  short paragraph, full-bleed cover image.
- ThunderHouse equivalent: the panel lists service pillars.

## 3. Page-to-page transitions

- Route changes animate: outgoing content exits, incoming enters (wipe/fade
  choreography), roughly 500–700ms feel, background continuity maintained.
- Nav and the bottom-left panel persist through the transition (layout-level
  persistence; only the page content swaps).

## 4. Background treatment

- Dark base (#000 theme color). Full-bleed imagery per pillar with slow
  scale/parallax feel; imagery changes with the active pillar/section.
- Type is very large; whitespace generous; motion slow and few — the restraint
  is what makes it feel premium.

## 5. Structural notes

- "I•VI PILLARS" counter suggests numbered pillar sections (I of VI).
- Contact CTA ("Are you the next?") persists near the pillars content.
- Content model per pillar: name, 3 keywords, one paragraph, one image. Simple,
  repeatable — good template for ThunderHouse's pillars.
