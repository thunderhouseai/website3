# Component specs — site-production

## Shell

Purpose: Persistent page chrome hosting Nav, PillarsToggle, Footer, and the
transitioning route content, so none of them remount on navigation.
Appears: every route.

States:
- default: Nav, pillars panel toggle, and Footer visible; content area shows
  the current page.
- mobile: same regions; Nav collapses (see Nav).
- reduced-motion: no visual difference in Shell itself; children adapt
  individually.
- edge: first paint before the route content is ready — chrome (Nav, toggle,
  Footer) still renders immediately; only the content area is empty/loading.

Behavior contract:
- WHEN a route changes, THEN only the route content area updates; Nav,
  PillarsToggle, and Footer remain mounted (Behavior 2).

Content slots: none (structural container only).

Tokens used: bgPrimary, navHeight

Out of scope: transition timing (see PageTransition); section-sync detection
(see SectionObserver).

## PageTransition

Purpose: Animates the swap between outgoing and incoming route content inside
Shell's content area.
Appears: every route change.

States:
- default: content at rest, fully visible.
- transitioning: outgoing content exiting while incoming content enters.
- mobile: same choreography, shorter travel distances.
- reduced-motion: transition collapses to a cross-fade at durationPageReduced.
- edge: a new route change arrives mid-transition.

Behavior contract:
- WHEN a route change starts, THEN outgoing content exits and incoming
  content enters within durationPage, with no white flash (Behavior 2).
- WHEN a route change is triggered while a transition is in progress, THEN
  the in-flight transition retargets immediately to the new destination
  rather than finishing the original or queuing it (Behavior 2).
- WHEN reduced motion is active, THEN durationPageReduced replaces
  durationPage.

Content slots: none (wraps route content passed in by Shell).

Tokens used: durationPage, durationPageReduced, easingStandard

Out of scope: what triggers navigation (Nav's job); PillarsToggle or Nav
state.

## SectionObserver

Purpose: Contract for detecting which page section is in view, shared by any
component reacting to scroll position.
Appears: Home (wherever Nav needs to sync to scroll position).

States:
- default/edge: no section has crossed the threshold yet (initial load,
  before scroll) — nothing reported as active.
- active: exactly one section reported as "in view."
- mobile: same 50%-crossing rule; no separate threshold for small screens.
- reduced-motion: unaffected — this is a detection contract, not an
  animation; nothing here depends on motion being enabled.

Behavior contract:
- WHEN a section crosses 50% of the viewport, THEN that section is reported
  as active (Behavior 1).
- WHEN the page loads via direct link into a route, THEN the corresponding
  route is reported active immediately, with no intermediate report of a
  different section (Behavior 1).

Content slots: none.

Tokens used: none

Out of scope: does not itself change any visual state; consumers (Nav)
decide what to do with the active-section value.

## Nav

Purpose: Fixed top navigation showing the two route items and indicating
which one is active.
Appears: Global shell, every route.

States:
- default: both items visible; exactly one styled active at a time.
- mobile: collapses to wordmark + menu button; items/active state appear
  inside the opened menu.
- reduced-motion: active-state change is instant either way (never animated
  on its own).
- edge: before SectionObserver reports anything on initial Home load, no
  item is active until a section or route resolves.

Behavior contract:
- WHEN SectionObserver reports a section change on Home, THEN that section's
  nav item is marked active, without navigating (Behavior 1).
- WHEN a nav item is clicked, THEN the app navigates to its route — always,
  including from Home, regardless of current highlight (sitemap Nav rule).
- WHEN a route loads directly, THEN the matching item is active immediately,
  with no flash of a different item (Behavior 1).

Content slots:
- item labels: copy.md Global / Navigation labels (Approach, Contact).

Tokens used: bgPrimary, textPrimary, accent, navHeight, fontBody, durationFast

Out of scope: pillars panel toggle rendering (see PillarsToggle); transition
timing (see PageTransition).

## PillarsToggle

Purpose: Bottom-left, persistent toggle that opens and closes the pillar
list.
Appears: Global shell (every route).

Composition: fixed above the footer with defined clearance — must never
overlap footer content. A compact pill sized to its label, never a
full-width bar; the pillar list panel (PillarSelector) opens directly above
it, docked bottom-left.

States:
- closed (empty/edge state): only the toggle control is visible.
- open: stacked pillar list visible (list content owned by PillarSelector).
- reduced-motion: open/close is instant, no easing.
- mobile: same toggle, positioned for touch reach.

Behavior contract:
- WHEN the toggle is activated, THEN the pillar list opens/closes
  (Behavior 3).
- WHEN a route change occurs, THEN open/closed state persists unchanged
  (Behavior 2, Behavior 3).

Content slots:
- toggle label: copy.md Global / Pillars panel toggle ("Our Pillars").

Tokens used: bgSurface, accent, textPrimary, durationFast

Out of scope: pillar list content and selection (see PillarSelector);
auto-cycling is explicitly not implemented (confirmed out of scope).

## PillarSelector

Purpose: The pillar list opened by PillarsToggle; lets a visitor preview and
commit a pillar, swapping Home's main viewport.
Appears: Home / Pillars.

Composition: a stacked vertical list docked bottom-left, directly above the
pillars toggle — a compact panel, never a horizontal row of items mid-page
(a row of surface-colored uppercase labels reads as a second footer/nav
bar). The committed pillar's PillarBlock, not this list, is what fills the
pillars-section viewport.

States:
- default: list closed; the committed pillar (first pillar by default —
  the section is never empty) fills the section viewport.
- open: stacked list visible above the toggle.
- preview: a pillar in the list is highlighted on hover; main viewport
  unchanged.
- committed: main viewport shows the selected pillar's PillarBlock.
- mobile/touch: no preview state exists; a tap commits directly.
- reduced-motion: swaps are instant, no looping/marquee text; preview
  highlight still appears but without animation.

Behavior contract:
- WHEN a pointer hovers a pillar, THEN that item previews without changing
  the main viewport (Behavior 3).
- WHEN a pillar is clicked/tapped, THEN the main viewport commits to that
  pillar's PillarBlock (Behavior 3).
- WHEN a route change occurs, THEN the committed pillar persists (Behavior 2,
  Behavior 3).
- WHEN no hover is available (touch), THEN a tap commits directly, skipping
  preview (Behavior 3).

Content slots:
- pillar list: copy.md Home / Pillars (four pillar names).

Tokens used: bgSurface, accent, accentHover, textPrimary, durationFast

Out of scope: opening/closing the panel (see PillarsToggle); per-pillar
content layout (see PillarBlock).

## PillarBlock

Purpose: Renders one pillar's content once committed in PillarSelector — the
template shared by all four pillars.
Appears: Home / Pillars (one instance active at a time).

Composition: full-bleed act filling the pillars section — background
treatment behind (per-pillar glow position/size per design tokens'
placeholder-background rules, never hue changes). Content anchored
lower-left third per art-direction.md, arranged top to bottom: counter
(I•IV style) as a large quiet element above the title; title at
hero-adjacent display scale; keywords as an accent line; paragraph in a
defined block ≤ 60ch.

States:
- default: title, three keywords, one paragraph, background treatment, and
  counter all visible. Never empty — the first pillar renders as committed
  by default.
- mobile: background image may reduce to static/single-image.
- reduced-motion: background image is static, no drift.

Behavior contract:
- WHEN a pillar is committed active in PillarSelector, THEN this block
  renders that pillar's name, three keywords, paragraph, image, and its
  position as "N of 4" (Behavior 3, Behavior 4).

Content slots:
- name, keywords, paragraph: copy.md Home / Pillars (per pillar).
- counter: derived from pillar order, not separate copy.

Tokens used: bgSurface, textPrimary, accent, fontDisplay, fontBody,
headlineWeight

Out of scope: which pillar is active (PillarSelector's job); panel
open/close (PillarsToggle's job).

## Hero

Purpose: Home's opening section — headline, subhead, and the site's single
verbatim philosophy statement.
Appears: Home / Hero.

Composition: full viewport height, composed, not stretched — content block
anchored lower-left third per art-direction.md, never small text centered in
a void. Headline is the dominant element at display scale; philosophy line
below it; generous whitespace, LOUD-style restraint.

States:
- default: headline, subhead, and philosophy statement all visible.
- mobile: same content, reflowed for narrow width.
- reduced-motion: same content; no motion dependency of its own (background
  drift belongs to the global background treatment, not Hero's text).
- edge: none — this is static content, always present once copy.md is final.

Behavior contract:
- WHEN Home loads, THEN the philosophy statement renders exactly as written
  in copy.md — verbatim, unparaphrased.

Content slots:
- headline, subhead, philosophy statement: copy.md Home / Hero.

Tokens used: bgPrimary, textPrimary, fontDisplay, fontBody, headlineWeight

Out of scope: no CTA lives here (Home's single CTA is ContactCTA); background
imagery mechanics (Behavior 4 is shell/global-level).

## SectionTeaser

Purpose: Short teaser block on Home linking through to the Approach page.
Appears: Home / Approach teaser.

Composition: the sentence IS the section — a full-viewport statement at
display scale between body and hero, CTA link beneath it. Composed, not
stretched: anchored per art-direction.md, never small text centered in a
void.

States:
- default: teaser copy and a link visible.
- mobile: same content, reflowed for narrow width.
- reduced-motion: no variation — static content block.
- edge: none — always renders once copy.md is final.

Behavior contract:
- WHEN the section is in view, THEN SectionObserver may report it for Nav
  sync; the teaser itself performs no swap or animation.
- WHEN the link is activated, THEN the app navigates to /approach
  (PageTransition governs the transition itself).

Content slots:
- teaser text and link label: copy.md Home / Approach teaser.

Tokens used: textPrimary, accent, fontBody

Out of scope: Nav's active-item logic; not reused for Studio (out of scope,
v1).

## ContactCTA

Purpose: Home's closing section — the page's single call to action.
Appears: Home / Contact CTA.

Composition: fills the viewport as its own act, composed per
art-direction.md — heading at display scale; button sized to its label plus
padding, never full-width; content anchored deliberately, never small text
centered in a void.

States:
- default: headline, body, and one CTA button visible.
- mobile: same content, reflowed for narrow width.
- reduced-motion: no variation — static content block.
- edge: none — always renders once copy.md is final.

Behavior contract:
- WHEN the button is activated, THEN the app navigates to /contact
  (PageTransition governs the transition itself).

Content slots:
- headline, body, button label: copy.md Home / Contact CTA.

Tokens used: bgPrimary, textPrimary, accent, fontDisplay, fontBody

Out of scope: does not render on any route other than Home; Approach and
Contact have their own closing CTAs (ManifestoSection, ContactPage).

## ManifestoSection

Purpose: Approach page's full content — the manifesto text and its closing
CTA.
Appears: /approach / Manifesto.

States:
- default: three paragraphs and one CTA button visible.
- mobile: same content, reflowed for narrow width.
- reduced-motion: no variation — static content block.
- edge: none — always renders once copy.md is final.

Behavior contract:
- WHEN the button is activated, THEN the app navigates to /contact
  (PageTransition governs the transition itself).

Content slots:
- body paragraphs, button label: copy.md Approach / Manifesto.

Tokens used: bgInverse, textOnLight, accent, fontBody

Out of scope: does not include the verbatim philosophy statement (Hero-only,
appears once site-wide).

## ContactPage

Purpose: Contact page's full content — invitation copy plus the two ways to
reach ThunderHouse.
Appears: /contact / Contact.

States:
- default: headline, body, a primary booking link, and a secondary WhatsApp
  link all visible.
- mobile: same content, reflowed for narrow width.
- reduced-motion: no variation — static content block.
- edge: booking or WhatsApp destination not configured — that link is
  omitted rather than rendered broken.

Behavior contract:
- WHEN the primary link is activated, THEN the visitor is taken to the
  booking destination (URL supplied outside site copy, not hardcoded).
- WHEN the secondary link is activated, THEN the visitor is taken to a
  manual WhatsApp conversation (URL supplied outside site copy, not
  hardcoded) — no chatbot (deferred, see sitemap out-of-scope note).

Content slots:
- headline, body, primary/secondary link labels: copy.md Contact / Contact.

Tokens used: bgPrimary, textPrimary, accent, accentHover, fontBody

Out of scope: WhatsApp chat automation (deferred); storing/validating the
booking or WhatsApp URLs (build-stage configuration concern).

## Footer

Purpose: Site-wide closing bar with copyright and nav links.
Appears: Global shell, every route.

States:
- default: copyright line and nav links visible.
- mobile: same content, reflowed for narrow width.
- reduced-motion: no variation — static content block.
- edge: none — always renders once copy.md is final.

Behavior contract:
- WHEN a footer nav link is activated, THEN the app navigates to that route
  (same always-navigates rule as Nav).

Content slots:
- copyright line, nav link labels: copy.md Global / Footer.

Tokens used: bgSurface, textMuted, fontBody

Out of scope: does not duplicate Nav's active-state syncing; footer links
never show a highlight state.
