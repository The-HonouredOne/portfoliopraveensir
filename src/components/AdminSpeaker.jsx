import { useState, useEffect } from "react";

export default function AdminSpeaker({ adminKey }) {
  const [speaker, setSpeaker] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    speakerImages: [],
    topic: "",
    url: ""
  });
  const [uploading, setUploading] = useState(false);

  const API_URL = "https://portfoliopra-server.onrender.com";

  useEffect(() => {
    fetchSpeaker();
  }, []);

  const fetchSpeaker = async () => {
    try {
      const res = await fetch(`${API_URL}/api/speaker`);
      const data = await res.json();
      if (data.success) {
        setSpeaker(data.speaker);
      }
    } catch (err) {
      console.error("Failed to fetch speaker:", err);
    }
  };

  const handleSpeakerImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setUploading(true);

    try {
      const uploadPromises = files.map(async (file) => {
        const formData = new FormData();
        formData.append("image", file);

        const res = await fetch(`${API_URL}/api/upload?section=speaker`, {
          method: "POST",
          headers: { "x-admin-key": adminKey },
          body: formData
        });

        const data = await res.json();
        return data.success ? data.imageUrl : null;
      });

      const uploadedUrls = await Promise.all(uploadPromises);
      const validUrls = uploadedUrls.filter(url => url !== null);

      setFormData(prev => ({ 
        ...prev, 
        speakerImages: [...prev.speakerImages, ...validUrls] 
      }));
    } catch (err) {
      console.error("Failed to upload speaker images:", err);
      alert("Failed to upload speaker images");
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      speakerImages: prev.speakerImages.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.speakerImages.length === 0) {
      alert("Please upload at least one speaker image");
      return;
    }
    
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/speaker`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminKey
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (data.success) {
        setSpeaker([data.speaker, ...speaker]);
        setFormData({ name: "", speakerImages: [], topic: "", url: "" });
        setShowForm(false);
      } else {
        alert(data.message || "Failed to add speaker");
      }
    } catch (err) {
      console.error("Failed to add speaker:", err);
      alert("Failed to add speaker");
    } finally {
      setLoading(false);
    }
  };

  const deleteSpeaker = async (id) => {
    if (!confirm("Delete this speaker item?")) return;

    try {
      const res = await fetch(`${API_URL}/api/speaker/${id}`, {
        method: "DELETE",
        headers: { "x-admin-key": adminKey }
      });

      const data = await res.json();
      if (data.success) {
        setSpeaker(speaker.filter(item => item._id !== id));
      }
    } catch (err) {
      console.error("Failed to delete speaker:", err);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">🎤 Speaker At Management</h3>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          {showForm ? "Cancel" : "Add Speaker Event"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Event/Organization Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Speech Topic"
              value={formData.topic}
              onChange={(e) => setFormData({...formData, topic: e.target.value})}
              className="border p-2 rounded"
              required
            />
            <input
              type="url"
              placeholder="Website URL (optional)"
              value={formData.url}
              onChange={(e) => setFormData({...formData, url: e.target.value})}
              className="border p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Upload Speaker Images (Multiple)</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleSpeakerImageUpload}
              className="w-full border p-2 rounded"
            />
            {uploading && <p className="text-sm text-blue-600 mt-1">Uploading...</p>}
            {formData.speakerImages.length > 0 && (
              <div className="mt-2 grid grid-cols-3 gap-2">
                {formData.speakerImages.map((img, idx) => (
                  <div key={idx} className="relative">
                    <img src={img} alt={`Preview ${idx + 1}`} className="h-24 w-full object-cover bg-gray-100 rounded" />
                    <button
                      type="button"
                      onClick={() => removeImage(idx)}
                      className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 text-xs"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Speaker Event"}
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {speaker.map((item) => (
          <div key={item._id} className="border rounded-lg p-4 bg-white">
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-bold text-lg">{item.name}</h4>
              <button
                onClick={() => deleteSpeaker(item._id)}
                className="text-red-600 hover:text-red-800"
              >
                🗑️
              </button>
            </div>
            <div className="mb-3">
              <img 
                src={item.speakerImages?.[0]} 
                alt={item.name}
                className="w-full h-32 object-cover bg-gray-50 rounded"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23f3f4f6'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='%236b7280'%3ENo Image%3C/text%3E%3C/svg%3E";
                }}
              />
              {item.speakerImages?.length > 1 && (
                <p className="text-xs text-gray-500 mt-1">+{item.speakerImages.length - 1} more images</p>
              )}
            </div>
            {item.topic && (
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-semibold">Topic:</span> {item.topic}
              </p>
            )}
            {item.url && (
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Visit Website →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}