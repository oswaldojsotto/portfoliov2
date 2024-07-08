import "./slider.css";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import tech from "@/[locale]/components/framer-slider/tech.json";
import { useTheme } from "next-themes";
import Image from "next/image";

interface ParallaxProps {
  children: JSX.Element;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, v => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span className="">{children} </span>
        <span className="">{children} </span>
        <span className="">{children} </span>
        <span className="">{children} </span>
      </motion.div>
    </div>
  );
}

const Slider = () => {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>("dark");

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);
  return (
    <section className="mt-8 mb-16">
      <ParallaxText baseVelocity={1}>
        <div className="flex w-full">
          {tech.map((item: { name: string; route: string }) => (
            <Image
              key={item.name}
              data-tip={item.name}
              className="w-[5.5rem] min-w-[5.5rem] max-w-[5.5rem] px-4 py-4 opacity-[0.8]"
              src={`/tech/${currentTheme === "dark" ? "white" : "color"}/${
                item.route
              }`}
              alt={`${item.name}`}
              width={12}
              height={12}
            />
          ))}
        </div>
      </ParallaxText>
    </section>
  );
};

export default Slider;
