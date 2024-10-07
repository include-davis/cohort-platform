import styles from './welcome.module.scss'
import Image from 'next/image';

export function QuickLinkCard({ image, title }){
    return(
        <div className={styles.link_card}>
            <Image className={styles.folder_image} src="/welcome/folder_tab.svg" alt="folder_tab" width={300} height={300}/>
            <div className={styles.link_content}>
                <Image src={image} alt={image} width={50} height={50}/>
                <p><b>{title}</b></p>
                <br/>
                <button className={styles.link_button}>View More →</button>
            </div>
            
        </div>
    );
}