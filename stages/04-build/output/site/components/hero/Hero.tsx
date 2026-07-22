'use client';

import { motion as fmotion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { VideoSlot } from '@/components/video-slot/VideoSlot';
import { content } from '@/content/copy';
import { useChoreographyActive } from '@/lib/use-choreography';
import type { Lang } from '@/lib/lang';
import { contactRoute } from '@/lib/lang';
import styles from './hero.module.css';

// Hero spec: full viewport, headline dominant, CTA above the fold. Scroll
// choreography: content eases/recedes as the visitor scrolls away — a depth
// cue tied to scroll progress (opacity 1 at rest, so SSR / JS-off /
// reduced-motion all render it fully present with no jump).
export function Hero({ lang }: { lang: Lang }) {
  const c = content[lang];
  const active = useChoreographyActive();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  const innerContent = (
    <>
      <h1 className={styles.headline}>{c.hero.headline}</h1>
      <p className={styles.subhead}>{c.hero.subhead}</p>
      <Link href={contactRoute(lang)} className={styles.cta}>
        {c.hero.cta}
      </Link>
    </>
  );

  return (
    <section ref={heroRef} className={styles.hero} aria-label="Intro">
      <div className={styles.glow} aria-hidden="true" />
      {active ? (
        <fmotion.div className={styles.inner} style={{ opacity, y, scale }}>
          {innerContent}
        </fmotion.div>
      ) : (
        <div className={styles.inner}>{innerContent}</div>
      )}
      <VideoSlot />
    </section>
  );
}
