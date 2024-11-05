import styles from './navbar.module.scss'
import logo from './Logo.svg'
import pound from './Pound.svg';
import Image from 'next/image'


export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
      <Image src={pound} alt="Hash Logo" width={24} height={24} />
      <Image src={logo} alt="Include Logo" width={100} height={24} />

      </div>
      <div className={styles.filetab}>

        <a href="/workshops" className={styles.text}>Workshops</a>
        <a href="/contact" className={styles.text}>Contact</a>
         
      </div>

    </nav>
  );
}