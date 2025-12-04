import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import AdminContactsTab from "./AdminContactsTab";
// import AdminImagesTab from "./AdminImagesTab";
import AdminContacts from "./AdminContacts";
import AdminImagesTab from "../AdminImages";
import AdminExperience from "./AdminExperience";
import AdminFeatured from "./AdminFeatured";
import AdminSpeaker from "./AdminSpeaker";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("contacts");
  const navigate = useNavigate();

  const adminKey = sessionStorage.getItem("adminKey");

  useEffect(() => {
    if (!adminKey) {
      navigate("/");
    }
  }, []);

  const logout = () => {
    sessionStorage.removeItem("adminKey");
    navigate("/");
  };

  return (
    <section className="min-h-screen bg-gray-100 flex">
      {/* SIDEBAR */}
      <div className="w-64 bg-white shadow-lg">
        {/* HEADER */}
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-gray-800">🔐 Admin Panel</h2>
        </div>

        {/* NAVIGATION */}
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveTab("contacts")}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                  activeTab === "contacts"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                📩 <span>Contacts</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("images")}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                  activeTab === "images"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                🖼 <span>Images</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("experience")}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                  activeTab === "experience"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                💼 <span>Experience</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("featured")}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                  activeTab === "featured"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                🏆 <span>Featured In</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("speaker")}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                  activeTab === "speaker"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                🎤 <span>Speaker At</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* LOGOUT */}
        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={logout}
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6">
        <div className="bg-white rounded-xl shadow p-6 h-full">
          {activeTab === "contacts" && <AdminContacts adminKey={adminKey} />}
          {activeTab === "images" && <AdminImagesTab adminKey={adminKey} />}
          {activeTab === "experience" && <AdminExperience adminKey={adminKey} />}
          {activeTab === "featured" && <AdminFeatured adminKey={adminKey} />}
          {activeTab === "speaker" && <AdminSpeaker adminKey={adminKey} />}
        </div>
      </div>
    </section>
  );
}
