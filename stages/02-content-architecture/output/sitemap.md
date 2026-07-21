# Sitemap — site-production

| Route | Section | Behavior(s) it participates in |
|---|---|---|
| `/` (Home) | Hero (headline, subhead, verbatim philosophy line) | Background treatment |
| `/` (Home) | Pillars | Pillars panel, Background treatment |
| `/` (Home) | Approach teaser | Section-synced nav |
| `/` (Home) | Contact CTA (closing, single CTA for this page) | Section-synced nav |
| `/approach` | Manifesto (closing, single CTA for this page) | Route transitions |
| `/contact` | Contact (closing, single CTA for this page) | Route transitions |
| Global shell | Top nav | Section-synced nav, Route transitions |
| Global shell | Pillars panel toggle | Pillars panel, Route transitions |
| Global shell | Footer | — |

## Nav items

**Approach**, **Contact** — two items.

- Clicking a nav item always navigates to its route, including from Home.
- While scrolling Home, the item highlights when its corresponding teaser
  section is in view — but the highlight never changes the click target. A
  click always goes to the route.
- On direct entry to `/approach` or `/contact`, that item is active
  immediately (no flash of a different active item).
- The pillars panel toggle is a separate, persistent shell element
  (bottom-left) and is not tied to top-nav sync.

## Out of scope (v1)

- Studio page deferred to a future run — do not reference Studio anywhere in
  copy.
- Automated WhatsApp chatbot deferred to a future run. ContactPage links to
  WhatsApp for manual messaging only in v1.
