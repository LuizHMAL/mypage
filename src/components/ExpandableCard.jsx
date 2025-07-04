import styles from './ExpandableCard.module.css';

export function ExpandableCard(){
    return(
        <div className={styles.expandableCardContainer}>
        <div className={styles.card }>
            <a>
            < img src="images/reactLogo.svg"   /> </a>
        </div>
           
        <a 
         className={styles.card}><img src= 'images/jsLogo.svg'/></a>
        <a 
         className={styles.card }>< img src="images/htmlLogo.svg"   /></a>
         <a 
         className={styles.card }>< img src="images/cssLogo.svg"   /></a>
          <a 
         className={styles.card }>< img src="images/vite.svg"   /></a>
        </div>
        
    )
}