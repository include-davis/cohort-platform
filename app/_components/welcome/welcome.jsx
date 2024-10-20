import { QuickLinkCard } from './quickLinkCard'
import styles from './welcome.module.scss'
import Image from 'next/image';

export default function Welcome(){
    return(
        <div className={styles.container}>
            <div className={styles.welcome}>
                <div className={styles.welcome_half}>
                    <h1>Welcome Tech at <span className={styles.include_purple}>#include</span></h1>
                    <br/>
                    <p>We&apos;re so happy to have you on the #include team! This website will be used to aid you in your <b><span className={styles.include_purple}>learning experience</span></b>. Please refer here for important information regarding <b><span className={styles.include_purple}>resources</span></b>, <b><span className={styles.include_purple}>workshops</span></b>, <b><span className={styles.include_purple}>personal bios</span></b>, and <b><span className={styles.include_purple}>contact information</span></b>.</p>
                </div>
                <div className={styles.welcome_half}>
                    <Image src="/welcome/bg_logo.svg" alt="bg_logo" width={600} height={600}/>
                </div>
            </div>
            
            
            <div className={styles.card_container}>
                <QuickLinkCard image="/welcome/github_logo.svg" title="Access Your Repository"/>
                <QuickLinkCard image="/welcome/slack_logo.svg" title="Join Your Slack"/>
                <QuickLinkCard image="/welcome/pencil_icon.svg" title="Complete Assignments"/>
            </div>
        </div>
    )
}