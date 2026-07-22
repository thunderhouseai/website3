import Link from 'next/link';
import { RevealGroup } from '@/components/reveal/RevealGroup';
import { content } from '@/content/copy';
import type { Lang } from '@/lib/lang';
import { contactRoute } from '@/lib/lang';
import styles from './final-cta.module.css';

// FinalCTA spec: the page's single closing CTA — one button sized to its
// label, never full-width.
export function FinalCTA({ lang }: { lang: Lang }) {
  const c = content[lang];

  return (
    <section className={styles.cta} aria-label={c.finalCta.headline}>
      <div className={styles.glow} aria-hidden="true" />
      <RevealGroup className={styles.inner}>
        <h2 className={styles.headline}>{c.finalCta.headline}</h2>
        <p className={styles.body}>{c.finalCta.body}</p>
        <Link href={contactRoute(lang)} className={styles.button}>
          {c.finalCta.cta}
        </Link>
      </RevealGroup>
    </section>
  );
}
