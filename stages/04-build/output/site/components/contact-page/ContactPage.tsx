import { CalendlyEmbed } from '@/components/calendly-embed/CalendlyEmbed';
import { RevealGroup } from '@/components/reveal/RevealGroup';
import { content } from '@/content/copy';
import { getCalendlyUrl, getWhatsAppUrl } from '@/lib/env';
import type { Lang } from '@/lib/lang';
import styles from './contact-page.module.css';

// ContactPage spec: full conversion content immediately on direct entry —
// headline, reassurance, the embed as the single action, WhatsApp
// secondary (absent, not broken, when unconfigured).
export function ContactPage({ lang }: { lang: Lang }) {
  const c = content[lang];
  const calendlyUrl = getCalendlyUrl();
  const whatsAppUrl = getWhatsAppUrl();

  return (
    <section className={styles.contact} aria-label={c.contact.headline}>
      <RevealGroup>
        <h1 className={styles.headline}>{c.contact.headline}</h1>
        <p className={styles.body}>{c.contact.body}</p>
      </RevealGroup>
      <CalendlyEmbed
        url={calendlyUrl}
        fallbackLine={c.contact.embedFallbackLine}
        fallbackLink={c.contact.embedFallbackLink}
      />
      {whatsAppUrl && (
        <p className={styles.secondary}>
          <a href={whatsAppUrl}>{c.contact.whatsappSecondary}</a>
        </p>
      )}
    </section>
  );
}
