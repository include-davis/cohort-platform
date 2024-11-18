import homepageData from '@/_data/homepage.json';
import styles from "./homepage.module.scss";

import Welcome from "@/_components/welcome/welcome";
import Timeline from "@/_components/(homepage)/cohort-timeline/cohort-timeline";
import Contact from "@/_components/(homepage)/contact/page";

export default function Home() {
  return (
    <div className={styles.page}>
        <Welcome currentWeek={homepageData.current_week} links={homepageData.links} />
        <Timeline />
        <Contact data={homepageData.contacts} />
    </div>
  );
}
