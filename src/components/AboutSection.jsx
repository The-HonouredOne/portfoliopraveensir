import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbAnalyze, TbRocket } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";

const AboutSection = () => {
  return (
    <section className="bg-[#f7f7fb] py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* === TOP CARD === */}
        <div className="bg-white rounded-3xl shadow-xl p-10 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Image & Social */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 rounded-2xl p-4 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
                alt="profile"
                className="w-64 h-80 object-cover rounded-xl"
              />
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a className="w-9 h-9 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition">
                <FaFacebookF size={14} />
              </a>
              <a className="w-9 h-9 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition">
                <FaTwitter size={14} />
              </a>
              <a className="w-9 h-9 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition">
                <FaInstagram size={14} />
              </a>
              <a className="w-9 h-9 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition">
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl font-bold leading-tight">
              I’m Professional User <br /> Experience Designer
            </h2>

            <p className="text-gray-600 mt-5">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences.
            </p>

            <p className="text-gray-600 mt-4">
              I design and develop services for customers specializing creating
              stylish, modern websites.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <button className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-lg font-semibold">
                My Project
              </button>

              <button className="border border-gray-300 hover:border-purple-600 hover:text-purple-600 transition px-6 py-3 rounded-lg font-semibold">
                Download CV
              </button>
            </div>
          </div>

        </div>

        {/* === WORK PROCESS === */}
        <div className="grid md:grid-cols-2 gap-14 mt-24 items-start">

          {/* Left Text */}
          <div>
            <h3 className="text-3xl font-bold mb-5">Work Process</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci.
            </p>
            <p className="text-gray-600">
              Mollis tincidunt quisque vestibulum. Suspendis ipsum, duis et
              dolor.
            </p>
          </div>

          {/* Right Process Cards */}
          <div className="grid sm:grid-cols-2 gap-6">

            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <FiSearch />
              </div>
              <h4 className="font-semibold mb-2">1. Research</h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <TbAnalyze />
              </div>
              <h4 className="font-semibold mb-2">2. Analyze</h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <MdOutlineDesignServices />
              </div>
              <h4 className="font-semibold mb-2">3. Design</h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <TbRocket />
              </div>
              <h4 className="font-semibold mb-2">4. Launch</h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
