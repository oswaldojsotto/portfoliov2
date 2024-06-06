"use client";
import React from "react";
import LocomotiveScroll from "@/app/hooks/locomotiveScroll";
import HeroSection from "@/app/[locale]/components/hero-section";
import ProjectsList from "@/app/[locale]/projects/projects-list";
import PreloadWrapper from "../components/preloading/wrapper";
import StarsBackground from "../components/stars-background";

const ContactLanding = ({
  title,
  subtitle,
  transition,
}: {
  title: string;
  subtitle: string;
  transition: string;
}) => {
  const words = [transition];
  return (
    <main>
      <PreloadWrapper words={words}>
        <div key={1}>
          <LocomotiveScroll />

          <div key={1} className="fixed -z-10 bg-transparent h-[100vh] w-full">
            <StarsBackground />
          </div>
          <div key={2} className="px-8 xl:px-[15%]  py-32 ">
            <div>
              <h1>Contact Page</h1>
            </div>
          </div>
        </div>
      </PreloadWrapper>
    </main>
  );
};

export default ContactLanding;
