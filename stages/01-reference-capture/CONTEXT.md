# Stage 01 — Reference capture

Job: turn "a site like loudsrl.com" into a precise, human-editable written
decomposition of behaviors. This stage writes prose specs only. No code, no copy,
no design tokens.

## Inputs

| Source | File/Location | Section/Scope | Why |
|---|---|---|---|
| Reference analysis | references/thepatchsystem-analysis.md | Full file | Observed thepatchsystem.com/ai mechanics |
| Site job | ../../_config/site-job.md | Full file | What every behavior must serve |
| Art direction | ../../_config/art-direction.md | Full file | Aesthetic scope + out-of-scope items |
| Motion scope | ../../_config/motion-spec.md | In-scope behaviors table | Which behaviors are in/out |

(references/loudsrl-analysis.md is v1-era material, retained for history —
not an input to this run.)

## Process

1. Read the reference analysis and the in-scope behaviors table.
2. For each in-scope behavior, write a decomposition entry: what the user sees,
   what triggers it, what state changes, edge cases (mobile, reduced motion,
   direct-link entry mid-page).
3. CHECKPOINT: present the list of behaviors with a one-line summary each. Ask the
   founder to confirm scope or cut items before writing detail. Wait.
4. Write the full decomposition for confirmed behaviors.
5. Run the audit. Save output.

## Audit (all must pass before writing output)

- [ ] Every entry describes WHAT/WHEN only — zero implementation terms
      (no library names, no CSS properties, no code identifiers)
- [ ] Every entry covers mobile behavior and reduced-motion behavior
- [ ] No behavior appears that is marked "Out" in motion-spec.md
- [ ] File under 200 lines

## Outputs

| Artifact | Location | Format |
|---|---|---|
| Behavior decomposition | output/reference-decomposition.md | Markdown, one H2 per behavior |

Note: a pre-seeded draft already exists in output/. On first run, treat it as the
working draft — refine it through the checkpoint rather than starting blank.
