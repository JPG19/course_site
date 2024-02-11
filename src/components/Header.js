import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import styles from '../../styles/Home.module.css'

const Header = () => {
    const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <Link href="/">
            <Image src="/vercel.svg" alt="Logo" width={100} height={50} />
            </Link>
          
        </div>
        <button className={styles.hamburgerMenu} onClick={toggleNavLinks}>&#9776;</button>
        <nav className={`${styles.navLinks} ${showNavLinks ? styles.show : ''}`}>
          <ul className={`${showNavLinks ? styles.show : ''}`}>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </nav>
      </header>
  )
}

export default Header