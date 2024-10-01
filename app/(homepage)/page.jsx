import styles from "./homepage.module.scss";
import Box from "@/app/_components/materials-lessons/materials-lessons"

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.box}></div>
      <Box />
      <div className={styles.box}></div>
    </div>
  );
}
