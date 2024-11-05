import { Individual } from './individual.jsx'
import styles from './contact.module.scss'

const data = [
    {
        name: "Haylie Tan",
        image: '/contacts/Haylie.jpg',
        role: 'Tech Lead',
        pronouns: 'she/her',
        phone: '(510)358-1578',
        email: 'haytan@ucdavis.edu',
        linkedin: 'haylie'
    },
    {
        name: "Haylie Tan",
        image: '/contacts/Michelle.jpg',
        role: 'Tech Lead',
        pronouns: 'she/her',
        phone: '(510)358-1578',
        email: 'haytan@ucdavis.edu',
        linkedin: 'haylie'
    },
    {
        name: "Haylie Tan",
        image: '/contacts/Naomi.jpg',
        role: 'Tech Lead',
        pronouns: 'she/her',
        phone: '(510)358-1578',
        email: 'haytan@ucdavis.edu',
        linkedin: 'haylie'
    },
    {
        name: "Haylie Tan",
        image: '/contacts/Cristian.jpg',
        role: 'Tech Lead',
        pronouns: 'she/her',
        phone: '(510)358-1578',
        email: 'haytan@ucdavis.edu',
        linkedin: 'haylie'
    }
]

export default function Contact(){
    return(
        <div className={styles.container}>
            <h1>Contacts</h1>
            <div className={styles.card_container}>
                {data.map((lead, index)=> 
                    <Individual 
                        key={index} 
                        props={lead}
                    />
                )}
            </div>
        </div>
    )
}