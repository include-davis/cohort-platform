import Link from 'next/link'
import styles from './card.module.scss'

import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion'
import { useState } from 'react';

// Bullets and lines are adapted and modified from include 2023 websitecode: 
// https://github.com/include-davis/website-2023/blob/main/src/pages/services.tsx
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

// Every Card is connected to a bullet with a line going through it
export default function Card( {title, text, agenda, number} ) {

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
      
      {/* Don't show line at the top and bottom of the line of bullets*/}
      <div className={number != 1 ? styles.line_top : styles.line_none}>{line}</div>
      <div className={styles.bullet}>{bullet}</div>
      <div className={number != 5 ? styles.line_bottom : styles.line_none}>{line}</div>

      {/* The content fore every card */}
      <div className={styles.card_front}>
        <div className={styles.card_content}>
          {/* This has the title and description together in the same div*/}
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
            {/* Contains dummy links for now */}
            <Link href={`/workshop/${number}`} passHref legacyBehavior>
              <a className={styles.link}>
                Workshop {number} <FaArrowRightLong />
              </a>
            </Link>
        </div> 
      </div>
    </motion.div>
  )
}

