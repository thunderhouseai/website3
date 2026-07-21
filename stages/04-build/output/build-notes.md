# Build notes — site-production stage 04

## Revision 2 — art direction, composition anatomy, two bugs

New inputs this pass: `_config/art-direction.md` (created and registered in
this stage's CONTEXT.md Inputs table), the placeholder-background glow +
statement display tokens (added to `_config/design-tokens.md` and mirrored
into `tokens.ts`), and the amended Composition anatomy in
`component-specs.md`.

**Bug: pillar content never rendered / "duplicate footer" mid-page.** One
diagnosis explains both symptoms, confirmed at the markup level (the served
HTML contained exactly ONE `<footer>` element, so no real duplicate
existed):

- Content missing: `PillarSelector` returned `null` while the toggle was
  closed, and nothing was ever committed until a click — so the default
  pillars section was pure background. Fixed: the first pillar is committed
  by default (`activeIndex` starts at 0) and the committed `PillarBlock`
  renders in the section unconditionally via a new `ActivePillar` bridge
  component. Verified: pillar title, keywords, paragraph, and counter now
  server-render in the static HTML.
- "Duplicate footer": the pillar list itself. Round 1 built it as a
  HORIZONTAL row of surface-colored uppercase pills sitting mid-viewport
  inside the pillars section — visually a second footer/nav bar, and also a
  deviation from stage 01's "stacked uppercase list". Fixed: the list is now
  a stacked vertical panel docked bottom-left directly above the toggle
  (one sticky dock in the shell), sized to its longest label, never
  viewport-width. The spec's PillarSelector Composition line now forbids
  the row form explicitly.

**The circular "N" at hero bottom-left:** Next.js's dev-mode devtools
indicator — injected by the dev server on every page, bottom-left by
default, which put it exactly where the pillars dock lives. It is not part
of the site's code and never ships in the production build (confirmed
absent from prod markup). Not specced → disabled in dev too via
`devIndicators: false` in `next.config.ts`.

**Background treatment** rebuilt to the design-tokens placeholder formula:
bg-primary base + ONE low-opacity amber radial glow per view
(`--glow-rgb` / `--glow-opacity` from tokens), anchored to a different
edge/corner per section, and per-pillar position/size on `PillarBlock`
(`data-pillar` attribute) with hue never changing. The round-1 gradients
that blended surface/amber across the field (the olive risk
art-direction.md now bans) are gone. Slow drift kept, reduced-motion
static.

**Composition anatomy applied:** Hero, teaser, and CTA content anchored
lower-left third (flex-end + deep bottom padding); teaser sentence at the
new statement display scale in the display face; CTA heading at statement
scale, button still label-sized; PillarBlock full-bleed with counter as a
large quiet element (display family at h1 scale, muted) above the
hero-adjacent title, keywords as an accent line, paragraph ≤ 60ch.

## Revision 1 — composition + three bugs (post-review pass)

Founder localhost review: behaviors worked, composition didn't. Amended
`component-specs.md` with a "Composition" line per component (Hero,
PillarSelector, SectionTeaser, ContactCTA, PillarBlock, PillarsToggle — see
that file), added `displayScale` (viewport-relative huge titles) and bumped
`typography.scaleRatio` 1.25 → 1.333 in `tokens.ts` so h1-h3 step up
proportionally, and rebuilt against both. As with `durationFast`/easings
before, the new tokens (`displayScale`, `durationBackgroundDrift`) have no
`_config/design-tokens.md` source — added to `tokens.ts` only, not mirrored
into `_config` (that file stays read-only during stage runs; same call as
the first stage 03 pass).

Three bugs fixed, independent of the composition work:

1. **Pillars toggle overlapped the footer.** Root cause: it was
   `position: fixed`, which floats at a constant viewport position
   regardless of what scrolls underneath — including the footer once it
   scrolled into that same screen region. Fixed by moving it inside `<main>`
   as the last child and switching to `position: sticky`. A sticky element
   can't stick past its containing block's edge, so once `<main>`'s content
   ends (right where Footer begins), it stops being held at the bottom of
   the screen and scrolls away with the rest of main — same fix the new
   PillarsToggle composition line ("must never overlap footer content")
   calls for, so one change satisfies both.
2. **Background treatment was entirely absent — flat navy everywhere.**
   Root cause: the original build only ever gave `PillarBlock` a background,
   and only once a pillar was committed. Hero, the Pillars section shell,
   the Approach teaser, and the Contact CTA had none, and Behavior 4 says
   *every* pillar/section brings its own. Added a shared
   `SectionBackground` component (token-driven gradient, one variant per
   section so they read as visually distinct) to all four Home sections,
   plus a proper slow-drift keyframe animation on `PillarBlock`'s own
   background (previously had a `transition` with no corresponding state
   change to trigger it — dead CSS that never animated anything).
3. **Nav showed Contact active while still on Home.** Root cause: the
   `IntersectionObserver` callback set the active section to whichever
   entry it processed *last* in a given callback batch, not whichever was
   *most visible*. On a page where two sections can both cross the 50%
   threshold in the same batch (realistic on a short page/tall viewport),
   this picked essentially at random. Rewrote it to track every
   currently-qualifying section's intersection ratio and pick the highest
   one each time, clearing to `null` when nothing qualifies — matches the
   spec's default/edge state instead of latching onto a stale value.

All three verified structurally (build, grep audit, curl smoke tests
including the new `data-variant` background markup); the section-observer
fix specifically depends on real scroll behavior in a browser and should get
a visual once-over during human review below.

## Env vars (documented per build-conventions; nothing baked in)

| Name | Used by | Required? |
|---|---|---|
| `BOOKING_URL` | `/contact` primary link | No — link is omitted, not broken, if unset |
| `WHATSAPP_URL` | `/contact` secondary link | No — link is omitted, not broken, if unset |
| `SITE_URL` | root layout `metadataBase` | No — defaults to `https://thunderhouseai.com` |

`/contact` is forced to dynamic rendering (`export const dynamic = 'force-dynamic'`)
specifically so these two are read per-request rather than baked in at build
time — caught this in testing: Next.js had statically prerendered the page,
so setting the env vars at deploy time (the entire point of using them) had
no effect until this was added.

## Flags for the founder

1. **No section's background imagery exists yet.** `SectionBackground`
   (Hero, Pillars, Approach teaser, Contact CTA) and `PillarBlock`'s own
   background both use token-driven CSS gradients as a stand-in for the
   "full-bleed image with slow drift" in Behavior 4. No stock photography
   was substituted in its place — swap in real photography via `next/image`
   (with explicit dimensions) when it's available; don't let placeholder
   gradients ship as final across all four sections.
2. **Cross-route ambiguity in the stage 03 spec, resolved by judgment call.**
   `PillarsToggle` is specified as living in the global shell (every route),
   but `PillarSelector` — the pillar list — is specified as Home-only. The
   spec never says what happens if you click the toggle on `/approach` or
   `/contact`. Built it literally: the toggle still renders and tracks
   open/closed state everywhere (so state persists across routes per
   Behavior 3), but the list panel only appears on Home (revision 2: the
   panel now docks above the toggle, so off-Home the dock is just the
   toggle and clicking it visibly does nothing). Worth a decision in a
   future stage 03 pass — either hide the toggle off Home, or have it
   navigate Home first.
3. **Route-transition interruption ("retarget, don't queue") is implemented
   via framer-motion's default `AnimatePresence` `mode="sync"`**, which
   starts the new page's enter animation immediately rather than waiting for
   the old one's exit. This is a reasonable-effort match for Behavior 2's
   rule but wasn't verified under rapid double-navigation by an automated
   test — worth a manual check during human review.

## Notable build-time decisions (HOW, not WHAT — spec allowed freedom here)

- **Design values flow through CSS custom properties**, generated once from
  `lib/tokens.ts` via `lib/css-vars.ts` and injected as an inline `<style>`
  in the root layout. Every component CSS Module reads `var(--...)` — never
  a literal hex/px-font-size/ms. Verified by grep; zero hits outside
  `tokens.ts`/`css-vars.ts`.
- **Two narrow, intentional exceptions** to that rule, neither a color/
  font-size/duration design value:
  - `@media (max-width: 767px)` in `nav.module.css` — CSS can't reference a
    custom property inside a media-query condition, so this is a literal
    mirroring `breakpoints.mobile` (768) from tokens.ts by hand.
  - `0.01ms` in the global `prefers-reduced-motion` rule in `globals.css` —
    the standard accessibality technique for effectively-zero animation
    that still fires `transitionend`/`animationend` events; not a brand
    duration choice.
- **Easing tokens are stored as CSS timing-function keywords** (`ease-out`,
  `ease-in-out`) since that's what CSS Modules consume directly. Framer
  Motion needs its own camelCase keywords for JS-driven transitions, so
  `lib/motion.ts` exports a small `toFramerEasing()` mapper rather than a
  second, divergent easing token.
- **SectionObserver** is implemented as a React context + `IntersectionObserver`
  (`lib/use-section-observer.tsx`), threshold `0.5` per Behavior 1. Nav reads
  it only while on Home; on any other route it uses the current path
  directly, so there's never a flash of a stale section highlight.
- **No CMS, no image library beyond next/image** — matches build-conventions.
  Copy compiles in from `content/copy.ts`, transposed by hand from
  `copy.md` and spot-checked verbatim against it (headline, all four pillar
  blocks, both CTAs, footer copyright).

- **`output: 'standalone'`** set in `next.config.ts` per build-conventions
  (Dockerfile-friendly build for the Coolify deploy in stage 05) — not on by
  default in create-next-app's scaffold, added explicitly.

## Audit results

- [x] `npm run build` completes with zero errors
- [x] `npx eslint .` clean
- [x] Grep check: no hex colors, px font-sizes, or ms durations outside
      `lib/tokens.ts`/`lib/css-vars.ts` (two documented exceptions above,
      neither a color/font-size/duration)
- [x] Every spec'd component exists (13/13); behavior contract lines
      implemented as described above
- [x] Copy spot-checked verbatim against copy.md (hero headline + subhead +
      philosophy line, all four pillar names/keywords/paragraphs, both
      page CTAs, footer copyright)
- [x] Reduced-motion and mobile variants implemented per spec (global CSS
      safety net + `useReducedMotion()` for JS-driven transitions; mobile
      nav collapse at 767px)
- [x] No `<img>` without dimensions (none used yet — see flag #1); fonts
      self-hosted via `next/font/google`
- [x] Smoke-tested all three routes return 200; verified the Contact page's
      configured/unconfigured edge case both ways (links omitted when env
      vars are unset, render correctly when set)

## Human review

```
cd stages/04-build/output/site
npm install
npm run dev
```

Approve in browser before running stage 05.
