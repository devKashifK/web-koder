import React from "react";
import styles from "./About.module.css";
import Image from "../../assets/avatar-2.svg";
// import AboutBox from "./AboutBox";
import { ContainerTwo } from "../Blur/Blur";

export default function About() {
  return (
    <ContainerTwo>
      <section
        className={`${styles.about} container section`}
        id="about"
        data-aos="fade-up"
      >
        <h2 className="sectionTitle">About Me</h2>
        <div className={`${styles.aboutContainer} grid`}>
          <img src={Image} className={styles.aboutImg} alt="" />
          <div className={`${styles.aboutData} grid`}>
            <div className={styles.aboutInfo}>
              <p className={styles.aboutDescription}>
                I am a quick learner, and I am always looking for opportunities
                to expand my skill set and stay up-to-date with the latest web
                development trends. I have a keen eye for detail and a passion
                for creating visually appealing and user-friendly websites. I am
                also experienced in using modern web development tools like Git,
                and React.js.
              </p>

              <div className="btn"> <a href="../DownloadResume/KASHIFKHAN.pdf" download = "KashifKhan.pdf"> Download Resume </a></div>
            </div>
            <div className={`${styles.aboutSkills} grid`}>
              <div className={styles.skillsData}>
                <div className={styles.skillsTitles}>
                  <h3 className={styles.skillsName}>HTML</h3>
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
                  <h3 className={styles.skillsName}>CSS</h3>
                  <span className={`${styles.skillsNumber} `}>90%</span>
                </div>
                <div className={styles.skills}>
                  <span
                    className={`${styles.skillsPercentage} ${styles.uiDesign}`}
                  ></span>
                </div>
              </div>
              <div className={styles.skillsData}>
                <div className={styles.skillsTitles}>
                  <h3 className={styles.skillsName}>JavaScript</h3>
                  <span className={`${styles.skillsNumber} `}>70%</span>
                </div>
                <div className={styles.skills}>
                  <span
                    className={`${styles.skillsPercentage} ${styles.development} `}
                  ></span>
                </div>
              </div>
              <div className={styles.skillsData}>
                <div className={styles.skillsTitles}>
                  <h3 className={styles.skillsName}>React Js</h3>
                  <span className={`${styles.skillsNumber} `}>70%</span>
                </div>
                <div className={styles.skills}>
                  <span
                    className={`${styles.skillsPercentage} ${styles.uiDesign}`}
                  ></span>
                </div>
            </div>
           
          </div>
        </div>
        </div>
        {/* <AboutBox /> */}
      </section>
    </ContainerTwo>
  );
}
