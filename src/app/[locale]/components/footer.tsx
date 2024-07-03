"use client";
import React from "react";
import { Parallax } from "./parallax";
import Text3d from "./text3d";
import Copyright from "./copyright";

const Footer = () => {
  const links = [
    { id: 1, text: "HOME", to: "/" },
    { id: 2, text: "PROJECTS", to: "/projects" },
    { id: 3, text: "CONTACT", to: "/contact" },
  ];

  return (
    <div className=" flex flex-col w-full h-[30vh] bottom-0">
      <div className="absolute flex w-full bg-light dark:bg-dark  h-8 rounded-b-[48px] " />
      <div className=" flex w-full h-[30vh] dark:bg-light bg-dark margin-0 ">
        <Parallax
          className={` xl:-mt-16  -z-1 w-full px-8 xl:px-[15%] py-8`}
          speed={2}>
          <div className="flex justify-between h-[8rem]">
            <div className="flex gap-4">
              {links.map(link => (
                <div
                  key={link.id}
                  className="text-[14px] font-dimensions h-[10vh] xl:mt-4">
                  <div className="w-auto">
                    <Text3d primary={link.text} secondary={link.text} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex py-10  ">
              <Copyright />
            </div>
          </div>
        </Parallax>
      </div>

      {/* <div className="absolute bottom-0 flex w-full bg-dark z-101 "></div> */}
    </div>
  );
};

export default Footer;
