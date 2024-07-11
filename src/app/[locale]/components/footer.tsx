"use client";
import React from "react";
import Copyright from "./copyright";
import FooButton from "./foo-button";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const routes = [
    { id: 1, text: "HOME", to: "/" },
    { id: 2, text: "PROJECTS", to: "/projects" },
    { id: 3, text: "CONTACT", to: "/contact" },
  ];
  const socials = [
    {
      id: 1,
      text: "LINKEDIN",
      to: "https://www.linkedin.com/in/oswaldojsotto/",
    },
    { id: 2, text: "GITHUB", to: "https://github.com/oswaldojsotto" },
    { id: 3, text: "WHATSAPP", to: "https://wa.me/+584129984137" },
  ];

  const goToProject = (page: string) => {
    router.push(page);
  };
  return (
    <section
      className="relative h-[200px] "
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className="relative h-[calc(100vh+200px)] -top-[100vh]">
        <div className="h-[200px] sticky top-[calc(100vh-200px)]">
          <div
            className="h-[200px] px-8 xl:px-[15%] bg-dark dark:bg-light w-full text-dark fixed bottom-0 flex 
          sm:flex-row flex-col  justify-between">
            <div className=" sm:py-8 flex flex-col gap-4 md:justify-between ">
              <ol className="flex justify-between sm:max-w-82 sm:w-78  m-0 scale-[0.75] md:scale-[1]">
                {routes.map(link => (
                  <li
                    key={link.id}
                    className=" font-agdasima m-0 "
                    onClick={() => goToProject(link.to)}>
                    <FooButton text={link.text} />
                  </li>
                ))}
              </ol>
              <div className="flex w-full justify-center">
                <Copyright />
              </div>
            </div>
            <div className=" sm:py-8 flex flex-col gap-4 md:justify-between ">
              <ol className="flex justify-between sm:max-w-82 sm:w-78  m-0 scale-[0.75] md:scale-[1]">
                {socials.map(link => (
                  <li key={link.id} className=" font-agdasima m-0 ">
                    <a href={link.to}>
                      <FooButton text={link.text} />
                    </a>
                  </li>
                ))}
              </ol>
              <div className="flex w-full justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
