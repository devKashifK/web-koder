import React from 'react';
import styles from "./About.module.css";

export default function AboutBox() {
  return (
    <div className={`${styles.aboutBoxes} grid`}>
        <div className={styles.aboutBox}>
            <i className={`${styles.aboutIcon} icon-fire`}></i>
    
        <div>
            <h3 className={styles.aboutTitle}>198</h3>
            <span className={styles.aboutSubtitle}>Project Completed</span>
        </div>
        </div>
        <div className={styles.aboutBox}>
            <i className={`${styles.aboutIcon} icon-cup`}></i>
    
        <div>
            <h3 className={styles.aboutTitle}>5670</h3>
            <span className={styles.aboutSubtitle}>Cup of coffee</span>
        </div>
        </div>
        <div className={styles.aboutBox}>
            <i className={`${styles.aboutIcon} icon-people`}></i>
    
        <div>
            <h3 className={styles.aboutTitle}>427</h3>
            <span className={styles.aboutSubtitle}>Satisfied Clients</span>
        </div>
        </div>
        <div className={styles.aboutBox}>
            <i className={`${styles.aboutIcon} icon-badge`}></i>
    
        <div>
            <h3 className={styles.aboutTitle}>35</h3>
            <span className={styles.aboutSubtitle}>Nominees Winner</span>
        </div>
        </div>
    </div>

  )
}
