"use client";
import React from "react";
import Sidebar from "@/[locale]/components/sidebar";
import NavBar from "@/[locale]/components/navbar";

const Header = ({ t }: HeaderProps) => {
  return (
    <div className="absolute z-10 top-0 h-[5.5rem] w-[100%] px-8 xl:px-[15%] flex justify-end bg-transparent">
      <Sidebar t={t} />
      <NavBar t={t} />
    </div>
  );
};

export default Header;
