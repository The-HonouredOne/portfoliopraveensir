import { useEffect, useState } from "react";

export default function AdminImagesTab({ adminKey }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [message, setMessage] = useState("");

  const fetchImages = async () => {
    try {
      setFetching(true);
      const res = await fetch("http://localhost:8080/api/images");
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

      const res = await fetch("http://localhost:8080/api/upload", {
        method: "POST",
        headers: { "x-admin-key": adminKey },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Upload failed");

      setMessage("✅ Image uploaded successfully");
      setImage(null);
      setPreview("");
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
        `http://localhost:8080/api/image/${encodeURIComponent(publicId)}`,
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
        className="bg-gray-50 p-6 rounded-xl shadow flex flex-col md:flex-row gap-6 items-center"
      >
        <label className="cursor-pointer w-full md:w-2/3 border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center hover:border-indigo-500 transition">
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

        <button
          disabled={loading}
          className={`w-full md:w-auto px-6 py-3 rounded text-white transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {loading ? "Uploading..." : "Upload Image"}
        </button>
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {images.map((img) => (
            <div
              key={img.public_id}
              className="bg-white border rounded-xl shadow hover:shadow-lg transition group"
            >
              <img
                src={img.url}
                className="h-40 w-full object-cover rounded-t-xl"
              />

              <div className="p-2">
                <button
                  onClick={() => deleteImage(img.public_id)}
                  className="w-full bg-red-600 text-white py-1 rounded hover:bg-red-700 transition opacity-90 group-hover:opacity-100"
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
