"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function useIsMobile(breakpoint = 900) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
}

const Cursor = () => {
  const isMobile = useIsMobile();

  const x = useMotionValue(-1);
  const y = useMotionValue(-1);
  const springConfig = { damping: 20, stiffness: 180, mass: 0.2 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  useEffect(() => {
    if (isMobile) return;

    const handleMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, [isMobile, x, y]);

  if (isMobile) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[99999] h-7 w-7 rounded-full bg-accent/80 border border-accent/30"
      style={{
        x: xSpring,
        y: ySpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}

export default Cursor;