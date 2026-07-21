# Build conventions

## Stack (fixed)

- Next.js (current stable), App Router, TypeScript.
- Framer Motion for route transitions and panel animation (AnimatePresence at
  the layout/template level so Nav + PillarsPanel persist across routes).
- CSS: CSS Modules or vanilla-extract — builder's choice. No Tailwind (token
  discipline is enforced through tokens.ts imports, and utility classes hide
  hardcoded values from the grep audit).
- Images: next/image, assets in /public, pillar images optimized ≤ 300KB each.
- No CMS in v1. Copy compiles in from a single content module generated from
  copy.md. (Keeps deploy = git push; CMS is a future workspace stage.)

## Structure

```
site/
  app/            # routes per sitemap.md
  components/     # one folder per spec'd component
  content/        # copy.md transposed to typed objects
  lib/tokens.ts   # copied from shared/constants — the ONLY design values
  public/
```

## Rules

- Server components by default; client components only where a spec requires
  interactivity.
- Every interactive component: keyboard operable, focus-visible, aria labels.
- prefers-reduced-motion implemented globally once, consumed per component.
- No external font CDNs; self-host via next/font.
- Env-dependent values (site URL, contact endpoint) come from env vars with
  documented names in build-notes.md — nothing baked in.
- Dockerfile-friendly: standalone output mode enabled for the Coolify build.
