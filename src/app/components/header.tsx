"use client";
import React from "react";
import AnimatedSwitch from "@/app/components/animated-switch";

const Header = () => {
  return (
    <div className=" h-screen flex w-full bg-neutral-200 dark:bg-neutral-800">
      <AnimatedSwitch />
    </div>
  );
};

export default Header;
