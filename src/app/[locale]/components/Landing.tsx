"use client";
import React, { useEffect, useState } from "react";
import StarsBackground from "./stars-background";
import LocomotiveScroll from "@/app/hooks/locomotiveScroll";
import HeroSection from "@/app/[locale]/components/hero-section";
import Header from "./header";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/app/[locale]/components/preloading/index";
import Projects from "@/app/[locale]/components/Projects/projects";

const Landing = ({ title }: { title: string }) => {
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
        <div key={2}>
          <HeroSection title={title} />
          <Projects />
        </div>
      </div>
    </main>
  );
};

export default Landing;
