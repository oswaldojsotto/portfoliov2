import React from "react";
import Magnetic from "./magnetic/Magnetic";

const NavbarLink = ({ text }: { text: string }) => {
  return (
    <Magnetic>
      <div className="group relative w-[6rem] md:w-[8.5rem] cursor-pointer items-center flex h-16 dark:text-light text-dark  ">
        <div className="w-full flex justify-start -ml-1.5  items-center transition duration-300 ease-in-out">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            ●
          </div>
          <p className="font-dimensions text-[28px]  hover:text-orange dark:hover:text-pink transition-all">
            {text}
          </p>
        </div>
      </div>
    </Magnetic>
  );
};

export default NavbarLink;
