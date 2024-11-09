import LinkPreview from '../link-preview/link-preview'
import styles from './materials.module.scss'
import Image from 'next/image'

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
            {/* TODO: LESSONS SECTION */}
            
        </div>
    )
}