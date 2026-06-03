"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function MarginNote({
  children,
  position = "right",
  rotate = 0,
}: {
  children: React.ReactNode;
  position?: "left" | "right";
  rotate?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const positionClasses =
    position === "right"
      ? "left-full ml-8 text-left"
      : "right-full mr-8 text-right";

  return (
    <motion.aside
      ref={ref}
      className={`hidden xl:block absolute top-0 w-40 font-handwriting text-zinc-400 text-base leading-snug pointer-events-none ${positionClasses}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      initial={{ opacity: 0, x: position === "right" ? -10 : 10 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: position === "right" ? -10 : 10 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      aria-hidden="true"
    >
      {children}
    </motion.aside>
  );
}
