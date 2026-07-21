# Setup questionnaire — site-production

Agent instructions: ask ALL questions below in one message. Wait for one complete
reply. Then write the answers into the three `_config/` files, replacing every
`[PLACEHOLDER]`. Do not invent answers. If an answer is missing, ask once, flat.
This configures the factory (the production system), never a specific page.

## A. Identity & voice

1. One-sentence description of ThunderHouse AI a visitor should walk away with.
2. Paste 1–2 paragraphs you have written that SOUND like the brand (a post, an email).
   The agent extracts voice from examples, not adjectives.
3. Three phrases the site must never sound like (e.g. "AI hype", "corporate filler").
4. The four (3–5 acceptable) service pillars, in display order, each with a
   one-line description. (These replace LOUD's "industries" panel.)

## B. Visual system

5. Primary background: dark, light, or dark-with-light-sections?
6. Accent color(s) — hex if you have them, or "propose from logo".
7. Typography preference: single modern sans (LOUD-style), or a pairing? Any font
   you already own/use?
8. Logo: file available? Wordmark text if not.

## C. Reference behaviors (confirm scope)

9. Section-synced top nav (highlights active section on scroll): in or out?
10. Full-page transition between routes (wipe/fade + nav persists): in or out?
    Preferred max duration in ms (LOUD ≈ 600ms; suggest 400ms).
11. Bottom-left pillars panel that cycles/expands: in or out? Auto-cycle or hover?
12. Background treatment: subtle motion/parallax, static imagery, or flat color?

## D. Pages & deploy

13. Page map: confirm or amend — Home, Approach (manifesto), Studio/About, Contact.
14. Domain stays thunderhouseai.com? Any subdomains?
15. Current site on the VPS: deployed via Coolify already, or another method?
    (Answer decides stage 05's first step.)
16. Git host + repo name for the built site (e.g. GitHub `thunderhouse/site`).

## Write-back map

| Answers | Written to |
|---|---|
| A1–A4 | `_config/brand.md` |
| B5–B8 | `_config/design-tokens.md` |
| C9–C12 | `_config/motion-spec.md` |
| D13–D16 | `_config/brand.md` (Pages + Deploy sections) |
