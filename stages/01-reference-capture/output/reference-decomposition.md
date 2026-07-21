# Reference decomposition — DRAFT (edit me before stage 02)
<!-- Founder: this is your edit surface. Delete behaviors you don't want, change
     parameters inline, add notes. Whatever this file says after you save is law
     for stages 02–04. -->

## Behavior 1 — Section-synced navigation

What the user sees: a fixed top bar with the ThunderHouse wordmark left and nav
items right. As they scroll the homepage, the nav item matching the section on
screen becomes visually active.
Trigger: a section occupying the majority of the viewport (crossing 50%).
State: exactly one nav item active at a time; clicking an item smooth-scrolls to
its section (same page) or navigates (other routes).
Direct-link entry: landing on /approach marks Approach active immediately.
Mobile: nav collapses to wordmark + menu button; active state shown inside the
opened menu. Reduced motion: smooth-scroll becomes instant jump.

## Behavior 2 — Route transitions with persistent shell

What the user sees: clicking to another page animates the old content out and the
new content in; the top nav and pillars panel never blink or reload.
Trigger: any route change.
Parameters: total duration ≤ 400ms (faster than LOUD — founder preference);
background continuity maintained, no white flash.
Reduced motion: transition collapses to a simple cross-fade ≤ 150ms.
Mobile: identical, shorter travel distances.

## Behavior 3 — Pillars panel (bottom-left)

What the user sees: a low-left toggle ("Our pillars" — wording TBD in stage 02).
Opening it reveals the stacked pillar list. Selecting a pillar swaps the main
viewport to that pillar's block: large title, three keywords, one paragraph,
full-bleed background image, pillar counter (I•IV style).
Trigger: click/tap to open and select. [DECIDE: auto-cycle when idle? y/n]
State: one pillar active; panel state persists across route changes.
Mobile: panel becomes a bottom sheet or inline section — pick in stage 03.
Reduced motion: swaps are instant, no marquee looping text.

## Behavior 4 — Background treatment

What the user sees: dark base; each pillar/section brings its own full-bleed
image with a very slow scale drift; large typography over it.
Parameters: drift subtle enough to be missed if you're not looking; images
change only with pillar/section changes, never on a timer.
Reduced motion: static images. Mobile: static or single-image to protect
performance.

## Out of scope (confirmed cuts)

- [List anything you're cutting here so stage 02+ never resurrects it]
