import React from "react";
import StarsBackground from "./stars-background";

const Landing = ({ t }: { t: any }) => {
  console.log(t);
  return (
    <div>
      <div className=" fixed -z-10 bg-transparent h-[100vh] w-full">
        <StarsBackground />
      </div>
      <div className="relative z-[-1] h-[100vh] flex justify-center pt-[10rem]">
        <h1 className="">Oswaldo Sotto</h1>
        <h2>{t("title")}</h2>
      </div>
    </div>
  );
};

export default Landing;
