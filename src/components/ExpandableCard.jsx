import styles from './ExpandableCard.module.css';

export function ExpandableCard(){
    return(
        <div className={styles.expandableCardContainer}>
        <div className={styles.card }>
            <a target = "_blank" href="https://vercel.com/luiz-henriques-projects-953f8b78/ignite-feed-2tca">
            < img src="images/ifimg.png"   />
            </a>
            </div>
           
        <a target = "_blank" href="https://vercel.com/luiz-henriques-projects-953f8b78/loopah-6maj"  className={styles.card}><img src= 'images/loopah.png'/></a>
        <a target = "_blank" href="https://vercel.com/luiz-henriques-projects-953f8b78" className={styles.card }>< img src="public/images/Vercel__Zeit_.jpeg"   /></a>
     
         
        </div>
        
    )
}