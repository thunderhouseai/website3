import Link from 'next/link';
import { content } from '@/content/copy';
import type { Lang } from '@/lib/lang';
import { contactRoute } from '@/lib/lang';
import styles from './footer.module.css';

export function Footer({ lang }: { lang: Lang }) {
  const c = content[lang];

  return (
    <footer className={styles.footer}>
      <p>{c.footer.copyright}</p>
      <Link href={contactRoute(lang)} className={styles.link}>
        {c.footer.link}
      </Link>
    </footer>
  );
}
