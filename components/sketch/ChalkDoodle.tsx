"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type DoodleType =
  | "waveform" // ondulating audio wave
  | "star" // sketchy 5-point star
  | "asterisk" // 6-point asterisk
  | "musical-note" // small eighth note
  | "headphones" // tiny headphones outline
  | "arrow-curve" // curved arrow (down-right)
  | "scribble" // tight zigzag squiggle
  | "divider" // longer chalk squiggle for between sections
  | "checkmark" // hand-drawn check
  | "x-mark"; // hand-drawn x

const PATHS: Record<
  DoodleType,
  { d: string | string[]; w: number; h: number; viewBox: string }
> = {
  waveform: {
    d: "M 2 10 Q 6 3 10 10 T 18 10 T 26 10 T 34 10 T 42 10 T 50 10 T 58 10",
    w: 60,
    h: 20,
    viewBox: "0 0 60 20",
  },
  star: {
    d: "M 12 2 L 14.5 9 L 22 9 L 16 13.5 L 18 21 L 12 16.5 L 6 21 L 8 13.5 L 2 9 L 9.5 9 Z",
    w: 24,
    h: 24,
    viewBox: "0 0 24 24",
  },
  asterisk: {
    d: ["M 8 2 L 8 14", "M 2 8 L 14 8", "M 4 4 L 12 12", "M 12 4 L 4 12"],
    w: 16,
    h: 16,
    viewBox: "0 0 16 16",
  },
  "musical-note": {
    d: ["M 4 16 Q 4 12 8 12 Q 12 12 12 16 Q 12 20 8 20 Q 4 20 4 16", "M 12 16 L 12 2 L 20 4"],
    w: 24,
    h: 24,
    viewBox: "0 0 24 24",
  },
  headphones: {
    d: [
      "M 4 14 Q 4 4 14 4 Q 24 4 24 14",
      "M 2 14 L 6 14 L 6 22 L 2 22 Z",
      "M 22 14 L 26 14 L 26 22 L 22 22 Z",
    ],
    w: 28,
    h: 24,
    viewBox: "0 0 28 24",
  },
  "arrow-curve": {
    d: ["M 2 4 Q 10 6 16 14 Q 20 18 24 22", "M 18 18 L 24 22 L 22 16"],
    w: 26,
    h: 26,
    viewBox: "0 0 26 26",
  },
  scribble: {
    d: "M 2 10 L 6 4 L 10 14 L 14 4 L 18 14 L 22 4 L 26 14 L 30 10",
    w: 32,
    h: 18,
    viewBox: "0 0 32 18",
  },
  divider: {
    d: "M 4 12 Q 20 4 36 12 T 68 12 T 100 12 T 132 12 T 164 12 T 196 12 T 228 12 T 260 12",
    w: 264,
    h: 24,
    viewBox: "0 0 264 24",
  },
  checkmark: {
    d: "M 2 10 L 8 16 L 22 4",
    w: 24,
    h: 20,
    viewBox: "0 0 24 20",
  },
  "x-mark": {
    d: ["M 2 2 L 18 18", "M 18 2 L 2 18"],
    w: 20,
    h: 20,
    viewBox: "0 0 20 20",
  },
};

export function ChalkDoodle({
  type,
  className = "",
  color = "#22d3ee",
  strokeWidth = 1.5,
  inline = false,
}: {
  type: DoodleType;
  className?: string;
  color?: string;
  strokeWidth?: number;
  inline?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const config = PATHS[type];
  const paths = Array.isArray(config.d) ? config.d : [config.d];

  return (
    <span
      ref={ref}
      className={`pointer-events-none ${inline ? "inline-flex items-center" : "block"} ${className}`}
      aria-hidden="true"
    >
      <svg
        width={config.w}
        height={config.h}
        viewBox={config.viewBox}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              inView
                ? { pathLength: 1, opacity: 1 }
                : { pathLength: 0, opacity: 0 }
            }
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: "easeOut",
            }}
          />
        ))}
      </svg>
    </span>
  );
}
