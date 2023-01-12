import React from 'react';
import styles from "./Services.module.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";
import { Container } from '../Blur/Blur';

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing  elit aenean commodo ligula eget.",
  },
     
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elitServices Component aenean commodo ligula eget"
    },
      {              
    id: 3,
    image: Image3,
    title: "Photography",
    description: "Lorem ipsum dolor sit amet consectetuer adipisci  elit aenean commodo ligula eget." 
      }
    ]
                                                     
export default function Services() {
  return (
    <Container>
    <section className={`${styles.services} container section`} id="services" data-aos="fade-up">
      <h2 className="sectionTitle">Services</h2>
      <div className={`${styles.serviceContainer} grid`} >
        {data.map(({id , image, title , description})=>{
          return(
            <div className={styles.servicesCard} key={id} data-aos="fade-left">
              <img src={image} alt="" className={styles.servicesImg} />
              <h3 className={styles.servicesTitle}>{title}</h3>
              <p className={styles.description}>{description}</p>
            </div>
          )
        })}
      </div>
    </section>
    </Container>

  )
}
