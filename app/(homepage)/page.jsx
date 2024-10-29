import styles from "./homepage.module.scss";
import TryItOut from "../_components/try-it-out/try-it-out";
import { defaultCode } from "../_components/try-it-out/default-code";

export default function Home() {
  return (
    <div className={styles.page}>
      Howdy
      <TryItOut defaultCode={defaultCode} />
    </div>
  );
}
