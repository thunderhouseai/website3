import { RevealGroup } from '@/components/reveal/RevealGroup';
import { content } from '@/content/copy';
import type { Lang } from '@/lib/lang';
import styles from './how-it-works.module.css';

// HowItWorks spec: the engagement model as six plain steps, numbered so
// the rhythm echoes the modules. Steps reveal in order on entry.
export function HowItWorks({ lang }: { lang: Lang }) {
  const c = content[lang];

  return (
    <section className={styles.how} aria-label={c.howItWorks.header}>
      <RevealGroup>
        <h2 className={styles.header}>{c.howItWorks.header}</h2>
      </RevealGroup>
      <ol className={styles.steps}>
        {c.howItWorks.steps.map((step, index) => (
          <li key={step.slice(0, 24)}>
            <RevealGroup className={styles.step}>
              <span className={styles.stepNumber} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={styles.stepText}>{step}</span>
            </RevealGroup>
          </li>
        ))}
      </ol>
    </section>
  );
}
