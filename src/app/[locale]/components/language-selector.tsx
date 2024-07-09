"use client";
import { useEffect, useState, useTransition } from "react";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";
import i18nConfig from "@/../../i18nConfig";
import { useTheme } from "next-themes";
import Magnetic from "@/[locale]/components/magnetic/magnetic";
import { useDispatch, useSelector } from "react-redux";
import { setLanguageSelectorMenu } from "@/store/sidemenuSlice";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.1 } },
};

const LanguageSelector = () => {
  const { theme, systemTheme } = useTheme();
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const router = useRouter();
  const currentPathname = usePathname();
  const isOpen = useSelector(
    (state: any) => state.sidemenu.languageSelectorState
  );
  const [isPending, startTransition] = useTransition();
  const currentLocale = i18n.language;
  const { t } = useTranslation("header");
  const [mounted, setMounted] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const currentTheme = theme === "system" ? systemTheme : theme;

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
      name: "ENGLISH",
      value: "en",
    },
    {
      id: 2,
      name: "ESPAÑOL",
      value: "es",
    },
    {
      id: 3,
      name: "ITALIANO",
      value: "it",
    },
  ];

  if (!mounted) return null;

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="-mt-[1.4rem] filter:drop-shadow(1px 1px 1px #4700b3) ">
      <div>
        <Magnetic>
          <motion.button
            className="flex gap-2 my-6 w-32"
            whileTap={{ scale: 0.97 }}
            disabled={isPending}
            onClick={handleClick}>
            <div className="group relative cursor-pointer items-center flex h-16 dark:text-light text-dark ">
              <div className="w-[100%] flex justify-center pr-4 items-center transition duration-300 ease-in-out">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  ●
                </div>
                <p className="font-dimensions text-[3rem] tracking-[4px] hover:text-orange dark:hover:text-pink transition-all ">
                  LANGUAGE
                </p>
                <motion.div
                  className="flex flex-row justify-between"
                  variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 },
                  }}
                  transition={{ duration: 0.1 }}
                  style={{ originY: 0.55 }}></motion.div>
              </div>
            </div>
          </motion.button>
        </Magnetic>
        <motion.ul
          className=" py-2 flex flex-col gap-2 bg-neutral-800 max-w-[7rem] dark:bg-neutral-200"
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                bounce: 0,
                duration: 0.3,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}>
          {languageList.map(({ id, name, value }) => {
            return (
              <motion.li
                key={id}
                className="font-agdasima text-[18px] max-h-[4rem] py-1.5 -my-1 cursor-pointer pl-2 text-light hover:text-dark hover:bg-light 
                dark:text-neutral-800  dark:hover:bg-dark dark:hover:text-light font-medium "
                variants={itemVariants}
                onClick={() => onSelectLanguage(value)}>
                {name}
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </motion.nav>
  );
};
export default LanguageSelector;
