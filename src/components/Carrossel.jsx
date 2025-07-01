import { useState } from 'react';
import styles from './Carrossel.module.css';

export function Carrossel() {
  const slides = [
    { id: 0, titulo: 'História', descricao: 'd1.' },
    { id: 1, titulo: 'Valores', descricao: 'd2.' },
    { id: 2, titulo: 'Futuro', descricao: 'd3.' },
  ];

  const [ativo, setAtivo] = useState(0); 
  const anterior = (ativo + 2) % 3;
  const proximo = (ativo + 1) % 3;

  return (
    <div className={styles.container}>
      <div className={styles.carrossel}>
       
        <div className={styles.slideLateral} onClick={() => setAtivo(anterior)}>
          <div className={styles.slideMini}>
            <span>{slides[anterior].titulo}</span>
          </div>
          <p>{slides[anterior].titulo}</p>
        </div>

     
        <div className={styles.slideCentral}>
          <h2>{slides[ativo].titulo}</h2>
          <p className={styles.descricao}>{slides[ativo].descricao}</p>
        </div>

  
        <div className={styles.slideLateral} onClick={() => setAtivo(proximo)}>
          <div className={styles.slideMini}>
            <span>{slides[proximo].titulo}</span>
          </div>
          <p>{slides[proximo].titulo}</p>
        </div>
      </div>
    </div>
  );
}
