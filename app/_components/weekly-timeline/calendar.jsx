import styles from "@/app/_components/weekly-timeline/calendar.module.scss"

const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]

export default function Calendar({ week }) {
  return (
    <div className={styles.content}>
      <div className={styles.calendar}>
        {weekdays.map((day, idx) => (
          <div key={idx} className={styles.days}>
            <div className={styles.day}>{day}</div>
            {idx != weekdays.length - 1 && <div className={styles.line}/>}
          </div>
        ))}
        <div className={styles.agenda}>hello</div>
      </div>
    </div>
  )
}