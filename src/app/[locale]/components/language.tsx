"use client";
import { useEffect, useState, useTransition } from "react";
import Magnetic from "./magnetic/Magnetic";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/../../i18nConfig";
import { useRouter, usePathname } from "next/navigation";

import { useTheme } from "next-themes";
import { setLanguageSelectorMenu } from "@/app/store/sidemenuSlice";
const Language = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const currentPathname = usePathname();
  const { theme, systemTheme } = useTheme();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const isOpen = useSelector(
    (state: any) => state.sidemenu.languageSelectorState
  );
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  const handleClick = () => {
    dispatch(setLanguageSelectorMenu(!isOpen));
  };

  const onSelectLanguage = (language: string) => {
    const newLocale = language;
    setCurrentLanguage(language);

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      startTransition(() => {
        router.push("/" + newLocale + currentPathname);
      });
    } else {
      startTransition(() => {
        router.push(
          currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
        );
      });
    }

    router.refresh();

    handleClick();
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const languageList = [
    {
      id: 1,
      name: "English",
      value: "en",
    },
    {
      id: 2,
      name: "Spanish",
      value: "es",
    },
    {
      id: 3,
      name: "Italian",
      value: "it",
    },
  ];

  if (!mounted) return null;

  return (
    <div onClick={() => dispatch(setLanguageSelectorMenu(!isOpen))}>
      <Magnetic>
        <div className={`dropdown`}>
          <div className="group relative cursor-pointer items-center flex h-16 dark:text-light text-dark ">
            <div className="w-[100%] flex justify-center pr-4 items-center transition duration-300 ease-in-out">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                ●
              </div>
              <p className="font-dimensions text-[3rem] tracking-[4px] ">
                Language: EN
              </p>
            </div>
          </div>
          {isOpen && (
            <ul
              tabIndex={0}
              className="dropdown-content transition-all z-[1] menu p-2 shadow bg-dark rounded-box w-52 animate-fade-in">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          )}
        </div>
      </Magnetic>
    </div>
  );
};

export default Language;
