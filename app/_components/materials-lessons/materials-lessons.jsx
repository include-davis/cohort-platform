import styles from './materials-lessons.module.scss';

export default function Section() {
    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <h3>Materials</h3>
                <p className={styles.description}>Refer to these external websites for more information about how to set up. These links will contain helpful tips and will assist you in gaining a better understanding of development process!</p>
            </div>
            <div className={styles.section}>
                <h3>Lessons</h3>
                <p className={styles.description}>Refer to these external websites for more information about how to set up. These links will contain helpful tips and will assist you in gaining a better understanding of development process!</p>
            </div>
        </div>
    )
}