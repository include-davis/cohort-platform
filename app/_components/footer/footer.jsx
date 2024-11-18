import styles from './footer.module.scss'
import Image from 'next/image';

export default function Footer(){
    return(
        <div className={styles.footer}>
        <div className={styles.footerLogo}>
          <Image src="/navbar/Pound.svg" alt="Hash Logo" width={24} height={24} />
          <Image src="/navbar/Logo.svg" alt="Include Logo" width={100} height={24} />
        </div>
      </div>
    )
}