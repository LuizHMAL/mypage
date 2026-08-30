import { useState, useEffect } from 'react';
import { Menu, X, Code2, Send, Layers, FolderGit2, Home } from 'lucide-react';
import styles from './Header.module.css';

export function Header({ activeSection = 'inicio' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Início', icon: Home },
    { id: 'sites', label: 'Projetos', icon: FolderGit2 },
    { id: 'techs', label: 'Tecnologias', icon: Layers },
    { id: 'contato', label: 'Contato', icon: Send },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#inicio" className={styles.logoLink} onClick={handleLinkClick}>
          <div className={styles.logoBadge}>
            <Code2 size={20} className={styles.logoIcon} />
          </div>
          <span className={styles.logoText}>LuizHMAL</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
              >
                <Icon size={16} className={styles.linkIcon} />
                <span>{item.label}</span>
                {isActive && <span className={styles.activePill} />}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu de navegação"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div className={styles.mobileBackdrop} onClick={handleLinkClick} />
      )}

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ''}`}>
        <div className={styles.mobileNavLinks}>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`}
                onClick={handleLinkClick}
              >
                <Icon size={20} className={styles.mobileLinkIcon} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}
