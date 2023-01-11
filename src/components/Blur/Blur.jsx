import React from 'react';
import { useSelector } from 'react-redux';
import styles from "./Blur.module.css"



export const Container = (props) => {
  const darkMode = useSelector((state) => state.dark.darkMode)
  return(
  <div className={styles.blurContainer}>
    
  <div className="blur" style={{
        background : (darkMode !== true ? "var(--blur2)" : ""),
        top : "35%",
        width: "40rem",
        height: "11rem",
        
      }}></div>
         <div className="blur" style={{
        background : (darkMode !== true ? "var(--blur)" : ""),
        top : "0%",
        width: "40rem",
        height: "11rem",
        left: "-05rem",
        zIndex : "10"
      }}></div>
       <div className="blur" style={{
        background : (darkMode !== true ? "var(--blur3)" : ""),
        top : "80%",
        width: "100%",
        height: "11rem",
        left: "-15rem",
        zIndex : "10"
      }}></div>
   {props.children}
    </div>
  )
}
export const ContainerTwo = (props) => {
  const darkMode = useSelector((state) => state.dark.darkMode)
  return(
  <div className={styles.blurContainer}>
  <div className="blur" style={{
        background : (darkMode !== true ?"var(--blur)" : ""),
        top : "35%",
        width: "40rem",
        height: "11rem",
        
      }}></div>
         <div className="blur" style={{
        background : (darkMode !== true ? "var(--blur2)" : ""),
        top : "0%",
        width: "40rem",
        height: "11rem",
        left: "-05rem",
        zIndex : "10"
      }}></div>
       <div className="blur" style={{
        background :(darkMode !== true ? "var(--blur3)" : ""),
        top : "80%",
        width: "100%",
        height: "11rem",
        left: "-15rem",
        zIndex : "10"
      }}></div>
   {props.children}
    </div>
  )
}
