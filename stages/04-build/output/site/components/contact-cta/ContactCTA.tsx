'use client';

import Link from 'next/link';
import { SectionBackground } from '@/components/section-background/SectionBackground';
import { homeContactCta } from '@/content/copy';
import { useRegisterSection } from '@/lib/use-section-observer';
import styles from './contact-cta.module.css';

// Home's single closing CTA. Registers with SectionObserver so Nav can
// highlight "Contact" while this is in view.
export function ContactCTA() {
  const ref = useRegisterSection('contact');

  return (
    <section ref={ref} className={styles.cta} aria-label="Contact">
      <SectionBackground variant="cta" />
      <h2 className={styles.headline}>{homeContactCta.headline}</h2>
      <p className={styles.body}>{homeContactCta.body}</p>
      <Link href="/contact" className={styles.button}>
        {homeContactCta.buttonLabel}
      </Link>
    </section>
  );
}
