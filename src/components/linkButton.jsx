import styles from './linkButton.module.css';

export function LinkButton({ src, href, alt }) {
  return (
    <a href={href} className={styles.linkButton} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} style={{ width: '100%', height: '100%' }} />
    </a>
  );
}