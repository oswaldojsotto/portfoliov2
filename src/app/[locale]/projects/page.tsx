"use client";
import React from "react";
import PreloadWrapper from "@/app/[locale]/components/preloading/wrapper";
import Header from "@/app/[locale]/components/header";
import ProjectsList from "./projects-list";
import StarsBackground from "../components/stars-background";

const Projects = () => {
  const words = ["Projects"];

  return (
    <div>
      <div key={1} className="fixed -z-10 bg-transparent h-[100vh] w-full">
        <StarsBackground />
      </div>
      <PreloadWrapper words={words}>
        <Header />
        <div className="px-8 xl:px-[15%]">
          <div className="pt-32">
            <h1 className="font-dimensions text-[92px] text-dark dark:text-light">
              Creating next level digital products
            </h1>
          </div>

          <ProjectsList />
        </div>
      </PreloadWrapper>
    </div>
  );
};

export default Projects;
