"use client";
import React from "react";
import PreloadWrapper from "@/[locale]/components/preloading/wrapper";
import RevealAnimation from "@/hooks/revealAnimation";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";

const About = () => {
  // const { theme } = useTheme();
  const { t } = useTranslation("contact");

  return (
    <PreloadWrapper words={[t("preload")]}>
      <section className="relative py-32 h-[100vh] px-8 xl:px-[15%]">
        <RevealAnimation delayWait={1.6}>
          <div className="w-full flex justify-start flex-col md:-mt-24 ">
            <p
              className="font-dimensions flex -pt-[1rem] max-h-[26rem] tracking-[0.5rem]
                text-dark dark:text-light justify-center whitespace-nowrap
                text-[92px] xs:text-[150px] sm:text-[200px] md:text-[230px] lg:text-[220px]">
              about
            </p>
          </div>
          <div className="flex justify-center  -mt-6 scale-75 lg:scale-100">
            {/* <EmailButton /> */}
          </div>
        </RevealAnimation>
        <div className="my-[20rem]"></div>
      </section>
    </PreloadWrapper>
  );
};

export default About;
