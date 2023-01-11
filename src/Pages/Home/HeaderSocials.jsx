import React from 'react';
import styles from "./Home.module.css";
import {BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs"

export default function HeaderSocials() {
  return (
    <div className={styles.homeSocials}>
      <div className={styles.homeSocialLink}><BsInstagram /></div>
      <div className={styles.homeSocialLink}><BsTwitter /></div>
      <div className={styles.homeSocialLink}><BsFacebook /></div>
      <div className={styles.homeSocialLink}><BsGithub /></div>
      <div className={styles.homeSocialLink}><BsLinkedin /></div>
    </div>

  )
} 
