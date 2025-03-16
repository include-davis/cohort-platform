import { useState } from 'react';
import styles from './state.module.scss'

export default function StateDemo(){
    const [count, setCount] = useState(0);

    return (
        <div className={styles.big_box}>
            <h5>Cookie clicker</h5>
            <p>{count}</p>
            <img onClick={()=>{setCount(count+1)}} src="/images/cookie.jpg" alt="Cookie" className={styles.cookie} width="300" height="200" />

        </div>
    )
}