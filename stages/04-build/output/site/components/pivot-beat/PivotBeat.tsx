import { RevealGroup } from '@/components/reveal/RevealGroup';
import { content } from '@/content/copy';
import type { Lang } from '@/lib/lang';
import styles from './pivot-beat.module.css';

// PivotBeat spec: the philosophy line — protected verbatim, its ONLY
// appearance site-wide — held alone as the page's single strongest reveal
// (strength="pivot" = durationPivot). Native scroll untouched, no pinning
// (checkpoint ruling 2).
export function PivotBeat({ lang }: { lang: Lang }) {
  return (
    <section className={styles.pivot} aria-label="Philosophy">
      <div className={styles.glow} aria-hidden="true" />
      <RevealGroup strength="pivot">
        <blockquote className={styles.line}>{content[lang].philosophy}</blockquote>
      </RevealGroup>
    </section>
  );
}
