import React, { useRef } from "react";
import styles from "../styles/Home.module.css";

const Text3d = ({ primary, secondary }) => {
  const text1 = useRef(null);
  const text2 = useRef(null);

  return (
    <div className={`${styles.textContainer} font-dimensions `}>
      <p className={`${styles.primary} text-light dark:text-dark`} ref={text1}>
        {primary}
      </p>
      <p
        className={`${styles.secondary} text-pink dark:text-orange`}
        ref={text2}>
        {secondary}
      </p>
    </div>
  );
};

export default Text3d;
