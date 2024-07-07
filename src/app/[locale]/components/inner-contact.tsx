import React from "react";
import Magnetic from "./magnetic/Magnetic";

const InnerContact = () => {
  return (
    <div className="flex flex-col w-full justify-between h-[18rem] md:h-[14rem] md:flex-row font-dimensions my-8 ">
      <div className="w-full h-[12rem] flex text-[90px] text-dark dark:text-light md:flex-col md:pb-[8rem] tracking-[4px]">
        <p className="text-dark dark:text-light pr-2 md:-my-4">Lets get in </p>

        <p className=" md:-mt-8 text-dark dark:text-light"> touch</p>
      </div>
      <div className="w-full h-[32rem] md:h-[14rem]  font-agdasima text-dark dark:text-light">
        <p className=" text-[30px] font-medium">GET IN TOUCH</p>
        <p className=" text-[20px]">
          Are you a brand or company in need of contagiously creative stopping
          power? Or are you an agency in need of a kick-ass creative production
          partner? Just hit us up!
        </p>
        <Magnetic>
          <div className="-ml-[10px] group relative w-[8rem] cursor-pointer items-center flex h-16 dark:text-light text-dark  ">
            <div className="w-full flex justify-center pr-4 items-center transition duration-300 ease-in-out">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                ●
              </div>
              <p className="font-dimensions text-[3rem] tracking-[4px] hover:text-orange dark:hover:text-pink transition-all">
                CONTACT
              </p>
            </div>
          </div>
        </Magnetic>
      </div>
    </div>
  );
};

export default InnerContact;
