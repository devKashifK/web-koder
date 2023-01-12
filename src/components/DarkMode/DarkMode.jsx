import React, { useState } from "react";
import {
  BsMoonFill,
  BsSun,
} from "react-icons/bs";
import { useDispatch} from "react-redux";
import { DarkActions } from "../../Store/DarkMode";
import styles from "./DarkMode.module.css";

export default function DarkMode() {
  const dispatch = useDispatch();
  const [change, setChange] = useState(false);
  const HandleClick = () => {
    setChange(!change);
    dispatch(DarkActions.changeDark());
  };

  return (
    <div className={styles.dark}>
      <label className={styles.switch}>
        <input type="checkbox" />
        <div
          className={`${styles.slider} ${change ? styles.sliderDark : ""}`}
          onClick={() => HandleClick()}
         
        >
          {" "}
          <span
            className={`${styles.icons} ${change ? styles.change : ""}`}
            style={{ backgroundColor: !change ? "#F5D020" : "#000000ec" }}
          >
            {!change ? <BsSun /> : <BsMoonFill />}{" "}
          </span>
        </div>
      </label>
    </div>
  );
}
