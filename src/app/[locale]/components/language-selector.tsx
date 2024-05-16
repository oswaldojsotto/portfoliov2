"use client";
import { useEffect, useState, useTransition } from "react";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";
import i18nConfig from "@/../../i18nConfig";
import Image from "next/image";
import { useTheme } from "next-themes";
import Magnetic from "./magnetic/Magnetic";

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
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const currentPathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const currentLocale = i18n.language;
  const [mounted, setMounted] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleClick = () => {
    setIsOpen(!isOpen);
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
      name: "English",
      value: "en",
    },
    {
      name: "Spanish",
      value: "es",
    },
    {
      name: "Italian",
      value: "it",
    },
  ];

  if (!mounted) return null;

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="-mt-[7px] filter:drop-shadow(1px 1px 1px #4700b3) ">
      <div>
        <Magnetic>
          <motion.button
            className="flex gap-2 my-6 w-32"
            whileTap={{ scale: 0.97 }}
            disabled={isPending}
            onClick={handleClick}>
            <Image
              src={`${
                currentTheme === "light"
                  ? `translate-light.svg`
                  : `translate-dark.svg`
              }`}
              width={36}
              height={10}
              alt="translate"
            />
            <motion.div
              className="flex flex-row justify-between"
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.1 }}
              style={{ originY: 0.55 }}>
              <div className={`w-[1rem] min-w-[1rem] max-w-[1rem]`}>
                <Image
                  className="-mt-1"
                  src={`${
                    currentTheme === "light"
                      ? `sort-down-light.svg`
                      : `sort-down-dark.svg`
                  }`}
                  width={16}
                  height={16}
                  alt="dropdown"
                />
              </div>
            </motion.div>
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
          {languageList.map(({ name, value }) => {
            return (
              <motion.li
                key={value}
                className=" py-1.5 -my-1 cursor-pointer pl-2 text-light hover:text-dark hover:bg-light 
                dark:text-neutral-800 font-medium dark:hover:bg-dark dark:hover:text-light"
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
