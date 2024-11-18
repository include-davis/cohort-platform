import styles from './assignment-brief.module.scss'

export default function AssignmentBrief({ props }){
    const { brief, tags, deadline } = props
    
    return(
        <div className={styles.container} id="assignment-brief">
            <div className={styles.content}>
                <div className={styles.heading}>
                    <h1>Assignment Brief</h1>
                    <p>Deadline: {deadline}</p>
                </div>

                <p>{brief}</p>

                <div className={styles.tags}>
                    {tags.map((tag, idx) => 
                        <div key={idx} className={styles.tag}>{tag}</div>
                    )}
                </div>
            </div>
        </div>
    )
}