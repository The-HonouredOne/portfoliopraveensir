import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaMicrophoneAlt, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SpeakerAt = () => {
  const controls = useAnimation();
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [dragConstraint, setDragConstraint] = useState(0);
  const [speakerData, setSpeakerData] = useState([]);

  const API_URL = "https://portfoliopra-server.onrender.com";

  // Fetch speaker data from API
  useEffect(() => {
    const fetchSpeaker = async () => {
      try {
        const res = await fetch(`${API_URL}/api/speaker`);
        const data = await res.json();
        if (data.success) {
          setSpeakerData(data.speaker);
        }
      } catch (err) {
        console.error("Failed to fetch speaker:", err);
      }
    };
    fetchSpeaker();
  }, []);

  useEffect(() => {
    if (trackRef.current && sliderRef.current) {
      const track = trackRef.current;
      const slider = sliderRef.current;
      setWidth(track.scrollWidth / 2);
      setDragConstraint(-(track.scrollWidth - slider.offsetWidth));
    }
  }, [speakerData]);

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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
            dragConstraints={{ left: Math.min(dragConstraint, 0), right: 0 }}
            dragElastic={0.05}
            style={{ backfaceVisibility: "hidden" }}
          >
            {speakerData.map((item, index) => (
              <SpeakerCard key={index} item={item} />
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

const SpeakerCard = ({ item }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = item.speakerImages || [];

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
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
          src={images[currentImageIndex]}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 duration-700"
          onError={(e) => {
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='100' y='100' text-anchor='middle' dy='.3em' fill='%236b7280'%3ENo Image%3C/text%3E%3C/svg%3E";
          }}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              <FaChevronRight size={16} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition ${
                    idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-purple-600 text-xs font-bold mb-2">
          <FaMicrophoneAlt /> Speaker Session
        </div>

        <h3 className="font-bold text-lg mb-2">
          {item.name}
        </h3>

        <p className="text-sm text-gray-600 mb-2">
          <span className="font-semibold">Topic:</span> {item.topic}
        </p>

        <p className="text-xs text-gray-500 mb-5">
          Speaker Event/Organization
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
  );
};

export default SpeakerAt;
