"use client";
import React, { useEffect, useRef, useState } from "react";
import PreloadWrapper from "@/[locale]/components/preloading/wrapper";
import RevealAnimation from "@/hooks/revealAnimation";

const ProjectDetail = ({ params }: { params: { slug: string } }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <PreloadWrapper words={[params.slug.toString().toLocaleUpperCase()]}>
      <div className="relative py-32  px-8 xl:px-[15%]">
        <RevealAnimation delayWait={1.6}>
          <div className="w-full flex justify-start">
            <p
              data-scroll
              data-scroll-speed="0.8"
              className="font-dimensions flex -pt-[5rem] max-h-[26rem]   data-scroll   tracking-[4px]
                text-dark dark:text-light justify-start whitespace-nowrap
                text-[62px] xs:text-[100px] sm:text-[130px] md:text-[160px] lg:text-[190px]  xl:text-[268px]
                mb-[2rem] xs:mb-[1rem] sm:-mb-[1.5rem] md:-mb-[2.5rem] lg:mb-[-4.5rem] lg:-mt-16 xl:mb-[-30px]    ">
              {params.slug.toString().toLocaleUpperCase()}
            </p>
          </div>
        </RevealAnimation>
        {/* <div className=" flex w-full bg-red dark:bg-red  h-8 rounded-b-[48px] z-100" /> */}
      </div>
    </PreloadWrapper>
  );
};

export default ProjectDetail;
