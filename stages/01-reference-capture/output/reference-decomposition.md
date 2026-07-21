# Reference decomposition
<!-- Founder: this is your edit surface. Whatever this file says after you save
     is law for stages 02–04. Confirmed at stage 01 checkpoint. -->

## Behavior 1 — Section-synced navigation

What the user sees: a fixed top bar with the ThunderHouse wordmark left and nav
items right. As they scroll the homepage, the nav item matching the section on
screen becomes visually active.
Trigger: a section occupying the majority of the viewport (crossing 50%).
State: exactly one nav item active at a time; clicking an item smooth-scrolls to
its section (same page) or navigates (other routes).
Direct-link entry: landing on /approach marks Approach active immediately, with
no intermediate flash of a different active item.
Mobile: nav collapses to wordmark + menu button; active state shown inside the
opened menu.
Reduced motion: smooth-scroll becomes an instant jump; active-state swap is
still instant either way (it was never animated on its own).

## Behavior 2 — Route transitions with persistent shell

What the user sees: clicking to another page animates the old content out and
the new content in; the top nav and pillars panel never blink or reload.
Trigger: any route change.
Parameters: total duration ≤ 400ms; background continuity maintained, no white
flash.
Interruption: transitions do not block input. If the user clicks a nav item
while a transition is already in progress, the in-flight transition retargets
to the new destination immediately rather than finishing the original
transition first or queuing the new one.
Reduced motion: transition collapses to a simple cross-fade ≤ 150ms; retarget
behavior on interruption is unchanged.
Mobile: identical, shorter travel distances.

## Behavior 3 — Pillars panel (bottom-left)

What the user sees: a low-left toggle ("Our pillars" — wording TBD in stage 02).
Opening it reveals the stacked pillar list. Moving attention over a pillar in
the list previews it — the list item highlights, but the main viewport content
does not change yet. Selecting a pillar commits the swap: the main viewport
changes to that pillar's block (large title, three keywords, one paragraph,
full-bleed background image, pillar counter in "I•IV" style).
Trigger: hover to preview, click to commit. Hover alone never swaps the main
viewport — this prevents accidental swaps while the cursor is just passing
through the list. No auto-cycle; the panel never advances on its own.
State: one pillar committed/active at a time; panel open/closed state and the
active pillar persist across route changes.
Touch: there is no hover state on touch devices. A tap commits directly (acts
as both preview and commit in one step); there is no preview-only gesture.
Mobile: panel becomes a bottom sheet or inline section — layout choice deferred
to stage 03; the preview/commit distinction above still applies wherever a
pointer with hover is available.
Reduced motion: swaps are instant, no marquee looping text; preview highlight
still appears but without animation.

## Behavior 4 — Background treatment

What the user sees: dark base; each pillar/section brings its own full-bleed
image with a very slow scale drift; large typography over it.
Parameters: drift subtle enough to be missed if you're not looking; images
change only with pillar/section changes, never on a timer.
Reduced motion: static images, no drift.
Mobile: static or single-image to protect performance.

## Out of scope (confirmed cuts)

None — all four behaviors above are confirmed in scope as of this pass.
