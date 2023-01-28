import React from 'react';
import styles from "./Home.module.css";
import {BsGithub,  BsLinkedin, BsFillTelephoneOutboundFill} from "react-icons/bs";
import {SiVercel} from "react-icons/si";
import {AiOutlineMail , } from "react-icons/ai"

export default function HeaderSocials() {
  return (
    <div className={styles.homeSocials}>
      <a href="tel:9852365726"><div className={styles.homeSocialLink}><BsFillTelephoneOutboundFill /></div></a>
      <a href="mailto:kashifk2202@gmail.com"><div className={styles.homeSocialLink}><AiOutlineMail /><BsGithub /></div></a>
      <a href="https://github.com/devKashifK" target="_blank" rel="noreferrer noopener"><div className={styles.homeSocialLink}></div></a>
    <div className={styles.homeSocialLink}> <SiVercel /></div>
      <a href="https://www.linkedin.com/in/kashif-khan-34206625b" target="_blank" rel="noreferrer noopener"><div className={styles.homeSocialLink}><BsLinkedin /></div></a>
    </div>

  )
} 
