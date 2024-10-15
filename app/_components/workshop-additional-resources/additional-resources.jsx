"use client";
import { useState } from 'react'; 
import styles from './additional-resources.module.scss';
import Card from './card'
import cards from './cards.json';
import VideoPlayer from './video-player';
import videos from './videos.json';
import VideoTimestamps from './video-timestamps';


export default function AdditionalResources() {
    const video = videos[0]; 
    const [videoRef, setVideoRef] = useState(null);
    return (
        <div className={styles.mainContainer}>
            <div className={styles.tab}></div>
            <div className={styles.mainBodyContainer}>
                <h3>Additional Resources</h3>

                <div className = {styles.videoContainer}>
                    {/* Video Player */}
                    <VideoPlayer 
                        videoSrc={`/videos/${video.filename}`} 
                        setVideoRef={setVideoRef} 
                        title={video.title} 
                        description={video.description}
                    />

                    {/* Video Timestamps */}
                    <VideoTimestamps sections={video.sections} videoRef={videoRef} />

                </div>

                <div className={styles.cardsContainer}>
                    {cards.map((card, index) => (
                        <Card   
                            key={index}
                            title={card.title}
                            type={card.type}
                            image={card.image}
                            link={card.link}
                        />
                    ))}
                </div>
            </div>
        </div> 
    );
}