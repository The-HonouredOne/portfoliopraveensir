import { useState, useEffect } from "react";

export default function AdminFeatured({ adminKey }) {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    logo: "",
    url: ""
  });
  const [logoFile, setLogoFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchFeatured();
  }, []);

  const fetchFeatured = async () => {
    try {
      const res = await fetch(`${API_URL}/api/featured`);
      const data = await res.json();
      if (data.success) {
        setFeatured(data.featured);
      }
    } catch (err) {
      console.error("Failed to fetch featured:", err);
    }
  };

  const handleLogoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLogoFile(file);
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch(`${API_URL}/api/upload?section=featured`, {
        method: "POST",
        headers: { "x-admin-key": adminKey },
        body: formData
      });

      const data = await res.json();
      if (data.success) {
        setFormData(prev => ({ ...prev, logo: data.imageUrl }));
      }
    } catch (err) {
      console.error("Failed to upload logo:", err);
      alert("Failed to upload logo");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/featured`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminKey
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (data.success) {
        setFeatured([data.featured, ...featured]);
        setFormData({ name: "", logo: "", url: "" });
        setLogoFile(null);
        setShowForm(false);
      }
    } catch (err) {
      console.error("Failed to add featured:", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteFeatured = async (id) => {
    if (!confirm("Delete this featured item?")) return;

    try {
      const res = await fetch(`${API_URL}/api/featured/${id}`, {
        method: "DELETE",
        headers: { "x-admin-key": adminKey }
      });

      const data = await res.json();
      if (data.success) {
        setFeatured(featured.filter(item => item._id !== id));
      }
    } catch (err) {
      console.error("Failed to delete featured:", err);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">🏆 Featured In Management</h3>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          {showForm ? "Cancel" : "Add Featured"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Company/Organization Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
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
            <label className="block text-sm font-medium mb-2">Upload Logo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="w-full border p-2 rounded"
              required={!formData.logo}
            />
            {uploading && <p className="text-sm text-blue-600 mt-1">Uploading...</p>}
            {formData.logo && (
              <div className="mt-2">
                <img src={formData.logo} alt="Preview" className="h-20 object-contain bg-gray-100 rounded p-2" />
              </div>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Featured"}
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featured.map((item) => (
          <div key={item._id} className="border rounded-lg p-4 bg-white">
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-bold text-lg">{item.name}</h4>
              <button
                onClick={() => deleteFeatured(item._id)}
                className="text-red-600 hover:text-red-800"
              >
                🗑️
              </button>
            </div>
            <div className="mb-3">
              <img 
                src={item.logo} 
                alt={item.name}
                className="w-full h-20 object-contain bg-gray-50 rounded"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23f3f4f6'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='%236b7280'%3ENo Image%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
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