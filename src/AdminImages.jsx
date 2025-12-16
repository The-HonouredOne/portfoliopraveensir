import { useEffect, useState } from "react";

export default function AdminImagesTab({ adminKey }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [caption, setCaption] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [message, setMessage] = useState("");

  const fetchImages = async () => {
    try {
      setFetching(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/images`);
      const data = await res.json();
      setImages(data.images || []);
    } catch (err) {
      setMessage("❌ Failed to load images");
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleFileChange = (file) => {
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setMessage("");
  };

  const uploadImage = async (e) => {
    e.preventDefault();

    if (!image) {
      setMessage("⚠ Please select an image first");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const formData = new FormData();
      formData.append("image", image);
      formData.append("caption", caption);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/upload?section=general`, {
        method: "POST",
        headers: { "x-admin-key": adminKey },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Upload failed");

      setMessage("✅ Image uploaded successfully");
      setImage(null);
      setPreview("");
      setCaption("");
      fetchImages();
    } catch (err) {
      setMessage("❌ Upload failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const deleteImage = async (publicId) => {
    if (!confirm("Delete this image permanently?")) return;

    try {
      await fetch(
        `${import.meta.env.VITE_API_URL}/api/image/${encodeURIComponent(publicId)}`,
        {
          method: "DELETE",
          headers: { "x-admin-key": adminKey },
        }
      );

      setMessage("✅ Image deleted");
      fetchImages();
    } catch {
      setMessage("❌ Delete failed");
    }
  };

  return (
    <div className="space-y-8">

      {/* ================= UPLOAD BOX ================= */}
      <form
        onSubmit={uploadImage}
        className="bg-gray-50 p-6 rounded-xl shadow space-y-4"
      >
        <div className="flex flex-col md:flex-row gap-6">
          <label className="cursor-pointer w-full md:w-1/2 border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center hover:border-indigo-500 transition">
            {preview ? (
              <img
                src={preview}
                className="h-32 object-cover rounded mb-2"
              />
            ) : (
              <>
                <p className="text-gray-500">Click to select image</p>
                <p className="text-xs text-gray-400 mt-1">PNG, JPG only</p>
              </>
            )}

            <input
              type="file"
              hidden
              accept="image/*"
              onChange={(e) => handleFileChange(e.target.files[0])}
            />
          </label>

          <div className="w-full md:w-1/2 flex flex-col gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image Caption/Title</label>
              <input
                type="text"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Enter image description..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>
            <button
              disabled={loading}
              className={`w-full px-6 py-3 rounded-lg text-white font-medium transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {loading ? "Uploading..." : "Upload Image"}
            </button>
          </div>
        </div>
      </form>

      {/* ================= STATUS MESSAGE ================= */}
      {message && (
        <p className="text-center font-medium text-sm text-gray-700">
          {message}
        </p>
      )}

      {/* ================= IMAGE GRID ================= */}
      {fetching ? (
        <p className="text-center text-gray-500">Loading images...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <div
              key={img.public_id}
              className="bg-white border rounded-xl shadow hover:shadow-lg transition group overflow-hidden"
            >
              <div className="relative">
                <img
                  src={img.url}
                  className="h-48 w-full object-cover"
                />
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white font-medium text-sm">{img.caption}</p>
                  </div>
                )}
              </div>

              <div className="p-3">
                <button
                  onClick={() => deleteImage(img.public_id)}
                  className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {images.length === 0 && (
            <p className="col-span-full text-center text-gray-400">
              No images uploaded yet
            </p>
          )}
        </div>
      )}
    </div>
  );
}
