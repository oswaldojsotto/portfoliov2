"use client";
import React, { useEffect, useState } from "react";
import StarsBackground from "./stars-background";
import LocomotiveScroll from "@/app/hooks/locomotiveScroll";
import HeroSection from "@/app/[locale]/components/hero-section";
import Header from "./header";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/app/[locale]/components/preloading/index";
import ProjectsList from "@/app/[locale]/components/Projects/projects-list";

const Landing = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      // window.scrollTo(0, 0);
    }, 3000);
  });

  return (
    <main>
      <AnimatePresence mode="wait">{loading && <Preloader />}</AnimatePresence>
      <div key={1}>
        <LocomotiveScroll />
        <Header />
        <div key={1} className="fixed -z-10 bg-transparent h-[100vh] w-full">
          <StarsBackground />
        </div>
        <div key={2} className="px-8 xl:px-[15%] ">
          <HeroSection title={title} subtitle={subtitle} />
          <ProjectsList />
        </div>
      </div>
    </main>
  );
};

export default Landing;
