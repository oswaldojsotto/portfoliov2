import React, { useEffect } from "react";
import StarsBackground from "./stars-background";
// import { motion } from "framer-motion";
import RevealAnimation from "@/app/hooks/revealAnimation";
import LocomotiveScroll from "@/app/hooks/locomotiveScroll";

const Landing = ({ t }: { t: any }) => {
  return (
    <div>
      <div className=" fixed -z-10 bg-transparent h-[100vh] w-full ">
        <StarsBackground />
        <LocomotiveScroll />
      </div>
      <div className="relative z-[-1] h-[100vh] flex flex-col justify-center  px-8">
        <RevealAnimation>
          <h1
            data-scroll
            data-scroll-speed="0.2"
            className="-tracking-[4px] data-scroll font-bold text-dark dark:text-light 
        text-[32px] sm:text-[68px] md:text-[108px]">
            OSWALDO SOTTO
          </h1>
        </RevealAnimation>

        <RevealAnimation>
          <h1
            data-scroll
            data-scroll-speed="0.4"
            className=" font-bold text-dark dark:text-light   text-[24px] sm:text-[32px] md:text-[48px]">
            Frontend - Web Developer
          </h1>
        </RevealAnimation>

        <RevealAnimation>
          <h2
            data-scroll
            data-scroll-speed="0.4"
            className="text-dark dark:text-light">
            {t("title")}
          </h2>
        </RevealAnimation>
      </div>
    </div>
  );
};

export default Landing;
