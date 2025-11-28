import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaMicrophoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const speakerData = [
  {
    title: "Web Development Seminar",
    place: "JECRC University",
    location: "Jaipur, India",
    image: "https://imgs.search.brave.com/pr9ZJFMn5pWkfbKbjtceXnU8OUcG1Xn-OPpO3pw54Ek/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzkyLzcxLzE0/LzM2MF9GXzg5Mjcx/MTQwM19kZmhKWXln/UUlBdG5XOWJHSHdp/a0xMZ3N6VkwyVDVW/Ui5qcGc",
    year: "2024",
  },
  {
    title: "Digital Marketing Workshop",
    place: "Startup India Program",
    location: "Delhi, India",
    image: "https://imgs.search.brave.com/pr9ZJFMn5pWkfbKbjtceXnU8OUcG1Xn-OPpO3pw54Ek/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzkyLzcxLzE0/LzM2MF9GXzg5Mjcx/MTQwM19kZmhKWXln/UUlBdG5XOWJHSHdp/a0xMZ3N6VkwyVDVW/Ui5qcGc",
    year: "2023",
  },
  {
    title: "UI/UX Guest Lecture",
    place: "Poornima College",
    location: "Jaipur, India",
    image: "https://imgs.search.brave.com/pr9ZJFMn5pWkfbKbjtceXnU8OUcG1Xn-OPpO3pw54Ek/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzkyLzcxLzE0/LzM2MF9GXzg5Mjcx/MTQwM19kZmhKWXln/UUlBdG5XOWJHSHdp/a0xMZ3N6VkwyVDVW/Ui5qcGc",
    year: "2023",
  },
  // {
  //   title: "National Tech Conference",
  //   place: "Tech Expo",
  //   location: "Bangalore, India",
  //   image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  //   year: "2022",
  // },
  // {
  //   title: "Startup Mentorship Session",
  //   place: "Innovation Hub",
  //   location: "Mumbai, India",
  //   image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
  //   year: "2022",
  // },
];

const SpeakerAt = () => {
  const controls = useAnimation();
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    setWidth(track.scrollWidth / 2);
  }, []);

  useEffect(() => {
    controls.start({
      x: -width,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [width, controls]);

  return (
    <section className="py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

     
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">Speaker At</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Sessions, seminars, workshops, and conferences where I shared my knowledge
            and industry experience.
          </p>
        </div>

        
        <motion.div
          ref={sliderRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() =>
            controls.start({
              x: -width,
              transition: {
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              },
            })
          }
        >
          
          <motion.div
            ref={trackRef}
            className="flex gap-8 w-max will-change-transform"
            animate={controls}
            drag="x"
            dragConstraints={{ left: -width, right: 0 }}
            dragElastic={0.05}
            style={{ backfaceVisibility: "hidden" }}
          >
            {[...speakerData, ...speakerData].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="
                  min-w-[340px]
                  bg-white rounded-2xl shadow-md border
                  hover:shadow-xl transition
                  overflow-hidden group
                "
              >
              
                <div className="h-52 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.year}
                  </div>
                </div>

                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-purple-600 text-xs font-bold mb-2">
                    <FaMicrophoneAlt /> Speaker Session
                  </div>

                  <h3 className="font-bold text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-2">
                    {item.place}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-5">
                    <FaMapMarkerAlt /> {item.location}
                  </div>

                  <button className="
                    text-sm font-semibold text-purple-600
                    flex items-center gap-2
                    hover:gap-3 transition-all
                  ">
                    View Highlights →
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

export default SpeakerAt;
