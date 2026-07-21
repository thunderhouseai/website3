# Stage 03 — Design system

Job: translate approved behaviors + copy into build contracts: a component
inventory with per-component specs, and the canonical tokens.ts constants file.
Specs define WHAT and WHEN. The build stage owns HOW.

## Inputs

| Source | File/Location | Section/Scope | Why |
|---|---|---|---|
| Behaviors | ../01-reference-capture/output/reference-decomposition.md | Full file | Behavior contracts |
| Sitemap | ../02-content-architecture/output/sitemap.md | Full file | What exists per route |
| Copy | ../02-content-architecture/output/copy.md | Headlines + pillar blocks only | Sizing/fit realities |
| Tokens | ../../_config/design-tokens.md | Full file | Canonical values |
| Motion | ../../_config/motion-spec.md | Global motion rules | Constraints |
| Conventions | references/spec-conventions.md | Full file | Spec format |

## Process

1. Read inputs. Derive the component inventory from sitemap × behaviors
   (expected: Shell/Nav, PageTransition, PillarsPanel, PillarBlock, Hero,
   SectionObserver contract, ContactCTA, Footer — adjust to reality).
2. Write one spec per component using the format in spec-conventions.md.
3. CHECKPOINT: present the inventory list + any spec where behavior and copy
   conflict (e.g. headline too long for layout). Wait for rulings.
4. Emit `shared/constants/tokens.ts` from design-tokens.md (colors, fonts,
   spacing, durations, easings, breakpoints — typed, exported constants).
5. Run the audit. Save outputs.

## Bilingual (EN/ES) — cascades from brand.md Languages

Spec a LanguageSwitcher in the shell (EN/ES, persists across navigation).
All components consume strings from the content layer — no hardcoded text
in any spec's content slots.

## Audit

- [ ] Every sitemap section is covered by exactly one component spec
- [ ] LanguageSwitcher spec exists; every content slot sources from the content layer (both languages)
- [ ] No spec contains implementation terms (library names, CSS properties, hooks)
- [ ] Every duration/color/size in specs references a token name, never a literal
- [ ] tokens.ts values match design-tokens.md one-to-one
- [ ] Every spec defines: reduced-motion variant, mobile variant, empty/edge state

## Outputs

| Artifact | Location | Format |
|---|---|---|
| Component specs | output/component-specs.md | Markdown, one H2 per component |
| Design constants | ../../shared/constants/tokens.ts | Typed TS exports |
