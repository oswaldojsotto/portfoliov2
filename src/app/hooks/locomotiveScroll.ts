 "use client";
import  { useEffect } from "react";


const LocomotiveScroll = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return null
};

export default LocomotiveScroll;
