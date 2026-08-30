import { ArrowUp, Code2 } from "lucide-react";
import styles from "./Footer.module.css";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logoBadge}>
            <Code2 size={16} />
          </div>
          <span className={styles.brandName}>Luiz Henrique Meira</span>
        </div>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} Luiz Henrique Meira. Desenvolvido com React & CSS Moderno.
        </p>

        <button
          onClick={scrollToTop}
          className={styles.scrollTopBtn}
          aria-label="Voltar ao topo"
        >
          <span>Voltar ao topo</span>
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}

