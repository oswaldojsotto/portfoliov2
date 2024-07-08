import React from "react";

const FooButton = ({ text }: { text?: string }) => {
  return (
    <button
      className={`relative flex h-[50px] px-4 w-auto   items-center rounded-md justify-center overflow-hidden  
    transition-all duration-700  before:absolute before:h-0 before:w-0 before:rounded-full  
     before:duration-700 before:ease-out  hover:before:h-56 hover:before:w-56 font-agdasima text-[20px] font-semibold
    border-light text-light before:bg-light hover:text-dark 
    dark:border-dark dark:text-dark dark:before:bg-dark dark:hover:text-light
    `}>
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default FooButton;
