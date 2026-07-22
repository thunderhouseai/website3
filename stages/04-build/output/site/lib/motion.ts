export { useReducedMotion } from 'framer-motion';
import type { Easing } from 'framer-motion';

// tokens.ts stores easing as CSS timing-function keywords (consumed
// directly by CSS Modules). Framer Motion wants camelCase keywords, so
// this maps token values for JS-driven motion without a second, divergent
// easing token.
const FRAMER_EASING: Record<string, Easing> = {
  'ease-out': 'easeOut',
  'ease-in-out': 'easeInOut',
  'ease-in': 'easeIn',
  linear: 'linear',
};

export function toFramerEasing(cssEasing: string): Easing {
  return FRAMER_EASING[cssEasing] ?? 'easeOut';
}
