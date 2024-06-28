"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Footer = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 10], [0, -250]);

  const images = [
    {
      src: (
        <div className="bg-transparent w-full h-[10vh] bottom-0 text-dark  mt-4"></div>
      ),
      y: 0,
    },
    {
      src: (
        <div className="dark:bg-light bg-dark w-full h-[40vh] rounded-t-[1.5rem] ">
          qlq2
        </div>
      ),
      y: lg,
    },
  ];

  return (
    <div
      ref={container}
      className="absolute w-full bg-transparent h-[40vh] -mb-16">
      {images.map(({ src, y }, i) => {
        return (
          <motion.div style={{ y }} key={`i_${i}`}>
            {src}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Footer;
