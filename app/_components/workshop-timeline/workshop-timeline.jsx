"use client" // Necessary for now to use workshops.json data

import Card from './Card'
import styles from './workshop-timeline.module.scss'
import workshops from "./workshops.json";

export default function Timeline() {
    return (
        <div className={styles.content} id="workshops">
          <div className={styles.description}>
            <p className={styles.header}>Technical Workshops</p>
            <p className={styles.text}>
              Want to learn more? Refer to our weekly workshops for 
              in-depth tutorials on HTML, CSS, JavaScript, and more!
            </p>
          </div>
          
          {/* This is where the stack of cards go. The bullet and line is connected to each card */}
          <div className={styles.timeline}>
            <div className={styles.workshops}>
              {workshops.map(( { title, text, agenda} , idx) => 
                <Card key={idx} title={title} text={text} agenda={agenda} number={idx + 1} />
              )}
            </div>
          </div>
        </div>
    )
}

