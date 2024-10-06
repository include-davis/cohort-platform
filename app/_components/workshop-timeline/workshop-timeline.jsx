"use client"

import Card from './Card'
import styles from './workshop-timeline.module.scss'
import workshops from "./workshops.json";
import React from 'react';

export default function Timeline() {
    return (
        <div className={styles.content}>
          <div className={styles.description}>
            <p className={styles.header}>Technical Workshops</p>
            <p className={styles.text}>
              Want to learn more? Refer to our weekly workshops for 
              in-depth tutorials on HTML, CSS, JavaScript, and more!
            </p>
          </div>
          <div className={styles.timeline}>
            <div className={styles.workshops}>
              {workshops.map(( { title, text, agenda, link} , idx) => 
                <Card key={idx} title={title} text={text} agenda={agenda} link={link} number={idx + 1} />
              )}
            </div>
          </div>
        </div>
    )
}

