'use client';

import { motion as fmotion, useTransform, type MotionValue } from 'framer-motion';

// One element in a scroll-progress-driven sequence. Its opacity and lift are
// a deterministic function of the section's scroll progress over [start,
// end], clamped — so any scroll speed, wheel/trackpad, or keyboard scroll
// (space/arrows) lands the exact same state, and arriving mid-section shows
// the sequence mid-story. Only rendered when choreography is active; the
// static branch of each act renders plain children instead.
export function SequenceItem({
  progress,
  start,
  end,
  className,
  children,
}: {
  progress: MotionValue<number>;
  start: number;
  end: number;
  className?: string;
  children: React.ReactNode;
}) {
  const opacity = useTransform(progress, [start, end], [0, 1], { clamp: true });
  const y = useTransform(progress, [start, (start + end) / 2, end], [28, 6, 0], { clamp: true });

  return (
    <fmotion.div className={className} style={{ opacity, y }}>
      {children}
    </fmotion.div>
  );
}
