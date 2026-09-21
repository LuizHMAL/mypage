import styles from './linkButton.module.css';

export function LinkButton({ src, icon: Icon, href, alt, label, variant = 'default', target = '_blank', ...rest }) {
  return (
    <a
      href={href}
      className={`${styles.linkButton} ${styles[variant] || ''}`}
      target={target}
      rel={target === '_blank' ? "noopener noreferrer" : undefined}
      {...rest}
    >
      {Icon ? (
        <span className={styles.iconWrapper}>
          <Icon className={styles.icon} size={20} />
        </span>
      ) : src ? (
        <img src={src} alt={alt || label || 'Link icon'} className={styles.imageIcon} />
      ) : null}
      {label && <span className={styles.label}>{label}</span>}
    </a>
  );
}
