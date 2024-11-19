import styles from './ExpandableCard.module.css';

export function ExpandableCard(){
    return(
        <div className={styles.expandableCardContainer}>
        <div className={styles.card}><img src="images/ifimg.png" /></div>
        <div className={styles.card}><img src= 'images/loopah.png'/></div>
     
         
        </div>
        
    )
}