"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "100% Natural",
    description: "Sourced from the pristine waters of Bihar, our makhana is pure and unprocessed.",
    direction: "left",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Heart Healthy",
    description: "Low in calories, high in nutrients. The perfect snack for your wellness journey.",
    direction: "right",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Artisan Crafted",
    description: "Roasted to perfection with premium spices for an unforgettable taste experience.",
    direction: "left",
  },
];

function FeatureCard({
  icon,
  title,
  description,
  direction,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  direction: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.25, 0.4, 0.25, 1] }}
      className={`flex items-center gap-8 ${direction === "right" ? "flex-row-reverse text-right" : ""}`}
    >
      <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 max-w-md">{description}</p>
      </div>
    </motion.div>
  );
}

export function ProductStory() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="story" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/10 via-transparent to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Story</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From farm to snack, we bring you the finest quality makhana with a commitment to health and taste.
          </p>
        </motion.div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
