"use client";
import Image from 'next/image';
import styles from './additional-resources.module.scss';
import LinkPreview from '../link-preview/link-preview';

export default function AdditionalResources({ resources }) {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.filetab}>
                <Image src="/navbar/filetab.svg" alt="File Tab Background" className={styles.filetabImage} fill={true} />
            </div>
            
            <h1>Additional Resources</h1>
            {resources.map((resource, index) => (
                <div className={styles.resource} key={index}>
                    <LinkPreview 
                        title={resource.title}
                        description={resource.type}
                        link={resource.link}
                        theme="dark"
                    />
                </div>
            ))}
        </div> 
    );
}