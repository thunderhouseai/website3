export type Lang = 'en' | 'es';

// Route mirrors (Behavior 8): every EN route has exactly one ES twin.
const MIRRORS: Record<Lang, Record<string, string>> = {
  en: { '/': '/es', '/contact': '/es/contacto' },
  es: { '/es': '/', '/es/contacto': '/contact' },
};

export function mirrorOf(lang: Lang, pathname: string): string {
  return MIRRORS[lang][pathname] ?? (lang === 'en' ? '/es' : '/');
}

export function contactRoute(lang: Lang): string {
  return lang === 'en' ? '/contact' : '/es/contacto';
}

export function homeRoute(lang: Lang): string {
  return lang === 'en' ? '/' : '/es';
}

// Persistence keys (LanguageSwitcher spec): the saved language choice and
// the offer dismissal. Dismissal is permanent — the offer never returns.
export const LANG_STORAGE_KEY = 'th-lang';
export const OFFER_DISMISSED_KEY = 'th-lang-offer-dismissed';
// Set at switch time so the mirrored page can restore the visitor's place.
export const SCROLL_RESTORE_KEY = 'th-lang-switch-scroll';
