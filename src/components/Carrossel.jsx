import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Sparkles } from "lucide-react";
import styles from "./Carrossel.module.css";

export function Carrossel({ slides }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const startX = useRef(0);
  const deltaX = useRef(0);

  const total = slides.length;
  const SWIPE_THRESHOLD = 50;

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 6000);
  }, [next]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return stopAutoPlay;
  }, [isPaused, startAutoPlay, stopAutoPlay]);

  const startY = useRef(0);
  const deltaY = useRef(0);

  const onTouchStart = (e) => {
    stopAutoPlay();
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    deltaX.current = 0;
    deltaY.current = 0;
  };

  const onTouchMove = (e) => {
    deltaX.current = e.touches[0].clientX - startX.current;
    deltaY.current = e.touches[0].clientY - startY.current;
  };

  const onTouchEnd = () => {
    // Only swipe if horizontal motion was greater than vertical motion
    if (Math.abs(deltaX.current) > Math.abs(deltaY.current)) {
      if (deltaX.current > SWIPE_THRESHOLD) {
        prev();
      } else if (deltaX.current < -SWIPE_THRESHOLD) {
        next();
      }
    }
    deltaX.current = 0;
    deltaY.current = 0;
    if (!isPaused) startAutoPlay();
  };


  return (
    <div
      className={styles.container}
      onMouseEnter={() => {
        setIsPaused(true);
        stopAutoPlay();
      }}
      onMouseLeave={() => {
        setIsPaused(false);
        startAutoPlay();
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className={styles.carouselHeader}>
        <div className={styles.counterBadge}>
          <Sparkles size={14} className={styles.sparkleIcon} />
          <span>Projeto {index + 1} de {total}</span>
        </div>
      </div>

      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div className={styles.slide} key={i}>
              <div className={styles.imageContainer}>
                <img
                  src={slide.imagem}
                  alt={slide.titulo}
                  className={styles.slideImage}
                  loading="lazy"
                />
                <div className={styles.imageGradientOverlay} />
              </div>

              <div className={styles.overlay}>
                <div className={styles.overlayTop}>
                  {slide.tags && slide.tags.length > 0 && (
                    <div className={styles.tagList}>
                      {slide.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className={styles.overlayBottom}>
                  <h3 className={styles.title}>{slide.titulo}</h3>
                  <p className={styles.description}>{slide.descricao}</p>

                  {slide.link && (
                    <a
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectButton}
                    >
                      <span>Explorar Projeto</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={prev}
        aria-label="Projeto anterior"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={next}
        aria-label="Próximo projeto"
      >
        <ChevronRight size={24} />
      </button>

      {/* Modern Indicators */}
      <div className={styles.controlsBar}>
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === index ? styles.active : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Ir para projeto ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

