"use client";
import React from "react";
import LocomotiveScroll from "@/app/hooks/locomotiveScroll";
import ProjectsList from "@/app/[locale]/projects/projects-list";
import StarsBackground from "../components/stars-background";
import PreloadWrapper from "../components/preloading/wrapper";

const ProjectsLanding = ({
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
          <div key={2} className="px-8 xl:px-[15%]  ">
            <div className="py-32">
              <h1>{title}</h1>
            </div>
            <ProjectsList />
          </div>
        </div>
      </PreloadWrapper>
    </main>
  );
};

export default ProjectsLanding;
