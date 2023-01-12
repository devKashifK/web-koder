import React from "react";
import { ContainerTwo } from "../Blur/Blur";
import Card from "./Card";
import Data from "./Data";
import styles from "./Resume.module.css";

export default function Resume() {
  return (
    <ContainerTwo>
    <section className={`${styles.resume} container section `} id="resume" data-aos="fade-up">
      <h2 className="sectionTitle">Education</h2>

      <div className={`${styles.resumeContainer} grid`}>
        <div className={`${styles.timeline} grid`}>
          {Data.map((val, id) => {
            return (
              <Card
                key={id}
                icon={val.icon}
                title={val.title}
                year={val.year}
                desc={val.desc}
              />
            );
          })}
        </div>
      </div>
    </section>
    </ContainerTwo>
  );
}
