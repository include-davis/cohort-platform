import { Individual } from './individual.jsx'
import styles from './contact.module.scss'

export default function Contact(){
    return(
        <div className={styles.container}>
            <h1>Contacts</h1>
            
            <div className={styles.card_container}>
                <Individual name="Haylie Tan" image='/contacts/Haylie.jpg' role="Tech lead" pronouns="she/her" phone="(510)358-1578" email="haytan@ucdavis.edu"/>
                <Individual name="Haylie Tan" image='/contacts/Michelle.jpg' role="Tech lead" pronouns="she/her" phone="(510)358-1578" email="haytan@ucdavis.edu"/>
                <Individual name="Haylie Tan" image='/contacts/Naomi.jpg' role="Tech lead" pronouns="she/her" phone="(510)358-1578" email="haytan@ucdavis.edu"/>
                <Individual name="Haylie Tan" image='/contacts/Cristian.jpg' role="Tech lead" pronouns="she/her" phone="(510)358-1578" email="haytan@ucdavis.edu"/>
            </div>

        </div>
    )
}