"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp, slideDown } from "./anim";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setFirstTimeLoading } from "@/store/sidemenuSlice";

const Preloader = ({ words }: { words: string[] }) => {
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
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      d: targetPath,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
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
            className="text-[30px] xs:text-[40px] sm:text-[50px] md:text-[70px] lg:text-[90px]">
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
