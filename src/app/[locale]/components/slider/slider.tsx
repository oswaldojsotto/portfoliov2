"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import tech from "@/[locale]/components/slider/tech.json";
import Image from "next/image";
import { useTheme } from "next-themes";

const MarqueeTech = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="">
      <Marquee
        gradient
        speed={80}
        gradientWidth={10}
        gradientColor={`${theme === "dark" ? "#262526" : "white"}`}
        className="font-agdasima">
        {tech.map((item: { name: string; route: string }) => (
          <div
            key={item.name}
            className="flex gap-2 mx-8 tooltip  my-8"
            data-tip={item.name}>
            <Image
              src={`/tech/${theme === "dark" ? "white" : "color"}/${
                item.route
              }`}
              alt={item.name}
              width={60}
              height={60}
            />
          </div>
        ))}
      </Marquee>
    </motion.div>
  );
};

export default MarqueeTech;
