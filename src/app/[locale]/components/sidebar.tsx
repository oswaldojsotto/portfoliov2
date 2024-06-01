"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import { useTheme } from "next-themes";
import RoundedButton from "./rounded-button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDispatch, useSelector } from "react-redux";
import Magnetic from "@/app/[locale]/components/magnetic/Magnetic";
import { setSideMenu } from "@/app/store/sidemenuSlice";

const links = [
  { name: "Home", to: "#", id: 1 },
  { name: "Projects", to: "#", id: 2 },
  { name: "Contact", to: "#", id: 3 },
];

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
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  const button = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(button.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight / 4,

          onLeave: () => {
            gsap.to(button.current, {
              scale: 1,
              duration: 0.25,
              ease: "power1.out",
            });
          },

          onEnterBack: () => {
            gsap.to(button.current, {
              scale: 0,
              duration: 0.25,
              ease: "power1.out",
            });
          },
        },
      });
    }
  }, [mounted]);

  if (!mounted) return null;

  return (
    <main className="flex absolute">
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className={`fixed h-[101vh] flex left-0 justify-center  overflow-hidden ${
              currentTheme === "dark"
                ? "bg-dark drop-shadow-2xl"
                : "bg-light drop-shadow-2xl"
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
              onClick={() => dispatch(setSideMenu(false))}
              className="my-[8rem] mx-[2rem]"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}>
              {links.map(({ name, to, id }) => (
                <Magnetic key={id}>
                  <motion.a
                    className={`font-dimensions text-[120px] flex flex-col gap-16 py-8 text-4xl drop-shadow-2xl
                    transition-all hover:text-orange dark:hover:text-pink tracking-wide ${
                      currentTheme === "dark"
                        ? "text-light drop-shadow-2xl"
                        : "text-dark drop-shadow-2xl"
                    }`}
                    href={to}
                    variants={itemVariants}>
                    {name}
                  </motion.a>
                </Magnetic>
              ))}
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
      <div
        ref={button}
        className="fixed left-8  scale-0 my-4 "
        onClick={() => dispatch(setSideMenu(!isOpen))}>
        <RoundedButton backgroundColor="#a2a2a2">
          <Magnetic>
            <div className="z-[1]">
              <Hamburger
                hideOutline
                rounded
                size={24}
                color={currentTheme === "light" ? "#1C1D20" : "#eee"}
                toggled={isOpen}
                onToggle={() => dispatch(setSideMenu(!isOpen))}
              />
            </div>
          </Magnetic>
        </RoundedButton>
      </div>
    </main>
  );
};

export default Sidebar;
