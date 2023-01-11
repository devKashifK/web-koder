import React from 'react'
import { useState } from 'react'
import { Container } from '../Blur/Blur'
import Menu from './Menu'
import styles from "./Profolio.module.css"

export default function Protfolio() {
    const [item , setItem ] = useState(Menu)
  return (
    <Container>
   <section className={`${styles.work} container section`}>
    <h2 className='sectionTitle'>Recent Works</h2>

    <div className={styles.workFilters}>
        <span className={styles.workItem}>Everything</span>
        <span className={styles.workItem}>Creative</span>
        <span className={styles.workItem}>Art</span>
        <span className={styles.workItem}>Design</span>
        <span className={styles.workItem}>Branding</span>
        <span className={styles.workItem}>Everything</span> 
    </div>
    <div className={`${styles.workContainer} grid`}>
        {item.map((elem) => {
            const {id , image , title , category } = elem;
            return(
                <div className={styles.workCard} key={id}>
                    <div className={styles.workThumbnail}>
                      <img src={image} alt="" className="workImg" />
                      <div className={styles.workMask}></div>
                    </div>
                    <span className={styles.workCategory}>{category}</span>
                    <h3 className={styles.workTitle}>{title}</h3>
                    <div className={styles.workBtn}>
                        <i className={`icon-link ${styles.workButtonIcon}`}></i>
                    </div>
                </div>
            )
        })}
    </div>
   </section>
   </Container>
  )
}
