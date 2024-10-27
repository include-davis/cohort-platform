import WeeklyTimeline from "@/app/_components/weekly-timeline/weekly-timeline";
import styles from "./workshop.module.scss";

// params: { num: string }
export default function Workshop({ params }){
    return(
        <div>
            hello, welcome to week {params.num}!
            <WeeklyTimeline week={params.num} />
        </div>
    )
}