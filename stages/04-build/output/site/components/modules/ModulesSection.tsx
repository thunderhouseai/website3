import { RevealGroup } from '@/components/reveal/RevealGroup';
import { content } from '@/content/copy';
import type { Lang } from '@/lib/lang';
import { ModuleBlock } from './ModuleBlock';
import styles from './modules.module.css';

// ModulesSection spec: header + the five blocks in fixed order 01→05,
// every module reachable by scroll alone.
export function ModulesSection({ lang }: { lang: Lang }) {
  const c = content[lang];

  return (
    <section className={styles.section} aria-label={c.modules.header}>
      <RevealGroup>
        <h2 className={styles.header}>{c.modules.header}</h2>
      </RevealGroup>
      <ol className={styles.list}>
        {c.modules.items.map((module, index) => (
          <li key={module.number}>
            <ModuleBlock module={module} index={index} />
          </li>
        ))}
      </ol>
    </section>
  );
}
