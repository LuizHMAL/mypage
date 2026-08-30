import { useState } from 'react';
import styles from './ExpandableCard.module.css';

const techStack = [
  {
    name: 'React',
    category: 'Frontend Library',
    image: '/assets/reactLogo.svg',
    color: '#61dafb',
    glowColor: 'rgba(97, 218, 251, 0.4)',
    description: 'Componentes modernos, Hooks e SPAs responsivas.'
  },
  {
    name: 'JavaScript',
    category: 'Core Language',
    image: '/assets/jsLogo.svg',
    color: '#f7df1e',
    glowColor: 'rgba(247, 223, 30, 0.35)',
    description: 'ES6+, manipulação do DOM e lógica reativa.'
  },
  {
    name: 'HTML5',
    category: 'Markup Standard',
    image: '/assets/htmlLogo.svg',
    color: '#e34f26',
    glowColor: 'rgba(227, 79, 38, 0.4)',
    description: 'Estruturação semântica e acessibilidade (a11y).'
  },
  {
    name: 'CSS3',
    category: 'Styling & Motion',
    image: '/assets/cssLogo.svg',
    color: '#264de4',
    glowColor: 'rgba(38, 77, 228, 0.4)',
    description: 'Flexbox, Grid, animações modernas e design responsivo.'
  },
  {
    name: 'Vite',
    category: 'Build & Dev Tool',
    image: '/assets/vite.svg',
    color: '#646cff',
    glowColor: 'rgba(100, 108, 255, 0.4)',
    description: 'Bundling ultrarrápido, HMR e otimização para produção.'
  },
];

export function ExpandableCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.expandableCardContainer}>
      {techStack.map((tech, idx) => {
        const isHovered = activeIndex === idx;
        return (
          <div
            key={tech.name}
            className={`${styles.card} ${isHovered ? styles.activeCard : ''}`}
            onMouseEnter={() => setActiveIndex(idx)}
            style={{
              '--tech-glow': tech.glowColor,
              '--tech-color': tech.color,
            }}
          >
            <div className={styles.imageWrapper}>
              <img src={tech.image} alt={tech.name} className={styles.techIcon} />
            </div>

            <div className={styles.cardContent}>
              <span className={styles.categoryBadge}>{tech.category}</span>
              <h3 className={styles.techName}>{tech.name}</h3>
              <p className={styles.techDescription}>{tech.description}</p>
            </div>

            <div className={styles.cardGlowOverlay} />
          </div>
        );
      })}
    </div>
  );
}

