import { content } from '@/content/copy';
import type { Lang } from '@/lib/lang';
import { ModuleBlock } from './ModuleBlock';
import styles from './modules.module.css';

// ModulesSection spec: header + the five modules in fixed order 01→05.
// Each ModuleBlock owns its own sticky hold-and-release choreography; this
// wrapper just anchors the header and the ordered list. Header is plain
// (readable at SSR / JS-off); the walkthrough is the choreography.
export function ModulesSection({ lang }: { lang: Lang }) {
  const c = content[lang];

  return (
    <section className={styles.section} aria-label={c.modules.header}>
      <h2 className={styles.header}>{c.modules.header}</h2>
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
