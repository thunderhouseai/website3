'use client';

import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { SequenceItem } from '@/components/choreography/SequenceItem';
import { content } from '@/content/copy';
import { useChoreographyActive } from '@/lib/use-choreography';
import type { Lang } from '@/lib/lang';
import styles from './pain-mirror.module.css';

// PainMirror spec: kicker + four beats revealing in sequence tied to scroll
// progress; the act holds (sticky) while they present, then releases.
// Static branch (SSR / JS-off / reduced-motion) is a plain, complete list.
export function PainMirror({ lang }: { lang: Lang }) {
  const c = content[lang];
  const active = useChoreographyActive();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  // Four beats spaced across the hold, with lead-in and lead-out.
  const ranges: Array<[number, number]> = [
    [0.08, 0.24],
    [0.28, 0.44],
    [0.48, 0.64],
    [0.68, 0.84],
  ];

  if (!active) {
    return (
      <section className={styles.mirror} aria-label={c.painMirror.kicker}>
        <p className={styles.kicker}>{c.painMirror.kicker}</p>
        <ul className={styles.beats}>
          {c.painMirror.beats.map((beat) => (
            <li key={beat.slice(0, 24)} className={styles.beat}>
              <span className={styles.mark} aria-hidden="true" />
              <span>{beat}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section ref={trackRef} className={styles.track} aria-label={c.painMirror.kicker}>
      <div className={styles.sticky}>
        <p className={styles.kicker}>{c.painMirror.kicker}</p>
        <ul className={styles.beats}>
          {c.painMirror.beats.map((beat, i) => (
            <li key={beat.slice(0, 24)}>
              <SequenceItem
                progress={scrollYProgress}
                start={ranges[i][0]}
                end={ranges[i][1]}
                className={styles.beat}
              >
                <span className={styles.mark} aria-hidden="true" />
                <span>{beat}</span>
              </SequenceItem>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
