import {
  breakpoints,
  colors,
  displayScale,
  motion,
  placeholderBackground,
  scroll,
  spacing,
  typography,
} from './tokens';

function px(value: number) {
  return `${value}px`;
}

// "254 162 4" form so CSS composes the glow at token opacity via
// `rgb(var(--glow-rgb) / var(--glow-opacity))` without a literal hex.
function hexToRgbTriplet(hex: string): string {
  const value = hex.replace('#', '');
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `${r} ${g} ${b}`;
}

/**
 * Every color/type/spacing/motion value flows through these CSS custom
 * properties, generated once from tokens.ts and injected in the root
 * layouts. Component CSS Modules only reference var(--...) — never a
 * literal hex/px-font-size/ms — so tokens.ts stays the single source.
 */
export function buildCssVariables(): Record<string, string> {
  const base = typography.baseFontSize;
  const ratio = typography.scaleRatio;

  return {
    '--color-bg-primary': colors.bgPrimary,
    '--color-bg-surface': colors.bgSurface,
    '--color-bg-inverse': colors.bgInverse,
    '--color-text-primary': colors.textPrimary,
    '--color-text-muted': colors.textMuted,
    '--color-text-on-light': colors.textOnLight,
    '--color-accent': colors.accent,
    '--color-accent-hover': colors.accentHover,
    '--color-accent-gradient-start': colors.accentGradient[0],
    '--color-accent-gradient-end': colors.accentGradient[1],

    '--font-weight-headline': String(typography.headlineWeight),
    '--fs-small': px(base / ratio),
    '--fs-body': px(base),
    '--fs-h3': px(base * ratio),
    '--fs-h2': px(base * ratio * ratio),
    '--fs-h1': px(base * ratio * ratio * ratio),
    '--fs-display-hero': displayScale.heroHeadline,
    '--fs-display-module-title': displayScale.moduleTitle,
    '--fs-display-statement': displayScale.statement,

    '--glow-rgb': hexToRgbTriplet(placeholderBackground.glowColor),
    '--glow-opacity': String(placeholderBackground.glowOpacity),

    '--space-unit': px(spacing.spaceUnit),
    '--nav-height': px(spacing.navHeight),
    '--gutter': '5vw',

    '--duration-fast': `${motion.durationFast}ms`,
    '--duration-reveal': `${motion.durationReveal}ms`,
    '--duration-pivot': `${motion.durationPivot}ms`,
    '--easing-standard': motion.easingStandard,
    '--easing-micro': motion.easingMicro,

    // Scroll-choreography track heights (viewport-height distance each
    // sticky act holds). --scroll-mobile-scale shortens them in the mobile
    // media query via calc(var(--track) * var(--scroll-mobile-scale)).
    '--scroll-module-hold': `${scroll.moduleHoldVh}vh`,
    '--scroll-sequence-hold': `${scroll.sequenceHoldVh}vh`,
    '--scroll-pivot-hold': `${scroll.pivotHoldVh}vh`,
    '--scroll-mobile-scale': String(scroll.mobileHoldScale),

    '--breakpoint-mobile': px(breakpoints.mobile),
  };
}

export function cssVariablesString(): string {
  return `:root{${Object.entries(buildCssVariables())
    .map(([key, value]) => `${key}:${value}`)
    .join(';')}}`;
}
