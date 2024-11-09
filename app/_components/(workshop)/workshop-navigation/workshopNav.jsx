import Link from "next/link"
import styles from './workshopNav.module.scss'

export default function WorkshopNav({ data, num }){
    return(
        <nav className={styles.workshopNav}>
            { data.map((item, idx) => 
                <div key={idx} className={styles.tabContainer}>
                    <Link href={`/workshop/${idx+1}`} 
                        className={[styles.navTab, (idx == 1) ? styles.firstNavTab : styles.laterNavTab, (idx == num)? styles.selectedTab : null].join(' ')}
                    >
                        {idx == num && <div className={styles.overlap}></div>}
                        <p>{idx+1}: {item.title}</p>
                    </Link>
                    <div className={styles.dividerContainer}>
                        {idx != num && idx!=4 && 
                            <div className={styles.divider}></div>
                        }
                    </div>
                </div>
            ) }
        </nav>
    )
}