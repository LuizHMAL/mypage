import styles from './ExpandableCard.module.css';

export function ExpandableCard() {
  return (
    <div className={styles.expandableCardContainer}>
      <div className={styles.card}>
        <img src="images/reactLogo.svg" alt="React" />
      </div>
      <div className={styles.card}>
        <img src="images/jsLogo.svg" alt="JavaScript" />
      </div>
      <div className={styles.card}>
        <img src="images/htmlLogo.svg" alt="HTML" />
      </div>
      <div className={styles.card}>
        <img src="images/cssLogo.svg" alt="CSS" />
      </div>
      <div className={styles.card}>
        <img src="images/vite.svg" alt="Vite" />
      </div>
    </div>
  );
}
