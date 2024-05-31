"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import Magnetic from "../magnetic/Magnetic";
import ProjectItem from "./project-item";
import { useRouter } from "next/navigation";

const projects = [
  {
    id: 1,
    title: "Movie Trailers",
    src: "movieapp.png",
    color: "yellow",
    link: "/movie-trailers",
  },
  {
    id: 2,
    title: "shopapp",
    src: "shopapp.png",
    color: "blue",
    link: "/shopapp",
  },
  {
    id: 3,
    title: "notes",
    src: "note2.png",
    color: "red",
    link: "/notes",
  },
  {
    id: 4,
    title: "newsproject",
    src: "newsproject.png",
    color: "green",
    link: "/newsproject",
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

const ProjectsList = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const router = useRouter();
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef<any | null>(null);
  let yMoveContainer = useRef<any | null>(null);
  let xMoveCursor = useRef<any | null>(null);
  let yMoveCursor = useRef<any | null>(null);
  let xMoveCursorLabel = useRef<any | null>(null);
  let yMoveCursorLabel = useRef<any | null>(null);

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

  const moveItems = (x: number, y: number) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (
    active: boolean,
    index: number,
    x: number,
    y: number
  ) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main
      onMouseMove={e => {
        moveItems(e.clientX, e.clientY);
      }}
      className="flex flex-col  items-center">
      <div
        className="w-full flex justify-end bg py-1   tracking-[2px] font-dimensions text-dark dark:text-light font-extralight
       text-[100px] xs:text-[120px]  cursor-default ">
        <Magnetic>
          <h1> Projects</h1>
        </Magnetic>
      </div>
      <div className="w-full flex flex-col mb-[4rem] font-dimensions text-[10px]">
        {projects.map((project, index) => {
          return (
            <ProjectItem
              index={index}
              title={project.title}
              manageModal={manageModal}
              key={index}
              link={project.link}
            />
          );
        })}
      </div>

      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className="fixed w-[220px] h-[220px] z-[2]  cursor-none pointer-events-none overflow-hidden top-[50%] left-[50%]">
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
                    src={`/projects/${src}`}
                    width={400}
                    height={-10}
                    alt={`project_${project.id}`}
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          ref={cursor}
          className="w-[50px] h-[50px]  rounded-full bg-light dark:bg-dark  fixed z-[3] flex flex-col justify-center  
          pointer-events-none font-dimensions cursor-default select-none "
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}></motion.div>
        <motion.div
          ref={cursorLabel}
          className="w-[80px] h-[80px]  dark:text-light  text-dark fixed z-[3] flex flex-col  select-none
          justify-center items-center pointer-events-none  font-agdasima text-[20px] font-medium cursor-default"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}>
          VIEW
        </motion.div>
      </>
    </main>
  );
};

export default ProjectsList;
