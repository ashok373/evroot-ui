"use client";

import { motion } from "framer-motion";
import { Spotlight } from "../ui/spotlight";
import { AnimatedButton } from "../ui/animated-button";
import { MovingBorder } from "../ui/moving-border";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: "easeOut" as const,
    },
  }),
};

const floatAnimation = {
  y: [-10, 10, -10],
  rotateY: [0, 5, 0, -5, 0],
  transition: {
    y: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
    rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
  },
};

export function Hero() {
  const headingWords = ["Java", "the", "Natural", "Way."];

  return (
    <Spotlight className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-4"
            >
              Premium Healthy
            </motion.p>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {headingWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  className={`inline-block mr-4 ${word === "Natural" ? "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500" : ""}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-400 text-lg md:text-xl mb-8 max-w-md mx-auto lg:mx-0"
            >
              100% Natural, guilt-free Java. Crafted for the health-conscious generation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <AnimatedButton href="#products" variant="primary">
                Shop Now
              </AnimatedButton>
              <AnimatedButton href="#story" variant="secondary">
                Our Story
              </AnimatedButton>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center"
          >
            <motion.div animate={floatAnimation} className="relative">
              <MovingBorder
                duration={3000}
                borderRadius="1.5rem"
                containerClassName="w-72 h-96"
              >
                <div className="flex flex-col items-center justify-center h-full p-8 bg-gradient-to-br from-gray-900 to-black">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-500/30 to-emerald-500/10 flex items-center justify-center mb-6">
                    <span className="text-5xl">🌿</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Classic</h3>
                  <p className="text-gray-400 text-sm mb-4">100g</p>
                  <p className="text-green-400 font-bold text-2xl">₹199</p>
                </div>
              </MovingBorder>
              
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </Spotlight>
  );
}
