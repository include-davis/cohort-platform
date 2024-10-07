import { Individual } from './individual.jsx'
import styles from './contact.module.scss'
import Image from 'next/image';

export default function Contact(){
    return(
        <div className={styles.container}>
            <div className={styles.welcome}>
                <h1>Contacts</h1>
            </div>
            
            <div className={styles.card_container}>
                <Individual image="/" name="Haylie Tan" role="Tech lead" pronouns="she/her" phone="(510)358-1578" email="haytan@ucdavis.edu"/>
            </div>
        </div>
    )
}