import type { Metadata } from 'next';
import { contact, meta } from '@/content/copy';
import { getBookingUrl, getWhatsAppUrl } from '@/lib/env';
import styles from './contact.module.css';

// Read at request time, not baked in at build: BOOKING_URL/WHATSAPP_URL are
// meant to be set per-deploy (e.g. in Coolify) without a rebuild.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: meta.contact.title,
  description: meta.contact.description,
};

export default function ContactPage() {
  const bookingUrl = getBookingUrl();
  const whatsAppUrl = getWhatsAppUrl();

  return (
    <section className={styles.contact} aria-label="Contact">
      <h1 className={styles.headline}>{contact.headline}</h1>
      <p className={styles.body}>{contact.body}</p>

      <div className={styles.links}>
        {/* Edge case per spec: destination not configured — omit rather than render broken. */}
        {bookingUrl && (
          <a href={bookingUrl} className={styles.primaryLink}>
            {contact.primaryLabel}
          </a>
        )}
        {whatsAppUrl && (
          <a href={whatsAppUrl} className={styles.secondaryLink}>
            {contact.secondaryLabel}
          </a>
        )}
      </div>
    </section>
  );
}
