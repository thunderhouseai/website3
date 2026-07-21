import Link from 'next/link';
import { footer, navLabels } from '@/content/copy';
import styles from './footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>{footer.copyright}</p>
      <nav aria-label="Footer">
        <Link href="/approach">{navLabels.approach}</Link>
        <Link href="/contact">{navLabels.contact}</Link>
      </nav>
    </footer>
  );
}
