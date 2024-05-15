import RevealAnimation from "@/app/hooks/revealAnimation";
import React from "react";

const ProjectsSection = ({ t }: { t: any }) => {
  return (
    <div className="flex h-screen z-1">
      <RevealAnimation>
        <h1>Projects</h1>
      </RevealAnimation>
    </div>
  );
};

export default ProjectsSection;
