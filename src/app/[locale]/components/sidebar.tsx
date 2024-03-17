"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Hamburger from "hamburger-react";
import { useTheme } from "next-themes";

const links = [
  { name: "Home", to: "#", id: 1 },
  { name: "About", to: "#", id: 2 },
  { name: "Blog", to: "#", id: 3 },
  { name: "Contact", to: "#", id: 4 },
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
            className={`h-[101vh] overflow-hidden ${
              currentTheme === "dark" ? "bg-neutral-800" : "bg-neutral-200"
            }`}
            initial={{ width: 0 }}
            animate={{
              width: 300,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}>
            <motion.div
              className="my-[4rem] mx-[2rem]"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}>
              {links.map(({ name, to, id }) => (
                <motion.a
                  className={`flex flex-col gap-4 font-bold py-4 text-4xl ${
                    currentTheme === "dark"
                      ? "text-neutral-200"
                      : "text-neutral-800"
                  }`}
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}>
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
      <div className="fixed mx-6 my-4">
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
    </main>
  );
};

export default Sidebar;
