"use client";
import RevealAnimation from "@/hooks/revealAnimation";
import { setLanguageSelectorMenu, setSideMenu } from "@/store/sidemenuSlice";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Parallax } from "./parallax";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  const dispatch = useDispatch();

  const closeMenus = () => {
    dispatch(setSideMenu(false));
    dispatch(setLanguageSelectorMenu(false));
  };

  return (
    <div
      className=" w-full  h-[100vh] flex flex-col justify-center sm:justify-center 
      md:justify-center  -space-y-[2rem] "
      onClick={() => closeMenus()}>
      <Parallax className={``} speed={2.5}>
        <RevealAnimation delayWait={2.6}>
          <div className="w-full flex justify-start xs:-mt-[5rem] sm:-mt-[12rem] md:-mt-[12rem]  xl:-mt-[18rem]">
            <p
              className="font-dimensions flex  max-h-[26rem]   tracking-[4px]
                text-dark dark:text-light justify-start whitespace-nowrap
                text-[62px] xs:text-[100px] sm:text-[198px] md:text-[248px] lg:text-[268px]  xl:text-[318px]
               
                mb-[2.5rem] xs:mb-[1rem] sm:-mb-[1.5rem] md:-mb-[2.5rem] lg:mb-[-4.5rem] lg:-mt-16 xl:mb-[-30px]    ">
              {`OSWALDO J. SOTTO`}
            </p>
          </div>
        </RevealAnimation>

        <RevealAnimation delayWait={2.6}>
          <h1
            className="font-dimensions max-h-[10rem] tracking-[2px] sm:tracking-[4px]  -mt-16  text-dark dark:text-light 
          text-[34px] xs:text-[58px] sm:text-[78px] md:text-[98px]  lg:text-[128px]">
            {title}
          </h1>
        </RevealAnimation>

        <RevealAnimation delayWait={2.6}>
          <div
            className="text-dark dark:text-light my-4 font-agdasima font-semibold dark:font-medium  text-[12px] xs:text-[17px] sm:text-[22px] md:text-[26px]
          sm:-mt-[2px] lg:mt-4 ">
            {subtitle}
          </div>
        </RevealAnimation>
      </Parallax>
    </div>
  );
};

export default HeroSection;
