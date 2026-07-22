'use client';

import { motion as fmotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { content } from '@/content/copy';
import { useChoreographyActive } from '@/lib/use-choreography';
import type { Lang } from '@/lib/lang';
import styles from './pivot-beat.module.css';

// PivotBeat spec: the philosophy line — protected verbatim, its only
// appearance site-wide. Builds to full emphasis with scroll progress, holds
// briefly at full emphasis (the punch the reference earns), then releases
// back into flow as the sticky track ends. Native scroll never trapped.
// Static branch (SSR / JS-off / reduced-motion) is the isolated line.
export function PivotBeat({ lang }: { lang: Lang }) {
  const active = useChoreographyActive();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  // Build (0→0.4), hold full (0.4→0.72), ease out slightly as it releases.
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.72, 1], [0, 1, 1, 0.85]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.92, 1], { clamp: true });

  const line = content[lang].philosophy;

  if (!active) {
    return (
      <section className={styles.pivot} aria-label="Philosophy">
        <div className={styles.glow} aria-hidden="true" />
        <blockquote className={styles.line}>{line}</blockquote>
      </section>
    );
  }

  return (
    <section ref={trackRef} className={styles.track} aria-label="Philosophy">
      <div className={styles.sticky}>
        <div className={styles.glow} aria-hidden="true" />
        <fmotion.blockquote className={styles.line} style={{ opacity, scale }}>
          {line}
        </fmotion.blockquote>
      </div>
    </section>
  );
}
