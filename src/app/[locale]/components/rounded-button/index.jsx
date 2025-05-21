import React from "react";
import { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";
import Magnetic from "@/[locale]/components/magnetic/magnetic";

const RoundedButton = ({
  children,
  backgroundColor = "#455CE9",
  ...attributes
}) => {
  const circle = useRef(null);
  let timeline = useRef(gsap.timeline({ paused: true })); // Initialize with empty timeline
  const timeoutId = useRef(null);

  useEffect(() => {
    // Clear any existing animations
    timeline.current?.kill();

    // Create new timeline
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        {
          top: "-25%",
          width: "150%",
          duration: 0.4,
          ease: "power3.in",
        },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );

    // Cleanup function
    return () => {
      timeline.current?.kill();
      if (timeoutId.current)
        clearTimeout(timeoutId.current);
    };
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeline.current?.tweenFromTo?.("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      timeline.current?.play?.();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={`${styles.roundedButton} bg-dark dark:bg-light `}
        style={{ overflow: "hidden" }}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        {...attributes}>
        {children}
        <div
          ref={circle}
          style={{ backgroundColor }}
          className={styles.circle}></div>
      </div>
    </Magnetic>
  );
};

export default RoundedButton;
