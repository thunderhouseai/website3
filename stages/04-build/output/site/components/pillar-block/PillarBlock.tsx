import type { Pillar } from '@/content/copy';
import styles from './pillar-block.module.css';

const ROMAN = ['I', 'II', 'III', 'IV', 'V'] as const;

function roman(n: number) {
  return ROMAN[n - 1] ?? String(n);
}

// Full-bleed act filling the pillars section. Anatomy per spec Composition:
// counter (I•IV) as a large quiet element above the title, title at
// hero-adjacent display scale, keywords as an accent line, paragraph in a
// defined block. data-pillar drives the per-pillar background glow
// position/size (placeholder treatment — swap for photography via
// next/image when assets exist, see build-notes).
export function PillarBlock({
  pillar,
  index,
  total,
}: {
  pillar: Pillar;
  index: number;
  total: number;
}) {
  return (
    <article className={styles.block} data-pillar={index} aria-live="polite">
      <div className={styles.background} aria-hidden="true" />
      <p className={styles.counter}>
        {roman(index + 1)}•{roman(total)}
      </p>
      <h3 className={styles.title}>{pillar.name}</h3>
      <p className={styles.keywords}>{pillar.keywords.join(', ')}</p>
      <p className={styles.paragraph}>{pillar.paragraph}</p>
    </article>
  );
}
