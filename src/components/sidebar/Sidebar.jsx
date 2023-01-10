import React from 'react'
import styles from "./Sidebar.module.css"
import Logo from "../../assets/logo.svg";
import { useState } from 'react';



export default function Sidebar() {
  const [toggle , showMenu] = useState(false);
  return (
    <>
    <aside className={`${styles.aside} ${toggle ? styles.showMenu : ""}`}>
    {/* <div className="blur" style={{
        background : "var(--blur2)",
        top : "80%",
        width: "50rem",
        height: "11rem",
        left: "0rem"
      }}></div> */}
      <img src={Logo} alt="" />
  
    <nav className={styles.nav}> 
    <div className={styles.navMenu}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <div className={styles.navLink}>
          <i className='icon-home'></i>
          </div>
        </li>
        <li className={styles.navItem}>
        <div className={styles.navLink}>
          <i className='icon-user-following'></i>
          </div>
        </li>
         <li className={styles.navItem}>
         <div className={styles.navLink}>
          <i className='icon-briefcase'></i>
          </div>
        </li>
         <li className={styles.navItem}>
         <div className={styles.navLink}>
          <i className='icon-graduation'></i>
          </div>
        </li>
        <li className={styles.navItem}>
        <div className={styles.navLink}>
          <i className='icon-layers'></i>
          </div>
        </li>
        <li className={styles.navItem}>
        <div className={styles.navLink}>
          <i className='icon-note'></i>
          </div>
        </li>
        <li className={styles.navItem}>
        <div className={styles.navLink}>
          <i className='icon-bubble'></i>
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
