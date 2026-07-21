'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navLabels } from '@/content/copy';
import { useActiveSection } from '@/lib/use-section-observer';
import styles from './nav.module.css';

const items = [
  { id: 'approach' as const, href: '/approach', label: navLabels.approach },
  { id: 'contact' as const, href: '/contact', label: navLabels.contact },
];

export function Nav() {
  const pathname = usePathname();
  const activeSection = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  // On Home, the highlight follows scroll position (SectionObserver). On any
  // other route, the item matching that route is active immediately — no
  // dependency on the observer, so there's no flash of a stale highlight.
  const activeId = pathname === '/' ? activeSection : items.find((item) => item.href === pathname)?.id ?? null;

  return (
    <nav className={styles.nav} aria-label="Primary">
      <Link href="/" className={styles.wordmark} onClick={() => setMenuOpen(false)}>
        ThunderHouse
      </Link>

      <button
        type="button"
        className={styles.menuButton}
        aria-expanded={menuOpen}
        aria-controls="primary-nav-list"
        onClick={() => setMenuOpen((value) => !value)}
      >
        Menu
      </button>

      <ul id="primary-nav-list" className={styles.list} data-open={menuOpen}>
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className={activeId === item.id ? styles.active : styles.link}
              aria-current={activeId === item.id ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
