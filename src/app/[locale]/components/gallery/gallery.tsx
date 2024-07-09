import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
// import { exampleImages } from "./image-data";
import NavigationButton from "../navigation-button";
import "./gallery.css";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
type GalleryProps = {
  images: {
    count: number;
    imagesArray: string[];
  } | null;
};

const Gallery = ({ images }: GalleryProps) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images ? images.count : 0, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="galleryImage absolute w-full px-8 xl:px-[15%] py-8 rounded-[1rem] hover:cursor-grab active:cursor-grabbing"
          key={page}
          src={images ? images.imagesArray[imageIndex] : ""}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div
        className="absolute h-8 w-8 mx-8 mt-[27%] left-4 z-[1] xl:left-52 xl:mt-[21%]"
        onClick={() => paginate(1)}>
        <NavigationButton direction="left" />
      </div>
      <div
        className="absolute h-8 w-8  bg-red mx-12 mt-[27%] right-8 z-[1] xl:right-52 xl:mt-[21%]"
        onClick={() => paginate(-1)}>
        <NavigationButton direction="right" />
      </div>
    </>
  );
};

export default Gallery;
