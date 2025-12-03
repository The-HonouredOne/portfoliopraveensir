import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import AdminContactsTab from "./AdminContactsTab";
// import AdminImagesTab from "./AdminImagesTab";
import AdminContacts from "./AdminContacts";
import AdminImagesTab from "../AdminImages";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("contacts");
  const navigate = useNavigate();

  const adminKey = sessionStorage.getItem("adminKey");

  useEffect(() => {
    if (!adminKey) {
      navigate("/admin");
    }
  }, []);

  const logout = () => {
    sessionStorage.removeItem("adminKey");
    navigate("/");
  };

  return (
    <section className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow p-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">🔐 Admin Dashboard</h2>

          <button
            onClick={logout}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-black"
          >
            Logout
          </button>
        </div>

        {/* TABS */}
        <div className="flex gap-4 mb-6 border-b pb-3">
          <button
            onClick={() => setActiveTab("contacts")}
            className={`px-4 py-2 rounded ${
              activeTab === "contacts"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200"
            }`}
          >
            📩 Contacts
          </button>

          <button
            onClick={() => setActiveTab("images")}
            className={`px-4 py-2 rounded ${
              activeTab === "images"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200"
            }`}
          >
            🖼 Images
          </button>
        </div>

        {/* TAB CONTENT */}
        {activeTab === "contacts" && <AdminContacts adminKey={adminKey} />}
        {activeTab === "images" && <AdminImagesTab adminKey={adminKey} />}

      </div>
    </section>
  );
}
