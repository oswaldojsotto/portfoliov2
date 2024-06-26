"use client";

import React, { useEffect } from "react";
import Magnetic from "@/[locale]/components/magnetic/Magnetic";
import LanguageSelector from "./language-selector";
import ThemeSwitcher from "./theme-switcher";
import { useRouter } from "next/navigation";
// import LanguageDropdown from "./language";

const NavBar = ({ t }: HeaderProps) => {
  const router = useRouter();

  const items1 = [
    { id: 1, text: t.about, to: "/" },
    // { id: 2, text: t.projects, to: "/projects" },
    { id: 2, text: t.projects, to: "/proyectos" },
  ];

  const items2 = [{ id: 3, text: t.contact, to: "/contact" }];

  const goToProject = (page: string) => {
    router.push(page);
  };

  return (
    <>
      <nav className="hidden sm:flex justify-between w-full max-h-16 ">
        <ul className=" flex w-full justify-between gap-6  text-[18px] font-extralight  ">
          {items1.map(item => (
            <li key={item.id} onClick={() => goToProject(item.to)}>
              <Magnetic>
                <div className="group relative  cursor-pointer items-center flex h-16 dark:text-light text-dark  ">
                  <div className="w-[100%] flex justify-center pr-4 items-center transition duration-300 ease-in-out">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      ●
                    </div>
                    <p className="font-dimensions text-[3rem] tracking-[4px] hover:text-orange dark:hover:text-pink transition-all">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Magnetic>
            </li>
          ))}
          <div className=" flex max-h-16 pt-2  ">
            <ThemeSwitcher />
          </div>
          {items2.map(item => (
            <li key={item.id} onClick={() => goToProject(item.to)}>
              <Magnetic>
                <div className="group relative cursor-pointer items-center flex h-16 dark:text-light text-dark ">
                  <div className="w-[100%] flex justify-center pr-4 items-center transition duration-300 ease-in-out">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      ●
                    </div>
                    <p className="font-dimensions text-[3rem] tracking-[4px] hover:text-orange dark:hover:text-pink transition-all ">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Magnetic>
            </li>
          ))}
          <LanguageSelector t={t} />
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
