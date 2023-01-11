import React from 'react';
import styles from "./Home.module.css";

export default function ScrollDown() {
  return (
   <div className={styles.scrollDown}>
    <a href="#about" className={styles.mouseWrapper}>
        <span className={styles.homeScrollName}>Discover More</span>
        <span className={styles.mouse}>
            <span className={styles.wheel}></span>
        </span>
    </a>
   </div>
  )
}
