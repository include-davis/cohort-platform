import Timeline from "@/app/_components/workshop-timeline/workshop-timeline";
import styles from "./homepage.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
          Howdy
      </div>
      <Timeline />
    </>
  );
}
