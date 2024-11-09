import styles from './welcome.module.scss'
import Image from 'next/image';

export default function WorkshopWelcome({ title, text }){
    return(
        <div className={styles.container_workshop}>
            <div className={styles.welcome}>
                <div className={styles.welcome_half}>
                    <h1>Week {title}</h1>
                    <p>{text}</p>
                </div>
                <div className={styles.logo}>
                    <Image src="/welcome/bg_logo_purple.svg" alt="bg_logo" fill={true}/>
                </div>
            </div>
        </div>
    )
}