import React from "react";
import StarsBackground from "./stars-background";

const Landing = ({ t }: { t: any }) => {
  console.log(t);
  return (
    <div>
      <div className=" fixed -z-10 bg-transparent h-[100vh] w-full">
        <StarsBackground />
      </div>
      <div className="relative z-[-1] h-[100vh] flex flex-col justify-center pt-[10rem] px-8">
        <h1 className=" font-bold   text-[32px] sm:text-[48px] md:text-[64px]">
          Oswaldo Sotto
        </h1>
        <h1 className=" font-bold   text-[32px] sm:text-[48px] md:text-[64px]">
          Frontend - Web Developer
        </h1>
        <h2>{t("title")}</h2>
      </div>
    </div>
  );
};

export default Landing;
