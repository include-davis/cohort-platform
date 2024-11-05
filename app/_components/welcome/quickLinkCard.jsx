import styles from './welcome.module.scss'
import Image from 'next/image';

export function QuickLinkCard({ image, title }){
    return(
        <div className={styles.link_card}>
            <div className={styles.folder_image}>
                <Image src="/welcome/folder_tab.svg" alt="folder_tab" fill={true}/>
            </div>
            <div className={styles.overlay}>
                <div className={styles.link_icon}>
                    <Image src={image} alt={image} fill={true}/>
                </div>
                <h3>{title}</h3>
                <button className={styles.link_button}>View More </button>
            </div>
        </div>
    );
}