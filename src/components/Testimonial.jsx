import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  const API_URL = "http://localhost:8080";

  // Fetch testimonials from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(`${API_URL}/api/reviews`);
        const data = await res.json();
        if (data.success) {
          setTestimonials(data.reviews);
        }
      } catch (err) {
        console.error("Failed to fetch testimonials:", err);
      }
    };
    fetchTestimonials();
  }, []);

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

              <div className="flex justify-center mb-4">
                <span className="text-yellow-500 text-2xl">
                  {"⭐".repeat(testimonials[index]?.rating || 5)}
                </span>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {testimonials[index]?.review}
              </p>

              <div className="flex flex-col items-center gap-1">
                {testimonials[index]?.avatar && (
                  <img 
                    src={testimonials[index].avatar} 
                    alt={testimonials[index].name}
                    className="w-16 h-16 rounded-full object-cover mb-2"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                )}
                <h4 className="font-bold text-lg">
                  {testimonials[index]?.name}
                </h4>
                <p className="text-sm text-purple-600">
                  {testimonials[index]?.position} at {testimonials[index]?.company}
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
