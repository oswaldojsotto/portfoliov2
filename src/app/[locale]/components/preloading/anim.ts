export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export const slideUp = {
  initial: {
    top: "0vh",
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slideDown = {
  initial: {
    top: "100vh",
  },
  animate: {
    top: "0vh",
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  },
};