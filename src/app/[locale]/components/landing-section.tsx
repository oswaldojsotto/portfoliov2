"use client";
import React, { useEffect } from "react";
import HeroSection from "./hero-section";
import PreloadWrapper from "./preloading/wrapper";
import ProjectsList from "../projects/projects-list";
import MarqueeTech from "./slider/slider";
import Footer from "./footer";

const LandingSection = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  const words = [
    "Hello",
    "Ciao",
    "Hola",
    "Hello",
    "Ciao",
    "Hola",
    "Loading...",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <PreloadWrapper words={words} time={2000}>
        <div className="px-8 xl:px-[15%] ">
          <HeroSection title={title} subtitle={subtitle} />
          <ProjectsList />
          <MarqueeTech />
        </div>
        <Footer />
      </PreloadWrapper>
    </div>
  );
};

export default LandingSection;
