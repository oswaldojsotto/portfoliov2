import { useEffect, useState, useTransition } from "react";
import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.1 } },
};

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [mounted, setMounted] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelectLanguage = (language: string) => {
    console.log(language);
    handleClick();
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="w-[300px] filter:drop-shadow(1px 1px 1px #4700b3)">
      <motion.button
        className="flex "
        whileTap={{ scale: 0.97 }}
        disabled={isPending}
        onClick={handleClick}>
        Language
        <motion.div
          className="flex flex-row justify-between"
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.1 }}
          style={{ originY: 0.55 }}>
          <div className="">
            <svg width="15" height="18" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </div>
        </motion.div>
      </motion.button>

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
        <motion.li
          className="cursor-pointer pl-2 text-neutral-200 dark:text-neutral-800"
          variants={itemVariants}
          onClick={() => onSelectLanguage("en")}>
          English{" "}
        </motion.li>
        <motion.li
          className="cursor-pointer pl-2 text-neutral-200 dark:text-neutral-800"
          variants={itemVariants}
          onClick={() => onSelectLanguage("es")}>
          Spanish
        </motion.li>
        <motion.li
          className="cursor-pointer pl-2 text-neutral-200 dark:text-neutral-800"
          variants={itemVariants}
          onClick={() => onSelectLanguage("it")}>
          Italian
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};
export default LanguageSelector;
