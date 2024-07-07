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
              className="font-dimensions flex -pt-[1rem] max-h-[26rem] tracking-[0.5rem]
                text-dark dark:text-light justify-center whitespace-nowrap
                text-[92px] xs:text-[150px] sm:text-[200px] md:text-[230px] lg:text-[230px]  xl:text-[268px]
                mb-[2rem] xs:mb-[1rem] sm:-mb-[1.5rem] md:-mb-[2.5rem] lg:mb-[-4.5rem] lg:-mt-16 xl:mb-[-10px]    ">
              GET IN TOUCH
            </p>
          </div>
        </RevealAnimation>
        <div className="flex justify-center lg: mt-4 xl:-mt-6 scale-75 sm:scale-100">
          <EmailButton />
        </div>
      </div>
    </PreloadWrapper>
  );
};

export default Contact;
