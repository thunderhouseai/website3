import styles from './section-background.module.css';

export type SectionBackgroundVariant = 'hero' | 'teaser' | 'cta';

// Placeholder background treatment (design-tokens.md): bg-primary base +
// ONE low-opacity amber radial glow anchored to an edge or corner. Variants
// differ by glow position/size only, never hue — per art-direction.md's
// gradient rule, amber is never blended into navy across a full field.
// Purely decorative: aria-hidden, sits behind the section's content.
export function SectionBackground({ variant }: { variant: SectionBackgroundVariant }) {
  return <div className={styles.background} data-variant={variant} aria-hidden="true" />;
}
