import Image from 'next/image.js'
import styles from './contact.module.scss'
import { Individual } from './individual.jsx'

export default function Contact({ data }){
    return(
        <div className={styles.container}  id="contact">
            <div className={styles.filetab}>
                <Image src="/navbar/filetab.svg" alt="File Tab Background" className={styles.filetabImage} fill={true} />
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