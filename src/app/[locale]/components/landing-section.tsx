"use client";
import React, { useEffect } from "react";
import HeroSection from "./hero-section";
import PreloadWrapper from "./preloading/wrapper";
import ProjectsList from "../projects/projects-list";
import MarqueeTech from "./slider/slider";
import Footer from "./footer";
import InnerContact from "./inner-contact";
import Slider from "../framer-slider/slider";
import Footer1 from "./footer1";

const LandingSection = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  const words = ["Hello", "Ciao", "Hola", "Hello", "Ciao", "Hola"];

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <PreloadWrapper words={words} time={1500}>
        <div className="px-8 xl:px-[15%] ">
          <HeroSection title={title} subtitle={subtitle} />
          <ProjectsList />
          {/* <MarqueeTech /> */}
        </div>
        <Slider />
        <div className="px-8 xl:px-[15%]">
          <InnerContact />
        </div>
        <div className="w-full h-[5vh] bg-dark dark:bg-light ">
          <div className=" flex w-full bg-light dark:bg-dark  h-[5vh] rounded-b-[48px] z-100 " />
        </div>
        <Footer1 />
      </PreloadWrapper>
    </div>
  );
};

export default LandingSection;
