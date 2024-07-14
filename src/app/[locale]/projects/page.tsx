"use client";
import React from "react";
import PreloadWrapper from "@/[locale]/components/preloading/wrapper";
import RevealAnimation from "@/hooks/revealAnimation";
import ProjectsList from "@/[locale]/projects/projects-list";
import NavbarLink from "../components/navbar-link";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("projects");

  return (
    <PreloadWrapper words={[t("projects")]}>
      <div className="relative py-32  px-8 xl:px-[15%]">
        <RevealAnimation delayWait={1.6}>
          <div className="w-full flex justify-start ">
            <p
              className="font-dimensions w-full flex text-dark dark:text-light justify-center  whitespace-nowrap
                text-[40px] xs:text-[50px] sm:text-[70px] md:text-[90px] lg:text-[100px]  xl:text-[140px]
                ">
              {t("work")}
            </p>
          </div>
        </RevealAnimation>
        <RevealAnimation delayWait={1.7}>
          <div className="flex justify-start font-agdasima text-dark dark:text-light">
            <p className="flex text-justify text-[14px] sm:text-[17px] md:text-[19px] lg:text-[22px] ">
              {t("description")}
            </p>
          </div>
        </RevealAnimation>
        <RevealAnimation delayWait={1.8}>
          <div className="-ml-1 my-2">
            <a href="https://github.com/oswaldojsotto" target="_blank">
              <NavbarLink text={t("ghub")} />
            </a>
          </div>
        </RevealAnimation>

        <RevealAnimation delayWait={1.9}>
          <ProjectsList />
        </RevealAnimation>
      </div>
    </PreloadWrapper>
  );
};

export default Projects;
