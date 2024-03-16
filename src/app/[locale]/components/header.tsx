"use client";
import React from "react";
import AnimatedSwitch from "@/app/[locale]/components/animated-switch";
import LanguageSelector from "@/app/[locale]/components/language-selector";
import { useDispatch } from "react-redux";
import { setSideMenu } from "@/app/store/sidemenuSlice";
import Sidebar from "@/app/[locale]/components/sidebar";

const Header = () => {
  const dispatch = useDispatch();

  const onClickOpen = () => {
    dispatch(setSideMenu(true));
  };

  return (
    <div className=" h-[4rem] flex justify-start bg-neutral-200 dark:bg-neutral-800">
      <Sidebar />
      <LanguageSelector />
      <AnimatedSwitch />
    </div>
  );
};

export default Header;
