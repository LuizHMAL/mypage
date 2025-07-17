import styles from './App.module.css';
import { Carrossel } from './components/Carrossel';
import { ExpandableCard } from './components/ExpandableCard';
import { Forms } from './components/forms';
import { Header } from './components/Header';
import './global.css';

export function App() {
  return (
    

    
    <div className={styles.Container}>
    
      <div className={styles.appContainer}> 
        
      <Header/> 
      
        <section id = "inicio">
        <h1 className={styles.title}>
          Hey, I'm <span>Luiz Henrique Meira!</span>
        </h1>
        <p className={styles.text}> 
          I'm a web developer from Brazil focused on front end and studying computer engineering.
        </p>
        <p className={styles.text}>Technologies:
          <ul className={styles.technologiesList}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Springboot</li>
          </ul>
        </p>
      </section>
      <img 
        className={styles.avatarWithBorder} 
        src='images\luizhmal.jpg'
        alt='Avatar of Luiz Henrique Meira'
      />

     </div>
     
     <section id = "techs" className ={styles.sitesPortrait}>
     <ExpandableCard/>
     </section> 

      <div id = "sites" className ={styles.techsPortrait}>
     <Carrossel/>
     </div>

     <div id = "contato" className ={styles.contatosPortrait}>
      <Forms/>
     </div>

      <footer className={styles.footer}>
        <p>© 2025 Luiz Henrique Meira. All rights reserved.</p>
      </footer>
    </div>
    

  );
}