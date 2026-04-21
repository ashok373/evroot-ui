"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BentoGrid, BentoCard } from "../ui/bento-grid";
import { Wheat, Dumbbell, Scale, Timer } from "lucide-react";

const features = [
  {
    icon: <Wheat className="w-6 h-6" />,
    title: "Gluten Free",
    description: "Naturally gluten-free, perfect for those with dietary restrictions or celiac disease.",
  },
  {
    icon: <Dumbbell className="w-6 h-6" />,
    title: "High Protein",
    description: "Packed with plant-based protein to fuel your active lifestyle and muscle recovery.",
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Low Fat",
    description: "Guilt-free snacking with minimal fat content. Perfect for weight management.",
  },
  {
    icon: <Timer className="w-6 h-6" />,
    title: "Quick Energy",
    description: "Complex carbs for sustained energy release throughout your busy day.",
  },
];

export function FeatureGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-black">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">EVRoot</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every bite is a step towards a healthier you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <BentoGrid>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <BentoCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
