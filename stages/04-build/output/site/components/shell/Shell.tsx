import { Footer } from '@/components/footer/Footer';
import { Nav } from '@/components/nav/Nav';
import { WhatsAppButton } from '@/components/whatsapp-button/WhatsAppButton';
import { content } from '@/content/copy';
import { getWhatsAppUrl } from '@/lib/env';
import type { Lang } from '@/lib/lang';
import styles from './shell.module.css';

// Shell spec: persistent chrome — Nav, WhatsAppButton, Footer — around
// route content; nothing remounts on route change within a language.
// (Each language has its own root layout for a correct server-rendered
// lang attribute; see build-notes.md for the cross-language trade-off.)
export function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <Nav lang={lang} />
      <main id="main-content" className={styles.content}>
        {children}
      </main>
      <WhatsAppButton url={getWhatsAppUrl()} label={content[lang].whatsappLabel} />
      <Footer lang={lang} />
    </div>
  );
}
