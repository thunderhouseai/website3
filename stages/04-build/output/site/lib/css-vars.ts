import {
  breakpoints,
  colors,
  displayScale,
  motion,
  placeholderBackground,
  spacing,
  typography,
} from './tokens';

function px(value: number) {
  return `${value}px`;
}

// "254 162 4" form so CSS can compose the glow at token opacity via
// `rgb(var(--glow-rgb) / var(--glow-opacity))` without a literal hex.
function hexToRgbTriplet(hex: string): string {
  const value = hex.replace('#', '');
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `${r} ${g} ${b}`;
}

/**
 * Every color/type/spacing/motion value the site uses flows through these CSS
 * custom properties, generated once from tokens.ts and injected in the root
 * layout. Component CSS Modules only ever reference var(--...) — never a
 * literal hex/px/ms — so tokens.ts stays the single source of truth.
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

    '--font-display': typography.fontDisplay,
    '--font-body': typography.fontBody,
    '--font-weight-headline': String(typography.headlineWeight),
    '--fs-small': px(base / ratio),
    '--fs-body': px(base),
    '--fs-h3': px(base * ratio),
    '--fs-h2': px(base * ratio * ratio),
    '--fs-h1': px(base * ratio * ratio * ratio),
    '--fs-display-hero': displayScale.heroHeadline,
    '--fs-display-pillar-title': displayScale.pillarTitle,
    '--fs-display-statement': displayScale.statement,

    '--glow-rgb': hexToRgbTriplet(placeholderBackground.glowColor),
    '--glow-opacity': String(placeholderBackground.glowOpacity),

    '--space-unit': px(spacing.spaceUnit),
    '--nav-height': px(spacing.navHeight),
    '--gutter': '5vw',

    '--duration-fast': `${motion.durationFast}ms`,
    '--duration-page': `${motion.durationPage}ms`,
    '--duration-page-reduced': `${motion.durationPageReduced}ms`,
    '--duration-background-drift': `${motion.durationBackgroundDrift}ms`,
    '--easing-standard': motion.easingStandard,
    '--easing-micro': motion.easingMicro,

    '--breakpoint-mobile': px(breakpoints.mobile),
  };
}
