import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const MarqueeTech = () => {
  return (
    <>
      <div className="tech-container">
        {/* <AboutTextAnimation classN={"tech"} text={tech()} /> */}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="">
        <Marquee gradient speed={80} gradientColor="dark" className="bg-dark">
          <div>qlqeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</div>
        </Marquee>
      </motion.div>
    </>
  );
};

export default MarqueeTech;
