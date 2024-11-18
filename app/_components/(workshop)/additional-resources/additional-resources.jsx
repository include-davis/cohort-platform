"use client";
import { useState } from 'react'; 
import Image from 'next/image';
import styles from './additional-resources.module.scss';
import LinkPreview from '../link-preview/link-preview';
import cards from './cards.json';


export default function AdditionalResources() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.filetab}>
                <Image src="/navbar/filetab.svg" alt="File Tab Background" className={styles.filetabImage} fill={true} />
            </div>
            
            <h1>Additional Resources</h1>
            {cards.map((card, index) => (
                <div className={styles.card} key={index}>
                    <LinkPreview 
                        title={card.title}
                        description={card.type}
                        link={card.link}
                        theme="dark"
                    />
                </div>
            ))}
        </div> 
    );
}