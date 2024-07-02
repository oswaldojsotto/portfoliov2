import { gsap } from "gsap";
import { useEffect, useRef, ReactNode } from "react";
import { useWindowSize } from "@studio-freight/hamo";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ParallaxProps {
  className?: string;
  children: ReactNode;
  speed?: number;
  id?: string;
}

interface WindowSize {
  width: number;
  height: number;
}

export function Parallax({
  className,
  children,
  speed = 1,
  id = "parallax",
}: ParallaxProps) {
  const trigger = useRef<HTMLDivElement>(null);
  const target = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const { width: windowWidth } = useWindowSize() as WindowSize;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const y = windowWidth * speed * 0.1;

    const setY = gsap.quickSetter(target.current!, "y", "px");

    timeline.current = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: trigger.current!,
        scrub: true,
        start: "top bottom",
        end: "bottom top",
        onUpdate: e => {
          setY(e.progress * y);
        },
      },
    });

    return () => {
      timeline.current?.kill();
    };
  }, [id, speed, windowWidth]);

  return (
    <div ref={trigger} className={className}>
      <div ref={target}>{children}</div>
    </div>
  );
}
