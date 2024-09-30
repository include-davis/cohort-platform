import styles from "./homepage.module.scss";
import Welcome from "../_components/welcome/welcome";

export default function Home() {
  return (
    <div className={styles.page}>
      <Welcome/>
    </div>
  );
}
