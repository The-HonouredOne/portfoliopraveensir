import { useState, useEffect } from "react";

export default function AdminReviews({ adminKey }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    company: "",
    review: "",
    rating: 5,
    avatar: ""
  });
  const [uploading, setUploading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await fetch(`${API_URL}/api/reviews`);
      const data = await res.json();
      if (data.success) {
        setReviews(data.reviews);
      }
    } catch (err) {
      console.error("Failed to fetch reviews:", err);
    }
  };

  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch(`${API_URL}/api/upload?section=reviews`, {
        method: "POST",
        headers: { "x-admin-key": adminKey },
        body: formData
      });

      const data = await res.json();
      if (data.success) {
        setFormData(prev => ({ ...prev, avatar: data.imageUrl }));
      }
    } catch (err) {
      console.error("Failed to upload avatar:", err);
      alert("Failed to upload avatar");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminKey
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (data.success) {
        setReviews([data.review, ...reviews]);
        setFormData({ name: "", position: "", company: "", review: "", rating: 5, avatar: "" });
        setShowForm(false);
      }
    } catch (err) {
      console.error("Failed to add review:", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteReview = async (id) => {
    if (!confirm("Delete this review?")) return;

    try {
      const res = await fetch(`${API_URL}/api/review/${id}`, {
        method: "DELETE",
        headers: { "x-admin-key": adminKey }
      });

      const data = await res.json();
      if (data.success) {
        setReviews(reviews.filter(item => item._id !== id));
      }
    } catch (err) {
      console.error("Failed to delete review:", err);
    }
  };

  const renderStars = (rating) => {
    return "⭐".repeat(rating);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">⭐ Reviews Management</h3>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          {showForm ? "Cancel" : "Add Review"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Company"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="border p-2 rounded"
              required
            />
            <select
              value={formData.rating}
              onChange={(e) => setFormData({...formData, rating: Number(e.target.value)})}
              className="border p-2 rounded"
              required
            >
              <option value={5}>5 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={2}>2 Stars</option>
              <option value={1}>1 Star</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Upload Avatar (Optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarUpload}
              className="w-full border p-2 rounded"
            />
            {uploading && <p className="text-sm text-blue-600 mt-1">Uploading...</p>}
            {formData.avatar && (
              <div className="mt-2">
                <img src={formData.avatar} alt="Avatar Preview" className="h-16 w-16 rounded-full object-cover" />
              </div>
            )}
          </div>
          <textarea
            placeholder="Review text"
            value={formData.review}
            onChange={(e) => setFormData({...formData, review: e.target.value})}
            className="w-full border p-2 rounded mb-4 h-24"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Review"}
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((item) => (
          <div key={item._id} className="border rounded-lg p-4 bg-white">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                {item.avatar ? (
                  <img 
                    src={item.avatar} 
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Ccircle cx='24' cy='24' r='24' fill='%23f3f4f6'/%3E%3Ctext x='24' y='28' text-anchor='middle' dy='.3em' fill='%236b7280'%3E👤%3C/text%3E%3C/svg%3E";
                    }}
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    👤
                  </div>
                )}
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.position} at {item.company}</p>
                </div>
              </div>
              <button
                onClick={() => deleteReview(item._id)}
                className="text-red-600 hover:text-red-800"
              >
                🗑️
              </button>
            </div>
            <div className="mb-2">
              <span className="text-yellow-500">{renderStars(item.rating)}</span>
            </div>
            <p className="text-gray-700 text-sm">{item.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}