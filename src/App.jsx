import { useEffect, useState } from "react";
import "./global.css";
import { Header } from "./components/Header";
import { Carrossel } from "./components/Carrossel";
import { ExpandableCard } from "./components/ExpandableCard";
import { Forms } from "./components/forms";
import { Footer } from "./components/Footer";
import { LinkButton } from "./components/linkButton";
import { 
  ExternalLink, 
  FolderGit2, 
  Layers, 
  Send
} from "lucide-react";

const sections = ["inicio", "sites", "techs", "contato"];

function ScrollSpy({ activeSection }) {
  return (
    <nav className="scrollSpy" aria-label="Navegação rápida por seções">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`dot ${activeSection === id ? "active" : ""}`}
          aria-label={`Rolar para seção ${id}`}
        />
      ))}
    </nav>
  );
}

export function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projectsData = [
    {
      imagem: "/assets/loopah.png",
      titulo: "Companhia Loopah",
      descricao: "Plataforma de turismo e reservas de viagens com navegação dinâmica e design intuitivo.",
      tags: ["React", "CSS Modules", "Vite", "UX/UI"],
      link: "https://vercel.com/luiz-henriques-projects-953f8b78"
    },
    {
      imagem: "/assets/ifimg.png",
      titulo: "Feed de Notícias & Interações",
      descricao: "Aplicação de feed social responsivo com comentários em tempo real, curtidas e gerenciamento de estado.",
      tags: ["React", "JavaScript", "Componentização", "Vite"],
      link: "https://vercel.com/luiz-henriques-projects-953f8b78"
    },
    {
      imagem: "/assets/WeJ.png",
      titulo: "Portal Institucional WeJ",
      descricao: "Site institucional corporativo para apresentação de serviços e empresas associadas ao grupo.",
      tags: ["React", "Design Responsivo", "Modern CSS", "Vercel"],
      link: "https://vercel.com/luiz-henriques-projects-953f8b78"
    }
  ];

  return (
    <>
      {/* Dynamic Ambient Background Glow */}
      <div className="bg-ambient" aria-hidden="true">
        <div className="bg-orb-1" />
        <div className="bg-orb-2" />
        <div className="bg-orb-3" />
      </div>

      <Header activeSection={activeSection} />
      
      {/* SECTION 1: INÍCIO / HERO */}
      <section id="inicio" className="section inicioBg">
        <div className="sectionContent">
          <div className="avatarWrapper">
            <div className="avatarGlowRing" />
            <img
              className="avatarWithBorder"
              src="/assets/Avatar.jpeg"
              alt="Foto de perfil de Luiz Henrique Meira"
              onError={(e) => {
                // Fallback in case path differs
                e.target.src = "/assets/luizhmal.jpg";
              }}
            />
          </div>

          <div className="presentationArea">
            <div className="statusPill">
              <span className="statusDot" />
              <span>Disponível para novos projetos</span>
            </div>

            <h1 className="title" style={{ textAlign: "left" }}>
              Olá, eu sou <span className="hightLighted">Luiz Henrique Meira</span>
            </h1>

            <p className="text">
              Estudante de <strong>Engenharia de Computação</strong> apaixonado por
              desenvolvimento web fullstack, interfaces modernas e experiências digitais interativas.
              Sempre em busca de inovação e novos desafios técnicos.
            </p>

            <div className="linkbuttons">
              <LinkButton 
                src="/assets/github-logo.svg"
                href="https://github.com/luizhmal" 
                label="GitHub"
                alt="GitHub de Luiz Henrique"
              />

              <LinkButton 
                src="/assets/linkedin-logo.svg"
                href="https://www.linkedin.com/in/luiz-henrique-meira-andrade-leite-23a9b1205" 
                label="LinkedIn"
                alt="LinkedIn de Luiz Henrique"
              />

              <LinkButton 
                src="/assets/whatsapp-logo.svg"
                href="https://w.app/vc1tky" 
                label="WhatsApp"
                alt="WhatsApp de Luiz Henrique"
              />

              <LinkButton 
                icon={Send}
                href="#contato" 
                label="Fale Comigo"
                variant="primary"
                target="_self"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROJETOS / SITES */}
      <section id="sites" className="section sitesBg">
        <div className="sectionHeader">
          <div className="sectionBadge">
            <FolderGit2 size={15} />
            <span>Portfólio & Criações</span>
          </div>
          <h2 className="title">Projetos em Destaque</h2>
          <p className="sectionSubtitle">
            Algumas das principais aplicações e websites interativos desenvolvidos recentemente.
          </p>
        </div>

        <Carrossel slides={projectsData} />

        <div style={{ marginTop: "1rem" }}>
          <LinkButton 
            icon={ExternalLink}
            href="https://vercel.com/luiz-henriques-projects-953f8b78" 
            label="Ver mais projetos no Vercel"
            variant="glass"
          />
        </div>
      </section>

      {/* SECTION 3: TECNOLOGIAS */}
      <section id="techs" className="section techsBg">
        <div className="sectionHeader">
          <div className="sectionBadge">
            <Layers size={15} />
            <span>Stack Tecnológica</span>
          </div>
          <h2 className="title">Tecnologias que Domino</h2>
          <p className="sectionSubtitle">
            Ferramentas, bibliotecas e linguagens que utilizo no desenvolvimento de interfaces rápidas e fluidas.
          </p>
        </div>

        <ExpandableCard />
      </section>

      {/* SECTION 4: CONTATO */}
      <section id="contato" className="section contatoBg">
        <div className="sectionHeader">
          <div className="sectionBadge">
            <Send size={15} />
            <span>Conecte-se</span>
          </div>
          <h2 className="title">Entre em Contato</h2>
          <p className="sectionSubtitle">
            Vamos construir algo incrível juntos! Envie uma mensagem ou entre em contato direto.
          </p>
        </div>

        <Forms />
      </section>

      <Footer />
      <ScrollSpy activeSection={activeSection} />
    </>
  );
}