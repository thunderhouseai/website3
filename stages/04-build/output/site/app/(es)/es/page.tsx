import type { Metadata } from 'next';
import { FinalCTA } from '@/components/final-cta/FinalCTA';
import { FounderProof } from '@/components/founder-proof/FounderProof';
import { Hero } from '@/components/hero/Hero';
import { HowItWorks } from '@/components/how-it-works/HowItWorks';
import { ModulesSection } from '@/components/modules/ModulesSection';
import { PainMirror } from '@/components/pain-mirror/PainMirror';
import { PivotBeat } from '@/components/pivot-beat/PivotBeat';
import { es } from '@/content/copy';

export const metadata: Metadata = {
  title: es.meta.home.title,
  description: es.meta.home.description,
  alternates: {
    canonical: '/es',
    languages: { en: '/', es: '/es', 'x-default': '/' },
  },
};

// Espejo estructural de la página EN: mismos actos, mismo orden.
export default function PaginaInicio() {
  return (
    <>
      <Hero lang="es" />
      <PainMirror lang="es" />
      <PivotBeat lang="es" />
      <ModulesSection lang="es" />
      <FounderProof lang="es" />
      <HowItWorks lang="es" />
      <FinalCTA lang="es" />
    </>
  );
}
