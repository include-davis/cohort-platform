import styles from './inspect.module.scss'
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";


export default function Inspect(){
    return (
        <div className={styles.big_box}>
            <img src="/images/salad.jpg" alt="Caesar salad" className={styles.salad} width="300" height="200" />
            <text className={styles.subheader}>DELICIOUS AND REFRESHING</text>
            <text className={styles.header}>Simple Caesar Salad</text>
            <div className={styles.rating}>
                <div className={styles.stars}>
                    <IoMdStar className={styles.star} />
                    <IoMdStar className={styles.star} />
                    <IoMdStar className={styles.star} />
                    <IoMdStar className={styles.star} />
                    <IoMdStarHalf className={styles.star} />
                </div>
                <text className={styles.ratingText}>1 Rating</text>
            </div>
        </div>
    )
}