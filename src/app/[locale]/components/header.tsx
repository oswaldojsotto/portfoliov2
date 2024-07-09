"use client";
import React from "react";
import NavBar from "@/[locale]/components/navbar";
import Sidebar from "./sidebar";

const Header = () => {
  return (
    <div className="absolute z-10 top-0 h-[5.5rem] w-[100%] px-8 xl:px-[15%] flex justify-end bg-transparent">
      <Sidebar />
      <NavBar />
    </div>
  );
};

export default Header;
