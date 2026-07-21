import type { Metadata } from 'next';
import { Montserrat, Poppins } from 'next/font/google';
import { Shell } from '@/components/shell/Shell';
import { buildCssVariables } from '@/lib/css-vars';
import { getSiteUrl } from '@/lib/env';
import { PillarsProvider } from '@/lib/pillars-context';
import { SectionObserverProvider } from '@/lib/use-section-observer';
import './globals.css';

// Self-hosted via next/font (build-conventions: no external font CDNs).
// Family names still come from tokens.ts (typography.fontDisplay/fontBody);
// next/font is only the loading mechanism, a stage-04 HOW decision.
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-display-family',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body-family',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: 'ThunderHouse AI',
    template: '%s',
  },
  description: 'ThunderHouse AI — Managed AI Operations.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cssVars = buildCssVariables();
  const cssVarsString = `:root{${Object.entries(cssVars)
    .map(([key, value]) => `${key}:${value}`)
    .join(';')}}`;

  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <head>
        <style>{cssVarsString}</style>
      </head>
      <body>
        <SectionObserverProvider>
          <PillarsProvider>
            <Shell>{children}</Shell>
          </PillarsProvider>
        </SectionObserverProvider>
      </body>
    </html>
  );
}
