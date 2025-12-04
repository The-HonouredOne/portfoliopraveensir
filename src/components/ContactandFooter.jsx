import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactAndFooter = () => {

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setSuccess("");
      setError("");
  
      try {
        const res = await fetch("http://localhost:8080/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
  
        const data = await res.json();
  
        if (!res.ok) throw new Error(data.message || "Something went wrong");
  
        setSuccess("✅ Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } catch (err) {
        setError(err.message || "❌ Failed to send message");
      } finally {
        setLoading(false);
      }
    };


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

              {/* <div className="flex items-center gap-4">
                <span className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                  <FaPhoneAlt />
                </span>
                <div>
                  <p className="font-medium">Call me now:</p>
                  <p className="text-gray-500">00-1234-0000</p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full mt-1 p-3 rounded-lg bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full mt-1 p-3 rounded-lg bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full mt-1 p-3 rounded-lg bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transition py-3 rounded-xl text-lg font-semibold shadow-lg disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-600 text-sm mt-2">{success}</p>
          )}

          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
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
