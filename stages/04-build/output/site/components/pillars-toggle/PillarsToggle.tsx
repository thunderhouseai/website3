'use client';

import { pillarsToggleLabel } from '@/content/copy';
import { usePillars } from '@/lib/pillars-context';
import styles from './pillars-toggle.module.css';

// Global, persistent (every route). The list it opens/closes only renders
// where PillarSelector is mounted (Home) — see build-notes.md for the
// cross-route behavior this implies.
export function PillarsToggle() {
  const { open, toggleOpen } = usePillars();

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleOpen}
      aria-expanded={open}
      aria-controls="pillar-selector"
    >
      {pillarsToggleLabel}
    </button>
  );
}
