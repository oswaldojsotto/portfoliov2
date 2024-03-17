"use client";

import React from "react";
import Magnetic from "@/app/[locale]/components/Magnetic/Magnetic";

const NavBar = () => {
  return (
    <nav className="flex flex-col justify-center">
      <ul className="m-8 flex gap-4">
        <li>
          <Magnetic>
            <div className="group relative cursor-pointer items-center flex h-10 dark:text-red">
              <div className="w-[80px] flex justify-between pr-4 items-center transition duration-300 ease-in-out">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  ●
                </div>
                <p className="font-semibold">Home</p>
              </div>
            </div>
          </Magnetic>
        </li>
        <li>
          <Magnetic>
            <div className="group relative cursor-pointer items-center flex h-10">
              <div className="w-[80px] flex justify-between pr-4 items-center transition duration-300 ease-in-out">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  ●
                </div>
                <p className="font-semibold">Projects</p>
              </div>
            </div>
          </Magnetic>
        </li>
        <li>
          <Magnetic>
            <div className="group relative cursor-pointer items-center flex h-10">
              <div className="w-[80px] flex justify-between pr-4 items-center transition duration-300 ease-in-out">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  ●
                </div>
                <p className="font-semibold">Contact</p>
              </div>
            </div>
          </Magnetic>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
