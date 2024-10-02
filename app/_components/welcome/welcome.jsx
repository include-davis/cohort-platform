import { QuickLinkCard } from './quickLinkCard'
import styles from './welcome.module.scss'
import bg_logo from './bg_logo.svg'
import github_logo from './github_logo.svg'
import slack_logo from './slack_logo.svg'
import pencil_icon from './pencil_icon.svg'

export default function Welcome(){
    return(
        <div className={styles.container}>
            <div className={styles.welcome}>
                <div>
                    <h1>Welcome Tech at <span className={styles.include_purple}>#include</span></h1>
                    <p>We&apos;re so happy to have you on the #include team! This website will be used to aid you in your <b><span className={styles.include_purple}>learning experience</span></b>. Please refer here for important information regarding <b><span className={styles.include_purple}>resources</span></b>, <b><span className={styles.include_purple}>workshops</span></b>, <b><span className={styles.include_purple}>personal bios</span></b>, and <b><span className={styles.include_purple}>contact information</span></b>.</p>
                </div>
                <div>
                    <img src={bg_logo} alt="bg_logo"/>
                </div>
            </div>
            
            
            <div className={styles.card_container}>
                <QuickLinkCard image={github_logo} title="Access Your Repository"/>
                <QuickLinkCard image={slack_logo} title="Join Your Slack"/>
                <QuickLinkCard image={pencil_icon} title="Complete Assignments"/>
            </div>
        </div>
    )
}