"use client";
import { useState, useEffect, useRef } from "react";
import Project from "./components/project";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import Magnetic from "../magnetic/Magnetic";

const projects = [
  {
    id: 1,
    title: "Project 1",
    src: "c2montreal.png",
    color: "#000000",
  },
  {
    id: 2,
    title: "Project 2",
    src: "officestudio.png",
    color: "#8C8C8C",
  },
  {
    id: 3,
    title: "Project 3",
    src: "locomotive.png",
    color: "#EFE8D3",
  },
  {
    id: 4,
    title: "Project 4",
    src: "silencio.png",
    color: "#706D63",
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main
      onMouseMove={e => {
        moveItems(e.clientX, e.clientY);
      }}
      className="flex flex-col px-[1rem] items-center">
      <div
        className="w-full flex justify-end bg py-1 m-8 tracking-[2px] font-dimensions text-dark dark:text-light font-extralight
       text-[100px] xs:text-[120px]  cursor-default">
        <Magnetic>
          <h1> Projects</h1>
        </Magnetic>
      </div>
      <div className="w-full flex flex-col mb-[4rem] font-dimensions text-[10px]">
        {projects.map((project, index) => {
          return (
            <Project
              key={project.id}
              index={index}
              title={project.title}
              manageModal={manageModal}
            />
          );
        })}
      </div>
      {/* <Rounded>
        <p>More work</p>
      </Rounded> */}
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className="fixed w-[300px] h-[200px] z-[2] cursor-none pointer-events-none overflow-hidden top-[50%] left-[50%]">
          <div
            style={{ top: index * -100 + "%" }}
            className="relative w-full h-full transition-all duration-700">
            {projects.map((project, index) => {
              const { src, color } = project;
              return (
                <div
                  className="w-full h-full flex flex-col justify-center"
                  style={{ backgroundColor: color }}
                  key={`modal_${index}`}>
                  <Image
                    src={`/images/${src}`}
                    width={300}
                    height={0}
                    alt="image"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          ref={cursor}
          className="w-[80px] h-[80px] bg-dark rounded-sm text-light fixed z-[3] flex flex-col justify-center  
          pointer-events-none font-dimensions cursor-default"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}></motion.div>
        <motion.div
          ref={cursorLabel}
          className="w-[80px] h-[80px]  text-light fixed z-[3] flex flex-col 
          justify-center items-center pointer-events-none font-dimensions text-[70px] font-light cursor-default"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}>
          WATCH
        </motion.div>
      </>
    </main>
  );
};

export default Projects;
