"use client";
import React, { useEffect, useRef } from "react";
import PreloadWrapper from "@/[locale]/components/preloading/wrapper";
import RevealAnimation from "@/hooks/revealAnimation";
import EmailButton from "../components/email-button";

const Contact = ({ params }: { params: { slug: string } }) => {
  const firstText = useRef(null);
  const slider = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <PreloadWrapper words={["Contact"]}>
      <div className="relative py-32  px-8 xl:px-[15%]">
        <RevealAnimation delayWait={1.6}>
          <div className="w-full flex justify-start flex-col">
            <p
              className="font-dimensions flex -pt-[5rem] max-h-[26rem]   data-scroll   tracking-[0.5rem]
                text-dark dark:text-light justify-start whitespace-nowrap
                text-[62px] xs:text-[100px] sm:text-[130px] md:text-[160px] lg:text-[190px]  xl:text-[268px]
                mb-[2rem] xs:mb-[1rem] sm:-mb-[1.5rem] md:-mb-[2.5rem] lg:mb-[-4.5rem] lg:-mt-16 xl:mb-[-30px]    ">
              GET IN TOUCH
            </p>
          </div>
        </RevealAnimation>
        <div className="my-[20vh]">
          <EmailButton />
        </div>
      </div>
    </PreloadWrapper>
  );
};

export default Contact;
