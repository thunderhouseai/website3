'use client';

import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { SequenceItem } from '@/components/choreography/SequenceItem';
import { content } from '@/content/copy';
import { useChoreographyActive } from '@/lib/use-choreography';
import type { Lang } from '@/lib/lang';
import styles from './how-it-works.module.css';

// HowItWorks spec: the engagement model presented sequentially with scroll
// progress; the act holds while steps present, then releases. Static branch
// (SSR / JS-off / reduced-motion) is a plain ordered list.
export function HowItWorks({ lang }: { lang: Lang }) {
  const c = content[lang];
  const active = useChoreographyActive();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  const stepLabel = (index: number) => String(index + 1).padStart(2, '0');
  const rangeFor = (index: number, total: number): [number, number] => {
    // Even sub-ranges across the middle of the hold, with lead-in/out.
    const span = 0.82 / total;
    const start = 0.06 + index * span;
    return [start, start + span * 0.75];
  };

  const stepInner = (step: string, index: number) => (
    <>
      <span className={styles.stepNumber} aria-hidden="true">
        {stepLabel(index)}
      </span>
      <span className={styles.stepText}>{step}</span>
    </>
  );

  if (!active) {
    return (
      <section className={styles.how} aria-label={c.howItWorks.header}>
        <h2 className={styles.header}>{c.howItWorks.header}</h2>
        <ol className={styles.steps}>
          {c.howItWorks.steps.map((step, index) => (
            <li key={step.slice(0, 24)} className={styles.step}>
              {stepInner(step, index)}
            </li>
          ))}
        </ol>
      </section>
    );
  }

  return (
    <section ref={trackRef} className={styles.track} aria-label={c.howItWorks.header}>
      <div className={styles.sticky}>
        <h2 className={styles.header}>{c.howItWorks.header}</h2>
        <ol className={styles.steps}>
          {c.howItWorks.steps.map((step, index) => {
            const [start, end] = rangeFor(index, c.howItWorks.steps.length);
            return (
              <li key={step.slice(0, 24)}>
                <SequenceItem
                  progress={scrollYProgress}
                  start={start}
                  end={end}
                  className={styles.step}
                >
                  {stepInner(step, index)}
                </SequenceItem>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
