import styles from './video-player.module.scss';

export default function VideoPlayer({ videoSrc, title, description }) {
    return (
        <div className={styles.videoContainer}>
            <iframe
                width="754"
                height="452"
                src={videoSrc}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}