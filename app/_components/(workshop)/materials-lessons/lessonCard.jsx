import styles from './lessonCard.module.scss';
import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Link from 'next/link';

export default function Lesson({ title, description, resources, demoComponent }){
    const [expand, setExpand] = useState(false);

    const handler = () => {
        setExpand(!expand)
    }

    return (
        <div className={styles.container}>
            <div className={styles.visible_section}>
                <p>{title}</p>
                <button onClick={handler} className={styles.arrow}>
                    {expand ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </button>
            </div>
            {expand &&
                <div className={`${styles.collapsible_section} ${expand ? styles.active : null}`}>
                    <div className={styles.content_text}>
                        <p>{description}</p>
                        {/* <div className={styles.resources}> */}
                            {resources.map((resource, idx) => 
                                <Link href={resource.link} key={idx}>{resource.name}</Link>
                            )}
                    </div>
                    <div className={styles.content_visuals}>
                        {demoComponent}
                    </div>
                </div>
            }
        </div>
    )
}