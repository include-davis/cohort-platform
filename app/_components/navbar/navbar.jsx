import styles from './navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/navbar/Pound.svg" alt="Hash Logo" width={24} height={24} />
        <Image src="/navbar/Logo.svg" alt="Include Logo" width={100} height={24} />
      </div>
      <div className={styles.filetab}>
        <div className={styles.navLinks}>
          <Link href="#workshops" className={styles.text}>Workshops</Link>
          <Link href="#contact" className={styles.text}>Contact</Link>
        </div>
        <Image src="/navbar/filetab.svg" alt="File Tab Background" className={styles.fileTabImage} 	style ={{ objectFit: "contain"}} fill={true} />
      </div>
    </nav>
  );
}
