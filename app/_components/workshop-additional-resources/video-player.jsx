import { useRef } from 'react';
import styles from './video-player.module.scss'

export default function VideoPlayer({ videoSrc, setVideoRef, title, description }) {
    const videoRef = useRef(null);

    setVideoRef(videoRef);

    return (
        <div className={styles.videoContainer}>
            <video
                ref={videoRef}
                width="754"
                height="452"
                controls
                autoPlay
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.textContainer}>
                <h3>{title}</h3> 
                <p>{description}</p> 
            </div>
        </div>
    );
}
