import { Montserrat, Poppins } from 'next/font/google';

// Self-hosted via next/font (build-conventions: no external font CDNs).
// Family names come from tokens.ts (typography.fontDisplay/fontBody);
// next/font is only the loading mechanism. Shared by both root layouts.
export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-display-family',
  display: 'swap',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body-family',
  display: 'swap',
});
