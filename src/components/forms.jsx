import styles from './forms.module.css';

export function Forms() {
  return (
    <div className={styles.form}>
      <form className={styles.form}>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="E-mail" />
        <textarea placeholder="Message" />
        <button type="submit">Contact Us</button>
      </form>
    </div>
  );
}
