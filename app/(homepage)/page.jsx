import Contact from "../_components/contact/page";
import styles from "./homepage.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      Howdy
      <Contact/>
    </div>
  );
}
