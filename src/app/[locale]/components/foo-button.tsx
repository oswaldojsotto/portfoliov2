import React from "react";

const FooButton = ({ text }: { text?: string }) => {
  return (
    <a href="#" className="relative">
      {/* <span className="absolute top-0 left-0 mt-1 ml-1 h-8 w-full rounded bg-dark opacity-[0.9]"></span> */}
      <span
        className="h-10 font-agdasima relative inline-block  w-full  px-3 
        py-1 text-[22px] font-bold text-light dark:text-dark transition duration-300 hover:dark hover:text-orange">
        {text}
      </span>
    </a>
  );
};

export default FooButton;
