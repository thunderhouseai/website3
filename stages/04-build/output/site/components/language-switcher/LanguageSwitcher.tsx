'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useSyncExternalStore } from 'react';
import { content } from '@/content/copy';
import type { Lang } from '@/lib/lang';
import {
  LANG_STORAGE_KEY,
  OFFER_DISMISSED_KEY,
  SCROLL_RESTORE_KEY,
  mirrorOf,
} from '@/lib/lang';
import styles from './language-switcher.module.css';

// localStorage is an external store: reading it via useSyncExternalStore
// (server snapshot null → no offer in SSR HTML; real value after
// hydration) instead of setState-in-effect keeps renders non-cascading.
const emptySubscribe = () => () => {};

function useStoredValue(key: string): string | null {
  return useSyncExternalStore(
    emptySubscribe,
    () => window.localStorage.getItem(key),
    () => null,
  );
}

// LanguageSwitcher spec: EN/ES always visible, never inside a menu.
// - Explicit switch: persist the choice, remember scroll so the mirrored
//   page restores the visitor's place (Behavior 8).
// - Direct links ALWAYS load the URL's language — no redirects, ever
//   (checkpoint ruling 1).
// - Return-visitor offer: only when the saved preference differs from the
//   URL's language and was never dismissed; shown in the visitor's SAVED
//   language (copy.md addendum stores it under the current page's
//   language); dismissal persists permanently.
export function LanguageSwitcher({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const mirror = mirrorOf(lang, pathname);
  const other: Lang = lang === 'en' ? 'es' : 'en';
  const offer = content[lang].languageOffer;

  const savedLang = useStoredValue(LANG_STORAGE_KEY);
  const dismissedStored = useStoredValue(OFFER_DISMISSED_KEY);
  const [hiddenThisVisit, setHiddenThisVisit] = useState(false);
  const offerVisible =
    !hiddenThisVisit && savedLang !== null && savedLang !== lang && dismissedStored !== 'true';

  // Scroll restore after a language switch (Behavior 8: place preserved).
  useEffect(() => {
    const stored = window.sessionStorage.getItem(SCROLL_RESTORE_KEY);
    if (stored !== null) {
      window.sessionStorage.removeItem(SCROLL_RESTORE_KEY);
      window.scrollTo({ top: Number(stored), behavior: 'auto' });
    }
  }, [lang]);

  function rememberSwitch() {
    window.localStorage.setItem(LANG_STORAGE_KEY, other);
    window.sessionStorage.setItem(SCROLL_RESTORE_KEY, String(window.scrollY));
    setHiddenThisVisit(true);
  }

  function dismissOffer() {
    window.localStorage.setItem(OFFER_DISMISSED_KEY, 'true');
    setHiddenThisVisit(true);
  }

  const enLabel =
    lang === 'en' ? (
      <span className={styles.active} aria-current="true">
        EN
      </span>
    ) : (
      <Link href={mirror} onClick={rememberSwitch} className={styles.label} lang="en">
        EN
      </Link>
    );

  const esLabel =
    lang === 'es' ? (
      <span className={styles.active} aria-current="true">
        ES
      </span>
    ) : (
      <Link href={mirror} onClick={rememberSwitch} className={styles.label} lang="es">
        ES
      </Link>
    );

  return (
    <div className={styles.switcher}>
      <span className={styles.labels}>
        {enLabel}
        <span aria-hidden="true">·</span>
        {esLabel}
      </span>

      {offerVisible && (
        <div className={styles.offer} role="status" lang={other}>
          <span>{offer.prompt}</span>
          <Link href={mirror} onClick={rememberSwitch} className={styles.offerLink}>
            {offer.link}
          </Link>
          <button type="button" onClick={dismissOffer} className={styles.dismiss}>
            {offer.dismiss}
          </button>
        </div>
      )}
    </div>
  );
}
