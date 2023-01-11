import React from 'react';
import {BsFillMoonFill} from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux';
import { DarkActions } from '../../Store/DarkMode';
import styles from "./DarkMode.module.css"

export default function DarkMode(props) {
    const darkMode = useSelector((state) => state.dark)
    const dispatch = useDispatch()
  return (
    <>
    <button className={styles.btnDark} onClick={() => dispatch(DarkActions.changeDark())}><BsFillMoonFill /></button>
    </>
  )
}
