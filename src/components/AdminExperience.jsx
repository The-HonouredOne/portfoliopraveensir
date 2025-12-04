import { useState, useEffect } from "react";

export default function AdminExperience({ adminKey }) {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    duration: "",
    description: "",
    technologies: ""
  });

  const API_URL = "https://portfoliopra-server.onrender.com";

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const res = await fetch(`${API_URL}/api/experiences`);
      const data = await res.json();
      if (data.success) {
        setExperiences(data.experiences);
      }
    } catch (err) {
      console.error("Failed to fetch experiences:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const techArray = formData.technologies.split(",").map(tech => tech.trim()).filter(tech => tech);
      
      const res = await fetch(`${API_URL}/api/experience`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminKey
        },
        body: JSON.stringify({
          ...formData,
          technologies: techArray
        })
      });

      const data = await res.json();
      if (data.success) {
        setExperiences([data.experience, ...experiences]);
        setFormData({ company: "", position: "", duration: "", description: "", technologies: "" });
        setShowForm(false);
      }
    } catch (err) {
      console.error("Failed to add experience:", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteExperience = async (id) => {
    if (!confirm("Delete this experience?")) return;

    try {
      const res = await fetch(`${API_URL}/api/experience/${id}`, {
        method: "DELETE",
        headers: { "x-admin-key": adminKey }
      });

      const data = await res.json();
      if (data.success) {
        setExperiences(experiences.filter(exp => exp._id !== id));
      }
    } catch (err) {
      console.error("Failed to delete experience:", err);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">💼 Experience Management</h3>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          {showForm ? "Cancel" : "Add Experience"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Company"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Position"
              value={formData.position}
              onChange={(e) => setFormData({...formData, position: e.target.value})}
              className="border p-2 rounded"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Duration (e.g., Jan 2020 - Dec 2022)"
            value={formData.duration}
            onChange={(e) => setFormData({...formData, duration: e.target.value})}
            className="w-full border p-2 rounded mb-4"
            required
          />
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="w-full border p-2 rounded mb-4 h-24"
            required
          />
          <input
            type="text"
            placeholder="Technologies (comma separated)"
            value={formData.technologies}
            onChange={(e) => setFormData({...formData, technologies: e.target.value})}
            className="w-full border p-2 rounded mb-4"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Experience"}
          </button>
        </form>
      )}

      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp._id} className="border rounded-lg p-4 bg-white">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-bold text-lg">{exp.position}</h4>
                <p className="text-indigo-600 font-medium">{exp.company}</p>
                <p className="text-gray-500 text-sm">{exp.duration}</p>
              </div>
              <button
                onClick={() => deleteExperience(exp._id)}
                className="text-red-600 hover:text-red-800"
              >
                🗑️
              </button>
            </div>
            <p className="text-gray-700 mb-2">{exp.description}</p>
            {exp.technologies?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}