"use client";
import React from "react";
import Copyright from "./copyright";
import FooButton from "./foo-button";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const router = useRouter();
  const { t } = useTranslation("header");

  const routes = [
    // { id: 1, text: t("home"), to: "/" },
    { id: 2, text: t("projects"), to: "/projects" },
    { id: 3, text: t("about"), to: "/about" },
    { id: 4, text: t("contact"), to: "/contact" },
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
      className="relative h-[200px] font-extralight"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className="relative h-[calc(100vh+200px)] -top-[100vh]">
        <div className="h-[200px] sticky top-[calc(100vh-200px)]">
          <div
            className="h-[200px] px-8 xl:px-[15%] bg-dark dark:bg-light w-full text-dark fixed bottom-0 flex 
          sm:flex-row  justify-between gap-4">
            <div className="h-full w-[7rem] xs:w-full ">
              <ol className="flex justify-center md:justify-between h-full flex-col md:flex-row md:my-[1.7rem]    ">
                {routes.map(link => (
                  <li
                    className="scale-[0.8] xs:scale-100"
                    key={link.id}
                    onClick={() => goToProject(link.to)}>
                    <FooButton text={link.text} />
                  </li>
                ))}
              </ol>
            </div>
            <div className=" h-full flex justify-center flex-col w-[15.5rem] xs:w-full -ml-4 xs:-ml-0 -mt-0.5 md:-mt-0">
              <ol className="flex justify-center  xs:justify-between my-1 w-full xs:w-full">
                {socials.map(link => (
                  <li
                    key={link.id}
                    className="scale-[0.8] xs:scale-100 flex -mx-[1rem] ">
                    <a href={link.to} target="_blank">
                      <FooButton text={link.text} />
                    </a>
                  </li>
                ))}
              </ol>
              <div className="flex justify-center sm:justify-end my-4 -ml-4 sx:ml-0">
                <Copyright />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
