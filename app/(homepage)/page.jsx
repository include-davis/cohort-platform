import styles from "./homepage.module.scss";

import Welcome from "../_components/welcome/welcome";
import Timeline from "@/_components/cohort-timeline/cohort-timeline";
import Contact from "../_components/contact/page";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
          <Welcome/>
          <Timeline/>
          <Contact/>
      </div>
    </>
  );
}
