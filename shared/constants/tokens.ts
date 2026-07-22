// Design constants — canonical for code (emitted by stage 03 v2).
// Colors, typography, spacing, display type, and the placeholder-background
// treatment mirror _config/design-tokens.md 1:1. Motion values were approved
// at the stage 03 v2 checkpoint (durationReveal/durationPivot) and are
// mirrored back into design-tokens.md's motion table per that ruling.
// Retired with the v1 LOUD behaviors (see tag v1-loud-attempt): durationPage,
// durationPageReduced, durationBackgroundDrift.

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
  scaleRatio: 1.333,
  baseFontSize: 16,
  headlineWeight: 700,
} as const;

// Viewport-relative display sizes. clamp() keeps them from overflowing on
// narrow/short viewports without separate mobile overrides. Spanish is the
// sizing reference site-wide: containers must fit the longer rendering.
export const displayScale = {
  heroHeadline: 'clamp(2.75rem, 6vw + 1.5rem, 8rem)',
  moduleTitle: 'clamp(2.5rem, 5.5vw + 1.5rem, 7rem)',
  statement: 'clamp(1.75rem, 3vw + 1rem, 4.25rem)',
} as const;

// Placeholder background treatment (design-tokens.md + art-direction.md):
// bg-primary base + ONE low-opacity amber radial glow per view, anchored to
// an edge or corner. Views differ by glow position/size (compositional, in
// component styling), never hue. Never blend amber into navy across a full
// field.
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
  durationReveal: 600,
  durationPivot: 900,
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
