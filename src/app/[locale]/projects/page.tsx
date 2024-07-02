"use client";
import React, { useRef } from "react";
import PreloadWrapper from "@/[locale]/components/preloading/wrapper";
import RevealAnimation from "@/hooks/revealAnimation";
import ProjectsList from "./projects-list";

const Projects = ({ params }: { params: { slug: string } }) => {
  const firstText = useRef(null);
  const slider = useRef(null);

  return (
    <PreloadWrapper words={["Projects"]}>
      <div className="relative py-32  px-8 xl:px-[15%]">
        <RevealAnimation delayWait={1.6}>
          <div ref={slider} className="w-full flex justify-start flex-col">
            <p
              ref={firstText}
              data-scroll
              data-scroll-speed="0.8"
              className="font-dimensions flex -pt-[5rem] max-h-[26rem]   data-scroll   tracking-[4px]
                text-dark dark:text-light justify-start whitespace-nowrap
                text-[62px] xs:text-[100px] sm:text-[130px] md:text-[160px] lg:text-[190px]  xl:text-[268px]
                mb-[2rem] xs:mb-[1rem] sm:-mb-[1.5rem] md:-mb-[2.5rem] lg:mb-[-4.5rem] lg:-mt-16 xl:mb-[-30px]    ">
              Projects Page
            </p>
            <ProjectsList />
          </div>
        </RevealAnimation>
        <div className=""></div>
      </div>
    </PreloadWrapper>
  );
};

export default Projects;
