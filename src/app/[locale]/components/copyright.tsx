import Image from "next/image";
import React from "react";

const Copyright = () => {
  return (
    <div className="relative">
      <div className="absolute flex h-8 w-56 ml-16 border-b-2 border-b-light dark:border-b-dark  rounded-sm " />
      <div className="absolute flex flex-col h-16 w-72 border-2 border-light dark:border-dark rounded-sm">
        <p className="ml-16 flex  px-[14px] font-agdasima text-[20px] text-light dark:text-dark dark:border-dark font-bold">
          2024 © ALL RIGHTS RESERVED
        </p>
        <p className="ml-16 mt-[0.8] flex   px-[34px] font-agdasima text-[20px] text-light dark:text-dark dark:border-dark font-bold">
          OSWALDO J. SOTTO ©
        </p>
      </div>
      <div className="absolute flex h-16 w-16 border-2 border-light dark:border-dark rounded-sm">
        <Image src="/logo.png" alt="logo" width={70} height={70} />
      </div>
    </div>
  );
};

export default Copyright;
