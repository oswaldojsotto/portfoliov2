"use client";
import React from "react";

export default function index({ index, title, manageModal }) {
  return (
    <div
      onMouseEnter={e => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={e => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="w-full  flex  justify-between items-center px-[20px] md:px-[40px] hover:px-[1px] py-[5px]  border-t-2  text-dark dark:text-light
     opacity-[0.6] hover:opacity-[1] transition-all  hover:border-opacity-1 duration-700 cursor-none border-dark dark:border-light
     hover:text-orange dark:hover:text-pink
     ">
      <p
        className="tracking-[5px]  whitespace-nowrap sm:hover:text-[90px]
      text-[50px] xs:text-[70px] sm:text-[90px] md:text-[100px]">
        {title}
      </p>
      <p
        className="font-agdasima whitespace-nowrap
      text-[16px] xs:text-[20px] sm:text-[30px] md:text-[34px] ">
        DESIGN AND DEVELOPMENT
      </p>
    </div>
  );
}
