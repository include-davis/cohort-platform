import { QuickLinkCard } from './quickLinkCard'
import styles from './welcome.module.scss'
import Image from 'next/image';

export default function Welcome({ currentWeek, links }){
    return(
        <div className={styles.container}>
            <div className={styles.welcome}>
                <div className={styles.welcome_half}>
                    <h1>Welcome to Tech at <span>#include</span></h1>
                    <p>We&apos;re so happy to have you on the #include team! This website will be used to aid you in your <span>learning experience</span>. Please refer here for important information regarding <span>resources</span>, <span>workshops</span>, <span>personal bios</span>, and <span>contact information</span>.</p>
                </div>
                <div className={styles.logo}>
                    <Image src="/welcome/bg_logo.svg" alt="bg_logo" fill={true}/>
                </div>
            </div>
            
            <div className={styles.card_container}>
                <QuickLinkCard image="/welcome/github_logo.svg" title="Access Your Repository" link={links.training_repo}/>
                <QuickLinkCard image="/welcome/slack_logo.svg" title="Join the Slack" link={links.slack_invite}/>
                <QuickLinkCard image="/welcome/pencil_icon.svg" title="Complete Assignments" link={`/workshop/${currentWeek}/#assignment-brief`}/>
            </div>
        </div>
    )
}