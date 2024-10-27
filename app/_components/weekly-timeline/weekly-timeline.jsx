import styles from "@/app/_components/weekly-timeline/weekly-timeline.module.scss"
import Calendar from "@/app/_components/weekly-timeline/calendar"

export default function WeeklyTimeline({ week }) {
  return (
    <div className={styles.content}>
      <div className={styles.overlap} />
      <h1>Weekly Timeline</h1>
      <p>Review our recommended weekly timeline to stay on track with the resources and materials.</p>
      <Calendar week={week} />
    </div>
  )
}