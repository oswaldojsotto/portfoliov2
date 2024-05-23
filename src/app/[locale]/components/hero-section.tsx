"use client";
import RevealAnimation from "@/app/hooks/revealAnimation";
import {
  setLanguageSelectorMenu,
  setSideMenu,
} from "@/app/store/sidemenuSlice";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { AnimatePresence } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  const dispatch = useDispatch();

  const firstText = useRef(null);
  const slider = useRef(null);

  const closeMenus = () => {
    dispatch(setSideMenu(false));
    dispatch(setLanguageSelectorMenu(false));
  };

  return (
    <div
      className=" w-full z-[1] h-[100vh] flex flex-col justify-center sm:justify-center 
      md:justify-center  -space-y-[2rem] "
      onClick={() => closeMenus()}>
      <RevealAnimation>
        <div ref={slider} className="w-full flex justify-start">
          <p
            ref={firstText}
            data-scroll
            data-scroll-speed="0.8"
            className="font-dimensions flex -pt-[5rem] max-h-[26rem]   data-scroll   tracking-[4px]
                text-dark dark:text-light justify-start whitespace-nowrap
                text-[62px] xs:text-[100px] sm:text-[198px] md:text-[248px] lg:text-[268px]  xl:text-[318px]
                mb-[2rem] xs:mb-[1rem] sm:-mb-[1.5rem] md:-mb-[2.5rem] lg:mb-[-4.5rem] lg:-mt-16 xl:mb-[-30px]    ">
            OSWALDO J. SOTTO...
          </p>
        </div>
      </RevealAnimation>

      <RevealAnimation>
        <h1
          data-scroll
          data-scroll-speed="0.1"
          className="font-dimensions max-h-[10rem] tracking-[2px] sm:tracking-[4px]  -mt-8  text-dark dark:text-light 
          text-[34px] xs:text-[58px] sm:text-[78px] md:text-[98px]  lg:text-[128px]">
          {title}
        </h1>
      </RevealAnimation>

      <RevealAnimation>
        <div
          data-scroll
          data-scroll-speed="0.1"
          className="text-dark dark:text-light my-4 font-agdasima font-semibold dark:font-medium  text-[12px] xs:text-[17px] sm:text-[22px] md:text-[26px]
          sm:-mt-[2px] lg:mt-4 ">
          {subtitle}
        </div>
      </RevealAnimation>
    </div>
  );
};

export default HeroSection;
