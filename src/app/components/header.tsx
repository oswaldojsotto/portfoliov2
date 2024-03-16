"use client";
import React from "react";
import AnimatedSwitch from "@/app/components/animated-switch";
import LanguageSelector from "@/app/components/language-selector";

const Header = () => {
  return (
    <div className=" h-screen flex w-full bg-neutral-200 dark:bg-neutral-800">
      <AnimatedSwitch />
      <LanguageSelector />
    </div>
  );
};

export default Header;
