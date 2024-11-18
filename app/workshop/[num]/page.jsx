'use client'

import workshops from '@/_data/workshops.json'

import styles from "./workshop.module.scss"

import WorkshopWelcome from "@/_components/welcome/workshopWelcome"
import WorkshopNav from "@/_components/(workshop)/workshop-navigation/workshopNav"
import AssignmentBrief from "@/_components/(workshop)/assignment-brief/assignment-brief"
import WeeklyTimeline from "@/_components/(workshop)/weekly-timeline/weekly-timeline"
import Materials from "@/_components/(workshop)/materials-lessons/materialsLessons"
import TryItOut from "@/_components/(workshop)/try-it-out/try-it-out";
import AdditionalResources from "@/_components/(workshop)/additional-resources/additional-resources";

export default function Workshop({ params }){
    const week = params.num
    const workshopData = workshops[week-1]
    

    return(
        <div className={styles.workshop}>
            <WorkshopWelcome title={`${week}: ${workshopData.title}`} description={workshopData.description} />
            <WorkshopNav data={workshops} num={week-1} />
            <AssignmentBrief props={workshopData.assignment}/>
            <WeeklyTimeline timeline={workshopData.timeline}/>
            <Materials slideDeckLink={workshopData.slideDeckLink} recordingLink={workshopData.recordingLink} lessons={workshopData.lessons}/>
            <TryItOut defaultCode={workshopData.defaultCode} />
            <AdditionalResources resources={workshopData.additionalResources} />
        </div>
    )
}