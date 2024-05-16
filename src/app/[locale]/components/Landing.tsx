import React from "react";
import StarsBackground from "./stars-background";
import RevealAnimation from "@/app/hooks/revealAnimation";
import LocomotiveScroll from "@/app/hooks/locomotiveScroll";
import HeroSection from "./hero";

const Landing = ({ t }: { t: any }) => {
  return (
    <div>
      <div className=" fixed -z-10 bg-transparent h-[100vh] w-full ">
        <LocomotiveScroll />
        <StarsBackground />
      </div>
      <HeroSection t={t} />
    </div>
  );
};

export default Landing;
