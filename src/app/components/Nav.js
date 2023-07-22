import React from 'react'
import styles from '@/app/style/navbar.module.css'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className={styles.navbar}>
        <div>
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}>
                    <Link href="/">Home</Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link href="/about">About</Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link href="/movies">Movies</Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav
