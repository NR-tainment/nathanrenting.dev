"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Hand-drawn arrow that animates its path drawing in when scrolled into view.
 * Default: points downward with a slight curve, ~100px tall.
 */
export function DrawnArrow({
  width = 60,
  height = 110,
  className = "",
  color = "#22d3ee",
}: {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={`flex justify-center ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 60 110"
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Main wiggly downward stem */}
        <motion.path
          d="M 30 6 Q 38 28 26 52 Q 18 72 32 92"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: inView ? 1 : 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        {/* Arrowhead — two strokes */}
        <motion.path
          d="M 20 82 L 32 94"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: inView ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 1.3 }}
        />
        <motion.path
          d="M 44 80 L 32 94"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: inView ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 1.4 }}
        />
      </svg>
    </div>
  );
}
