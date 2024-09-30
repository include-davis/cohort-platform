import styles from "./workshop.module.scss";

// params: { num: string }
export default function Workshop({ params }){
    return(
        <div>
            hello, welcome to week {params.num}!
        </div>
    )
}