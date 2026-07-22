'use client';

import { motion as fmotion } from 'framer-motion';
import { toFramerEasing, useReducedMotion } from '@/lib/motion';
import { motion as motionTokens } from '@/lib/tokens';
import styles from './whatsapp-button.module.css';

// WhatsAppButton spec: manual conversation only (chatbot deferred); one
// subtle entrance then still; absent (not broken) when unconfigured —
// the null check lives here, URL arrives from the server layout.
export function WhatsAppButton({ url, label }: { url: string | null; label: string }) {
  const reduced = useReducedMotion();

  if (!url) return null;

  return (
    <fmotion.a
      href={url}
      className={styles.button}
      aria-label={label}
      initial={reduced ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: motionTokens.durationFast / 1000,
        ease: toFramerEasing(motionTokens.easingMicro),
      }}
    >
      {/* Inline glyph, palette-only: a speech bubble reads as "chat" without
          importing brand assets from a third party. */}
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="8.5" cy="12" r="1" fill="currentColor" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <circle cx="15.5" cy="12" r="1" fill="currentColor" />
      </svg>
    </fmotion.a>
  );
}
