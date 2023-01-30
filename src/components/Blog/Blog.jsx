import React from 'react';
import styles from "./Blog.module.css";
import Image1 from "../../assets/useEffect.jpg";
import Image2 from "../../assets/react.png";
import Image3 from "../../assets/redux.png";
import { ContainerTwo } from '../Blur/Blur';

export default function Blog() {
  return (
    <ContainerTwo>
   <section className={`${styles.blog} container section`} id="blog" data-aos="fade-up">
    <h2 className='sectionTitle'>Latest Posts</h2>

    <div className={`${styles.blogContainer} grid`}>
<div className={styles.blogCard} data-aos="fade-left">
    <div className={styles.blogThumb}>
<span className={styles.blogCategory}>Tutorial</span>
<img src={Image1} alt="" className={styles.blogImg} />
    </div>
    <div className={styles.blogDetails}>
        <h3 className={styles.blogTitle}>Benefits of UseEffect Hook</h3>
        <div className={styles.blogMeta}>
            <span>9 January 2023</span>
            <span className={styles.blogDot}>.</span>
            <span>Kashif</span>
        </div>
    </div>
</div>
<div className={styles.blogCard} data-aos="fade-right">
    <div className={styles.blogThumb}>
<span className={styles.blogCategory}>Tutorial</span>
<img src={Image2} alt="" className={styles.blogImg} />
    </div>
    <div className={styles.blogDetails}>
        <h3 className={styles.blogTitle}>Why Choose React JS</h3>
        <div className={styles.blogMeta}>
            <span>9 January 2023</span>
            <span className={styles.blogDot}>.</span>
            <span>Kashif</span>
        </div>
    </div>
</div>
<div className={styles.blogCard} data-aos="fade-left">
    <div className={styles.blogThumb}>
<span className={styles.blogCategory}>Redux</span>
<img src={Image3} alt="" className={styles.blogImg} />
    </div>
    <div className={styles.blogDetails}>
        <h3 className={styles.blogTitle}>Blog 3</h3>
        <div className={styles.blogMeta}>
            <span>9 January 2023</span>
            <span className={styles.blogDot}>.</span>
            <span>Kashif</span>
        </div>
    </div>
</div>

    </div>
     </section>
     </ContainerTwo>
  )
}
