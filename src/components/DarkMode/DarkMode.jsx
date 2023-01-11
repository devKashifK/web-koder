import React from 'react';
import {BsFillMoonFill} from "react-icons/bs"
import styles from "./DarkMode.module.css"

export default function DarkMode(props) {
  return (
    <>
    <button className={styles.btnDark} onClick={() => props.handleClick()}><BsFillMoonFill /></button>
    </>
  )
}
