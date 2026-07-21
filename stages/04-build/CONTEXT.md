# Stage 04 — Build

Job: generate the complete Next.js site from the specs. Creative freedom on HOW,
zero freedom on WHAT/WHEN — the specs and copy are contracts.

## Inputs

| Source | File/Location | Section/Scope | Why |
|---|---|---|---|
| Component specs | ../03-design-system/output/component-specs.md | Full file | The contract |
| Copy | ../02-content-architecture/output/copy.md | Full file | All site text, verbatim |
| Sitemap | ../02-content-architecture/output/sitemap.md | Full file | Routes |
| Tokens | ../../shared/constants/tokens.ts | Full file | Only source of design values |
| Art direction | ../../_config/art-direction.md | Full file | Visual tiebreakers + gradient rule |
| Conventions | references/build-conventions.md | Full file | Stack + structure rules |

## Process

1. Read inputs. Scaffold the project per build-conventions.md into output/site/.
2. Copy tokens.ts into the project (single import path for all components).
3. Build shell first (Nav + PageTransition + PillarsPanel persistence), verify
   route transitions work, then build pages/components per spec.
4. Insert copy verbatim from copy.md. Never rewrite copy — if something doesn't
   fit, flag it as a stage 02/03 issue in output/build-notes.md.
5. Run the audit. Fix failures. Save.

## Audit

- [ ] `npm run build` completes with zero errors
- [ ] Grep check: no hex colors, px font-sizes, or ms durations outside tokens.ts
- [ ] Every spec'd component exists; every behavior contract line is satisfied
- [ ] All copy matches copy.md verbatim (spot-check every headline + pillar block)
- [ ] Reduced-motion and mobile variants implemented per spec
- [ ] Lighthouse: no image without dimensions, fonts self-hosted or preloaded

## Outputs

| Artifact | Location | Format |
|---|---|---|
| Site source | output/site/ | Next.js project |
| Build notes | output/build-notes.md | Decisions made, flags for founder |

Human review: `cd output/site && npm install && npm run dev` — approve in browser
before stage 05. Fix problems by editing the upstream file that owns them.
