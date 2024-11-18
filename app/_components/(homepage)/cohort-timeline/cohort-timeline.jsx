"use client" // Necessary for now to use workshops.json data

import Card from './Card'
import styles from './cohort-timeline.module.scss'
import workshops from "@/_data/workshops.json";

export default function Timeline() {
    return (
        <div className={styles.content} id="workshops">
          <div className={styles.description}>
            <p className={styles.header}>Technical Workshops</p>
            <p className={styles.text}>
              Want to learn more? Find all our weekly workshop material and resources on HTML, CSS, JavaScript, and more here!
            </p>
          </div>
          
          {/* This is where the stack of cards go. The bullet and line is connected to each card */}
          <div className={styles.timeline}>
            <div className={styles.workshops}>
              {workshops.map(( { title, description, agenda } , idx) => 
                <Card key={idx} title={title} description={description} agenda={agenda} number={idx + 1} />
              )}
            </div>
          </div>
        </div>
    )
}

