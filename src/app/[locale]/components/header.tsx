"use client";
import React from "react";
import AnimatedSwitch from "@/app/[locale]/components/animated-switch";
import LanguageSelector from "@/app/[locale]/components/language-selector";

const Header = () => {
  return (
    <div className=" h-[4rem] flex w-full bg-neutral-200 dark:bg-neutral-800">
      <LanguageSelector />
      <AnimatedSwitch />
    </div>
  );
};

export default Header;
