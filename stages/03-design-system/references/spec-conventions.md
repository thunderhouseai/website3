# Spec conventions

Every component spec uses exactly this shape:

```
## ComponentName

Purpose: one sentence.
Appears: which routes/sections (from sitemap.md).

States:
- default: ...
- active/open/etc.: ...
- mobile: ...
- reduced-motion: ...

Behavior contract:
- WHEN <trigger>, THEN <observable result> (reference behavior # from
  reference-decomposition.md where applicable)

Content slots:
- slot name: source in copy.md

Tokens used: token-name, token-name (names only, from tokens.ts)

Out of scope: what this component explicitly does NOT do.
```

## Rules

- WHAT/WHEN language only. "The panel opens upward revealing the pillar list"
  is a spec. "Use framer-motion AnimatePresence" is not — delete on sight.
- Quality floor lives here: contrast, tap-target minimum 44px, focus-visible
  states required, keyboard operability for every interactive component.
- If a spec needs more than ~30 lines, the component is too big — split it.
- One-way references: specs may cite stage 01/02 outputs and tokens; they may
  never cite build output or other specs' internals.
