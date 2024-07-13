"use client";
import React from "react";
import PreloadWrapper from "@/[locale]/components/preloading/wrapper";
import RevealAnimation from "@/hooks/revealAnimation";
import { useTranslation } from "react-i18next";
import CvModal from "../components/cv-modal";

const About = () => {
  const { t } = useTranslation("contact");

  return (
    <PreloadWrapper words={[t("preload")]}>
      <section className="relative py-32 h-[100vh] px-8 xl:px-[15%]">
        <RevealAnimation delayWait={1.6}>
          <div className="w-full flex justify-start flex-col md:-mt-24 ">
            <p
              className="font-dimensions flex -pt-[1rem] max-h-[26rem] tracking-[0.5rem]
                text-dark dark:text-light justify-start whitespace-nowrap
                text-[72px] xs:text-[102px] sm:text-[132px] md:text-[162px] lg:text-[172px]">
              About me
            </p>
          </div>
          <div className="flex justify-center font-agdasima text-dark dark:text-light">
            <p className="flex text-justify text-[14px] sm:text-[17px] md:text-[19px] lg:text-[22px] ">
              {t("description")}
            </p>
          </div>

          <CvModal text={t("cv")} />
        </RevealAnimation>
        <div className="my-[20rem]"></div>
      </section>
    </PreloadWrapper>
  );
};

export default About;
