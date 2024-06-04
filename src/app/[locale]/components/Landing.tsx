"use client";
import React from "react";
import StarsBackground from "./stars-background";
import LocomotiveScroll from "@/app/hooks/locomotiveScroll";
import HeroSection from "@/app/[locale]/components/hero-section";
// import Header from "./header";

import ProjectsList from "@/app/[locale]/projects/projects-list";
import MarqueeTech from "./slider/slider";
import PreloadWrapper from "./preloading/wrapper";

const Landing = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const words = [
    "Hello",
    "Ciao",
    "Hola",
    "Hello",
    "Ciao",
    "Hola",
    "Loading...",
  ];
  return (
    <main>
      <PreloadWrapper words={words} time={2500}>
        <div key={1}>
          <LocomotiveScroll />

          <div key={1} className="fixed -z-10 bg-transparent h-[100vh] w-full">
            <StarsBackground />
          </div>
          <div key={2} className="px-8 xl:px-[15%]  ">
            <HeroSection title={title} subtitle={subtitle} />
            <ProjectsList />
          </div>

          <MarqueeTech />
        </div>
      </PreloadWrapper>
    </main>
  );
};

export default Landing;
