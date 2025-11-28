import React from "react";
import { motion } from "framer-motion";

const brands = [
  "Google",
  "Dribbble",
  "LinkedIn",
  "Amazon",
  "Medium",
  "Spotify",
  "Meta",
  "Netflix",
  "Adobe",
  "Figma",
];

const HappyClient = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Happy Clients
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Brands, startups, and creators who believed in our vision and
            partnered with us to build something impactful.
          </p>
        </motion.div>

        {/* Infinite Slider */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-16 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...brands, ...brands].map((item, i) => (
              <div
                key={i}
                className="
                  min-w-[160px] h-20 
                  flex items-center justify-center
                  bg-white border rounded-2xl
                  shadow-sm hover:shadow-md
                  transition-all duration-300
                  text-gray-500 font-semibold
                  hover:text-purple-600
                  hover:scale-105
                  cursor-pointer
                "
              >
                {item}
              </div>
            ))}
          </motion.div>

          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent"></div>
          <div className="pointer-events-none absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HappyClient;
