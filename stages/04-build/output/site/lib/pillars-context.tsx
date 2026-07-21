'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

// Shared state between PillarsToggle (global shell) and PillarSelector (Home
// only): open/closed persists across route changes per Behavior 3/2, and
// preview (hover) is distinct from commit (click/tap) per the stage 02
// ruling that hover alone never swaps content.

type PillarsContextValue = {
  open: boolean;
  toggleOpen: () => void;
  activeIndex: number;
  previewIndex: number | null;
  commit: (index: number) => void;
  preview: (index: number | null) => void;
};

const PillarsContext = createContext<PillarsContextValue | null>(null);

export function PillarsProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  // First pillar committed by default — the pillars section is never empty
  // (spec: PillarBlock default state).
  const [activeIndex, setActiveIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const toggleOpen = useCallback(() => setOpen((value) => !value), []);
  const commit = useCallback((index: number) => {
    setActiveIndex(index);
    setPreviewIndex(null);
  }, []);
  const preview = useCallback((index: number | null) => setPreviewIndex(index), []);

  const value = useMemo(
    () => ({ open, toggleOpen, activeIndex, previewIndex, commit, preview }),
    [open, toggleOpen, activeIndex, previewIndex, commit, preview],
  );

  return <PillarsContext.Provider value={value}>{children}</PillarsContext.Provider>;
}

export function usePillars() {
  const ctx = useContext(PillarsContext);
  if (!ctx) throw new Error('usePillars must be used within PillarsProvider');
  return ctx;
}
