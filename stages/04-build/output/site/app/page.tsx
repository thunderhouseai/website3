import type { Metadata } from 'next';
import { ContactCTA } from '@/components/contact-cta/ContactCTA';
import { Hero } from '@/components/hero/Hero';
import { ActivePillar } from '@/components/pillar-block/ActivePillar';
import { ApproachTeaser } from '@/components/section-teaser/ApproachTeaser';
import { meta, pillarsIntro } from '@/content/copy';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: meta.home.title,
  description: meta.home.description,
};

// The pillars section's act is the committed PillarBlock itself (via
// ActivePillar) — it brings its own per-pillar background treatment, so no
// section-level SectionBackground here. The selector list lives in the
// shell's bottom-left dock, not in this section.
export default function HomePage() {
  return (
    <div className={styles.home}>
      <Hero />
      <section className={styles.pillars} aria-label="Pillars">
        <p className={styles.pillarsIntro}>{pillarsIntro}</p>
        <ActivePillar />
      </section>
      <ApproachTeaser />
      <ContactCTA />
    </div>
  );
}
