"use client";
import React from "react";
import { Parallax } from "./parallax";
import Text3d from "./text3d";
import Copyright from "./copyright";
import FooButton from "./foo-button";
import Magnetic from "./magnetic/Magnetic";

const Footer = () => {
  const links = [
    { id: 1, text: "HOME", to: "/" },
    { id: 2, text: "PROJECTS", to: "/projects" },
    { id: 3, text: "CONTACT", to: "/contact" },
  ];

  return (
    <div className=" flex flex-col w-full h-[30vh] ">
      <div className="absolute flex w-full bg-light dark:bg-dark  h-8 rounded-b-[48px] " />
      <div className=" flex w-full h-[30vh] dark:bg-light bg-dark margin-0 ">
        <Parallax className={` xl:-mt-16  -z-1 w-full px-8  py-8`} speed={2}>
          <div className=" w-full -mt-2 h-30 px-8 xl:px-[15%] ">
            <div className="flex justify-between max-w-72 w-72 m-0">
              {links.map(link => (
                <div key={link.id} className=" font-agadasima m-0 ">
                  <FooButton text={link.text} />
                </div>
              ))}
            </div>
            <Copyright />
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Footer;
