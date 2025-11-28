import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const featuredData = [
  {
    title: "Top Web Developer 2024",
    source: "Tech Daily",
    image: "https://imgs.search.brave.com/pr9ZJFMn5pWkfbKbjtceXnU8OUcG1Xn-OPpO3pw54Ek/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzkyLzcxLzE0/LzM2MF9GXzg5Mjcx/MTQwM19kZmhKWXln/UUlBdG5XOWJHSHdp/a0xMZ3N6VkwyVDVW/Ui5qcGc",
  },
  {
    title: "National Hackathon Winner",
    source: "Startup India",
    image: "https://imgs.search.brave.com/pr9ZJFMn5pWkfbKbjtceXnU8OUcG1Xn-OPpO3pw54Ek/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzkyLzcxLzE0/LzM2MF9GXzg5Mjcx/MTQwM19kZmhKWXln/UUlBdG5XOWJHSHdp/a0xMZ3N6VkwyVDVW/Ui5qcGc",
  },
  {
    title: "Featured Portfolio Design",
    source: "Behance",
    image: "https://imgs.search.brave.com/pr9ZJFMn5pWkfbKbjtceXnU8OUcG1Xn-OPpO3pw54Ek/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzkyLzcxLzE0/LzM2MF9GXzg5Mjcx/MTQwM19kZmhKWXln/UUlBdG5XOWJHSHdp/a0xMZ3N6VkwyVDVW/Ui5qcGc",
  },
  // {
  //   title: "Best UI Case Study",
  //   source: "Dribbble",
  //   image: "https://images.unsplash.com/photo-1507371341162-763b5e419408",
  // },
  // {
  //   title: "Startup Recognition",
  //   source: "Forbes India",
  //   image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
  // },
];

const FeaturedIn = () => {
  const controls = useAnimation();
  const sliderRef = useRef(null);
  const speed = 20;


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
            {[...featuredData, ...featuredData].map((item, index) => (
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
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 duration-700"
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
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4">
                    Featured on <span className="font-semibold">{item.source}</span>
                  </p>

                  <button className="
                    text-sm font-semibold text-purple-600
                    flex items-center gap-2
                    hover:gap-3 transition-all
                  ">
                    View Article <FaExternalLinkAlt />
                  </button>
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
