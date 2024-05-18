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
}

const HeroSection = ({ title }: HeroSectionProps) => {
  const dispatch = useDispatch();

  const firstText = useRef(null);
  const slider = useRef(null);

  const closeMenus = () => {
    dispatch(setSideMenu(false));
    dispatch(setLanguageSelectorMenu(false));
  };

  return (
    <div
      className="relative z-[1] h-[100vh] flex flex-col justify-center sm:justify-center md:justify-center px-8 -space-y-[2rem] "
      onClick={() => closeMenus()}>
      <RevealAnimation>
        <div ref={slider} className="flex ">
          <p
            ref={firstText}
            data-scroll
            data-scroll-speed="0.8"
            className="font-dimensions flex -pt-[5rem] max-h-[26rem]   data-scroll  tracking-[4px]
               whitespace-nowrap text-dark dark:text-light justify-center
                text-[62px] xs:text-[100px] sm:text-[198px] md:text-[248px] lg:text-[348px]
                mb-[2rem] xs:mb-[1rem] sm:-mb-[1.5rem] md:-mb-[2.5rem] lg:mb-[1rem] lg:-mt-16   ">
            OSWALDO J. SOTTO...
          </p>
        </div>
      </RevealAnimation>

      <RevealAnimation>
        <h1
          data-scroll
          data-scroll-speed="0.1"
          className="font-dimensions max-h-[10rem] tracking-[8px] whitespace-nowrap -mt-8 pl-0.5 text-dark dark:text-light 
          text-[34px] xs:text-[58px] sm:text-[78px] md:text-[98px]  lg:text-[128px]">
          FRONTEND - WEB DEVELOPER
        </h1>
      </RevealAnimation>

      <RevealAnimation>
        <div
          data-scroll
          data-scroll-speed="0.1"
          className="text-dark dark:text-light my-4">
          {title}
        </div>
      </RevealAnimation>
    </div>
  );
};

export default HeroSection;
