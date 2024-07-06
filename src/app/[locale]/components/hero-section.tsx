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
        <RevealAnimation delayWait={2.1}>
          <div className="w-full flex justify-start xs:-mt-[5rem] sm:-mt-[12rem] md:-mt-[12rem]  xl:-mt-[8rem]">
            <p
              className="font-dimensions flex  max-h-[26rem]   tracking-[4px]
                text-dark dark:text-light justify-start whitespace-nowrap
                text-[80px] xs:text-[120px] sm:text-[158px] md:text-[218px] lg:text-[268px]  xl:text-[258px]
                -mb-[2.5rem] xs:-mb-[3rem] sm:-mb-[4.5rem] md:-mb-[1.5rem] lg:mb-[-4.5rem] lg:-mt-16 xl:mb-[-30px] xl:-mt-48 font-light  ">
              {`OSWALDO J. SOTTO`}
            </p>
          </div>
        </RevealAnimation>

        <RevealAnimation delayWait={2.1}>
          <h1
            className="font-dimensions max-h-[10rem] tracking-[2px] sm:tracking-[4px]   text-dark dark:text-light 
          text-[40px] xs:text-[58px] sm:text-[78px] md:text-[98px]  lg:text-[118px]
          md:-mt-20 lg:-mt-[60px] xl:-mt-24">
            {title}
          </h1>
        </RevealAnimation>

        <RevealAnimation delayWait={2.1}>
          <div
            className="text-dark dark:text-light my-4 font-agdasima font-semibold dark:font-medium  
            text-[12px] xs:text-[17px] sm:text-[22px] md:text-[26px]
          sm:-mt-[2px] lg:mt-4 xs:-mt-[1rem] -mt-[1rem]">
            {subtitle}
          </div>
        </RevealAnimation>
      </Parallax>
    </div>
  );
};

export default HeroSection;
