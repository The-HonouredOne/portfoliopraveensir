import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Frontend Developer Intern",
    organization: "TechStartup Pvt. Ltd.",
    duration: "Jan 2024 – Apr 2024",
    type: "Internship",
    description:
      "Worked on building responsive UI using React and Tailwind CSS. Integrated APIs and optimized website performance by 30%."
  },
  {
    title: "National Hackathon Finalist",
    organization: "Smart India Hackathon",
    duration: "Aug 2023",
    type: "Competition",
    description:
      "Selected among top teams nationwide. Built a real-time problem-solving web app under 36-hour coding challenge."
  },
  {
    title: "Full Stack Web Development Program",
    organization: "Coding Bootcamp",
    duration: "Mar 2023 – Jul 2023",
    type: "Program",
    description:
      "Completed an intensive MERN stack training program with real-world projects and deployment experience."
  },
  {
    title: "UI/UX Design Workshop",
    organization: "Design Community",
    duration: "Dec 2022",
    type: "Workshop",
    description:
      "Learned user-centered design principles, prototyping, wireframing, and Figma workflows."
  }
];

const Experience = () => {
  return (
    <section className="py-28 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-4">
            My Experience
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A journey through internships, programs, competitions, and hands-on learning that shaped my skills.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-purple-500 pl-10 space-y-14">

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white p-6 rounded-2xl shadow-lg"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[42px] top-6 w-6 h-6 bg-purple-600 rounded-full border-4 border-white"></span>

              {/* Type Badge */}
              <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-600 font-semibold">
                {item.type}
              </span>

              <h3 className="text-xl font-semibold mb-1">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mb-2">
                {item.organization} • {item.duration}
              </p>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;
