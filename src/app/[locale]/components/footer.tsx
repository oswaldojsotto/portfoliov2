"use client";
import React from "react";
import Perspective from "./perspective";
import { Parallax } from "./parallax";

const Footer = () => {
  return (
    <div className=" flex flex-col w-full h-[35vh] bottom-0  ">
      <div className="absolute flex w-full bg-light dark:bg-dark  h-8 rounded-b-[48px]" />
      <div className=" flex w-full h-[35vh] dark:bg-light bg-dark">
        <Parallax className={`px-8 xl:px-[15%] py-8 -mt-48`} speed={4}>
          <div className="  text-[64px]  dark:text-dark text-light font-dimensions">
            this is the footer
          </div>
        </Parallax>
      </div>

      {/* <div className="absolute bottom-0 flex w-full bg-dark z-101 "></div> */}
    </div>
  );
};

export default Footer;
