"use client";
import React from "react";
import Sidebar from "@/[locale]/components/sidebar";
import Navbar from "@/[locale]/components/nav-bar";

const Header = () => {
  return (
    <div className="absolute z-10 top-0 h-[5.5rem] w-[100%] px-8 xl:px-[15%] flex justify-center bg-transparent">
      <Sidebar />
      <Navbar />
    </div>
  );
};

export default Header;
