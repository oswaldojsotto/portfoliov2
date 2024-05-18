"use client";
import React, { useEffect, useState } from "react";
import StarsBackground from "./stars-background";
import LocomotiveScroll from "@/app/hooks/locomotiveScroll";
import HeroSection from "@/app/[locale]/components/hero-section";
import Header from "./header";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/app/[locale]/components/Preloader";
import ProjectsSection from "./projects-section";

const Landing = ({ title }: { title: string }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 3000);
  });

  return (
    <AnimatePresence>
      {loading && <Preloader />}
      <div>
        <LocomotiveScroll />
        <Header />
        <div key={1} className="fixed -z-10 bg-transparent h-[100vh] w-full">
          <StarsBackground />
        </div>
        <div key={2}>
          <HeroSection title={title} />
          <ProjectsSection />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Landing;
