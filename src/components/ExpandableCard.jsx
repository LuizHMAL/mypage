import { useState } from 'react';
import { Layers, Database, Cpu, Sparkles } from 'lucide-react';
import styles from './ExpandableCard.module.css';

const techStack = [
  {
    name: 'React',
    category: 'Frontend Library',
    image: '/assets/reactLogo.svg',
    color: '#61dafb',
    glowColor: 'rgba(97, 218, 251, 0.4)',
    description: 'Componentes modernos, Hooks, SPAs dinâmicas e reatividade.',
    group: 'frontend'
  },
  {
    name: 'Angular',
    category: 'Frontend Framework',
    image: '/assets/angularLogo.svg',
    color: '#dd0031',
    glowColor: 'rgba(221, 0, 49, 0.4)',
    description: 'Framework estruturado com TypeScript para aplicações escaláveis.',
    group: 'frontend'
  },
  {
    name: 'Node.js',
    category: 'Backend Runtime',
    image: '/assets/nodeLogo.svg',
    color: '#68a063',
    glowColor: 'rgba(104, 160, 99, 0.4)',
    description: 'Construção de APIs RESTful eficientes, microsserviços e backend.',
    group: 'backend'
  },
  {
    name: 'FastAPI',
    category: 'Backend Framework',
    image: '/assets/fastapiLogo.svg',
    color: '#009688',
    glowColor: 'rgba(0, 150, 136, 0.4)',
    description: 'Framework assíncrono em Python para criação de APIs rápidas com OpenAPI.',
    group: 'backend'
  },
  {
    name: 'Spring Boot',
    category: 'Java Backend',
    image: '/assets/springbootLogo.svg',
    color: '#6db33f',
    glowColor: 'rgba(109, 179, 63, 0.4)',
    description: 'Microsserviços robustos em Java, injeção de dependência e APIs corporativas.',
    group: 'backend'
  },
  {
    name: 'PostgreSQL',
    category: 'Relational Database',
    image: '/assets/postgresqlLogo.svg',
    color: '#336791',
    glowColor: 'rgba(51, 103, 145, 0.4)',
    description: 'Banco de dados relacional avançado, suporte a JSON e integridade ACID.',
    group: 'backend'
  },
  {
    name: 'MySQL',
    category: 'Relational Database',
    image: '/assets/mysqlLogo.svg',
    color: '#00758f',
    glowColor: 'rgba(0, 117, 143, 0.4)',
    description: 'Banco relacional confiável, performático e amplamente utilizado na web.',
    group: 'backend'
  },
  {
    name: 'Supabase',
    category: 'Database & BaaS',
    image: '/assets/supabaseLogo.svg',
    color: '#3ecf8e',
    glowColor: 'rgba(62, 207, 142, 0.4)',
    description: 'PostgreSQL em tempo real, autenticação gerenciada e APIs instantâneas.',
    group: 'backend'
  },
  {
    name: 'Python',
    category: 'Programming Language',
    image: '/assets/pythonLogo.svg',
    color: '#387eb8',
    glowColor: 'rgba(56, 126, 184, 0.4)',
    description: 'Automação, lógica algorítmica, análise e desenvolvimento ágil.',
    group: 'languages'
  },
  {
    name: 'Java',
    category: 'Enterprise Language',
    image: '/assets/javaLogo.svg',
    color: '#e76f00',
    glowColor: 'rgba(231, 111, 0, 0.4)',
    description: 'Programação orientada a objetos (POO), arquitetura sólida e robustez.',
    group: 'languages'
  },
  {
    name: 'JavaScript',
    category: 'Core Web Language',
    image: '/assets/jsLogo.svg',
    color: '#f7df1e',
    glowColor: 'rgba(247, 223, 30, 0.35)',
    description: 'ES6+, manipulação dinâmica do DOM e lógica reativa moderna.',
    group: 'languages'
  },
  {
    name: 'HTML5',
    category: 'Markup Standard',
    image: '/assets/htmlLogo.svg',
    color: '#e34f26',
    glowColor: 'rgba(227, 79, 38, 0.4)',
    description: 'Estruturação semântica, SEO e acessibilidade na web (a11y).',
    group: 'frontend'
  },
  {
    name: 'CSS3',
    category: 'Styling & Motion',
    image: '/assets/cssLogo.svg',
    color: '#264de4',
    glowColor: 'rgba(38, 77, 228, 0.4)',
    description: 'Flexbox, CSS Grid, animações fluidas e design responsivo.',
    group: 'frontend'
  },
  {
    name: 'Vite',
    category: 'Build & Dev Tool',
    image: '/assets/vite.svg',
    color: '#646cff',
    glowColor: 'rgba(100, 108, 255, 0.4)',
    description: 'Bundling ultrarrápido, HMR instantâneo e alta performance.',
    group: 'frontend'
  },
];

const filterTabs = [
  { id: 'all', label: 'Todas as Tecnologias', icon: Sparkles },
  { id: 'frontend', label: 'Frontend', icon: () => <Layers size={15} /> },
  { id: 'backend', label: 'Backend & Banco', icon: () => <Database size={15} /> },
  { id: 'languages', label: 'Linguagens & Core', icon: () => <Cpu size={15} /> },
];


export function ExpandableCard() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredTech, setHoveredTech] = useState(null);

  const filteredTechs = activeFilter === 'all'
    ? techStack
    : techStack.filter((tech) => tech.group === activeFilter);

  return (
    <div className={styles.wrapper}>
      {/* Category Filter Pills */}
      <div className={styles.filterBar}>
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveFilter(tab.id)}
            >
              {typeof tab.icon === 'function' ? tab.icon() : <tab.icon size={15} />}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tech Cards Grid */}
      <div className={styles.techGrid}>
        {filteredTechs.map((tech) => {
          const isHovered = hoveredTech === tech.name;
          return (
            <div
              key={tech.name}
              className={`${styles.card} ${isHovered ? styles.activeCard : ''}`}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              style={{
                '--tech-glow': tech.glowColor,
                '--tech-color': tech.color,
              }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.imageWrapper}>
                  <img src={tech.image} alt={tech.name} className={styles.techIcon} />
                </div>
                <span className={styles.categoryBadge}>{tech.category}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.techName}>{tech.name}</h3>
                <p className={styles.techDescription}>{tech.description}</p>
              </div>

              <div className={styles.cardGlowOverlay} />
            </div>
          );
        })}
      </div>
    </div>
  );
}


