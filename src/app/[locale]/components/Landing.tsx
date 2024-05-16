import React from "react";
import StarsBackground from "./stars-background";
import LocomotiveScroll from "@/app/hooks/locomotiveScroll";
import HeroSection from "@/app/[locale]/components/hero-section";

const Landing = ({ t }: { t: any }) => {
  return (
    <div>
      <div className="fixed -z-10 bg-transparent h-[100vh] w-full">
        <LocomotiveScroll />
        <StarsBackground />
      </div>
      <HeroSection title={t("title")} />
    </div>
  );
};

export default Landing;
