// Single import path for reduced-motion detection (build-conventions: "prefers-reduced-motion
// implemented globally once, consumed per component"). Every component reads it from here,
// never calls matchMedia or framer-motion's hook directly.
export { useReducedMotion } from 'framer-motion';
import type { Easing } from 'framer-motion';

// tokens.ts stores easing as CSS timing-function keywords (used directly in
// CSS Modules' `transition:` declarations). Framer-motion's `ease` prop wants
// its own camelCase keywords, so this maps token values for JS-driven motion
// without introducing a second, divergent easing token.
const FRAMER_EASING: Record<string, Easing> = {
  'ease-out': 'easeOut',
  'ease-in-out': 'easeInOut',
  'ease-in': 'easeIn',
  linear: 'linear',
};

export function toFramerEasing(cssEasing: string): Easing {
  return FRAMER_EASING[cssEasing] ?? 'easeOut';
}
