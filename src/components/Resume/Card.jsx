import React from "react";
import styles from "./Resume.module.css";

export default function Card(props) {
  return (
    <div className={styles.timelineItem} data-aos="fade-up">
      <i className={`${props.icon} ${styles.icon}`}></i>
      <span className={styles.timelineDate}>{props.year}</span>
      <h3 className={styles.timelineTitle}>{props.title}</h3>
      <p className={styles.timelineText}>{props.desc}</p>
    </div>
  );
}
