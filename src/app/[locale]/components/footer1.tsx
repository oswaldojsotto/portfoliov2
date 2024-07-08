import React from "react";
import Copyright from "./copyright";

const Footer1 = () => {
  return (
    <div
      className="relative h-[200px] "
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className="relative h-[calc(100vh+200px)] -top-[100vh]">
        <div className="h-[200px] sticky top-[calc(100vh-200px)]">
          <div className="h-[200px] bg-dark dark:bg-light w-full text-dark fixed bottom-0">
            <div>
              <Copyright />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
