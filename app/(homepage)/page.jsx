import styles from "./homepage.module.scss";
import AdditionalResources from "../_components/workshop-additional-resources/additional-resources";


export default function Home() {
  return (
    <div className={styles.page}>
      Howdy

      <AdditionalResources/>
    </div>
  );
}
