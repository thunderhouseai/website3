import { Footer } from '@/components/footer/Footer';
import { Nav } from '@/components/nav/Nav';
import { PageTransition } from '@/components/page-transition/PageTransition';
import { PillarSelector } from '@/components/pillar-selector/PillarSelector';
import { PillarsToggle } from '@/components/pillars-toggle/PillarsToggle';
import styles from './shell.module.css';

// Persistent chrome: Nav, the pillars dock, and Footer never remount on
// route change — only the content area (wrapped by PageTransition) swaps.
//
// The dock (pillar list panel + toggle) lives inside <main>, positioned
// sticky rather than fixed to the viewport: a sticky element can't stick
// past its containing block's edge, so as soon as main's content ends
// (right where Footer begins), the dock stops being held at the bottom of
// the screen and scrolls away with the rest of main — guaranteeing it never
// overlaps Footer. main{flex:1} in shell.module.css means main always fills
// at least (viewport - nav - footer), so this holds on short pages too.
// PillarSelector renders itself only on Home while open, so off-Home the
// dock is just the toggle.
export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <Nav />
      <main id="main-content" className={styles.content}>
        <PageTransition>{children}</PageTransition>
        <div className={styles.pillarsDock}>
          <PillarSelector />
          <PillarsToggle />
        </div>
      </main>
      <Footer />
    </div>
  );
}
