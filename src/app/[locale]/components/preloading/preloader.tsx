"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { slideUp, slideDown } from "./anim";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setFirstTimeLoading } from "@/store/sidemenuSlice";

const Preloader = ({ words }: { words: string[] }) => {
  const opacity = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
        delay: 0.3,
      },
    },
  };

  const firstTimeLoading = useSelector(
    (state: RootState) => state.sidemenu.firstTimeLoading
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFirstTimeLoading(true));
  });

  const [index, setIndex] = useState(0);

  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
  });
  const [animationPhase, setAnimationPhase] = useState<
    "down" | "up"
  >("down");
  useEffect(() => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    setTimeout(
      () => setIndex(index + 1),
      index === 0 ? 1000 : 150
    );
  }, [index, words.length]);

  useEffect(() => {
    if (animationPhase === "down") {
      const timer = setTimeout(
        () => setAnimationPhase("up"),
        1700
      );
      return () => {
        clearTimeout(timer);
        setIndex(0);
      };
    }
  }, [animationPhase]);

  const initialPath = `M0 0 L${dimension.width} 0 L${
    dimension.width
  } ${dimension.height} Q${dimension.width / 2} ${
    dimension.height + 300
  } 0 ${dimension.height} L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${
    dimension.width
  } ${dimension.height} Q${dimension.width / 2} ${
    dimension.height
  } 0 ${dimension.height} L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
    exit: {
      d: targetPath,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
        delay: 0.3,
      },
    },
  };

  const getVariant = () => {
    return firstTimeLoading ? slideDown : slideUp;
  };

  return (
    <motion.div
      initial="initial"
      animate={
        animationPhase === "down" ? "animate" : "exit"
      }
      variants={
        animationPhase === "down" ? getVariant() : slideUp
      }
      className={styles.introduction}>
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="text-[15px] tracking-tighter font-bold uppercase xs:text-[20px] sm:text-[25px] md:text-[35px] lg:text-[45px] font-brockmann font-brockmann-nyc">
            <span></span>
            {words[index]}
          </motion.p>
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            />
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;
