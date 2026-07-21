'use client';

import { usePathname } from 'next/navigation';
import { pillars } from '@/content/copy';
import { usePillars } from '@/lib/pillars-context';
import styles from './pillar-selector.module.css';

// The stacked list panel docked above PillarsToggle (spec Composition: a
// compact vertical panel, never a horizontal row — a row of surface-colored
// uppercase labels mid-page reads as a second footer). Renders only on Home
// (Appears: Home / Pillars) and only while the toggle is open. The committed
// pillar's content itself renders in the pillars section via ActivePillar.
// Hover previews (list highlight only); click commits the viewport swap.
export function PillarSelector() {
  const pathname = usePathname();
  const { open, activeIndex, previewIndex, commit, preview } = usePillars();

  if (pathname !== '/' || !open) return null;

  const highlighted = previewIndex ?? activeIndex;

  return (
    <ul id="pillar-selector" className={styles.panel} role="listbox" aria-label="Pillars">
      {pillars.map((pillar, index) => (
        <li key={pillar.name}>
          <button
            type="button"
            role="option"
            aria-selected={activeIndex === index}
            className={highlighted === index ? styles.itemActive : styles.item}
            onMouseEnter={() => preview(index)}
            onMouseLeave={() => preview(null)}
            onFocus={() => preview(index)}
            onBlur={() => preview(null)}
            onClick={() => commit(index)}
          >
            {pillar.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
