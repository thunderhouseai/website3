'use client';

import { motion as fmotion } from 'framer-motion';
import { toFramerEasing, useReducedMotion } from '@/lib/motion';
import { motion as motionTokens } from '@/lib/tokens';

// Shared scroll-reveal contract (RevealGroup spec): reveals once when the
// group enters view, then rests permanently. viewport.once means direct or
// restored-scroll entry mid-page never replays acts above (Behavior 1).
// Reduced motion: no travel — content renders in place. The `strength`
// prop lets PivotBeat consume the same contract at its longer duration.
export function RevealGroup({
  children,
  strength = 'reveal',
  className,
}: {
  children: React.ReactNode;
  strength?: 'reveal' | 'pivot';
  className?: string;
}) {
  const reduced = useReducedMotion();
  const durationMs = strength === 'pivot' ? motionTokens.durationPivot : motionTokens.durationReveal;
  const travel = strength === 'pivot' ? 48 : 24;

  return (
    <fmotion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: travel, scale: strength === 'pivot' ? 0.96 : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: durationMs / 1000, ease: toFramerEasing(motionTokens.easingStandard) }}
    >
      {children}
    </fmotion.div>
  );
}
