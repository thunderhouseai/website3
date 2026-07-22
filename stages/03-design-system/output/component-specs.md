# Component specs — site-production v2 (Patch reference)

Global rules for every spec below: all content slots resolve through the
content layer in BOTH languages (EN/ES) — no hardcoded text; Spanish is the
sizing reference (containers/type must fit the longer rendering, no
per-language size hacks); quality floor per spec-conventions.md (contrast,
44px tap targets, focus-visible, keyboard operability).

## Shell

Purpose: Persistent chrome — Nav, WhatsAppButton, Footer — around the
route content; nothing remounts on route or language change.
Appears: every route (/, /contact, /es, /es/contacto).

States:
- default: chrome + current route content.
- mobile: same regions, tighter spacing.
- reduced-motion: no difference in Shell itself; children adapt.
- edge: first paint — chrome renders immediately even if content lags.

Behavior contract:
- WHEN the route or language changes, THEN chrome persists with no remount
  or flash (Behavior 7, 8).
- WHEN the language offer is active, THEN it renders without covering any
  CTA (Behavior 8).

Content slots: none (structural).

Tokens used: bgPrimary, navHeight

Out of scope: reveal mechanics (RevealGroup); language logic
(LanguageSwitcher).

## Nav

Purpose: Fixed top bar — wordmark, LanguageSwitcher, Book-a-call button.
No section links, no menu (art-direction restraint; three elements only).
Appears: global shell, every route.

States:
- default: wordmark left; switcher + CTA right; all always visible.
- mobile: same three elements, tighter — nothing collapses into a menu.
- reduced-motion: no animated states of its own.
- edge: none.

Behavior contract:
- WHEN the CTA is activated, THEN navigate to the active language's
  contact route (Behavior 7).
- WHEN the page scrolls, THEN the bar stays fixed; content passes beneath.

Content slots:
- wordmark, CTA label: copy.md Global / Nav (content layer, EN/ES).

Tokens used: bgPrimary, textPrimary, accent, navHeight, fontBody,
durationFast

Out of scope: switcher internals (LanguageSwitcher).

## LanguageSwitcher

Purpose: EN/ES control — swaps to the mirrored URL preserving place,
persists the choice, and runs the dismissible return-visitor offer.
Appears: Nav, every route, always visible, never inside a menu.

States:
- default: the URL's language marked active.
- switching: mirrored URL loads without a full-reload feel.
- offer: saved preference differs from URL language and the offer was
  never dismissed — a quiet inline offer in the visitor's saved language.
- offer-dismissed: dismissal persisted; the offer never returns.
- mobile: same visibility. reduced-motion: instant swap, offer static.

Behavior contract:
- WHEN the other language is selected, THEN the mirrored URL loads with
  the visitor's place preserved (/ ⇄ /es, /contact ⇄ /es/contacto) and the
  choice is persisted (Behavior 8).
- WHEN any direct link is opened, THEN the URL's language loads — no
  exceptions, never a redirect (Behavior 8, checkpoint ruling 1).
- WHEN the offer is dismissed, THEN dismissal persists — never re-offered.

Content slots:
- language labels, offer text, dismiss label: copy.md Global / Language
  offer (content layer, EN/ES).

Tokens used: accent, textPrimary, textMuted, fontBody, durationFast

Out of scope: lang/hreflang plumbing (stage 04); auto-redirects (banned).

## RevealGroup

Purpose: Shared contract for scroll-triggered reveals — an element group
reveals once when its section enters view, then rests permanently.
Appears: every narrative act on / and /es.

States:
- unrevealed: below the viewport, not yet entered.
- revealed: permanent resting state.
- mobile: shorter travel. reduced-motion: renders revealed, no travel.
- edge: direct/anchor entry mid-page — that act and those above render
  revealed instantly; nothing replays.

Behavior contract:
- WHEN a group's section enters view, THEN its reveal plays once within
  durationReveal (Behavior 1).
- WHEN animations or scripting are unavailable, THEN all content is fully
  readable in place (motion-spec global rule).

Content slots: none (wraps consumers).

Tokens used: durationReveal, easingStandard

Out of scope: the pivot's stronger moment (PivotBeat); what each act
reveals (per-act specs).

## Hero

Purpose: Opening act — dominant headline, subhead, VideoSlot, primary CTA.
Appears: / and /es, first act.

Composition: full viewport; headline at hero display scale is the dominant
element; CTA visible without scrolling; bold energy, premium restraint.

States:
- default: headline, subhead, video poster, CTA all visible.
- mobile: stacked; poster sized down; CTA still above the fold.
- reduced-motion: content static; reveal collapses.
- edge: none — static content once copy.md is final.

Behavior contract:
- WHEN the page loads, THEN the hero is visible without scroll and the CTA
  is above the fold (Behavior 7).
- WHEN the CTA is activated, THEN navigate to the active language's
  contact route (Behavior 7).

Content slots:
- headline, subhead, CTA label: copy.md Home / Hero (content layer, EN/ES).

Tokens used: bgPrimary, textPrimary, accent, fontDisplay, headlineWeight,
displayHero, glowColor, glowOpacity, durationReveal

Out of scope: video mechanics (VideoSlot).

## VideoSlot

Purpose: Reserved hero video region; a designed poster frame from the
brand palette is the finished state until real video exists.
Appears: Hero, / and /es.

States:
- poster (default): designed frame — never an empty or broken player.
- video-present (future): plays only on user action; never autoplays with
  sound.
- mobile: poster scaled, dimensions defined (no layout shift).
- reduced-motion: no ambient poster motion.
- edge: scripting unavailable — poster still shows.

Behavior contract:
- WHEN no video is configured, THEN the poster renders as a finished
  designed element (Behavior 9).
- WHEN real video is configured later, THEN it occupies the slot without a
  rebuild or layout shift (Behavior 9).

Content slots: none (poster is a designed asset from palette tokens, not
copy).

Tokens used: bgSurface, glowColor, glowOpacity, spaceUnit

Out of scope: video hosting/format; captions (future run, with the video).

## PainMirror

Purpose: Names the owner's reality — kicker plus four beats landing in
sequence, one small mark per beat.
Appears: / and /es, second act.

States:
- default: kicker + all four beats, revealed in order.
- mobile: beats stack full-width, same order.
- reduced-motion: all beats visible immediately as a plain list.
- edge: scripting unavailable — reads as a complete list.

Behavior contract:
- WHEN the act enters view, THEN beats reveal in sequence (Behavior 2 via
  Behavior 1).
- WHEN reduced motion is active, THEN no sequencing — everything visible.

Content slots:
- kicker, beats 1–4: copy.md Home / Pain mirror (content layer, EN/ES).

Tokens used: textPrimary, textMuted, accent, fontBody, durationReveal

Out of scope: the pivot moment (PivotBeat); beat copy (stage 02).

## PivotBeat

Purpose: The hard turn — the philosophy line, verbatim, held alone; the
page's single strongest reveal.
Appears: / and /es, between PainMirror and ModulesSection.

States:
- default: the line isolated and dominant; nothing else competes.
- mobile: same isolation; never crowded by neighboring acts.
- reduced-motion: static, still isolated and dominant.
- edge: scripting unavailable — the line is fully readable.

Behavior contract:
- WHEN the act enters view, THEN the line reveals as the page's most
  emphatic moment within durationPivot — native scroll untouched, no
  pinning (Behavior 3, checkpoint ruling 2).
- WHEN rendered, THEN the text matches copy.md's protected rendering for
  the active language character-for-character.

Content slots:
- philosophy line: copy.md Home / Pivot beat (content layer, EN/ES,
  VERBATIM — its only appearance site-wide).

Tokens used: textPrimary, accent, fontDisplay, headlineWeight,
displayStatement, durationPivot, easingStandard

Out of scope: any other appearance of the line (forbidden); scroll
pinning (forbidden).

## ModulesSection

Purpose: Orders the five ModuleBlocks 01–05 under the section header —
the finite-system walkthrough.
Appears: / and /es.

States:
- default: header + five blocks in fixed order.
- mobile: blocks stack, numbering intact.
- reduced-motion: static, in order.
- edge: every module reachable by scroll alone — none behind interaction.

Behavior contract:
- WHEN the visitor scrolls, THEN modules appear 01 → 05, each revealing on
  its own entry (Behavior 4 via Behavior 1).

Content slots:
- section header: copy.md Home / Modules (content layer, EN/ES).

Tokens used: bgPrimary, textPrimary, fontDisplay, spaceUnit

Out of scope: per-module anatomy (ModuleBlock).

## ModuleBlock

Purpose: Template for one module — number, name, exactly three keywords,
one ≤60-word paragraph, visual slot. Shared by all five.
Appears: ModulesSection, five instances.

Composition: number as a large quiet element; name at module-title display
scale; keywords as an accent line; paragraph in a defined block; one glow
per view — position/size varies per module, hue never does.

States:
- default: all five elements visible.
- mobile: full-width stack; visual slot arrangement is stage 04's choice.
- reduced-motion: static; no motion in the visual slot.
- edge: visual asset missing — designed placeholder from palette tokens,
  never a broken image.

Behavior contract:
- WHEN the block enters view, THEN contents reveal once (Behavior 4).
- WHEN either language is active, THEN the layout fits the longer
  rendering (ES sizing reference, checkpoint ruling 4).

Content slots:
- name, keywords, paragraph: copy.md Modules 01–05 (content layer, EN/ES);
  number derived from order.

Tokens used: bgPrimary, bgSurface, textPrimary, textMuted, accent,
fontDisplay, fontBody, headlineWeight, displayModuleTitle, glowColor,
glowOpacity, durationReveal

Out of scope: ordering (ModulesSection); real photography/illustration
(future assets drop into the visual slot).

## FounderProof

Purpose: Credibility act — header, two paragraphs, client-work list.
Appears: / and /es.

States:
- default: header, paragraphs, six-item list.
- mobile: stacked; the list stays scannable.
- reduced-motion: static.
- edge: none.

Behavior contract:
- WHEN the act enters view, THEN it reveals (Behavior 5 via Behavior 1).
- WHEN any text renders, THEN the amusement-industry association is never
  named — auditable, both languages (Behavior 5).

Content slots:
- header, paragraphs 1–2, list header, six client items: copy.md Home /
  Founder proof (content layer, EN/ES).

Tokens used: bgSurface, textPrimary, textMuted, accent, fontDisplay,
fontBody

Out of scope: testimonials, logo strips, marquees (banned).

## HowItWorks

Purpose: The engagement model as six plain steps; step rhythm echoes the
numbered modules.
Appears: / and /es.

States:
- default: header + six steps in order.
- mobile: steps stack in order.
- reduced-motion: static.
- edge: none.

Behavior contract:
- WHEN the act enters view, THEN steps reveal in order (Behavior 6 via
  Behavior 1).
- WHEN step 4 renders, THEN "no packages, no pressure" is present in the
  active language (Behavior 6).

Content slots:
- header, steps 1–6: copy.md Home / How it works (content layer, EN/ES).

Tokens used: textPrimary, textMuted, accent, fontDisplay, fontBody,
durationReveal

Out of scope: pricing detail (pricing tables banned).

## FinalCTA

Purpose: Closing act — the ask, one button.
Appears: / and /es, last act.

States:
- default: headline, body, one CTA button sized to its label.
- mobile: stacked.
- reduced-motion: static.
- edge: none.

Behavior contract:
- WHEN the button is activated, THEN navigate to the active language's
  contact route (Behavior 7).
- WHEN the act renders, THEN it is the page's single closing CTA.

Content slots:
- headline, body, button label: copy.md Home / Final CTA act (content
  layer, EN/ES).

Tokens used: bgPrimary, textPrimary, accent, accentHover, fontDisplay,
fontBody, displayStatement, durationFast

Out of scope: the scheduler itself (contact route).

## ContactPage

Purpose: Conversion route — headline, reassurance, CalendlyEmbed as the
single action, WhatsApp secondary line.
Appears: /contact and /es/contacto.

States:
- default: headline, body, embed, secondary line.
- mobile: embed full-width.
- reduced-motion: static.
- edge: embed failure handled by CalendlyEmbed; WhatsApp unconfigured —
  secondary line absent, not broken.

Behavior contract:
- WHEN opened directly, THEN full conversion content renders immediately
  in the URL's language, with nav and switcher present (Behaviors 7, 8).
- WHEN the secondary line is activated, THEN a manual WhatsApp
  conversation opens (Behavior 10).

Content slots:
- headline, body, WhatsApp secondary: copy.md Contact (content layer,
  EN/ES).

Tokens used: bgPrimary, textPrimary, textMuted, accent, fontDisplay,
fontBody

Out of scope: embed states (CalendlyEmbed); the floating button
(WhatsAppButton).

## CalendlyEmbed

Purpose: Embedded scheduler — the conversion action — with graceful
failure.
Appears: ContactPage, both languages.

States:
- loading: space reserved; no layout shift.
- loaded: scheduler usable in place.
- failed/blocked: fallback microcopy + plain link — never a blank region.
- unconfigured: fallback link only; the page still offers WhatsApp.
- mobile: full-width, tap targets per quality floor. reduced-motion: no
  decorative motion of its own.

Behavior contract:
- WHEN the embed loads, THEN booking completes without leaving the page
  (Behavior 7).
- WHEN the embed fails or is blocked, THEN the fallback line and direct
  link render in the active language (Behavior 7).

Content slots:
- fallback microcopy + link label: copy.md Contact / embed-failure
  fallback (content layer, EN/ES). Scheduler destination is deploy-time
  configuration, not copy.

Tokens used: bgSurface, textMuted, accent, fontBody, spaceUnit

Out of scope: the provider's internal styling; booking confirmations.

## WhatsAppButton

Purpose: Persistent floating entry to a manual WhatsApp conversation.
Appears: global shell, every route.

States:
- default: visible after one subtle entrance; then still.
- mobile: primary use case; thumb-reachable, quality-floor tap target.
- reduced-motion: appears statically.
- edge: destination unconfigured — absent, not broken.

Behavior contract:
- WHEN activated, THEN a manual WhatsApp conversation opens — the chatbot
  is deferred (Behavior 10).
- WHEN positioned, THEN defined clearance from CTAs and footer — never
  overlapping either (Behavior 10).
- WHEN the entrance plays, THEN once only; no loops (motion-spec).

Content slots:
- accessible label: copy.md Global / Floating WhatsApp button (content
  layer, EN/ES).

Tokens used: accent, accentHover, bgPrimary, durationFast, easingMicro

Out of scope: automated chat (deferred); pre-filled message text
(deploy-time configuration).

## Footer

Purpose: Closing bar — copyright plus one book-a-call link.
Appears: global shell, every route.

States:
- default: copyright + link, active language.
- mobile: stacked.
- reduced-motion: static.
- edge: none.

Behavior contract:
- WHEN the link is activated, THEN navigate to the active language's
  contact route (Behavior 7).

Content slots:
- copyright, link label: copy.md Global / Footer (content layer, EN/ES).

Tokens used: bgSurface, textMuted, fontBody

Out of scope: nav duplication; language switching (LanguageSwitcher only).
