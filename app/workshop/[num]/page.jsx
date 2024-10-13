'use client';

import { useState } from "react";
import styles from "./workshop.module.scss";

// params: { num: string }
export default function Workshop({ params }){
    const workshopTitles = [[1, "Intro to Web Dev"], [2, "HTML and CSS"], [3, "JavaScript"], [4, "React.js and Next.js"], [5, "APIs and Backend"]];
    const [num, setNum] = useState(params.num);

    return(
        <div className={styles.workshop}>
            <nav className={styles.workshopNav}>
                { workshopTitles.map((workshop) => 
                    <div className={[styles.navTab, (workshop[0] == 1) ? styles.firstNavTab : styles.laterNavTab, (workshop[0] == num)? styles.selectedTab : null].join(' ')} key={workshop[0]}>
                        <p>{workshop[1]}</p>
                    </div>
                ) }
            </nav>
            <div>
                hello, welcome to week {num}! {workshopTitles[num]}
            </div>
        </div>
    )
}