"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface RevealAnimationProps {
  delayWait?: number;
  children: React.ReactNode;
}

const RevealAnimation = ({ children, delayWait }: RevealAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  });

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 95 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.4, delay: delayWait ? delayWait : 1 }}>
      {children}
    </motion.div>
  );
};

export default RevealAnimation;
