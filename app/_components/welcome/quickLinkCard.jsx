import styles from './welcome.module.scss'
import Image from 'next/image';
import Link from 'next/link';

export function QuickLinkCard({ image, title, link }){
    return(
        <div className={styles.link_card}>
            <div className={styles.folder_image}>
                <Image src="/welcome/folder_tab.svg" alt="folder_tab" fill={true}/>
            </div>
            <div className={styles.overlay}>
                <div className={styles.link_icon}>
                    <Image src={image} alt={image} fill={true}/>
                </div>
                <p>{title}</p>
                <Link href={link} className={styles.link_button}>
                    View More
                </Link>
            </div>
        </div>
    );
}