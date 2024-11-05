import styles from './footer.module.scss'
import Image from 'next/image';
import logo from '../navbar/Logo.svg';
import pound from '../navbar/Pound.svg';

export default function Footer(){
    return(
        <div className={styles.footer}>
        <div className={styles.footerLogo}>
          <Image src={pound} alt="Hash Logo" width={24} height={24} />
          <Image src={logo} alt="Include Logo" width={100} height={24} />
        </div>
      </div>
    )
}