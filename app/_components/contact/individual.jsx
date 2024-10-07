import styles from './contact.module.scss'
import Image from 'next/image';

export function Individual({ name, role, pronouns, phone, email, linkedin }){
    return(
        <div className={styles.link_card}>
            <Image src={image} alt={image} width={50} height={50}/>
            <p><b>{name}</b></p>
            <br/>
            <button className={styles.link_button}>View More →</button>
        </div>
    );
}