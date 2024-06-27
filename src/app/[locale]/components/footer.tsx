"use client";
import React, { useRef } from "react";

const Footer = () => {
  const firstText = useRef(null);
  const slider = useRef(null);

  return (
    <div className=" w-full  px-8 flex justify-start bg-red h-[30vh]">
      {/* <div ref={slider} className="w-full bg-transparent h-[30vh] ">
        <p
          ref={firstText}
          data-scroll
          data-scroll-delay="0.4"
          data-scroll-speed="0.8"
          className="bg-dark w-full absolute h-[30vh] text-light  overflow-hidden">
          asd
        </p>
      </div> */}
    </div>
  );
};

export default Footer;
