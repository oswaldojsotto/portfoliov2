 "use client";
import  { useEffect, useLayoutEffect } from "react";


const LocomotiveScroller = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      console.log('scroll');
    })();
  }, []);
  return null
};

export default LocomotiveScroller;
