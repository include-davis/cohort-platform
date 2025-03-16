import LinkPreview from '../link-preview/link-preview'
import Image from 'next/image'

import styles from './materialsLessons.module.scss'

import Lesson from './lessonCard'
import FlexDemo from '@/_demos/flex'
import InspectDemo from '@/_demos/inspect'
import MapDemo from '@/_demos/map'
import StateDemo from '@/_demos/state'

const componentMap = {
    FlexDemo: <FlexDemo />,
    InspectDemo: <InspectDemo />,
    MapDemo: <MapDemo />,
    StateDemo: <StateDemo />,
}

export default function Materials({ slideDeckLink, recordingLink, lessons }) {
    return (
        <div className={styles.content}>
            <div className={styles.filetab}>
                <Image src="/navbar/filetab.svg" alt="File Tab Background" className={styles.filetabImage} fill={true} />
            </div>
            <h1>Materials</h1>
            <p className={styles.description}>Refer to these workshop materials for this week&apos;s topics. These links will also be a great resource to come back to during the development of the client project!</p>
            <div className={styles.materials}>
                <div className={styles.link}>
                    <LinkPreview title="Workshop Slides" link={slideDeckLink} theme="light" />
                </div>
                {recordingLink != "" && <div className={styles.link}>
                    <LinkPreview title="Workshop Recording" link={recordingLink} theme="light" />
                </div>}
            </div>

            <h1>Lessons</h1>
            <p className={styles.description}>Here are a some helpful demos for important concepts from this week.</p>
            {lessons.map((lesson, idx) => 
                <Lesson key={idx} title={lesson.title} description={lesson.description} resources={lesson.resources} demoComponent={componentMap[lesson.demoComponentName]} /> 
            )}
        </div>
    )
}