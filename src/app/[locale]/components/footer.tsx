"use client";
import { Fragment, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Footer = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const images = [
    {
      src: (
        <div
          className=" dark:bg-light bg-dark w-full h-[40vh] "
          style={{ zIndex: 100 }}></div>
      ),
      y: 0,
    },
    {
      src: (
        <div
          className=" w-full h-[40vh] -mt-20  dark:bg-light bg-dark text-light dark:text-dark px-8 xl:px-[15%] "
          style={{ zIndex: -100 }}>
          {" "}
          qlql el div que tal
        </div>
      ),
      y: md,
    },
  ];

  return (
    <div
      ref={container}
      className="absolute w-full bg-transparent  h-[40vh] -mb-16">
      {images.map(({ src, y }, i) => {
        return (
          <Fragment key={`i_${i}`}>
            <div className="bg-light dark:bg-dark w-full only-bottom-shadow absolute h-6 rounded-b-[64px] z-3"></div>
            <motion.div className="" style={{ y }} key={`i_${i}`}>
              <div className="z-2">{src}</div>
            </motion.div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Footer;
