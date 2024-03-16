import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "@/app/hooks/useDimensions";
import { MenuToggle } from "./menuToggle";

const sidebarAnimation = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      duration: 2,
      type: "Tween",
      stiffness: 100,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      // delay: 0.1,
      // duration: 2,
      type: "Tween",
      stiffness: 100,
      damping: 40,
    },
  },
};

export const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      className="absolute top-0 left-0 bottom-0 w-[300px] "
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}>
      <motion.div
        className="absolute top-0 bottom-0 left-0 bg-neutral-800 w-full"
        variants={sidebarAnimation}
      />
      {/* <Navigation /> */}
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
