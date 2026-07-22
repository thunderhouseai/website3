import { RevealGroup } from '@/components/reveal/RevealGroup';
import { content } from '@/content/copy';
import type { Lang } from '@/lib/lang';
import styles from './pain-mirror.module.css';

// PainMirror spec: kicker + four beats landing in sequence, one small mark
// per beat. Each beat is its own RevealGroup so they land one after
// another as the act scrolls in; a plain readable list without scripting.
export function PainMirror({ lang }: { lang: Lang }) {
  const c = content[lang];

  return (
    <section className={styles.mirror} aria-label={c.painMirror.kicker}>
      <RevealGroup>
        <p className={styles.kicker}>{c.painMirror.kicker}</p>
      </RevealGroup>
      <ul className={styles.beats}>
        {c.painMirror.beats.map((beat) => (
          <li key={beat.slice(0, 24)}>
            <RevealGroup className={styles.beat}>
              <span className={styles.mark} aria-hidden="true" />
              <span>{beat}</span>
            </RevealGroup>
          </li>
        ))}
      </ul>
    </section>
  );
}
