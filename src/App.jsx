import { useEffect, useState } from "react";
import "./global.css";
import { Header } from "./components/Header";
import { Carrossel } from "./components/Carrossel";
import { ExpandableCard } from "./components/ExpandableCard";
import { Forms } from "./components/forms";
import { Footer } from "./components/Footer";
import { LinkButton } from "./components/linkButton";
const sections = ["inicio", "techs", "sites", "contato"];

function ScrollSpy() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

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

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scrollSpy">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`dot ${activeSection === id ? "active" : ""}`}
        />
      ))}
    </div>
  );
}



export function App() {
  return (
    <>
      <Header />
      
      <section id="inicio" className="section inicioBg">
        <div className="sectionContent">
          <img
            className="avatarWithBorder"
            src="images/Avatar.jpeg"
            alt="Avatar of Luiz Henrique Meira"
          />

          <div className="presentationArea">
            <h1 className="title">
              Hey, I'm <span className="hightLighted"> Luiz Henrique Meira </span>
            </h1>

            <p className="text">
              I'm a computer engineering student from Brazil, passionate about
              technology and always eager to learn and take on new challenges.
              </p>
            <div className="linkbuttons">
                <LinkButton 
                  src="images/github-logo.svg" 
                  href="https://github.com/luizhmal" 
                  alt="GitHub"
                />

                <LinkButton 
                  src="images/linkedin-logo.svg" 
                  href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" 
                  alt="LinkedIn"
                />

                <LinkButton 
                  src="images/whatsapp-logo.svg" 
                  href="https://w.app/vc1tky" 
                  alt="WhatsApp"
                />
            </div>

                
          </div>
        </div>
      </section>

      <section id="techs" className="section techsBg">
        <h2 className="title">Technologies I've been working with recently</h2>
        <ExpandableCard />
      </section>

   <section id="sites" className="section sitesBg">
  <h2  className="title">Some of my projects</h2>
  
  <Carrossel slides={[
    {
      imagem: "/public/images/loopah.png",
      titulo: 'Site de viagens',
      descricao: 'Site de viagens: Compania Loopah.'
    },
    {
      imagem: "/public/images/ifimg.png",
      titulo: 'Feed de mensagens',
      descricao: 'Dashboard de rede social com feed interativo.'
    },
    {
      imagem: "/public/images/WeJ.png",
      titulo: 'Site portfólio',
      descricao: 'Site portfólio coorporativo com empresas de um grupo.'
    }
  ]} />
    <Footer>© 2025 Luiz Henrique Meira. All rights reserved.</Footer>
</section>

      {/* <section id="contato" className="section contatoBg">
        <Forms />
      </section> */}
      
      <ScrollSpy />
    

    </>
  
  );
}