"use client";
import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import { useTheme } from "next-themes";
import RoundedButton from "./rounded-button";
import Magnetic from "@/[locale]/components/magnetic/Magnetic";
import ThemeSwitcher from "./theme-switcher";
import { useScroll } from "@/hooks/useScroll";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { CompactLanguageSelector } from "@/[locale]/components/language-selector";
import { useOutsideClickEvent } from "@studio-freight/hamo";
import Social from "@/[locale]/components/socials";

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const Sidebar = () => {
  const { theme, systemTheme } = useTheme();
  const router = useRouter();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("header");
  const {
    position: { y },
  } = useScroll();
  const closeSliderRef = useRef(null);
  const links = [
    { id: 1, text: t("home"), to: "/" },
    { id: 2, text: t("projects"), to: "/projects" },
    { id: 3, text: t("about"), to: "/about" },
    { id: 4, text: t("contact"), to: "/contact" },
  ];

  const goTo = (page: string) => {
    router.push(page);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (y <= 100) {
      setIsOpen(false);
    }
  }, [y]);

  useOutsideClickEvent(closeSliderRef, () => {
    setIsOpen(false);
  });

  if (!mounted) return null;

  return (
    <main className="flex fixed z-[100]" ref={closeSliderRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className={`fixed h-[101vh] flex left-0 z-10  justify-center  overflow-hidden ${
              currentTheme === "dark"
                ? "bg-dark drop-shadow-2xl text-light"
                : "bg-light drop-shadow-2xl text-dark"
            }`}
            initial={{ width: 0 }}
            animate={{
              width: 320,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}>
            <motion.div
              className="my-[6rem] mx-[2rem]"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}>
              <ThemeSwitcher />

              {links.map(({ text, to, id }) => (
                <Magnetic key={id}>
                  <motion.a
                    className={`font-dimensions text-[60px]  md:text-[80px] flex flex-col gap-16 my-6 md:-my-4 md:py-6 md:mb-1 text-4xl drop-shadow-2xl
                    transition-all hover:text-orange dark:hover:text-pink tracking-wide cursor-pointer bg-red${
                      currentTheme === "dark"
                        ? "text-light drop-shadow-[10rem]"
                        : "text-dark drop-shadow-[10rem]"
                    }`}
                    onClick={() => goTo(to)}
                    variants={itemVariants}>
                    {text}
                  </motion.a>
                </Magnetic>
              ))}
              <div
                key={4}
                className="w-full h-16  flex flex-col justify-center">
                <CompactLanguageSelector />
              </div>
              <div
                key={5}
                className="w-full h-16  flex flex-col justify-center">
                <Social />
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
      <motion.div
        animate={{ scale: y > 100 ? 1 : 0 }}
        transition={{ ease: "easeOut", duration: 0.2 }}
        className="fixed left-8 z-20 my-4 hidden sm:flex "
        onClick={() => setIsOpen(!isOpen)}>
        <RoundedButton backgroundColor="#a2a2a2">
          <Magnetic>
            <motion.div className="z-[1]">
              <Hamburger
                hideOutline
                rounded
                size={24}
                color={currentTheme === "dark" ? "#1C1D20" : "#eee"}
                toggled={isOpen}
                onToggle={() => setIsOpen(!isOpen)}
              />
            </motion.div>
          </Magnetic>
        </RoundedButton>
      </motion.div>
      <motion.div
        // ref={closeSliderRef}
        transition={{ ease: "easeOut", duration: 0.2 }}
        className="fixed left-8 z-20 my-4 flex sm:hidden "
        onClick={() => setIsOpen(!isOpen)}>
        <RoundedButton backgroundColor="#a2a2a2">
          <Magnetic>
            <motion.div className="z-[1]">
              <Hamburger
                hideOutline
                rounded
                size={24}
                color={currentTheme === "dark" ? "#1C1D20" : "#eee"}
                toggled={isOpen}
                onToggle={() => setIsOpen(!isOpen)}
              />
            </motion.div>
          </Magnetic>
        </RoundedButton>
      </motion.div>
    </main>
  );
};

export default Sidebar;
