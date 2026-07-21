'use client';

import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';

// Implements the SectionObserver contract from component-specs.md: reports
// which registered section has crossed 50% of the viewport. Home's teaser
// sections register themselves; Nav reads the result to decide highlighting.
// Direct-link entry to /approach or /contact never touches this — Nav uses
// the route itself in that case, so there is no intermediate report.

export type SectionId = 'approach' | 'contact';

type SectionObserverValue = {
  active: SectionId | null;
  registerSection: (id: SectionId, el: HTMLElement | null) => void;
};

const SectionObserverContext = createContext<SectionObserverValue | null>(null);

export function SectionObserverProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<SectionId | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef(new Map<SectionId, HTMLElement>());
  // Tracks every section currently >= 50% visible, not just the last one the
  // observer happened to report — a single callback batch can contain
  // multiple qualifying entries (e.g. two sections both >50% visible on a
  // short page/tall viewport), and picking "whichever was processed last"
  // rather than "whichever is most visible" was the bug behind Nav
  // sometimes showing Contact active while still on Hero.
  const ratiosRef = useRef(new Map<SectionId, number>());

  const recomputeActive = useCallback(() => {
    let best: SectionId | null = null;
    let bestRatio = 0;
    for (const [id, ratio] of ratiosRef.current) {
      if (ratio > bestRatio) {
        bestRatio = ratio;
        best = id;
      }
    }
    setActive(best);
  }, []);

  const registerSection = useCallback(
    (id: SectionId, el: HTMLElement | null) => {
      if (typeof window === 'undefined') return;

      if (!observerRef.current) {
        observerRef.current = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              let matchedId: SectionId | undefined;
              for (const [sectionId, node] of elementsRef.current) {
                if (node === entry.target) {
                  matchedId = sectionId;
                  break;
                }
              }
              if (!matchedId) continue;

              if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                ratiosRef.current.set(matchedId, entry.intersectionRatio);
              } else {
                ratiosRef.current.delete(matchedId);
              }
            }
            recomputeActive();
          },
          { threshold: 0.5 },
        );
      }

      const previous = elementsRef.current.get(id);
      if (previous && previous !== el) {
        observerRef.current.unobserve(previous);
        ratiosRef.current.delete(id);
      }

      if (el) {
        elementsRef.current.set(id, el);
        observerRef.current.observe(el);
      } else {
        elementsRef.current.delete(id);
        ratiosRef.current.delete(id);
        recomputeActive();
      }
    },
    [recomputeActive],
  );

  const value = useMemo(() => ({ active, registerSection }), [active, registerSection]);

  return <SectionObserverContext.Provider value={value}>{children}</SectionObserverContext.Provider>;
}

function useSectionObserverContext() {
  const ctx = useContext(SectionObserverContext);
  if (!ctx) throw new Error('useSectionObserver must be used within SectionObserverProvider');
  return ctx;
}

export function useActiveSection() {
  return useSectionObserverContext().active;
}

export function useRegisterSection(id: SectionId) {
  const { registerSection } = useSectionObserverContext();
  return useCallback((el: HTMLElement | null) => registerSection(id, el), [registerSection, id]);
}
