import styles from './ExpandableCard.module.css';

export function ExpandableCard() {
  return (
    <div className={styles.expandableCardContainer}>
      <div className={styles.card}>
        <img src="assets/reactLogo.svg" alt="React" />
      </div>
      <div className={styles.card}>
        <img src="assets/jsLogo.svg" alt="JavaScript" />
      </div>
      <div className={styles.card}>
        <img src="assets/htmlLogo.svg" alt="HTML" />
      </div>
      <div className={styles.card}>
        <img src="assets/cssLogo.svg" alt="CSS" />
      </div>
      <div className={styles.card}>
        <img src="assets/vite.svg" alt="Vite" />
      </div>
    </div>
  );
}
