import React from 'react'
import styles from "./Sidebar.module.css"
import Logo from "../../assets/log1.png";
import { useState } from 'react';



export default function Sidebar() {
  const [toggle , showMenu] = useState(false);
  return (
    <>
    <aside className={`${styles.aside} ${toggle ? styles.showMenu : ""}`}>
      <img className={styles.logo} src={Logo} alt="" />
  
    <nav className={styles.nav}> 
    <div className={styles.navMenu}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <div className={styles.navLink}>
         <a href="#home"> <i className='icon-home'></i></a>
          </div>
        </li>
        <li className={styles.navItem}>
        <div className={styles.navLink}>
        <a href="#about"> <i className='icon-user-following'></i> </a>
          </div>
        </li>
         <li className={styles.navItem}>
         <div className={styles.navLink}>
         <a href="#services"><i className='icon-briefcase'></i> </a>
          </div>
        </li>
         <li className={styles.navItem}>
         <div className={styles.navLink}>
         <a href="#resume"><i className='icon-graduation'></i></a>
          </div>
        </li>
        <li className={styles.navItem}>
        <div className={styles.navLink}>
        <a href="#project"><i className='icon-layers'></i></a>
          </div>
        </li>
        <li className={styles.navItem}>
        <div className={styles.navLink}>
          <i className='icon-note'></i>
          </div>
        </li>
        <li className={styles.navItem}>
        <div className={styles.navLink}>
        <a href="#contact"><i className='icon-bubble'></i></a>
          </div>
        </li>
         </ul>
    </div>
    </nav>
    <div className="navFooter">
      <span className={styles.copyright}>&copy; 2023 - 2024</span>
    </div>

    </aside>
    <div className={`${styles.navToggle} ${toggle ? styles.navToggleOpen : ""}`} onClick={() => showMenu(!toggle)}>
      <i className='icon-menu' ></i>
    </div>
    </>
  )
}
