"use client";
import React, { useRef } from "react";
import PreloadWrapper from "@/[locale]/components/preloading/wrapper";
import RevealAnimation from "@/hooks/revealAnimation";

const ProjectDetail = ({ params }: { params: { slug: string } }) => {
  const firstText = useRef(null);
  const slider = useRef(null);

  return (
    <PreloadWrapper words={[params.slug.toString().toLocaleUpperCase()]}>
      <div className="relative py-32  px-8 xl:px-[15%]">
        {/* <h1 className="font-dimensions px-2 text-[128px]">
          {params.slug.toString().toLocaleUpperCase()}
        </h1> */}
        <RevealAnimation delayWait={1.6}>
          <div ref={slider} className="w-full flex justify-start">
            <p
              ref={firstText}
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
        <div className="my-[50vh]"></div>
      </div>
    </PreloadWrapper>
  );
};

export default ProjectDetail;
