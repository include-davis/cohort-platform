import styles from "./homepage.module.scss";
import Card from "../_components/workshop-additional-resources/card";
import AdditionalResources from "../_components/workshop-additional-resources/additional-resources";


export default function Home() {
  const card = {
    title: "Figma",
    type: "Website",
    image: "/images/filler.jpeg", 
    link: "https://www.figma.com/design/fpRwqzY3DXwOSi5Vsw8d5N/Early-Explorations?node-id=1-4&node-type=canvas&t=2lOneHx40SU7Yya0-0"
  };

  return (
    <div className={styles.page}>
      Howdy
      
      <AdditionalResources/>
    </div>
  );
}
