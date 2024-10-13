'use client';

import { useState } from "react";
import styles from "./workshop.module.scss";

// params: { num: string }
export default function Workshop({ params }){
    const workshopTitles = ["Intro to Web Dev", "HTML and CSS", "JavaScript", "React.js and Next.js", "APIs and Backend"];
    const navItems = []
    for (let i = 0; i < workshopTitles.length; i ++) {
        navItems.push([i + 1, workshopTitles[i]])
        if (i != workshopTitles.length - 1){
            navItems.push([workshopTitles.length * 2 - i, `d${i}`]);
        }
    }
    const [num, setNum] = useState(params.num);

    return(
        <div className={styles.workshop}>
            <nav className={styles.workshopNav}>
                { navItems.map((item) => 
                    <div key={item[0]} className={styles.tabContainer}>
                        { item[1][0] == "d" ?
                            <div className={styles.dividerContainer}>
                                {item[1][1] != num - 1 && <div className={styles.divider}></div>}
                            </div>
                            :
                            <div className={[styles.navTab, (item[0] == 1) ? styles.firstNavTab : styles.laterNavTab, (item[0] == num)? styles.selectedTab : null].join(' ')}>
                                {item[0] == num && <div className={styles.overlap}></div>}
                                <p>{item[1]}</p>
                            </div>
                        }
                    </div>
                ) }
            </nav>
            <div>
                hello, welcome to week {num}! {workshopTitles[num]}
            </div>
        </div>
    )
}