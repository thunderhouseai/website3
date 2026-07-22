import { RevealGroup } from '@/components/reveal/RevealGroup';
import { content } from '@/content/copy';
import type { Lang } from '@/lib/lang';
import styles from './founder-proof.module.css';

// FounderProof spec: header, two paragraphs, six-item client list. No
// testimonials, no logo strips, no marquees. The association is never
// named — the content layer carries the only allowed phrasing.
export function FounderProof({ lang }: { lang: Lang }) {
  const c = content[lang];

  return (
    <section className={styles.proof} aria-label={c.founderProof.header}>
      <RevealGroup>
        <h2 className={styles.header}>{c.founderProof.header}</h2>
        {c.founderProof.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
        <p className={styles.listHeader}>{c.founderProof.listHeader}</p>
        <ul className={styles.clients}>
          {c.founderProof.clients.map((client) => (
            <li key={client.slice(0, 24)} className={styles.client}>
              {client}
            </li>
          ))}
        </ul>
      </RevealGroup>
    </section>
  );
}
