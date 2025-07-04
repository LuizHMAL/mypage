import { useState } from 'react';
import styles from './Carrossel.module.css';

export function Carrossel() {
  const slides = [
    {
      id: 0,
      imagem: 'images/ifimg.png',
      link: 'https://vercel.com/luiz-henriques-projects-953f8b78/ignite-feed-2tca',
    },
    {
      id: 1,
      imagem: 'images/loopah.png',
      link: 'https://vercel.com/luiz-henriques-projects-953f8b78/loopah-6maj',
    },
    {
      id: 2,
      imagem: 'images/Vercel__Zeit_.jpeg',
      link: 'https://vercel.com/luiz-henriques-projects-953f8b78',
    },
  ];

  const [ativo, setAtivo] = useState(0);
  const anterior = (ativo + slides.length - 1) % slides.length;
  const proximo = (ativo + 1) % slides.length;

  return (
    <div className={styles.container}>
      <div className={styles.carrossel}>

        <div className={styles.slideLateral} onClick={() => setAtivo(anterior)}>
          <img
            src={slides[anterior].imagem}
            alt="slide anterior"
            className={styles.slideMini}
          />
        </div>

        <div className={styles.slideCentral}>
          <img
            src={slides[ativo].imagem}
            alt="slide ativo"
            className={styles.slideImagemCentral}
          />
          <a
            className={styles.botaoLink}
            href={slides[ativo].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver projeto
          </a>
        </div>

        <div className={styles.slideLateral} onClick={() => setAtivo(proximo)}>
          <img
            src={slides[proximo].imagem}
            alt="slide proximo"
            className={styles.slideMini}
          />
        </div>

      </div>
    </div>
  );
}
