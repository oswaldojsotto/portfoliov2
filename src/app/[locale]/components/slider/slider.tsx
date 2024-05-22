"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import tech from "@/app/[locale]/components/slider/tech.json";
import Image from "next/image";

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
        <Marquee
          gradient
          speed={80}
          gradientColor="dark"
          className="font-agdasima">
          {tech.map((item: { name: string; route: string }) => (
            <div
              key={item.name}
              className="flex gap-2 mx-4 tooltip  my-8"
              data-tip={item.name}>
              <Image
                src={`/tech/color/${item.route}`}
                alt={item.name}
                width={60}
                height={60}
              />
            </div>
          ))}
        </Marquee>
      </motion.div>
    </>
  );
};

export default MarqueeTech;
