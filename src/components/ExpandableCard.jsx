import styles from './ExpandableCard.module.css';

export function ExpandableCard(){
    return(
        <div className={styles.expandableCardContainer}>
        <div className={styles.card}><img src='images/reactLogo.svg' /></div>
        <div className={styles.card}><img src= 'images/jsLogo.svg'/></div>
        <div className={styles.card}><img src= 'images/cssLogo.svg' /></div>
         <div className={styles.card}><img src= 'images/htmlLogo.svg' /></div>
         <div className={styles.card}><img src= 'images/vitejsLogo.svg'/></div>
         
        </div>
        
    )
}