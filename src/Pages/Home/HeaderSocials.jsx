import React from "react";
import styles from "./Home.module.css";
import {
  BsGithub,
  BsLinkedin,
  BsFillTelephoneOutboundFill,
} from "react-icons/bs";
import { SiVercel } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";

export default function HeaderSocials() {
  return (
    <div className={styles.homeSocials}>
      <a href="tel:9852365726" className={styles.homeSocialLink}>
        <BsFillTelephoneOutboundFill />
      </a>
      <a href="mailto:kashifk2202@gmail.com" className={styles.homeSocialLink}>
        <AiOutlineMail />
      </a>
      <a
        href="https://github.com/devKashifK"
        target="_blank"
        rel="noreferrer noopener"
        className={styles.homeSocialLink}
      >
        <BsGithub />
      </a>
      <a href="#" className={styles.homeSocialLink}>
        <SiVercel />
      </a>{" "}
      <a
        href="https://www.linkedin.com/in/kashif-khan-34206625b"
        target="_blank"
        rel="noreferrer noopener"
        className={styles.homeSocialLink}
      >
        <BsLinkedin />
      </a>
    </div>
  );
}
