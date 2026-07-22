import type { Metadata } from 'next';
import { Shell } from '@/components/shell/Shell';
import { cssVariablesString } from '@/lib/css-vars';
import { getSiteUrl } from '@/lib/env';
import { montserrat, poppins } from '@/lib/fonts';
import '../globals.css';

// Spanish root layout — see the English layout for the two-root-layout
// rationale and the force-dynamic env decision.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
};

export default function SpanishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${poppins.variable}`}>
      <head>
        <style>{cssVariablesString()}</style>
      </head>
      <body>
        <Shell lang="es">{children}</Shell>
      </body>
    </html>
  );
}
