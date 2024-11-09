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
            <p className={styles.description}>Refer to these external websites for more information about how to set up. These links will contain helpful tips and will assist you in gaining a better understanding of development process!</p>
            <div className={styles.materials}>
                <div className={styles.link}>
                    <LinkPreview title="Workshop Slides" link={slideLink} theme="light" />
                </div>
                <div className={styles.link}>
                    <LinkPreview title="Workshop Recording" link={recordingLink} theme="light" />
                </div>
            </div>
        </div>
    )
}