'use client';

import { AnimatePresence, motion as fmotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { motion as motionTokens } from '@/lib/tokens';
import { toFramerEasing, useReducedMotion } from '@/lib/motion';

// mode="sync" (framer-motion's default): the entering page starts animating
// immediately alongside the exiting one, rather than waiting for the exit to
// finish first. That's what makes a rapid second navigation retarget instead
// of queuing behind the first (Behavior 2's interruption rule).
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const durationMs = reduced ? motionTokens.durationPageReduced : motionTokens.durationPage;

  return (
    <AnimatePresence mode="sync" initial={false}>
      <fmotion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: durationMs / 1000, ease: toFramerEasing(motionTokens.easingStandard) }}
      >
        {children}
      </fmotion.div>
    </AnimatePresence>
  );
}
