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
    <PreloadWrapper words={["Projects"]}>
      <div className="relative py-32  px-8 xl:px-[15%]">
        <RevealAnimation delayWait={1.6}>
          <div className="w-full flex justify-start flex-col md:-mt-24 ">
            <p
              className="font-dimensions flex -pt-[1rem] max-h-[26rem] tracking-[0.5rem]
                text-dark dark:text-light justify-start whitespace-nowrap
                text-[72px] xs:text-[102px] sm:text-[132px] md:text-[162px] lg:text-[172px]">
              {t("work")}
            </p>
          </div>
          <div className="flex justify-start font-agdasima text-dark dark:text-light">
            <p className="flex text-justify text-[14px] sm:text-[17px] md:text-[19px] lg:text-[22px] ">
              {t("description")}
            </p>
          </div>
          <div className="-ml-1 my-2">
            <a href="https://github.com/oswaldojsotto" target="_blank">
              <NavbarLink text={t("ghub")} />
            </a>
          </div>
        </RevealAnimation>
        <div className="">
          <ProjectsList />
        </div>
      </div>
    </PreloadWrapper>
  );
};

export default Projects;
