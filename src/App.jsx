import { useEffect, useState } from "react";
import styles from './App.module.css';
import { Carrossel } from './components/Carrossel';
import { ExpandableCard } from './components/ExpandableCard';
import { Forms } from './components/forms';
import { Header } from './components/Header';
import './global.css';

const sections = ["inicio", "techs", "sites", "contato"];

function ScrollSpy() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.scrollSpy}>
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`${styles.dot} ${activeSection === id ? styles.active : ""}`}
        />
      ))}
    </div>
  );
}

export function App() {
  return (
    <div>
       <Header />
      <div className={styles.appContainer}>
       
        <section id="inicio" className={styles.inicio}>
          <img
            className={styles.avatarWithBorder}
            src="images/luizhmal.jpg"
            alt="Avatar of Luiz Henrique Meira"
          />
          <div className={styles.inicioapresentacao}>
            <h1 className={styles.title}>
              Hey, I'm <span>Luiz Henrique Meira!</span>
            </h1>
            <p className={styles.text}>
              I'm a web developer from Brazil focused on front end and studying
              computer engineering.
            </p>
          </div>
        </section>
      </div>

      <section id="techs" className={styles.sitesPortrait}>
        <ExpandableCard />
      </section>

      <div id="sites" className={styles.techsPortrait}>
        <Carrossel />
      </div>

      <div id="contato" className={styles.contatosPortrait}>
        <Forms />
      </div>

      <footer className={styles.footer}>
        <p>© 2025 Luiz Henrique Meira. All rights reserved.</p>
      </footer>

      {/* ScrollSpy bolinhas fixas */}
      <ScrollSpy />
    </div>
  );
}
