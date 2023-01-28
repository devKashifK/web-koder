import React from 'react'
import { useState } from 'react'
import { BsGithub } from 'react-icons/bs';
import { Container } from '../Blur/Blur'
import Menu from './Menu'
import styles from "./Profolio.module.css";
import {MdLiveTv} from "react-icons/md"

export default function Protfolio() {
    const [item , setItem ] = useState(Menu.filter((item) => item.category === "Full"))
  return (
    <Container>
   <section className={`${styles.work} container section`} data-aos="fade-up"  id="project">
    <h2 className='sectionTitle'>Recent Works</h2>

    <div className={styles.workFilters}>
        <span className={styles.workItem} onClick={() => setItem(Menu.filter((item) => item.category === "Full"))}>Big Projects</span>
        <span className={styles.workItem} onClick={() => setItem(Menu.filter((item) => item.category === "Small"))}>Small Projects</span>
    </div>
    <div className={`${styles.workContainer} grid`} data-aos="fade-right">
        {item.map((elem) => {
            const {id , image , title ,  description, technology, github , live  } = elem;
            return(
                <div  className={styles.card} key={id} data-aos="fade-up"> 
      <img src={image} className={styles.cardImage} alt="" />
      <div className={styles.cardOverlay}>
        <div className={styles.cardHeader} >
        <div className={styles.icons}> <a href={github} className={styles.links} target="_blank" rel="noopener noreferrer"> <BsGithub /> </a> <a href={live} className={styles.links} target="_blank" rel="noopener noreferrer"> <MdLiveTv /> </a></div>
          <svg className={styles.cardArc} xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <div className={styles.cardHeaderText}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <div className={styles.cardTechno}><span className={styles.techno}>{technology[0]}</span> <span className={styles.techno}>{technology[1]}</span> <span className={styles.techno}>{technology[2]}</span> </div>            
          </div>
        </div>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
            )
        })}
    </div>
   </section>
   </Container>
  )
}
