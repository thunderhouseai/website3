# Routing — site-production

Purpose: staged production of the ThunderHouse AI website. Reference design language:
loudsrl.com (section-synced nav, full-page transitions, bottom-left pillars panel).

## Task routing

| If the task is... | Go to | Loads |
|---|---|---|
| First-time configuration | `setup/questionnaire.md` | questionnaire only |
| Analyze/adjust reference behaviors | `stages/01-reference-capture/` | stage CONTEXT.md |
| Sitemap, pillars, page copy | `stages/02-content-architecture/` | stage CONTEXT.md |
| Component + motion specs, tokens | `stages/03-design-system/` | stage CONTEXT.md |
| Generate the Next.js site | `stages/04-build/` | stage CONTEXT.md |
| Ship to the VPS via Coolify | `stages/05-deploy/` | stage CONTEXT.md |

## Pipeline order

01 → 02 → 03 → 04 → 05. Each stage reads the previous stage's `output/` as it exists
on disk. Do not skip stages on a first run. Re-runs of a single stage are normal.

## Shared resources

- `_config/` — brand voice, design tokens, motion spec (factory; written by `setup`)
- `shared/constants/` — code constants emitted by stage 03, imported by stage 04
