import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactAndFooter = () => {
  return (
    <section className="bg-[#0b1220] pt-32">

      {/* CONTACT CARD */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl p-12 grid md:grid-cols-2 gap-14">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Let's Discuss your Project</h2>
            <p className="text-gray-500 mb-8">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>

            <div className="space-y-5 text-sm">
              <div className="flex items-center gap-4">
                <span className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <p className="font-medium">Address:</p>
                  <p className="text-gray-500">New Mexico 31134</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                  <FaEnvelope />
                </span>
                <div>
                  <p className="font-medium">My Email:</p>
                  <p className="text-gray-500">mymail@mail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                  <FaPhoneAlt />
                </span>
                <div>
                  <p className="font-medium">Call me now:</p>
                  <p className="text-gray-500">00-1234-0000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form className="space-y-6">
            <input className="w-full border-b py-2 outline-none" placeholder="Name*" />
            <input className="w-full border-b py-2 outline-none" placeholder="Email*" />
            <input className="w-full border-b py-2 outline-none" placeholder="Location*" />

            <div className="grid grid-cols-2 gap-6">
              <input className="border-b py-2 outline-none" placeholder="Budget*" />
              <input className="border-b py-2 outline-none" placeholder="Subject*" />
            </div>

            <textarea className="w-full border-b py-2 outline-none" placeholder="Message*" rows="3" />

            <button className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
              Submit →
            </button>
          </form>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-gray-700 text-gray-300 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-6 gap-4">
          <div className="flex items-center gap-2 font-semibold text-white">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              B
            </div>
            Brooklyn
          </div>

          <ul className="flex gap-6 text-xs">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Process</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>

          <p className="text-xs">Copyright © 2022 Picto.</p>
        </div>
      </footer>

    </section>
  );
};

export default ContactAndFooter;
