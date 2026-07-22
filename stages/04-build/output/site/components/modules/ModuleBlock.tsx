'use client';

import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { SequenceItem } from '@/components/choreography/SequenceItem';
import type { ModuleContent } from '@/content/copy';
import { useChoreographyActive } from '@/lib/use-choreography';
import styles from './modules.module.css';

// ModuleBlock spec + choreography: each module holds (sticks) while its text
// advances (number → name → keywords → paragraph by scroll progress) and
// the visual slot holds steady; then it releases and the next module's
// sticky covers it — the 01→05 guided walk. Static branch (SSR / JS-off /
// reduced-motion) is a plain full-height card, fully readable.
export function ModuleBlock({ module, index }: { module: ModuleContent; index: number }) {
  const active = useChoreographyActive();
  const trackRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  const visual = (
    <div className={styles.visual} aria-hidden="true">
      <div className={styles.visualMark} />
    </div>
  );

  if (!active) {
    return (
      <article className={styles.block} data-module={index}>
        <div className={styles.blockGlow} aria-hidden="true" />
        <p className={styles.number} aria-hidden="true">
          {module.number}
        </p>
        <h3 className={styles.name}>{module.name}</h3>
        <p className={styles.keywords}>{module.keywords.join(', ')}</p>
        <p className={styles.paragraph}>{module.paragraph}</p>
        {visual}
      </article>
    );
  }

  return (
    <article ref={trackRef} className={styles.track} data-module={index}>
      <div className={styles.sticky}>
        <div className={styles.blockGlow} aria-hidden="true" />
        <div className={styles.grid}>
          <div className={styles.textCol}>
            <SequenceItem progress={scrollYProgress} start={0.06} end={0.2} className={styles.number}>
              <span aria-hidden="true">{module.number}</span>
            </SequenceItem>
            <SequenceItem progress={scrollYProgress} start={0.16} end={0.34}>
              <h3 className={styles.name}>{module.name}</h3>
            </SequenceItem>
            <SequenceItem progress={scrollYProgress} start={0.3} end={0.46}>
              <p className={styles.keywords}>{module.keywords.join(', ')}</p>
            </SequenceItem>
            <SequenceItem progress={scrollYProgress} start={0.42} end={0.6}>
              <p className={styles.paragraph}>{module.paragraph}</p>
            </SequenceItem>
          </div>
          {visual}
        </div>
      </div>
    </article>
  );
}
