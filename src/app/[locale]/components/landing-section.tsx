"use client";
import React, { useEffect } from "react";
import HeroSection from "@/[locale]/components/hero-section";
import PreloadWrapper from "@/[locale]/components/preloading/wrapper";
import ProjectsList from "@/[locale]/projects/projects-list";
import InnerContact from "@/[locale]/components/inner-contact";
import Slider from "@/[locale]/components/framer-slider/slider";
import Footer from "@/[locale]/components/footer";

const LandingSection = () => {
  const words = ["Hello", "Ciao", "Hola", "Hello", "Ciao", "Hola", "Hello"];

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <PreloadWrapper words={words} time={1500}>
        <div className="px-8 xl:px-[15%] ">
          <HeroSection />
          <ProjectsList />
        </div>
        <Slider />
        <div className="px-8 xl:px-[15%]">
          <InnerContact />
        </div>
        <div className="w-full h-[5vh] bg-dark dark:bg-light ">
          <div className=" flex w-full bg-light dark:bg-dark  h-[5vh] rounded-b-[48px] z-100 " />
        </div>
        <Footer />
      </PreloadWrapper>
    </div>
  );
};

export default LandingSection;
