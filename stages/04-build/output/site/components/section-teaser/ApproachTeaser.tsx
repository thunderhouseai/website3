'use client';

import Link from 'next/link';
import { SectionBackground } from '@/components/section-background/SectionBackground';
import { approachTeaser } from '@/content/copy';
import { useRegisterSection } from '@/lib/use-section-observer';
import styles from './section-teaser.module.css';

// Registers with SectionObserver so Nav can highlight "Approach" while this
// is in view. The teaser itself never swaps content or animates on its own.
export function ApproachTeaser() {
  const ref = useRegisterSection('approach');

  return (
    <section ref={ref} className={styles.teaser} aria-label="Approach preview">
      <SectionBackground variant="teaser" />
      <p>{approachTeaser.text}</p>
      <Link href="/approach" className={styles.link}>
        {approachTeaser.linkLabel} →
      </Link>
    </section>
  );
}
