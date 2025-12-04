import { useState } from "react";

export default function Contact() {
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-pink-50 px-5 py-16">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12 bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-gray-100">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let’s Build Something ✨
          </h2>

          <p className="text-gray-600 mb-8">
            Have an idea, a project, or a collaboration in mind?  
            Drop a message and I’ll get back to you as soon as possible.
          </p>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-2">
              📧 <span className="font-medium">your@email.com</span>
            </p>
            <p className="flex items-center gap-2">
              📍 <span className="font-medium">India</span>
            </p>
            <p className="flex items-center gap-2">
              💼 <span className="font-medium">Open for Freelance & Full-time</span>
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
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
    </section>
  );
}
