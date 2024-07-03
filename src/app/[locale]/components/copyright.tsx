import Image from "next/image";
import React from "react";

const Copyright = () => {
  return (
    <div className="-ml-[12vw]">
      <div className="absolute flex h-16 w-72 border-2 border-dark rounded-sm"></div>
      <div className="absolute flex h-16 w-16 border-2 border-orange rounded-sm">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </div>
    </div>
  );
};

export default Copyright;
