import styles from './Header.module.css'

export function Header(){
    return(
         <header className= {styles.header}>
       
        <nav className="links-navegacao">
          <a href="#inicio">Início</a>
          <a href="#sobre-nos">Tecnologias</a>
          <a href="#nossas-empresas">Meus sites</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>
    )
}