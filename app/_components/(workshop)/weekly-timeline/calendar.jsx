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

const events = [
  [
    {
      item: "Front-End Video",
      placement: getEventPlacement({ startDay: 1, startInHalf: 1, endDay: 3, endBeforeHalf: 1 })
    },
    {
      item: "Workshop Slide Deck",
      placement: getEventPlacement({ startDay: 2, startInHalf: 1, endDay: 4, endBeforeHalf: 2 })
    },
    {
      item: "Figma",
      placement: getEventPlacement({ startDay: 4, startInHalf: 1, endDay: 7, endBeforeHalf: 1 })
    },
    {
      item: "Something Else",
      placement: getEventPlacement({ startDay: 5, startInHalf: 1, endDay: 7, endBeforeHalf: 3 })
    }
  ],
  []
]

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
        <div className={styles.agenda}>
          {events[week - 1].map((eventItem, idx) => 
            <div 
              key={idx} 
              className={styles.event} 
              style={eventItem.placement}
            >
              {eventItem.item}
            </div>)}
        </div>
      </div>
    </div>
  )
}