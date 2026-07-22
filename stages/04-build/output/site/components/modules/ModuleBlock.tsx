import { RevealGroup } from '@/components/reveal/RevealGroup';
import type { ModuleContent } from '@/content/copy';
import styles from './modules.module.css';

// ModuleBlock spec anatomy: number as a large quiet element, name at
// module-title display scale, keywords as an accent line, paragraph in a
// defined block, visual slot. One glow per view — position/size varies by
// index (data-module), hue never does. The visual slot renders a designed
// palette placeholder until real assets exist (never a broken image).
export function ModuleBlock({ module, index }: { module: ModuleContent; index: number }) {
  return (
    <RevealGroup>
      <article className={styles.block} data-module={index}>
        <div className={styles.blockGlow} aria-hidden="true" />
        <p className={styles.number} aria-hidden="true">
          {module.number}
        </p>
        <h3 className={styles.name}>{module.name}</h3>
        <p className={styles.keywords}>{module.keywords.join(', ')}</p>
        <p className={styles.paragraph}>{module.paragraph}</p>
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.visualMark} />
        </div>
      </article>
    </RevealGroup>
  );
}
