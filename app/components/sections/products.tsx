"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedButton } from "../ui/animated-button";

const products = [
  { id: 1, name: "Classic", price: 199, weight: "100g", emoji: "🌿" },
  { id: 2, name: "Peri Peri", price: 229, weight: "100g", emoji: "🌶️" },
  { id: 3, name: "Cheese", price: 229, weight: "100g", emoji: "🧀" },
];

export function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="relative py-32 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-900/10 via-transparent to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Products</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose your flavor, embrace the crunch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm p-8">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 flex items-center justify-center text-5xl">
                    {product.emoji}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white text-center mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm text-center mb-4">
                    {product.weight}
                  </p>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 text-center mb-6">
                    ₹{product.price}
                  </p>
                  
                  <AnimatedButton className="w-full" variant="primary">
                    Add to Cart
                  </AnimatedButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
