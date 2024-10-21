"use client";
import { useState } from 'react'; 
import styles from './additional-resources.module.scss';
import Card from './card'
import cards from './cards.json';
import VideoPlayer from './video-player';
import videos from './videos.json';


export default function AdditionalResources() {
    const video = videos[0]; 
    const [videoRef, setVideoRef] = useState(null);
    return (
        <div className={styles.mainContainer}>
            <div className={styles.tab}></div>
            <div className={styles.mainBodyContainer}>
                <h3>Additional Resources</h3>

                <div className = {styles.videoContainer}>
                    {/* Add more videos as needed here */}
                    {videos.map((video, index) => (
                        <VideoPlayer 
                            key={index} 
                            videoSrc={video.videoSrc} 
                            setVideoRef={setVideoRef}
                            title={video.title} 
                            description={video.description}
                        />
                    ))}
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