import { useEffect, useRef, useState } from "react";
import styles from "./Carrossel.module.css";

export function Carrossel({ slides }) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const startX = useRef(0);
  const deltaX = useRef(0);

  const total = slides.length;
  const SWIPE_THRESHOLD = 60;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

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

  const onTouchStart = (e) => {
    stopAutoPlay();
    startX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    deltaX.current = e.touches[0].clientX - startX.current;
  };

  const onTouchEnd = () => {
    if (deltaX.current > SWIPE_THRESHOLD) {
      prev();
    } else if (deltaX.current < -SWIPE_THRESHOLD) {
      next();
    }

    deltaX.current = 0;
    startAutoPlay();
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
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
