import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Preloader from "./preloader";
import { ReactLenis, useLenis } from "lenis/react";

interface PreloaderProps {
  children: React.ReactNode;
  words: string[];
  time?: number;
}

const PreloadWrapper = ({ children, words, time = 1000 }: PreloaderProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      // window.scrollTo(0, 0);
    }, time);
  });
  return (
    <main>
      <ReactLenis root options={{ lerp: 0.05, duration: 1.5, syncTouch: true }}>
        <AnimatePresence mode="wait">
          {loading && <Preloader words={words} />}
        </AnimatePresence>
        <div key={1}>{children}</div>
      </ReactLenis>
    </main>
  );
};

export default PreloadWrapper;
