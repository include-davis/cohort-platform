import styles from './welcome.module.scss'
import Image from 'next/image';

export default function WorkshopWelcome({ title, description }){
    return(
        <div className={styles.container_workshop}>
            <div className={styles.welcome}>
                <div className={styles.welcome_half}>
                    <h1>Week {title}</h1>
                    <p>{description} Refer to the following videos and links for more information!</p>
                </div>
                <div className={styles.logo}>
                    <Image src="/welcome/bg_logo_purple.svg" alt="bg_logo" fill={true}/>
                </div>
            </div>
        </div>
    )
}