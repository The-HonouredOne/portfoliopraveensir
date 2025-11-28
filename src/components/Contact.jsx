import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-28">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s Work Together
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Have a project in mind, want to collaborate, or just want to say hello?
            Drop a message — I’ll get back to you soon.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT – INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Info Card */}
            <div className="bg-white rounded-2xl shadow-md border p-6 flex items-start gap-4">
              <div className="bg-purple-600 text-white p-3 rounded-xl">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-gray-500 text-sm mt-1">+91 98765 43210</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md border p-6 flex items-start gap-4">
              <div className="bg-purple-600 text-white p-3 rounded-xl">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-gray-500 text-sm mt-1">contact@yourdomain.com</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md border p-6 flex items-start gap-4">
              <div className="bg-purple-600 text-white p-3 rounded-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-gray-500 text-sm mt-1">Jaipur, Rajasthan, India</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT – FORM */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              bg-white rounded-3xl shadow-lg border
              p-8 md:p-10 space-y-6
            "
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:border-purple-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:border-purple-600"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:border-purple-600"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:border-purple-600 resize-none"
            ></textarea>

            <button
              type="submit"
              className="
                w-full bg-purple-600 hover:bg-purple-700 transition
                text-white py-3 rounded-xl font-semibold
                flex items-center justify-center gap-2
              "
            >
              Send Message <FaPaperPlane />
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
