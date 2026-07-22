# Stage 02 — Content architecture

Job: produce the sitemap and all site copy in the founder's voice. This stage
writes words and structure only. No design decisions, no components, no code.

## Inputs

| Source | File/Location | Section/Scope | Why |
|---|---|---|---|
| Approved behaviors | ../01-reference-capture/output/reference-decomposition.md | Full file | Content must fit these behaviors |
| Brand | ../../_config/brand.md | Positioning, Voice, Pillars, Pages | Voice + pillar source of truth |
| Guidelines | references/content-guidelines.md | Full file | Copy rules |

## Process

1. Read inputs. Extract voice patterns from the founder's writing samples.
2. Draft the sitemap: routes, sections per route, and which behavior each
   section participates in (nav sync, pillars panel, etc.).
3. CHECKPOINT 1: present sitemap + 2–3 headline directions for the homepage
   hero (each with a one-line rationale). Wait for a pick.
4. Write full copy for every page/section: headlines, pillar blocks (name,
   three keywords, one paragraph each), manifesto/approach text, studio/about,
   contact CTA, footer, meta descriptions.
5. CHECKPOINT 2: present the pillar blocks only (highest-stakes copy). Wait.
6. Run the audit. Save both outputs.

## Bilingual (EN/ES) — cascades from brand.md Languages

copy.md contains EN and ES for every string — parallel blocks, same
structure. Spanish written natively in the brand voice (neutral Latin
American Spanish; tú/usted ruled at checkpoint 1) — never
translated-sounding. Both languages audited against the banned-phrase list.

## Audit

- [ ] Every module block: name + exactly three keywords + one paragraph ≤ 60 words — enforced in BOTH languages
- [ ] Zero phrases from brand.md "Never sounds like" list — checked in BOTH languages
- [ ] Every section in the sitemap has copy; every copy block maps to a section
- [ ] Every EN block has an ES counterpart with identical structure
- [ ] Copy makes no promises about motion/visuals (that's stages 01/03)
- [ ] Each page has a title tag + meta description — in both languages

## Outputs

| Artifact | Location | Format |
|---|---|---|
| Sitemap | output/sitemap.md | Markdown table: route → sections → behaviors |
| Copy deck | output/copy.md | Markdown, one H1 per route, H2 per section |
