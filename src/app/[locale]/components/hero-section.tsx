"use client";
import RevealAnimation from "@/hooks/revealAnimation";
import { setLanguageSelectorMenu, setSideMenu } from "@/store/sidemenuSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { Parallax } from "./parallax";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation("landing");
  const closeMenus = () => {
    dispatch(setSideMenu(false));
    dispatch(setLanguageSelectorMenu(false));
  };

  return (
    <div
      className=" w-full  h-[100vh] flex flex-col"
      onClick={() => closeMenus()}>
      <Parallax speed={2}>
        <RevealAnimation delayWait={2.1}>
          <div className="w-full flex justify-start ">
            <p
              className="font-dimensions flex text-dark dark:text-light justify-start  whitespace-nowrap
                text-[40px] xs:text-[50px] sm:text-[70px] md:text-[90px] lg:text-[100px]  xl:text-[110px]
                ">
              {`OSWALDO J. SOTTO`}
            </p>
          </div>
        </RevealAnimation>

        <RevealAnimation delayWait={2.2}>
          <h1
            className="font-dimensions flex text-dark dark:text-light justify-start  whitespace-nowrap
                
                text-[20px] xs:text-[25px] sm:text-[35px] md:text-[40px] lg:text-[45px]  xl:text-[50px]
                ">
            {t("title")}
          </h1>
        </RevealAnimation>

        <RevealAnimation delayWait={2.3}>
          <div
            className="text-dark dark:text-light my-4 font-agdasima font-semibold dark:font-medium  
            text-[12px] xs:text-[17px] sm:text-[22px] md:text-[26px]
          sm:-mt-[2px] lg:mt-4 xs:-mt-[1rem] -mt-[1rem]">
            {t("subtitle")}
          </div>
        </RevealAnimation>
      </Parallax>
    </div>
  );
};

export default HeroSection;
