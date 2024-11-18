import LinkPreview from '../link-preview/link-preview'
import Lesson from './lessonCard'
import styles from './materialsLessons.module.scss'
import Image from 'next/image'
import Demo1 from '@/_components/demos/demo1'

const demos = [
    {
        title: "Flexbox",
        description: "Learn how to use flexbox!",
        resources: [
            {
                name: "cheat sheet",
                link: "https://www.google.com"
            },
            {
                name: "interactive guide",
                link: "https://www.google.com"
            }
        ],
        demoComponent: <Demo1/>
    },
    {
        title: "Position",
        description: "Learn how to use positioning!",
        resources: [
            {
                name: "cheat sheet",
                link: "https://www.google.com"
            },
            {
                name: "interactive guide",
                link: "https://www.google.com"
            }
        ],
        demoComponent: <Demo1/>
    }
]

export default function Materials({ slideLink, recordingLink }) {
    return (
        <div className={styles.content}>
            <div className={styles.filetab}>
                <Image src="/navbar/filetab.svg" alt="File Tab Background" className={styles.filetabImage} fill={true} />
            </div>
            <h1>Materials</h1>
            <p className={styles.description}>Refer to these workshop materials for this week&apos;s topics. These links will also be a great resource to come back to during the development of the client project!</p>
            <div className={styles.materials}>
                <div className={styles.link}>
                    <LinkPreview title="Workshop Slides" link={slideLink} theme="light" />
                </div>
                <div className={styles.link}>
                    <LinkPreview title="Workshop Recording" link={recordingLink} theme="light" />
                </div>
            </div>

            <h1>Lessons</h1>
            <p className={styles.description}>Here are a some helpful demos for important concepts from this week.</p>
            {demos.map((demo, idx) => 
                <Lesson key={idx} title={demo.title} description={demo.description} resources={demo.resources} demoComponent={demo.demoComponent} /> 
            )}
        </div>
    )
}