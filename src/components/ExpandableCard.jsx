import styles from './ExpandableCard.module.css';

export function ExpandableCard(){
    return(
        <div className={styles.expandableCardContainer}>
        <div className={styles.card}><img src="src/assets/images/reactLogo.svg" /></div>
        <div className={styles.card}><img src= "src/assets/images/jsLogo.svg"/></div>
        <div className={styles.card}><img src= "src/assets/images/cssLogo.svg" /></div>
         <div className={styles.card}><img src= "src/assets/images/htmlLogo.svg" /></div>
         <div className={styles.card}><img src= "src/assets/images/vitejsLogo.svg"/></div>
         
        </div>
        
    )
}