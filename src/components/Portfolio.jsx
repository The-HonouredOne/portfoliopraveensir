import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const projects = [
    {
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698",
        title: "Product Admin Dashboard",
    },
    {
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        title: "Product Admin Dashboard",
    },
    {
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        title: "Product Admin Dashboard",
    },
    {
        image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
        title: "Product Admin Dashboard",
    },
    {
        image: "https://images.unsplash.com/photo-1507371341162-763b5e419408",
        title: "Product Admin Dashboard",
    },
    {
        image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        title: "Product Admin Dashboard",
    },
];

const Portfolio = () => {
    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto">

                {/* ===== HEADING ===== */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Portfolio
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration.
                    </p>
                </motion.div>

                {/* ===== GRID ===== */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group"
                        >
                            {/* Image */}
                            <div className="h-52 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt="project"
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <span className="text-sm text-purple-600 font-semibold">
                                    UI UX Design
                                </span>

                                <h3 className="font-bold text-lg mt-2 mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-600 mb-5">
                                    Virmarus eleifend convallis ante, non pharetra libero
                                    molestie laoreet. Donec id imperdiet lacus.
                                </p>

                                <button className="flex items-center gap-2 text-sm font-semibold px-5 py-2 border rounded-lg hover:bg-purple-600 hover:text-white transition">
                                    Case Study <FaArrowRight />
                                </button>
                            </div>
                        </motion.div>
                    ))}

                </div>

                {/* ===== MORE BUTTON ===== */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-14"
                >
                    <button className="bg-purple-600 hover:bg-purple-700 transition text-white px-8 py-3 rounded-lg font-semibold">
                        More Project
                    </button>
                </motion.div>

            </div>
            <div className="bg-black ">
                <div className="text-center text-white text-2xl font-semibold ">
                    <p className="text-white py-3">Do you have any Project ideas ?</p>
                    <p >Let's discuss your Project</p>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
