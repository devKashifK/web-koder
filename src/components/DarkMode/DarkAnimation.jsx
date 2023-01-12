import React, { useRef, } from 'react';
import { useSelector } from 'react-redux';
import styles from "./animation.module.css";


export default function DarkAnimation() {
    const darkMode = useSelector((state) => state.dark.darkMode)
     
    const dark = useRef();

    // useEffect(() => {
    //     dark.current.display = "flex";
    // })

    setTimeout(() => {
     dark.current.style.display = "none"
    },2000)
     
  return (
    <>
  {darkMode ? <div className={styles.darkAnimation} style={{}} ref={dark}>
    <div class={styles.backgroundContainer}>
<div class={styles.stars}></div>
<div class={styles.twinkling}></div>
<div class={styles.clouds}></div>
</div>

    </div> 
    : ""}
    </>
  )
}
