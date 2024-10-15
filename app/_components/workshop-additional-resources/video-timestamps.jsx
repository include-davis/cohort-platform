import styles from './video-timestamps.module.scss';

export default function VideoTimestamps({ sections, videoRef }) {
    const handleTimestampClick = (startTime) => {
        const timeInSeconds = convertTimeToSeconds(startTime);
        if (videoRef && videoRef.current) {
            videoRef.current.currentTime = timeInSeconds;
            videoRef.current.play();
        }
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.header}>
                <h4>Section</h4>
                <h4>Time Stamp</h4>
            </div>
            <div className={styles.body}>
                <ul>
                    {sections.map((section, index) => (
                        <li key={index} className={styles.gridRow}>
                            <button
                                className={styles.rowButton}
                                onClick={() => handleTimestampClick(section.start)}
                            >
                                <div className={styles.sectionTitle}>
                                    {section.label}
                                </div>
                                <div className={styles.timeStamp}>
                                    {formatTime(section.start)} - {formatTime(section.end)}
                                </div>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function convertTimeToSeconds(timeString) {
    const match = timeString.match(/(\d+m)?(\d+s)?/);
    const minutes = match[1] ? parseInt(match[1]) : 0;
    const seconds = match[2] ? parseInt(match[2]) : 0;
    return minutes * 60 + seconds;
}

function formatTime(timeString) {
    const timeParts = timeString.match(/(\d+m)?(\d+s)?/);
    const minutes = timeParts[1] ? timeParts[1].replace('m', '') : '0';
    const seconds = timeParts[2] ? timeParts[2].replace('s', '').padStart(2, '0') : '00';
    return `${minutes}:${seconds}`;
}
