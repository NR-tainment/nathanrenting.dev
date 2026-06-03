"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";

export function SketchBox({
  children,
  className = "",
  strokeColor = "#22d3ee",
  strokeWidth = 1.5,
  roughness = 1.6,
  bowing = 1.5,
  seed = 0,
}: {
  children: React.ReactNode;
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
  roughness?: number;
  bowing?: number;
  seed?: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const svg = svgRef.current;
    if (!wrap || !svg) return;

    const draw = () => {
      const { width, height } = wrap.getBoundingClientRect();
      if (width === 0 || height === 0) return;

      svg.setAttribute("width", String(width));
      svg.setAttribute("height", String(height));
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
      svg.innerHTML = "";

      const rc = rough.svg(svg);
      const node = rc.rectangle(4, 4, width - 8, height - 8, {
        stroke: strokeColor,
        strokeWidth,
        roughness,
        bowing,
        seed: seed || 1,
      });
      svg.appendChild(node);
    };

    draw();

    const ro = new ResizeObserver(draw);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [strokeColor, strokeWidth, roughness, bowing, seed]);

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      <svg
        ref={svgRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative">{children}</div>
    </div>
  );
}
