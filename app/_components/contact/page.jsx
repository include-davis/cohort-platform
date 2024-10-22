import { Individual } from './individual.jsx'
import styles from './contact.module.scss'
import Image from 'next/image';
import Haylie from './images/Haylie.jpg';
import Michelle from './images/Michelle.jpg';
import Naomi from './images/Naomi.jpg';
import Cristian from './images/Cristian.jpg';

export default function Contact(){
    return(
        <div className={styles.container}>
            <h1>Contacts</h1>
            
            <div className={styles.card_container}>
                <Individual name="Haylie Tan" image ={Haylie} role="Tech lead" pronouns="she/her" phone="(510)358-1578" email="haytan@ucdavis.edu"/>
                <Individual name="Haylie Tan" image ={Michelle} role="Tech lead" pronouns="she/her" phone="(510)358-1578" email="haytan@ucdavis.edu"/>
                <Individual name="Haylie Tan" image ={Naomi} role="Tech lead" pronouns="she/her" phone="(510)358-1578" email="haytan@ucdavis.edu"/>
                <Individual name="Haylie Tan" image ={Cristian} role="Tech lead" pronouns="she/her" phone="(510)358-1578" email="haytan@ucdavis.edu"/>
            </div>

        </div>
    )
}