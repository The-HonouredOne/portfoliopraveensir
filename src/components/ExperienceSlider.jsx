import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const ExperienceSlider = () => {
  const sliderRef = useRef(null);
  const cardRef = useRef(null);

  const [experiences, setExperiences] = useState([]);
  const [cardWidth, setCardWidth] = useState(0);
  const [index, setIndex] = useState(0);

  const API_URL = "http://localhost:8080";

  // Fetch experiences from API
  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        console.log('Fetching from:', `${API_URL}/api/experiences`);
        const res = await fetch(`${API_URL}/api/experiences`);
        console.log('Response status:', res.status);
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        console.log('Response data:', data);
        
        if (data.success) {
          setExperiences(data.experiences);
        }
      } catch (err) {
        console.error("Failed to fetch experiences:", err);
      }
    };
    fetchExperiences();
  }, []);

  // ✅ Measure card width dynamically
  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth + 40); // 40 = gap-10
    }
  }, []);

  // ✅ Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % experiences.length);
    }, 4200);

    return () => clearInterval(interval);
  }, [experiences.length]);

  // ✅ Scroll on index change
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth"
      });
    }
  }, [index, cardWidth]);

  // ✅ Mouse wheel → horizontal scroll
  const handleWheel = (e) => {
    if (sliderRef.current) {
      e.preventDefault();
      sliderRef.current.scrollLeft += e.deltaY;
    }
  };
  

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">
            Experience
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            My Professional Journey
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto px-4">
            Internships, competitions, programs and hands-on learning.
          </p>
        </div>

        {/* Slider */}
        <motion.div
          ref={sliderRef}
          onWheel={handleWheel}
          className="cursor-grab active:cursor-grabbing overflow-x-auto scroll-smooth hide-scrollbar"
        >
          <motion.div
            drag="x"
            className="flex gap-4 sm:gap-6 lg:gap-10 w-max"
          >
            {experiences.map((item, i) => (
              <motion.div
                ref={i === 0 ? cardRef : null}
                key={i}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="
                  min-w-[280px] sm:min-w-[300px] lg:min-w-[320px]
                  w-[280px] sm:w-[300px] lg:w-[320px]
                  bg-white/80 backdrop-blur-xl
                  border border-gray-200
                  rounded-2xl sm:rounded-3xl
                  shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                  p-4 sm:p-6 lg:p-8
                  relative
                  overflow-hidden
                  flex-shrink-0
                "
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200/10 to-pink-200/10" />

                <h3 className="text-lg sm:text-xl font-bold mb-1">
                  {item.position}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                  {item.company} • {item.duration}
                </p>

                {item.technologies?.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                  {item.description}
                </p>

                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 to-pink-500" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default ExperienceSlider;