'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './calendly-embed.module.css';

const EMBED_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js';
const LOAD_TIMEOUT_MS = 8000;

type EmbedState = 'loading' | 'loaded' | 'failed';

// CalendlyEmbed spec: loading reserves space (no layout shift); failure or
// blocking falls back to microcopy + a plain link — never a blank region;
// unconfigured renders fallback-link mode only (handled by ContactPage
// passing url=null → fallback immediately).
export function CalendlyEmbed({
  url,
  fallbackLine,
  fallbackLink,
}: {
  url: string | null;
  fallbackLine: string;
  fallbackLink: string;
}) {
  const [state, setState] = useState<EmbedState>(url ? 'loading' : 'failed');
  const regionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!url) return;

    let cancelled = false;
    const timeout = window.setTimeout(() => {
      if (!cancelled) setState('failed');
    }, LOAD_TIMEOUT_MS);

    const script = document.createElement('script');
    script.src = EMBED_SCRIPT;
    script.async = true;
    script.onload = () => {
      if (cancelled) return;
      window.clearTimeout(timeout);
      setState('loaded');
    };
    script.onerror = () => {
      if (cancelled) return;
      window.clearTimeout(timeout);
      setState('failed');
    };
    document.body.appendChild(script);

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
    };
  }, [url]);

  // Unconfigured: absent, not broken — there is no destination to link to,
  // and an empty styled box would read as breakage. ContactPage still
  // offers the WhatsApp secondary in that case.
  if (!url) return null;

  if (state === 'failed') {
    return (
      <div className={styles.fallback} role="status">
        <p>{fallbackLine}</p>
        <a href={url} className={styles.fallbackLink}>
          {fallbackLink}
        </a>
      </div>
    );
  }

  return (
    <div ref={regionRef} className={styles.region}>
      {/* Calendly's script looks for this class + data attribute. */}
      <div className="calendly-inline-widget" data-url={url} style={{ minWidth: '320px', height: '700px' }} />
    </div>
  );
}
