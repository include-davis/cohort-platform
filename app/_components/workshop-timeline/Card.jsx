import Link from 'next/link'
import Image from 'next/image'
import styles from './workshop-timeline.module.scss'
import { FaArrowRightLong } from "react-icons/fa6";

export default function Card( {title, text, agenda, link, number} ) {
  return (
    <div className={styles.card}>
      <div className={styles.number}>{number}</div>
      <div className={styles.card_front}>
        <div className={styles.card_content}>
          <p className={styles.title}>{title}</p>
          <p>{text}</p>
      
          <ul className={styles.agenda}>
            { agenda.map( (item, idx) => 
              <li className={styles.agenda_item} key={idx}> {item} </li>
            )}
          </ul>

          <Link href={link} passHref legacyBehavior>
            <a className={styles.link} target='_blank'>
              Workshop {number} <FaArrowRightLong />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

