"use client";
import React from "react";
import AnimatedSwitch from "@/app/[locale]/components/animated-switch";
import LanguageSelector from "@/app/[locale]/components/language-selector";
import { useDispatch } from "react-redux";
import { setSideMenu } from "@/app/store/sidemenuSlice";
import Sidebar from "@/app/[locale]/components/sidebar";
import NavBar from "@/app/[locale]/components/NavBar";

const Header = () => {
  const dispatch = useDispatch();

  const onClickOpen = () => {
    dispatch(setSideMenu(true));
  };

  return (
    <div className=" h-[4rem] w-[100%] flex justify-end bg-neutral-200 dark:bg-neutral-800">
      <div className="absolute left-0 -top-2">
        <Sidebar />
      </div>

      <div className="flex justify-end">
        <NavBar />
        <LanguageSelector />
        <AnimatedSwitch />
      </div>
    </div>
  );
};

export default Header;
