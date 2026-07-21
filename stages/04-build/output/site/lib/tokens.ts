// Design constants — canonical for code.
// Colors, typography, and spacing mirror _config/design-tokens.md 1:1.
// Motion (durations/easings), breakpoints, and displayScale have no
// _config source — durationPage/durationPageReduced come from the stage 01
// behavior decomposition (route transitions, Behavior 2); durationFast,
// easings, and the mobile breakpoint were proposed at the stage 03
// checkpoint and confirmed there. displayScale and durationBackgroundDrift
// were added in the post-launch composition revision (stage 03 amendment:
// Hero/PillarBlock need viewport-relative "huge" display type; Behavior 4's
// background drift needed a duration distinct from page-transition timing).

export const colors = {
  bgPrimary: '#0A1628',
  bgSurface: '#112549',
  bgInverse: '#FDFAF9',
  textPrimary: '#F5F2ED',
  textMuted: '#8FA0BD',
  textOnLight: '#112549',
  accent: '#FEA204',
  accentHover: '#F97405',
  accentGradient: ['#F9D406', '#F97405'],
} as const;

export const typography = {
  fontDisplay: 'Montserrat',
  fontBody: 'Poppins',
  // Bumped from 1.25 in the composition revision so section headings (h1-h3)
  // step up proportionally now that Hero/PillarBlock use displayScale below.
  scaleRatio: 1.333,
  baseFontSize: 16,
  headlineWeight: 700,
} as const;

// Viewport-relative "huge" display sizes — LOUD-style scale that the fixed
// px modular scale above can't express. clamp() keeps them from overflowing
// on narrow/short viewports without a separate mobile override. `statement`
// sits between body and hero for full-viewport sentences (teaser, CTA
// heading) per the round-2 composition amendment.
export const displayScale = {
  heroHeadline: 'clamp(2.75rem, 6vw + 1.5rem, 8rem)',
  pillarTitle: 'clamp(2.5rem, 5.5vw + 1.5rem, 7rem)',
  statement: 'clamp(1.75rem, 3vw + 1rem, 4.25rem)',
} as const;

// Placeholder background treatment (design-tokens.md + art-direction.md):
// bg-primary base + ONE low-opacity amber radial glow per view, anchored to
// an edge or corner. Pillars differ by glow position/size (compositional,
// lives in each component's CSS), never hue. Gradient rule: never blend
// amber into navy across a full field — glows stay contained.
export const placeholderBackground = {
  glowColor: colors.accent,
  glowOpacity: 0.15,
} as const;

export const spacing = {
  spaceUnit: 8,
  maxWidth: 'full-bleed with 5vw gutters',
  navHeight: 80,
} as const;

export const motion = {
  durationFast: 150,
  durationPage: 400,
  durationPageReduced: 150,
  // Behavior 4: "very slow scale drift... subtle enough to be missed if
  // you're not looking." Distinct from page-transition timing above.
  durationBackgroundDrift: 20000,
  easingStandard: 'ease-out',
  easingMicro: 'ease-in-out',
} as const;

export const breakpoints = {
  mobile: 768,
} as const;

export type Colors = typeof colors;
export type Typography = typeof typography;
export type DisplayScale = typeof displayScale;
export type PlaceholderBackground = typeof placeholderBackground;
export type Spacing = typeof spacing;
export type Motion = typeof motion;
export type Breakpoints = typeof breakpoints;
