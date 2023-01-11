import React from 'react';
import styles from "./Home.module.css";
import {FiChevronsDown} from "react-icons/fi"

export default function ScrollDown() {
  return (
   <div className={styles.scrollDown}>
    <a href="#about" className={styles.mouseWrapper}>
        <span className={styles.homeScrollName}>Discover More</span>
        
            <div className={styles.wheel}><FiChevronsDown /> <FiChevronsDown /></div>
    </a>
   </div>
  )
}
