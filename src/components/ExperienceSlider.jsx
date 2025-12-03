import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Chief Content Creator",
    organization: "SUCCESS REDEFINING",
    duration: "May 2024 - Present",
    description:
      "What were you doing at 19? Preparing for exams? Scrolling social media? Himanshu Rajpurohit was pitching his startup Nexera.Health to millions on Shark Tank India."
  },
  {
    title: "Founder",
    organization: "WIZ4U Groups",
    duration: "July 2022 - Present",
    description:
      "Selected among top teams nationwide. Built a real-time web solution under 36-hour coding challenge."
  },
  {
    title: "Founder & Host",
    organization: "SUKOON show",
    duration: "Jan 2024 - Dec 2024",
    description:
      "The SUKOON Show is the first-of-its-kind podcast in India that brings together entrepreneurs from all industries."
  },
  {
    title: "Vice ChairPerson",
    organization: "IEEE BKBIET SB",
    duration: "Sep 2023 - Jun 2024",
    description:
      "Learned user-centered design, wireframing, prototyping, and Figma workflows."
  },
  {
    title: "Founder",
    organization: "Carrer Catalyst Cell (CCC)",
    duration: "Dec 2023 - Feb 2024",
    description: "Education Administration Programs"
  },
  {
    title: "President",
    organization: "E-Cell BKBIET",
    duration: "Nov 2022 - Dec 2023",
    description:
      "Visionary leader driving innovation at the forefront of college entrepreneurship."
  },
  {
    title: "Incubatee ",
    organization: "PIEDS : Pilani Innovation & Entrepreneurship Development Society, BITS Pilani",
    duration: "Sep 2022 - Sep 2023",
    description:
      "Crafted by BITS Pilani, Pilani Campus in support with various government department initiatives, BITS alumni support & individual contributions, with an aim and object of fostering entrepreneurship spirit, facilitating innovation, nurturing technology-based startups."
  },
  {
    title: "Campaign Consultant",
    organization: "Google AdSense",
    duration: "May 2023 - Jul 2023",
    description:
      "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique."
  },
  {
    title: "Agency Partnership Executive",
    organization: "Socialveins",
    duration: "Nov 2022",
    description:
      "Socialveins.ai is an AI-powered platform for influencer marketing, connecting over 1.5 million social media creators with 300+ brands."
  },
  {
    title: "Marketing Team Member",
    organization: "Viral Fission",
    duration: "Jun 2022 - Sep 2022",
    description:
      "Viral Fission, incorporated in 2019, is India’s first-ever youth network & community platform which digitises campuses and youth communities across India."
  },
  {
    title: "Freelance",
    organization: "SuprFam",
    duration: "Jul 2021 - Jun 2022",
    description:
      "As an Influencer marketing aggregator platform, we empower micro agencies and Individuals with a SaaS tool, that will help brands execute and track the progress of the campaigns effortlessly."
  },
];

const ExperienceSlider = () => {
  const sliderRef = useRef(null);
  const cardRef = useRef(null);

  const [cardWidth, setCardWidth] = useState(0);
  const [index, setIndex] = useState(0);

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
  }, []);

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
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                  {item.organization} • {item.duration}
                </p>

                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                  {item.description}
                </p>

                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 to-pink-500" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Navigation Dots */}
        {/* <div className="flex justify-center gap-3 mt-12">
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
        </div> */}

      </div>
    </section>
  );
};

export default ExperienceSlider;
