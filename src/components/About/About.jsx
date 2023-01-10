import React from "react";
import styles from "./About.module.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

export default function About() {
  return (
    <section className={`${styles.about} container section`} id="about">
      {/* <div
        className="blur"
        style={{
          background: "var(--blur2)",
          top: "17rem",
          width: "50rem",
          height: "11rem",
        }}
      ></div>
      <div
        className="blur"
        style={{
          background: "var(--blur)",
          top: "1rem",
          width: "40rem",
          height: "11rem",
          left: "-05rem",
        }}
      ></div>
      <div
        className="blur"
        style={{
          background: "var(--blur3)",
          top: "80%",
          width: "50rem",
          height: "11rem",
          left: "-15rem",
        }}
      ></div> */}
      <h2 className="sectionTitle">About Me</h2>
      <div className={`${styles.aboutContainer} grid`}>
        <img src={Image} className={styles.aboutImg} alt="" />
        <div className={`${styles.aboutData} grid`}>
          <div className={styles.aboutInfo}>
            <p className={styles.aboutDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              mollitia voluptate animi, saepe dignissimos omnis? Iusto quis
            </p>

            <div className="btn">Download CV</div>
          </div>
          <div className={`${styles.aboutSkills} grid`}>
            <div className={styles.skillsData}>
              <div className={styles.skillsTitles}>
                <h3 className={styles.skillsName}>Development</h3>
                <span className={`${styles.skillsNumber} `}>90%</span>
              </div>
              <div className={styles.skills}>
                <span
                  className={`${styles.skillsPercentage} ${styles.development}`}
                ></span>
              </div>
            </div>
            <div className={styles.skillsData}>
              <div className={styles.skillsTitles}>
                <h3 className={styles.skillsName}>UI/UX design</h3>
                <span className={`${styles.skillsNumber} `}>80%</span>
              </div>
              <div className={styles.skills}>
                <span
                  className={`${styles.skillsPercentage} ${styles.uiDesign}`}
                ></span>
              </div>
            </div>
            <div className={styles.skillsData}>
              <div className={styles.skillsTitles}>
                <h3 className={styles.skillsName}>Photography</h3>
                <span className={`${styles.skillsNumber} `}>60%</span>
              </div>
              <div className={styles.skills}>
                <span
                  className={`${styles.skillsPercentage} ${styles.photography}`}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
}
