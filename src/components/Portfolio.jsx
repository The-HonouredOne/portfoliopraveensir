import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  { image: "https://images.unsplash.com/photo-1545235617-9465d2a55698", title: "Product Admin Dashboard" },
  { image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", title: "Product Admin Dashboard" },
  { image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", title: "Product Admin Dashboard" },
  { image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b", title: "Product Admin Dashboard" },
  { image: "https://images.unsplash.com/photo-1507371341162-763b5e419408", title: "Product Admin Dashboard" },
  { image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7", title: "Product Admin Dashboard" },
];

const Portfolio = () => {
  return (
    <section className="py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* ===== HEADING ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Portfolio
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration.
          </p>
        </motion.div>

        {/* ===== GRID ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group border border-gray-100"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt="project"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <span className="text-xs tracking-wide uppercase text-purple-600 font-semibold">
                  UI UX Design
                </span>

                <h3 className="font-bold text-lg mt-2 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Virmarus eleifend convallis ante, non pharetra libero
                  molestie laoreet. Donec id imperdiet lacus.
                </p>

                <button className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-purple-600 hover:border-purple-600 hover:text-white transition">
                  Case Study
                  <FaArrowRight className="group-hover:translate-x-1 transition" />
                </button>
              </div>
            </motion.div>
          ))}

        </div>

        {/* ===== MORE BUTTON ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <button className="bg-purple-600 hover:bg-purple-700 transition text-white px-10 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg">
            More Project
          </button>
        </motion.div>

      </div>

      {/* ===== PREMIUM CTA SECTION ===== */}
      <div className="mt-28 bg-gradient-to-r from-black via-gray-900 to-black py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Do You Have Any Project Ideas?
          </h2>

          <h3 className="text-purple-400 text-xl mb-4">
            Let’s Discuss Your Project
          </h3>

          <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration.
          </p>

          <button className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 transition text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-purple-600/40">
            Let’s Work Together
            <FaArrowRight />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
