import { Individual } from './individual.jsx'
import styles from './contact.module.scss'
import Image from 'next/image.js'

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
        <div className={styles.container}  id="contact">
            <div className={styles.filetab}>
                <Image src="/navbar/filetab.svg" alt="File Tab Background" className={styles.filetabImage} 	style ={{ objectFit: "contain"}} fill={true} />
            </div>
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