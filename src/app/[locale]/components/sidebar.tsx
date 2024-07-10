"use client";
import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import { useTheme } from "next-themes";
import RoundedButton from "./rounded-button";
import { useDispatch, useSelector } from "react-redux";
import Magnetic from "@/[locale]/components/magnetic/magnetic";
import { setSideMenu } from "@/store/sidemenuSlice";
import ThemeSwitcher from "./theme-switcher";
import { useScroll } from "@/hooks/useScroll";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

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
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.sidemenu.sideMenuState);
  const { theme, systemTheme } = useTheme();
  const router = useRouter();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation("header");
  const {
    position: { y },
  } = useScroll();

  const links = [
    { id: 1, text: t("about"), to: "/" },
    { id: 2, text: t("projects"), to: "/projects" },
    { id: 3, text: t("contact"), to: "/contact" },
  ];

  const goTo = (page: string) => {
    router.push(page);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (y === 0) {
      dispatch(setSideMenu(false));
    }
  }, [y, dispatch]);

  if (!mounted) return null;

  return (
    <main className="flex fixed z-[100]">
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
              width: 350,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}>
            <motion.div
              className="my-[8rem] mx-[2rem]"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}>
              <ThemeSwitcher />

              {links.map(({ text, to, id }) => (
                <Magnetic key={id}>
                  <motion.a
                    className={`font-dimensions text-[120px] flex flex-col gap-16 py-8 text-4xl drop-shadow-2xl
                    transition-all hover:text-orange dark:hover:text-pink tracking-wide cursor-pointer bg-red${
                      currentTheme === "dark"
                        ? "text-light drop-shadow-2xl"
                        : "text-dark drop-shadow-2xl"
                    }`}
                    onClick={() => goTo(to)}
                    variants={itemVariants}>
                    {text}
                  </motion.a>
                </Magnetic>
              ))}
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
      <motion.div
        animate={{ scale: y > 100 ? 1 : 0 }}
        transition={{ ease: "easeOut", duration: 0.2 }}
        className="fixed left-8 z-20 my-4 hidden sm:flex "
        onClick={() => dispatch(setSideMenu(!isOpen))}>
        <RoundedButton backgroundColor="#a2a2a2">
          <Magnetic>
            <motion.div className="z-[1]">
              <Hamburger
                hideOutline
                rounded
                size={24}
                color={currentTheme === "light" ? "#1C1D20" : "#eee"}
                toggled={isOpen}
                onToggle={() => dispatch(setSideMenu(!isOpen))}
              />
            </motion.div>
          </Magnetic>
        </RoundedButton>
      </motion.div>
      <motion.div
        transition={{ ease: "easeOut", duration: 0.2 }}
        className="fixed left-8 z-20 my-4 flex sm:hidden "
        onClick={() => dispatch(setSideMenu(!isOpen))}>
        <RoundedButton backgroundColor="#a2a2a2">
          <Magnetic>
            <motion.div className="z-[1]">
              <Hamburger
                hideOutline
                rounded
                size={24}
                color={currentTheme === "light" ? "#1C1D20" : "#eee"}
                toggled={isOpen}
                onToggle={() => dispatch(setSideMenu(!isOpen))}
              />
            </motion.div>
          </Magnetic>
        </RoundedButton>
      </motion.div>
    </main>
  );
};

export default Sidebar;
