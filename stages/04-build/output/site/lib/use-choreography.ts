'use client';

import { useSyncExternalStore } from 'react';
import { useReducedMotion } from 'framer-motion';

// Scroll choreography is a progressive enhancement over a fully-readable
// static base. Every choreographed act renders its static, normal-flow
// version on the server, at first paint, with JS disabled, AND under
// prefers-reduced-motion. Only when this returns true does the act switch
// to its sticky, scroll-progress-driven form.
//
// Why mount-gating is visually seamless: every choreographed act sits below
// the fold, so the static→choreographed swap happens before the visitor
// ever scrolls it into view. The hero (above the fold) is not gated this
// way — it recedes from opacity 1, so progress 0 already matches its static
// state and there is no jump.
//
// The mount flag uses useSyncExternalStore (server snapshot false, client
// snapshot true) rather than setState-in-effect: hydration-safe and free of
// cascading-render lint warnings.
const emptySubscribe = () => () => {};

export function useChoreographyActive(): boolean {
  const reduced = useReducedMotion();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  return mounted && !reduced;
}
