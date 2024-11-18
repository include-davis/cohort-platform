'use client'

import { useState } from "react"
import styles from "./workshop.module.scss"
import WorkshopWelcome from "@/_components/welcome/workshopWelcome"
import WorkshopNav from "@/_components/(workshop)/workshop-navigation/workshopNav"
import AssignmentBrief from "@/_components/(workshop)/assignment-brief/assignment-brief"
import WeeklyTimeline from "@/_components/(workshop)/weekly-timeline/weekly-timeline"
import Materials from "@/_components/(workshop)/materials-lessons/materialsLessons"

const workshopData = [
    {
        title: "Intro to Web Dev",
        description: "Welcome to your first week! In this week\’s workshop, we will explore web development. Refer to the following videos and links for more information to start!", 
        slideLink: "",
        recordingLink: ""
    },
    {
        title: "Intro to HTML and CSS",
        description: "Welcome to your second week! In this week\’s workshop, we will explore HTML and CSS. Refer to the following videos and links for more information to start!",
        slideLink: "https://docs.google.com/presentation/d/1CK2ZQ7XIXzPiXf0hrrv4sEglniojDNw4/edit#slide=id.g25e770466cf_0_33",
        recordingLink: ""
    },
    {
        title: "JavaScript",
        description: "Welcome to your third week! In this week\’s workshop, we will explore JavaScript. Refer to the following videos and links for more information to start!",
        slideLink: "",
        recordingLink: ""
    },
    {
        title: "React.js and Next.js",
        description: "Welcome to your fourth week! In this week\’s workshop, we will explore some JS frameworks. Refer to the following videos and links for more information to start!",
        slideLink: "",
        recordingLink: ""
    },
    {
        title: "APIs and Backend",
        description: "Welcome to your fifth week! In this week\’s workshop, we will explore backend development. Refer to the following videos and links for more information to start!",
        slideLink: "",
        recordingLink: ""
    }
]

export default function Workshop({ params }){
    const [num, setNum] = useState(params.num-1)

    return(
        <div className={styles.workshop}>
            <WorkshopWelcome title={`${num+1}: ${workshopData[num].title}`} text={workshopData[num].description} />
            <WorkshopNav data={workshopData} num={num} />
            <AssignmentBrief brief={`For your assignment you will need to practice HTML and CSS.\n\nAccess your personal page and create a profile. Introduce yourself by briefly telling us about you. Practice correct HTML semantics. Then create a “Skills” section. Create a list of your skills.\n\nOnce you complete the HTML, starting designing your CSS. Make sure to use the techniques taught in the workshop.`} tags={["flexbox", "html", "media queries"]} deadline="10.18.2024" />
            <WeeklyTimeline week={num+1}/>
            <Materials slideLink={workshopData[num].slideLink} recordingLink={workshopData[num].recordingLink} />
        </div>
    )
}