# Sitemap — site-production v2 (Patch reference)

| Route | Section (act) | Behaviors (decomposition #) |
|---|---|---|
| `/` | Hero — headline, video slot w/ designed poster, CTA | 1, 7, 9 |
| `/` | Pain mirror — kicker + four beats | 1, 2 |
| `/` | Pivot beat — philosophy line, its ONLY appearance | 1, 3 |
| `/` | Modules 01–05 — numbered walkthrough | 1, 4 |
| `/` | Founder proof | 1, 5 |
| `/` | How it works — engagement model steps | 1, 6 |
| `/` | Final CTA act (closing, single CTA for this page) | 1, 7 |
| `/contact` | Conversion page — headline, reassurance, Calendly embed, WhatsApp secondary | 7, 10 |
| `/es` | Full Spanish mirror of `/` — same acts, same order | 8 (+ all of the above) |
| `/es/contacto` | Full Spanish mirror of `/contact` | 8 (+ 7, 10) |
| Global shell | Nav — wordmark, EN/ES switcher (always visible, outside any menu), Book-a-call button | 7, 8 |
| Global shell | Floating WhatsApp button | 10 |
| Global shell | Footer | — |

## Routing rules

- `/contact` and `/es/contacto` are real routes — direct conversion URLs
  for outreach and ads. The narrative pages still end in the full CTA act.
- Language mirrors are structural twins: every EN section exists in ES,
  same order, same slots. Switching languages preserves the visitor's
  place (Behavior 8).
- Calendly: EMBEDDED on the contact pages (checkpoint 1 ruling,
  unopposed); every other CTA links to the contact route. Embed-failure
  fallback is a plain link (microcopy in copy.md).
- One action site-wide: book a discovery call. The WhatsApp button is a
  secondary, manual-conversation channel, never the primary ask.

## Out of scope (v2)

- Chatbot and FAQ — deferred to a future run (art-direction.md).
- Pricing tables; marquee star-strips (observed on Patch, not adopted).
- Automated WhatsApp chatbot — the floating button opens a manual
  conversation only.
