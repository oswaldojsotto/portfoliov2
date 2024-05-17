"use client";

import React from "react";
import Magnetic from "@/app/[locale]/components/magnetic/Magnetic";

const NavBar = () => {
  const items = [
    { id: 1, text: "Home", to: "#" },
    { id: 2, text: "About", to: "#" },
    { id: 3, text: "Projects", to: "#" },
    { id: 4, text: "Contact", to: "#" },
  ];

  return (
    <nav className="flex flex-col justify-center w-full">
      <ul className=" flex justify-between gap-6  text-[18px] font-extralight">
        {items.map(item => (
          <li key={item.id}>
            <Magnetic>
              <div className="group relative cursor-pointer items-center flex h-16 dark:text-light text-dark ">
                <div className="w-[100%] flex justify-center pr-4 items-center transition duration-300 ease-in-out">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    ●
                  </div>
                  <p className="font-dimensions text-[3rem] tracking-[4px] ">
                    {item.text}
                  </p>
                </div>
              </div>
            </Magnetic>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
