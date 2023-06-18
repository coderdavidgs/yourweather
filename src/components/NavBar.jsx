import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles['container']}>
        <nav>
            Your<span className={styles['secondName']}>Weather</span><img src="./logo.png" alt="your wheater" width='40'/>
        </nav>
    </div>
  )
}

export default NavBar