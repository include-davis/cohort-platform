import styles from './flex.module.scss'

export default function Demo1(){
    return (
        <div className={styles.big_box}>
            <div className={styles.tiny_box} />
            <div className={styles.tiny_box} />
            <div className={styles.tiny_box} />
        </div>
    )
}