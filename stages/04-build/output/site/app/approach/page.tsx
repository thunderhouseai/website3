import type { Metadata } from 'next';
import Link from 'next/link';
import { manifesto, meta } from '@/content/copy';
import styles from './approach.module.css';

export const metadata: Metadata = {
  title: meta.approach.title,
  description: meta.approach.description,
};

export default function ApproachPage() {
  return (
    <article className={styles.manifesto} aria-label="Manifesto">
      <div className={styles.content}>
        {manifesto.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
        <Link href="/contact" className={styles.button}>
          {manifesto.buttonLabel}
        </Link>
      </div>
    </article>
  );
}
