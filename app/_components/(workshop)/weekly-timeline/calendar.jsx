import styles from "./calendar.module.scss"

const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]

function getEventPlacement({ startDay, startInHalf, endDay, endBeforeHalf}) {
  // Days inputted 1 through 7 as integers
  // Half variables inputted as 1, 2 or 3 (for endDay=7)
  return {
    gridColumn: `${(startDay-1)*2 + startInHalf} / ${(endDay-1)*2 + endBeforeHalf}`,
    gridRow: 'auto'
  }
}

export default function Calendar({ timeline }) {
  return (
    <div className={styles.content}>
      <div className={styles.calendar}>
        {weekdays.map((day, idx) => (
          <div key={idx} className={styles.days}>
            <div className={styles.day}>{day}</div>
            {idx != weekdays.length - 1 && <div className={styles.line}/>}
          </div>
        ))}
        <div className={styles.agenda}>
          {timeline.map((eventItem, idx) => 
            <div 
              key={idx} 
              className={styles.event} 
              style={getEventPlacement(eventItem)}
            >
              {eventItem.item}
            </div>)}
        </div>
      </div>
    </div>
  )
}