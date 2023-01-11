import React from 'react';
import styles from "./Home.module.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import { Container } from '../../components/Blur/Blur';
import glasses from "../../assets/glasses.png"

export default function Home() {
  return (
    <Container>
    <section className={`${styles.home} container`}  id="home">
      <div className={styles.intro}>
        <img src={Me} alt="" className={styles.homeImg} />
        <h1 className={styles.homeName}>Kashif Khan <img src={glasses} className={styles.glasses} alt="" /></h1>
        <span className={styles.homeEducation}>I'm a Front-End developer </span>

        <HeaderSocials />

        <div className="btn">Hire Me</div>

        <ScrollDown/>
      </div>
    </section>
    </Container>
  )
}
