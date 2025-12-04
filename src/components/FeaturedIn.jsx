import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const FeaturedIn = () => {
  const controls = useAnimation();
  const sliderRef = useRef(null);
  const speed = 20;
  const [featuredData, setFeaturedData] = useState([]);

  const API_URL = "https://portfoliopra-server.onrender.com";

  // Fetch featured data from API
  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await fetch(`${API_URL}/api/featured`);
        const data = await res.json();
        if (data.success) {
          setFeaturedData(data.featured);
        }
      } catch (err) {
        console.error("Failed to fetch featured:", err);
      }
    };
    fetchFeatured();
  }, []);


  useEffect(() => {
    controls.start({
      x: "-50%",
      transition: {
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

       
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">Featured In</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            My work, certifications, case studies and achievements featured across platforms.
          </p>
        </div>

       
        <motion.div
          ref={sliderRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() =>
            controls.start({
              x: "-50%",
              transition: {
                duration: speed,
                repeat: Infinity,
                ease: "linear",
              },
            })
          }
        >
          {/* TRACK */}
          <motion.div
            drag="x"
            dragConstraints={{ left: -2000, right: 0 }}
            animate={controls}
            className="flex gap-8 w-max"
          >
            {featuredData.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="
                  min-w-[340px]
                  bg-gradient-to-br from-gray-50 to-white
                  rounded-2xl border shadow-md
                  hover:shadow-xl transition
                  overflow-hidden group
                "
              >
              
                <div className="h-52 relative overflow-hidden">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-full h-full object-contain bg-white p-4 group-hover:scale-110 duration-700"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='100' y='100' text-anchor='middle' dy='.3em' fill='%236b7280'%3ENo Logo%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <FaExternalLinkAlt className="text-white text-xl" />
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-semibold tracking-wider text-purple-600 uppercase">
                    Media Feature
                  </span>

                  <h3 className="font-bold text-lg mt-2 mb-1">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4">
                    Featured Company/Organization
                  </p>

                  {item.url && (
                    <a 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-sm font-semibold text-purple-600
                        flex items-center gap-2
                        hover:gap-3 transition-all
                      "
                    >
                      Visit Website <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </motion.div>
            ))} 
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedIn;
