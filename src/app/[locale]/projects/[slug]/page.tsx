"use client";
import React, { useEffect } from "react";
import PreloadWrapper from "@/[locale]/components/preloading/wrapper";
import RevealAnimation from "@/hooks/revealAnimation";
import NavbarLink from "@/[locale]/components/navbar-link";

const ProjectDetail = ({ params }: { params: { slug: string } }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <PreloadWrapper words={[params.slug.toString().toLocaleUpperCase()]}>
      <div className="relative py-32  px-8 xl:px-[15%]">
        <RevealAnimation delayWait={1.6}>
          <div className="w-full flex justify-start flex-col px-4">
            <p
              data-scroll
              data-scroll-speed="0.8"
              className="font-dimensions flex -pt-[5rem] max-h-[26rem]tracking-[4px] 
                text-dark dark:text-light justify-start whitespace-nowrap
                text-[82px] xs:text-[100px] sm:text-[130px] md:text-[160px] lg:text-[190px]  xl:text-[218px]
                mb-[2rem] xs:mb-[1rem] sm:-mb-[1.5rem] md:-mb-[2.5rem] lg:mb-[-4.5rem] lg:-mt-16 xl:mb-[-30px]    ">
              {params.slug.toString().toLocaleUpperCase()}
            </p>
          </div>
        </RevealAnimation>
        <div className="flex flex-col sm:flex-row w-full justify-start text-[18px] sm:text-[24px] px-4 -mt-8 sm:my-8 gap-8 xl:-mt-8">
          <div className="font-agdasima text-dark dark:text-light">
            <p className="opacity-[0.8]">Role / Service</p>
            <p className="font-semibold text-[20px] md:text-[26px]">
              Design & Development
            </p>
          </div>
          <div className="font-agdasima text-dark dark:text-light">
            <p className="opacity-[0.8]">Location / Year</p>
            <p className="font-semibold  text-[20px] md:text-[26px]">
              Caracas, Venezuela © 2024
            </p>
          </div>
        </div>
        <div className="w-[20rem] flex px-4">
          <NavbarLink text="LiveSite" />
        </div>
      </div>
    </PreloadWrapper>
  );
};

export default ProjectDetail;
