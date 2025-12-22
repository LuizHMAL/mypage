import { useEffect, useRef, useState } from "react";
import styles from "./Carrossel.module.css";

export function Carrossel({ slides }) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const total = slides.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  /* AUTOPLAY */
  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(next, 10000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <button className={`${styles.arrow} ${styles.left}`} onClick={prev}>
        <span>‹</span>
      </button>

      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div className={styles.slide} key={i}>
              <img src={slide.imagem} alt={slide.titulo} />

              <div className={styles.overlay}>
                <h3 className={styles.title}>{slide.titulo}</h3>
                <p className={styles.description}>{slide.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className={`${styles.arrow} ${styles.right}`} onClick={next}>
        <span>›</span>
      </button>

      <div className={styles.dots}>
        {slides.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === index ? styles.active : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
