import React from 'react';
import styles from "./Home.module.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

export default function Home() {
  return (
    <section className={`${styles.home} container`}  id="home">
     
      <div className={styles.intro}>
        <img src={Me} alt="" className={styles.homeImg} />
        <h1 className={styles.homeName}>Kashif Khan</h1>
        <span className={styles.homeEducation}>I'm a Front-End developer</span>

        <HeaderSocials />

        <div className="btn">Hire Me</div>

        <ScrollDown/>
      </div>
      {/* <div className="blur" style={{
        background : "var(--blur2)",
        top : "17rem",
        width: "50rem",
        height: "11rem"
      }}></div>
         <div className="blur" style={{
        background : "var(--blur)",
        top : "1rem",
        width: "40rem",
        height: "11rem",
        left: "-05rem",
        zIndex : "10"
      }}></div>
       <div className="blur" style={{
        background : "var(--blur3)",
        top : "80%",
        width: "50rem",
        height: "11rem",
        left: "-15rem",
        zIndex : "10"
      }}></div> */}
    </section>
  )
}
