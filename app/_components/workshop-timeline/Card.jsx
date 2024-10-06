import Link from 'next/link'
import styles from './card.module.scss'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion'
import { useState } from 'react';

// adapted from sam's code for the scroll line:
const boxVariant = {
  // used for bullet point transitions
  visible: { opacity: 2, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

// used to create bullet w/ animation
const bullet = (
  <motion.div variants={boxVariant} initial="hidden" whileInView="visible">
    <div className={styles.outerCircle}>
      <div className={styles.innerCircle}></div>
    </div>
  </motion.div>
);

export default function Card( {title, text, agenda, link, number} ) {

  const [isHovered, setIsHovered] = useState(false);

  // used to create line with animation
  const line = (
    <motion.div style={{ height: '100%'}} variants={boxVariant} initial="hidden" whileInView="visible">
      <div className={isHovered ? styles.line_open : styles.line_closed}></div>
    </motion.div>
  );
  
  return (
    <motion.div 
      className={ styles.card } 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ height: 'var(--card-height-closed)', backgroundColor: 'var(--include-purple-light)' }} // Show top 10% and bottom 10%
      whileHover={{ height: '100%', backgroundColor: 'var(--accent-color)' }} // Show full content on hover
      transition={{ duration: 0.5 }} // Smooth transition
    >
      <div className={styles.number}>{number}</div>
      
      <div className={number != 1 ? styles.line_top : styles.line_none}>{line}</div>
      <div className={styles.bullet}>{bullet}</div>
      <div className={number != 5 ? styles.line_bottom : styles.line_none}>{line}</div>

      <div className={styles.card_front}>
        <div className={styles.card_content}>
          <div className={styles.workshop_description}>
            <p className={styles.title}>{title}</p>
            <p>{text}</p>
          </div>
          
          <ul className={styles.agenda}>
            { agenda.map( (item, idx) => 
              <li className={styles.agenda_item} key={idx}> {item} </li>
            )}
          </ul>
          
        </div>

        <div className={styles.link_div}>
            <Link href={link} passHref legacyBehavior>
              <a className={styles.link} target='_blank'>
                Workshop {number} <FaArrowRightLong />
              </a>
            </Link>
        </div> 


      </div>
    </motion.div>
  )
}

