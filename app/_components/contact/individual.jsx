import styles from './contact.module.scss';
import Image from 'next/image';

export function Individual({ name, image, role, pronouns, phone, email, linkedin }){
    return(
        <div className={styles.individual_card}>
            <div className={styles.top_card}>
                <Image src={image} width={50} height={50}/>
            </div>
            
            <div className={styles.top_card}>
                <h2>{name}</h2>
                <p>{role}</p>
                <p>{pronouns}</p>
            </div>

            <div className={styles.bottom_card}>
                <p>📞 {phone}</p>
                <p>✉️ {email}</p>
                <p>{linkedin}</p>
            </div>
        </div>
    );
}