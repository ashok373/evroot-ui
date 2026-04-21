"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary";
}

export function AnimatedButton({
  children,
  className = "",
  onClick,
  href,
  variant = "primary",
}: AnimatedButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-full overflow-hidden transition-colors";
  const variants = {
    primary:
      "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-400 hover:to-emerald-500",
    secondary:
      "border border-white/20 text-white hover:bg-white/5",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0"
          whileHover={{ opacity: 0.5 }}
        />
      )}
    </Component>
  );
}
