import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Rakshit Satija",
    role: "AI Product Manager, Spyne",
    text: "It was a great time to record a podcast with Praveen for his YT channel and I must commend him and his team for their outstanding efforts. The Sukoon Show stands out for its insightful discussions and good-quality production. I wish Praveen and his team all the very best in their future endeavors and continued success with the podcast.",
  },
  {
    name: "Manish Balani",
    role: "LinkedIn Top Voice: Fintech",
    text: "Great work done by Praveen while Coordinating for and Hosting the Podcast: The Sukoon Show. I wish him and his team all the best for the success of their podcast.",
  },
  {
    name: "Ramakant Soni",
    role: "A passionate Teacher and lifelong teacher, Birla Institute of Technology and Science, Pilani",
    text: "Praveen Saini demonstrates remarkable leadership qualities coupled with strong competencies in management, public speaking, and entrepreneurship. Throughout his college tenure, he adeptly orchestrated several impactful entrepreneurship initiatives. Praveen's talent for motivating audiences through compelling speeches, combined with his commitment to cultivating entrepreneurial environments, renders him an invaluable addition to any team or institution. I wholeheartedly endorse him.",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  // ✅ Auto slide
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            What People Say
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Real stories from real people who trusted our work.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="
                bg-white/80 backdrop-blur-xl
                border rounded-3xl shadow-xl
                p-10 md:p-14
                max-w-3xl mx-auto
              "
            >
              <div className="text-6xl text-purple-200 mb-6">“</div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {testimonials[index].text}
              </p>

              <div className="flex flex-col items-center gap-1">
                <h4 className="font-bold text-lg">
                  {testimonials[index].name}
                </h4>
                <p className="text-sm text-purple-600">
                  {testimonials[index].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Decorative Glow */}
          <div className="absolute inset-0 -z-10 blur-3xl bg-gradient-to-r from-purple-200/40 to-pink-200/40 rounded-full"></div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                index === i
                  ? "bg-purple-600 scale-125"
                  : "bg-gray-300 hover:bg-purple-400"
              }`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonial;
