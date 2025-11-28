import React from "react";
import { motion } from "framer-motion";

const blogs = [
  {
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    date: "22 Oct 2020",
    comments: "246 comments",
    title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
  },
  {
    image: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4",
    date: "22 Oct 2020",
    comments: "246 comments",
    title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
  },
  {
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    date: "22 Oct 2020",
    comments: "246 comments",
    title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
  },
  {
    image: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
    date: "22 Oct 2020",
    comments: "246 comments",
    title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
  },
];

const services = [
  {
    title: "User Experience (UX)",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.",
  },
  {
    title: "User Interface (UI)",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.",
  },
  {
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.",
  },
];

const BlogAndServices = () => {
  return (
    <section className="bg-white py-28 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ================= BLOG ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {blogs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={item.image}
                alt="blog"
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <p className="text-xs text-gray-400 mb-2">
                  {item.date} / {item.comments}
                </p>
                <h4 className="text-sm font-semibold leading-snug">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= WHAT I DO ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-start bg-gray-100 rounded-3xl p-14">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">What I do?</h3>

            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla purus arcu, varius eget velit non, laoreet imperdiet orci.
              Mauris ultrices eget lorem ac vestibulum.
            </p>

            <p className="text-gray-600 mb-8">
              Suspendis imperdiet, lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nulla purus arcu, varius eget velit non.
            </p>

            <button className="bg-purple-600 hover:bg-purple-700 transition text-white px-7 py-3 rounded-lg font-semibold shadow">
              Say Hello
            </button>
          </motion.div>

          {/* Right Side Services */}
          <div className="space-y-5">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                <h4 className="font-semibold mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default BlogAndServices;
