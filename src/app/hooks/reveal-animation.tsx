import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const RevealAnimation = ({
  children,
  delayWait,
}: {
  children: React.ReactNode;
  delayWait: number;
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    // Initial reveal animation after 2.1 seconds
    const revealTl = gsap.timeline({ delay: delayWait });
    revealTl.fromTo(
      textElement,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    return () => {
      revealTl.kill();
      ScrollTrigger.getAll().forEach(trigger =>
        trigger.kill()
      );
    };
  }, []);

  return (
    <div ref={textRef} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

export default RevealAnimation;
