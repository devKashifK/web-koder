import React from "react";
import Card from "./Card";
import Data from "./Data";
import styles from "./Resume.module.css";

export default function Resume() {
  return (
    <section className={`${styles.resume} container section `} id="resume">
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
  );
}
