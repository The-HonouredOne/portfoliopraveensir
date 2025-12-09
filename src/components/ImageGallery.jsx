import { useEffect, useState } from "react";

const API_BASE = "http://localhost:8080";

export default function ImageGallery() {
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/api/images`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setImages(data.images);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold text-gray-800 tracking-tight">
            Our Gallery
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            A glimpse of our latest work & creative moments
          </p>
        </div>

        {/* ================= LOADING STATE ================= */}
        {loading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-64 rounded-xl bg-gray-300 animate-pulse"
              />
            ))}
          </div>
        )}

        {/* ================= EMPTY STATE ================= */}
        {!loading && images.length === 0 && (
          <p className="text-center text-gray-500 text-lg">
            No images available yet.
          </p>
        )}

        {/* ================= IMAGE GRID ================= */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {images.map((img) => (
              <div
                key={img.public_id}
                onClick={() => setSelected(img)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition"
              >
                <img
                  src={img.url}
                  alt={img.caption || ""}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Caption Overlay */}
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4">
                    <p className="text-white font-semibold text-sm line-clamp-2">
                      {img.caption}
                    </p>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <p className="text-white font-medium tracking-wide">
                    View
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= LIGHTBOX MODAL ================= */}
        {selected && (
          <div
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <div className="relative max-w-5xl w-full">
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-10 right-0 text-white text-xl font-bold hover:text-gray-300 transition"
              >
                ✕ Close
              </button>
              <img
                src={selected.url}
                alt={selected.caption || ""}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
              {selected.caption && (
                <div className="mt-4 text-center">
                  <p className="text-white text-lg font-medium">{selected.caption}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
