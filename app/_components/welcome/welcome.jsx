import { QuickLinkCard } from './quickLinkCard'
import styles from './welcome.module.scss'

export default function Welcome(){
    return(
        <div>
            <h1>Welcome Tech at #include</h1>
            <p>We&apos;re so happy to have you on the #include team! This website will be used to aid you in your <b>learning experience</b>. Please refer here for important information regarding <b>resources</b>, <b>workshops</b>, <b>personal bios</b>, and <b>contact information</b>.</p>
            <div>
                <QuickLinkCard image="" title="Access Your Repository"/>
                <QuickLinkCard image="" title="Join Your Slack"/>
                <QuickLinkCard image="" title="Complete Assignments"/>
            </div>
        </div>
    )
}