"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";

export function SketchUnderline({
  children,
  className = "",
  strokeColor = "#22d3ee",
  strokeWidth = 2,
  seed = 2,
}: {
  children: React.ReactNode;
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
  seed?: number;
}) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const svg = svgRef.current;
    if (!wrap || !svg) return;

    const draw = () => {
      const { width } = wrap.getBoundingClientRect();
      if (width === 0) return;

      const h = 14;
      svg.setAttribute("width", String(width));
      svg.setAttribute("height", String(h));
      svg.setAttribute("viewBox", `0 0 ${width} ${h}`);
      svg.innerHTML = "";

      const rc = rough.svg(svg);
      const line = rc.line(2, 7, width - 2, 7, {
        stroke: strokeColor,
        strokeWidth,
        roughness: 1.8,
        bowing: 2.5,
        seed: seed || 2,
      });
      svg.appendChild(line);
    };

    draw();

    const ro = new ResizeObserver(draw);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [strokeColor, strokeWidth, seed]);

  return (
    <span ref={wrapRef} className={`relative inline-block ${className}`}>
      {children}
      <svg
        ref={svgRef}
        className="absolute left-0 right-0 pointer-events-none"
        style={{ top: "100%", marginTop: "-2px" }}
        aria-hidden="true"
      />
    </span>
  );
}
