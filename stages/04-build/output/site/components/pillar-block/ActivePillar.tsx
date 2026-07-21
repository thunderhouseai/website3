'use client';

import { pillars } from '@/content/copy';
import { usePillars } from '@/lib/pillars-context';
import { PillarBlock } from './PillarBlock';

// Bridges the pillars context to the presentational PillarBlock inside
// Home's pillars section. activeIndex defaults to 0, so this always renders
// — the section is never an empty background (spec: PillarBlock default).
export function ActivePillar() {
  const { activeIndex } = usePillars();
  return <PillarBlock pillar={pillars[activeIndex]} index={activeIndex} total={pillars.length} />;
}
