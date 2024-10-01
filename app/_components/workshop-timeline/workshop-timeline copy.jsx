import Card from './Card'
import styles from './workshop-timeline.module.scss'

const agenda = [
  "How The Internet Works",
  "Workspace Setup",
  "Overview of Web Development",
  "Basic HTML & CSS (Box Model)"
]

export default function Timeline() {
    return (
        <div className={styles.content}>
          <div>
            <p className={styles.header}>Technical Workshops</p>
            <p className={styles.text}>
              Want to learn more? Refer to our weekly workshops for 
              in-depth tutorials on <span className={styles.bold}>HTML</span>
              , <span className={styles.bold}>CSS</span>
              , <span className={styles.bold}>JavaScript</span>
              , and <span className={styles.bold}>more</span>!
            </p>
            <Card 
              title={"Initial Setup"} 
              text={"Getting to understand the web in prep for the rest of the workshops."}
              agenda={agenda}
              link={"https://www.google.com/"}
              number={1}
            />
          </div>
        </div>
    )
}