"use client";
import React from "react";
import { Parallax } from "./parallax";
import { useTranslation } from "react-i18next";
import NavbarLink from "./navbar-link";
import { useRouter } from "next/navigation";
import RevealAnimation from "@/hooks/reveal-animation";

const HeroSection = () => {
  const router = useRouter();
  const { t } = useTranslation("landing");

  const goTo = (page: string) => {
    router.push(page);
  };

  return (
    <div className="h-dvh hfull overflow-hidden   ">
      <p className="font-brockmann font-brockmann-nyc my-[10rem] tracking-tighter font-extrabold text-[4rem] text-neutral-900 h-dvh dark:text-light ">
        {`OSWALDO J SOTTO`}
      </p>
    </div>
  );
};

export default HeroSection;
