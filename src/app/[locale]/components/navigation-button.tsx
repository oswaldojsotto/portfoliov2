import React from "react";

const NavigationButton = ({ direction }: { direction: "left" | "right" }) => {
  return (
    <div>
      <button
        type="button"
        className={`bg-dark text-light rounded-l-md border border-light py-2 hover:bg-orange 
        hover:text-light px-3 outline-none transition duration-300  ${
          direction === "right" ? "rotate-180" : "rotate-0"
        }`}>
        <div className="flex flex-row align-middle">
          <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"></path>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default NavigationButton;
