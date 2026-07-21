import { SectionBackground } from '@/components/section-background/SectionBackground';
import { hero } from '@/content/copy';
import styles from './hero.module.css';

// The philosophy line is verbatim and appears exactly once, site-wide — here.
export function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <SectionBackground variant="hero" />
      <h1 className={styles.headline}>{hero.headline}</h1>
      <p className={styles.subhead}>{hero.subhead}</p>
      <blockquote className={styles.philosophy}>{hero.philosophy}</blockquote>
    </section>
  );
}
