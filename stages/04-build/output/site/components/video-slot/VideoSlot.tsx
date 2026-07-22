import styles from './video-slot.module.css';

// VideoSlot spec: the designed poster IS the finished state until a real
// video exists — never an empty or broken player, no play affordance that
// would promise something that isn't there. When video lands, it replaces
// the poster div inside this same aspect box: no rebuild, no layout shift.
// Pure CSS from palette tokens; renders with scripting off.
export function VideoSlot() {
  return (
    <div className={styles.slot} aria-hidden="true">
      <div className={styles.poster}>
        <div className={styles.bolt} />
      </div>
    </div>
  );
}
