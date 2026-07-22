import type { Metadata } from 'next';
import { Shell } from '@/components/shell/Shell';
import { cssVariablesString } from '@/lib/css-vars';
import { getSiteUrl } from '@/lib/env';
import { montserrat, poppins } from '@/lib/fonts';
import '../globals.css';

// English root layout. Two root layouts (one per language) give each tree
// a correct server-rendered <html lang>; the trade-off (cross-language
// navigation is a document navigation, softened by scroll restore in
// LanguageSwitcher) is recorded in build-notes.md.
//
// force-dynamic: all env (CALENDLY_URL, WHATSAPP_URL, SITE_URL) is read
// per-request — deploy-time changes in Coolify need no rebuild (v1 lesson).
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <head>
        <style>{cssVariablesString()}</style>
      </head>
      <body>
        <Shell lang="en">{children}</Shell>
      </body>
    </html>
  );
}
