import styles from './map.module.scss'

const apples = ["Granny Smith", "Fuji", "Gala"]

export default function MapDemo(){
    return (
        <div className={styles.big_box}>
            <p className={styles.description}>Given an array, apples=["Granny Smith", "Fuji", "Gala"], you can use map to generate an array of UIs for each apple in the array</p>
            <div className={styles.apples}>
                {apples.map(()=>{
                    return (
                    <div className={styles.apple}>
                        <div className={styles.stem} />
                        <div className={styles.leaf} />
                    </div>
                    )
                })}
            </div>
        </div>
    )
}