import styles from "@/app/_components/weekly-timeline/calendar.module.scss"

const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]

function getEventPlacement({ startDay, startTime, endDay, endTime}) {
  // Days inputted 1 through 7 as integers
  // 24 hour time inputted as decimal
  return {
    gridColumn: `${(startDay - 1) * 24 + startTime} / ${(endDay - 1) * 24 + endTime}`,
    gridRow: 'auto'
  }
}

const events = [
  [
    {
      item: "Front-End Video",
      placement: getEventPlacement({ startDay: 1, startTime: 12.0, endDay: 2, endTime: 12.0 })
    },
    {
      item: "Figma",
      placement: getEventPlacement({ startDay: 2, startTime: 19.0, endDay: 3, endTime: 15.0 })
    },
    {
      item: "Workshop Slide Deck",
      placement: getEventPlacement({ startDay: 3, startTime: 0, endDay: 4, endTime: 20.0 })
    },
    {
      item: "Something Else",
      placement: getEventPlacement({ startDay: 5, startTime: 0, endDay: 7, endTime: 24.0 })
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