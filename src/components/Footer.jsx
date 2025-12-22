import styles from "./Footer.module.css";

export function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      <p>{children}</p>
    </footer>
  );
}
