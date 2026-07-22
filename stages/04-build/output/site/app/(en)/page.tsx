import type { Metadata } from 'next';
import { FinalCTA } from '@/components/final-cta/FinalCTA';
import { FounderProof } from '@/components/founder-proof/FounderProof';
import { Hero } from '@/components/hero/Hero';
import { HowItWorks } from '@/components/how-it-works/HowItWorks';
import { ModulesSection } from '@/components/modules/ModulesSection';
import { PainMirror } from '@/components/pain-mirror/PainMirror';
import { PivotBeat } from '@/components/pivot-beat/PivotBeat';
import { en } from '@/content/copy';

export const metadata: Metadata = {
  title: en.meta.home.title,
  description: en.meta.home.description,
  alternates: {
    canonical: '/',
    languages: { en: '/', es: '/es', 'x-default': '/' },
  },
};

// The narrative in its fixed act order (approved page structure).
export default function HomePage() {
  return (
    <>
      <Hero lang="en" />
      <PainMirror lang="en" />
      <PivotBeat lang="en" />
      <ModulesSection lang="en" />
      <FounderProof lang="en" />
      <HowItWorks lang="en" />
      <FinalCTA lang="en" />
    </>
  );
}
