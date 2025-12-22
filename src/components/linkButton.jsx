import styles from './linkButton.module.css';

export function LinkButton({ src, href, alt, label }) {
  return (
    <a
      href={href}
      className={styles.linkButton}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={src} alt={alt} />
      {label && <span className={styles.label}>{label}</span>}
    </a>
  );
}
