import styles from './App.module.css';
import { Carousel } from './components/Carousel';
import { ExpandableCard } from './components/ExpandableCard';
import './global.css';

export function App() {
  return (

    <div className={styles.Container}>
      
      <div className={styles.appContainer}>

        <div>
        <h1 className={styles.title}>
          Hey, I'm <span>Luiz Henrique Meira!</span>
        </h1>
        <p className={styles.text}> 
          I'm a web developer from Brazil focused on front end and studying computer engineering
        </p>
      </div>
      <img 
        className={styles.avatarWithBorder} 
        src='src\assets\images\luizhmal.jpg'
        alt='Avatar of Luiz Henrique Meira'
      />

     </div>
     <ExpandableCard/>

     <Carousel></Carousel>
      <footer className={styles.footer}>
        <p>© 2024 Luiz Henrique Meira. All rights reserved.</p>
      </footer>
    </div>
  );
}