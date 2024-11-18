import Image from 'next/image'
import styles from './card.module.scss'
import Link from 'next/link'

export default function Card( {title, type, image, link}) {
    return (
        <Link href={link} passHref>
            <div className = {styles.card}> 
                <div className = {styles.textContainer}>
                    <h2>{title}</h2>
                    <p>{type}</p>
                </div>
                <div className = {styles.imgContainer}>
                    <Image  
                        src = {image}
                        alt={title}
                        style={{ objectFit: "cover" }}
                        fill={true}
                    />
                </div>
            </div>
        </Link>
        
    )
}