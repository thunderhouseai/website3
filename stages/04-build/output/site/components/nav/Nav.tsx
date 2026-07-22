import Link from 'next/link';
import { LanguageSwitcher } from '@/components/language-switcher/LanguageSwitcher';
import { content } from '@/content/copy';
import type { Lang } from '@/lib/lang';
import { contactRoute, homeRoute } from '@/lib/lang';
import styles from './nav.module.css';

// Nav spec: three elements only — wordmark, switcher, CTA. No section
// links, no menu; everything stays visible at every width.
export function Nav({ lang }: { lang: Lang }) {
  const c = content[lang];

  return (
    <nav className={styles.nav} aria-label="Primary">
      <Link href={homeRoute(lang)} className={styles.wordmark}>
        {c.nav.wordmark}
      </Link>
      <div className={styles.right}>
        <LanguageSwitcher lang={lang} />
        <Link href={contactRoute(lang)} className={styles.cta}>
          {c.nav.cta}
        </Link>
      </div>
    </nav>
  );
}
