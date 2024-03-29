"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Hamburger from "hamburger-react";
import { useTheme } from "next-themes";
import RoundedButton from "../components/RoundedButton";
import Magnetic from "@/app/[locale]/components/Magnetic/Magnetic";

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
  const [open, cycleOpen] = useCycle<boolean>(false, true);
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="flex absolute">
      <AnimatePresence>
        {open && (
          <motion.nav
            className={`fixed h-[101vh] flex justify-center  overflow-hidden ${
              currentTheme === "dark"
                ? "bg-neutral-800"
                : "bg-neutral-200 drop-shadow-2xl"
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
              {links.map(({ name, to, id }) => (
                <Magnetic key={id}>
                  <motion.a
                    className={`flex flex-col gap-4 font-bold py-4 text-4xl drop-shadow-2xl ${
                      currentTheme === "dark"
                        ? "text-neutral-200"
                        : "text-neutral-800 drop-shadow-2xl"
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
      <div className="fixed mx-6 my-4">
        <RoundedButton backgroundColor="#a2a2a2">
          <div className="z-[2]">
            <Hamburger
              color={currentTheme === "light" ? "#362626" : "white"}
              onToggle={toggled => {
                if (toggled) {
                  cycleOpen(1);
                } else {
                  cycleOpen(0);
                }
              }}
            />
          </div>
        </RoundedButton>
      </div>
    </main>
  );
};

export default Sidebar;
