import React from "react";
import styles from "./Button.module.css";

const Button = ({ buttonText }) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button}>{buttonText}</button>{" "}
    </div>
  );
};

export default Button;
