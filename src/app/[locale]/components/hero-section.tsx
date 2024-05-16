"use client";
import RevealAnimation from "@/app/hooks/revealAnimation";
import {
  setLanguageSelectorMenu,
  setSideMenu,
} from "@/app/store/sidemenuSlice";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

interface HeroSectionProps {
  title: string;
}

const HeroSection = ({ title }: HeroSectionProps) => {
  const dispatch = useDispatch();

  const firstText = useRef(null);
  // const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    // gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  const closeMenus = () => {
    dispatch(setSideMenu(false));
    dispatch(setLanguageSelectorMenu(false));
  };

  return (
    <>
      <div
        className="relative z-[1] h-[100vh] flex flex-col justify-center px-8"
        onClick={() => closeMenus()}>
        <RevealAnimation>
          <div ref={slider} className="flex ">
            <p
              ref={firstText}
              data-scroll
              data-scroll-speed="0.2"
              className=" overflow-scroll  w-full -tracking-[4px]  font-bold text-dark dark:text-light 
        text-[32px] sm:text-[68px] md:text-[148px]">
              OSWALDO SOTTO
            </p>
            {/* <p
              ref={secondText}
              data-scroll
              data-scroll-speed="0.2"
              className="absolute w-full left-[72%] -tracking-[4px] data-scroll font-bold text-dark dark:text-light 
        text-[32px] sm:text-[68px] md:text-[108px]">
              OSWALDO SOTTO
            </p> */}
          </div>
        </RevealAnimation>

        <RevealAnimation>
          <h1
            data-scroll
            data-scroll-speed="0.4"
            className="font-raleway font-bold text-dark dark:text-light   text-[24px] sm:text-[32px] md:text-[48px]">
            Frontend - Web Developer
          </h1>
        </RevealAnimation>

        <RevealAnimation>
          <h2
            data-scroll
            data-scroll-speed="0.4"
            className="text-dark dark:text-light">
            {/* {t("title")} */}
            {title}
          </h2>
        </RevealAnimation>
      </div>
    </>
  );
};

export default HeroSection;
