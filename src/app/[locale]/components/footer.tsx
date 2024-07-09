import React from "react";
import Copyright from "./copyright";
import { Parallax } from "./parallax";
import FooButton from "./foo-button";

const Footer = () => {
  const links = [
    { id: 1, text: "HOME", to: "/" },
    { id: 2, text: "PROJECTS", to: "/projects" },
    { id: 3, text: "CONTACT", to: "/contact" },
  ];
  return (
    <section
      className="relative h-[200px] "
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className="relative h-[calc(100vh+200px)] -top-[100vh]">
        <div className="h-[200px] sticky top-[calc(100vh-200px)]">
          <div className="h-[200px] bg-dark dark:bg-light w-full text-dark fixed bottom-0">
            <div className=" px-8 xl:px-[15%] py-8 flex flex-col gap-4">
              <div className="flex justify-between max-w-72 w-72 m-0">
                {links.map(link => (
                  <div key={link.id} className=" font-agadasima m-0 ">
                    <FooButton text={link.text} />
                  </div>
                ))}
              </div>
              <Copyright />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
