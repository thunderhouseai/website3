import Link from 'next/link';
import { RevealGroup } from '@/components/reveal/RevealGroup';
import { VideoSlot } from '@/components/video-slot/VideoSlot';
import { content } from '@/content/copy';
import type { Lang } from '@/lib/lang';
import { contactRoute } from '@/lib/lang';
import styles from './hero.module.css';

// Hero spec: full viewport, headline dominant at hero display scale, CTA
// above the fold, one contained glow.
export function Hero({ lang }: { lang: Lang }) {
  const c = content[lang];

  return (
    <section className={styles.hero} aria-label="Intro">
      <div className={styles.glow} aria-hidden="true" />
      <RevealGroup className={styles.inner}>
        <h1 className={styles.headline}>{c.hero.headline}</h1>
        <p className={styles.subhead}>{c.hero.subhead}</p>
        <Link href={contactRoute(lang)} className={styles.cta}>
          {c.hero.cta}
        </Link>
      </RevealGroup>
      <VideoSlot />
    </section>
  );
}
