"use client";
import React from "react";
import { Parallax } from "./parallax";
import { useTranslation } from "react-i18next";
import NavbarLink from "./navbar-link";
import { useRouter } from "next/navigation";
import RevealAnimation from "@/hooks/reveal-animation";

const HeroSection = () => {
  const router = useRouter();
  const { t } = useTranslation("landing");

  const goTo = (page: string) => {
    router.push(page);
  };

  return (
    <div className=" w-full h-[100vh] flex flex-col md:mb-[20vh] justify-center">
      <Parallax speed={2}>
        <RevealAnimation delayWait={2.1}>
          <div className="w-full flex flex-col justify-start md:-mt-[5rem] xl:-mt-48  ">
            <p
              className="font-dimensions w-full flex text-dark dark:text-light justify-center -my-2 xl:my-8 xxl:-my-1 whitespace-nowrap
                text-[50px] xs:text-[50px] sm:text-[70px] md:text-[90px] lg:text-[100px]  xl:text-[140px]
                ">
              {`OSWALDO`}
            </p>
            <p
              className="font-dimensions w-full flex text-dark dark:text-light justify-center xl:-mt-24 -my-2 xxl:-my-1 xl:my-8 whitespace-nowrap
                text-[50px] xs:text-[50px] sm:text-[70px] md:text-[90px] lg:text-[100px]  xl:text-[140px]
                ">
              {`J. SOTTO`}
            </p>
          </div>
        </RevealAnimation>

        <RevealAnimation delayWait={2.2}>
          <h1
            className="font-dimensions flex text-dark dark:text-light justify-center my-8 xl:-my-4  whitespace-nowrap
                text-[20px] xs:text-[25px] sm:text-[35px] md:text-[40px] lg:text-[45px]  xl:text-[45px] xl:-mt-12
                ">
            {t("title")}
          </h1>
        </RevealAnimation>

        <RevealAnimation delayWait={2.3}>
          <div
            className="text-dark dark:text-light w-full my-4 font-agdasima font-semibold dark:font-medium whitespace-nowrap 
            flex justify-center text-[12px] xs:text-[17px] sm:text-[22px] md:text-[26px] -ml-4"
            onClick={() => goTo("/about")}>
            <NavbarLink text={t("aboutme")} />
          </div>
        </RevealAnimation>
      </Parallax>
    </div>
  );
};

export default HeroSection;
