"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function VisualShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={containerRef} className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent" />
      
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div style={{ opacity }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pure <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Goodness</span>
          </h2>
        </motion.div>

        <motion.div
          style={{ y, scale }}
          className="relative aspect-video rounded-3xl overflow-hidden border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 to-emerald-900/20 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white/60 text-sm">Video Showcase</p>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="mt-16 grid grid-cols-3 gap-8 text-center"
        >
          {[
            { value: "10K+", label: "Happy Customers" },
            { value: "100%", label: "Natural" },
            { value: "5★", label: "Rated" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
