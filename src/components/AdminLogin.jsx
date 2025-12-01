import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [key, setKey] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!key) {
      setError("Secret key is required");
      return;
    }

   sessionStorage.setItem("adminKey", key);

    navigate("/admin/contacts");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          🔐 Admin Access
        </h2>

        <input
          type="password"
          placeholder="Enter Admin Secret Key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          className="w-full border p-3 rounded mb-4 outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </form>
    </section>
  );
}
