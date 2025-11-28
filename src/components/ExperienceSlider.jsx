import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Chief Content Creator",
    organization: "SUCCESS REDEFINING",
    duration: "May 2024 - Present",
    type: "Self Employ",
    description:
      "What were you doing at 19?Preparing for exams? Scrolling social media?Himanshu Rajpurohit was pitching his startup Nexera.Health to millions on Shark Tank India — in front of sharks like Aman Gupta, Ritesh Agarwal, Kunal Bahl Vineeta Singh, and Namita Thapar."
  },
  {
    title: "Founder",
    organization: "WIZ4U Groups",
    duration: "July 2022 - Present",
    type: "Self Employ",
    description:
      "Selected among top teams nationwide. Built a real-time web solution under 36-hour coding challenge."
  },
  {
    title: "Founder & Host",
    organization: "SUKOON show",
    duration: "Jan 2024 - Dec 2024",
    type: "Full Time",
    description:
      "The SUKOON Show is the first-of-its-kind podcast in India that brings together entrepreneurs from all industries and business sizes. Our goal is to showcase the diversity and resilience of the Indian entrepreneurial spirit, and to provide a platform for business owners to share their experiences and insights."
  },
  {
    title: "Vice ChairPerson",
    organization: "IEEE BKBIET SB",
    duration: "Sep 2023 - Jun 2024",
    type: "WorkShop",
    description:
      "Learned user-centered design, wireframing, prototyping, and Figma workflows."
  }
];

const ExperienceSlider = () => {
  const sliderRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
  }, []);

  // ✅ Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % experiences.length);
    }, 4200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    sliderRef.current.scrollTo({
      left: index * 380,
      behavior: "smooth"
    });
  }, [index]);

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            My Professional Journey
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Internships, competitions, programs and hands-on real-world learning.
          </p>
        </div>

        {/* Slider */}
        <motion.div
          ref={sliderRef}
          className="cursor-grab active:cursor-grabbing overflow-hidden"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-10"
          >
            {experiences.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="
                  min-w-[360px]
                  bg-white/80 backdrop-blur-xl
                  border border-gray-200
                  rounded-3xl
                  shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                  p-8
                  relative
                  overflow-hidden
                "
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200/10 to-pink-200/10 pointer-events-none" />

                {/* Type Tag */}
                <span className="inline-block mb-4 px-4 py-1 text-xs rounded-full bg-purple-100 text-purple-700 font-semibold tracking-wide">
                  {item.type}
                </span>

                <h3 className="text-xl font-bold mb-1">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mb-4">
                  {item.organization} • {item.duration}
                </p>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 to-pink-500" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {experiences.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                index === i
                  ? "bg-purple-600 scale-125"
                  : "bg-gray-300 hover:bg-purple-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSlider;
