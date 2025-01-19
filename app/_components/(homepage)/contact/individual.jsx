import styles from './contact.module.scss';
import Image from 'next/image';
import { TbBrandLinkedin } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
import { TbPhone } from "react-icons/tb";

export function Individual({ props }){
    const { name, image, role, pronouns, phone, email } = props

    return(
        <div className={styles.individual_card}>
            
            <div className={styles.top_card}>
                <div className={styles.photo}>
                    <Image src={image} alt={`${role} - ${name}`} fill={true}/>
                </div>
                <div className={styles.text}>
                    <h2>{name}</h2>
                    <p>{role} <br/> {pronouns}</p>
                </div>
            </div>

            <div className={styles.bottom_card}>
                <p><TbPhone/>   {phone}</p>
                <p><TbMail/>    {email}</p>
                {/* <p><TbBrandLinkedin/>   {linkedin}</p> */}
            </div>
        </div>
    );
}