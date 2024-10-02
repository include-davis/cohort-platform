import styles from './welcome.module.scss'

export function QuickLinkCard({ image, title }){
    return(
        <div className={styles.link_card}>
            <img src={image} alt={image}/>
            <p>{title}</p>
            <button className={styles.link_button}>View More →</button>
        </div>
    );
}