"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
      {children}
    </div>
  );
}

interface BentoCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

export function BentoCard({ title, description, icon, className = "" }: BentoCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 backdrop-blur-sm ${className}`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/10" />
        <div className="absolute inset-[1px] rounded-2xl bg-black/80" />
      </div>
      <div className="relative z-10">
        <div className="mb-4 inline-flex rounded-lg bg-green-500/10 p-3 text-green-400">
          {icon}
        </div>
        <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-green-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
