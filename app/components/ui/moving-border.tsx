"use client";

import { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";

interface MovingBorderProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderRadius?: string;
}

export function MovingBorder({
  children,
  duration = 2000,
  className = "",
  containerClassName = "",
  borderRadius = "1rem",
}: MovingBorderProps) {
  const pathRef = useRef<SVGRectElement>(null);
  const progressRef = useRef(0);

  useAnimationFrame((time) => {
    progressRef.current = (time / duration) % 1;
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      const point = pathRef.current.getPointAtLength(progressRef.current * length);
      pathRef.current.style.setProperty("--x", `${point.x}px`);
      pathRef.current.style.setProperty("--y", `${point.y}px`);
    }
  });

  return (
    <div
      className={`relative p-[2px] overflow-hidden ${containerClassName}`}
      style={{ borderRadius }}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius }}
      >
        <svg
          className="absolute h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <rect
            ref={pathRef}
            x="0"
            y="0"
            width="100"
            height="100"
            fill="none"
            className="stroke-green-500/50"
            strokeWidth="2"
            rx="10"
          />
        </svg>
        <motion.div
          className="absolute h-20 w-20 bg-gradient-to-r from-green-500 to-emerald-500 opacity-80 blur-xl"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: duration / 1000,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: "50%",
            top: "50%",
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      </div>
      <div
        className={`relative bg-black ${className}`}
        style={{ borderRadius: `calc(${borderRadius} - 2px)` }}
      >
        {children}
      </div>
    </div>
  );
}
