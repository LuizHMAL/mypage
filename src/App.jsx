import styles from './App.module.css';
import './global.css';

export function App() {
  return (

    <div className={styles.appContainer}>
      <img 
        className={styles.avatarWithBorder} 
        src='https://github.com/luizhmal.png' 
        alt='Avatar of Luiz Henrique Meira'
      />
      <div  className={styles.presentationArea}>
        <h1 className={styles.title}>
          Hey, I'm <span className={styles.highLighted}>Luiz Henrique Meira!</span>
        </h1>
        <p className={styles.text}> 
          I'm a web developer from Brazil focused on front end and studying computer engineering
        </p>
      </div>
      <footer className={styles.footer}>
        <p>© 2024 Luiz Henrique Meira. All rights reserved.</p>
      </footer>
    </div>
  );
}