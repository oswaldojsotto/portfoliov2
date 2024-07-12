"use client";

import React from "react";
import { LanguageSelector } from "./language-selector";
import ThemeSwitcher from "./theme-switcher";
import { useRouter } from "next/navigation";
import NavbarLink from "./navbar-link";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const router = useRouter();
  const { t } = useTranslation("header");

  const items1 = [
    { id: 1, text: t("about"), to: "/" },
    { id: 2, text: t("projects"), to: "/projects" },
  ];

  const items2 = [
    { id: 3, text: "ABOUT", to: "/about" },
    { id: 4, text: t("contact"), to: "/contact" },
  ];

  const goToProject = (page: string) => {
    router.push(page);
  };

  return (
    <>
      <nav className="hidden sm:flex justify-between w-full max-h-16 ">
        <ul className=" flex w-full justify-between  font-extralight  ">
          {items1.map(item => (
            <li key={item.id} onClick={() => goToProject(item.to)}>
              <NavbarLink text={item.text} />
            </li>
          ))}
          <div className=" flex max-h-16 mt-2 ml-12 md:gap-2">
            <ThemeSwitcher />
            <LanguageSelector />
          </div>
          {items2.map(item => (
            <li key={item.id} onClick={() => goToProject(item.to)}>
              <NavbarLink text={item.text} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
