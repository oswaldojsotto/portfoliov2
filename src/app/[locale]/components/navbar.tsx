"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useWindowScroll } from "react-use";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  // Use explicit types for useState.
  const [isAudioPlaying, setIsAudioPlaying] =
    useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isNavVisible, setIsNavVisible] =
    useState<boolean>(true);

  // Define ref types for DOM elements.
  const navContainerRef = useRef<HTMLDivElement>(null);
  const audioElementRef = useRef<HTMLAudioElement>(null);

  const toggleAudioIndicator = (): void => {
    setIsAudioPlaying(prev => !prev);
    setIsActive(prev => !prev);
  };

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    // Type-safe DOM manipulation with refs.
    if (navContainerRef.current) {
      if (currentScrollY === 0) {
        setIsNavVisible(true);
        navContainerRef.current.classList.remove(
          "floating-nav"
        );
      } else if (currentScrollY > lastScrollY) {
        setIsNavVisible(false);
        navContainerRef.current.classList.add(
          "floating-nav"
        );
      } else if (currentScrollY < lastScrollY) {
        setIsNavVisible(true);
        navContainerRef.current.classList.add(
          "floating-nav"
        );
      }
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    if (navContainerRef.current) {
      gsap.to(navContainerRef.current, {
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.2,
      });
    }
  }, [isNavVisible]);

  useEffect(() => {
    // Type-safe interaction with audio element ref.
    if (audioElementRef.current) {
      if (isAudioPlaying) {
        audioElementRef.current.play();
      } else {
        audioElementRef.current.pause();
      }
    }
  }, [isAudioPlaying]);

  const scrollToSection = (sectionId: string): void => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: `#${sectionId}`,
        offsetY: 20,
      },
      ease: "power2.inOut",
    });
  };

  const navItems: string[] = [
    "Welcome",
    "About",
    "Features",
    "Story",
    "Contact",
  ];

  return (
    <div
      ref={navContainerRef}
      className="font-robotomono fixed inset-x-0 z-50 h-16 transition-all duration-700 border-none top-4 sm:inset-x-6 bg-transparent rounded-xl">
      <header className="absolute w-full -translate-y-1/2 top-1/2">
        <nav className="flex items-center justify-between p-4 size-full">
          <div className="flex items-center gap-7">
            {/* <TiLocationArrow
              className="text-xl cursor-pointer text-violet-50"
              onClick={() => scrollToSection("welcome")}
            />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            /> */}
          </div>
          <div className="flex items-center h-full">
            <div className="hidden md:block">
              {navItems.map((item: string) => (
                <button
                  onClick={() =>
                    scrollToSection(item.toLowerCase())
                  }
                  key={item}
                  className="nav-hover-btn">
                  {item}
                </button>
              ))}
            </div>
            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center mt-[3px] cursor-pointer">
              <audio
                ref={audioElementRef}
                loop
                className="hidden"
                src="/audio/loop.m4a"
              />
              {[1, 2, 3, 4].map((bar: number) => (
                <div
                  key={bar}
                  className={`indicator-line mx-[1px] ${
                    isActive ? "active" : ""
                  }`}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
