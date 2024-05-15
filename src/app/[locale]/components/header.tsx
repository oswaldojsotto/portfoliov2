"use client";
import React from "react";
import AnimatedSwitch from "@/app/[locale]/components/animated-switch";
import LanguageSelector from "@/app/[locale]/components/language-selector";
import Sidebar from "@/app/[locale]/components/sidebar";
import NavBar from "@/app/[locale]/components/navbar";

const Header = () => {
  return (
    <div className="fixed top-0 h-[5.5rem] w-[100%] flex justify-end bg-transparent">
      <div className="absolute left-0 -top-2">
        <Sidebar />
      </div>

      <div className="flex justify-end mx-8">
        <NavBar />
        <div className="mt-[10px]">
          <LanguageSelector />
        </div>
        <AnimatedSwitch />
      </div>
    </div>
  );
};

export default Header;
