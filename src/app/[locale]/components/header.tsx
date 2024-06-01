"use client";
import React from "react";
import AnimatedSwitch from "@/app/[locale]/components/theme-switcher";
import LanguageSelector from "@/app/[locale]/components/language-selector";
import NavBar from "@/app/[locale]/components/navbar";
import { useDispatch, useSelector } from "react-redux";
import { setSideMenu } from "@/app/store/sidemenuSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.sidemenu.open);

  const closeSideBar = () => {
    if (isOpen) {
      dispatch(setSideMenu(false));
    }
  };

  return (
    <div
      className="absolute z-10 top-0 h-[5.5rem] w-[100%] px-8 xl:px-[15%] flex justify-end bg-transparent"
      onClick={closeSideBar}>
      <NavBar />
    </div>
  );
};

export default Header;
