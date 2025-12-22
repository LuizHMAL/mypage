import styles from './Header.module.css'

export function Header(){
    return(
         <header className= {styles.header}>
          <h2>&lt;LuizHMAL /&gt; </h2>
       
        <nav className="links-navegacao" >
          <a href="#inicio">Início</a>
          <a href="#sites">Meus sites</a>
          <a href="#techs">Tecnologias</a>
        
          {/* <a href="#contato">Contato</a> */}
        </nav>
      </header>
    )
}