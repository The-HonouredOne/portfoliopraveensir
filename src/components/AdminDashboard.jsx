import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import AdminContactsTab from "./AdminContactsTab";
// import AdminImagesTab from "./AdminImagesTab";
import AdminContacts from "./AdminContacts";
import AdminImagesTab from "../AdminImages";
import AdminExperience from "./AdminExperience";
import AdminFeatured from "./AdminFeatured";
import AdminSpeaker from "./AdminSpeaker";
import AdminReviews from "./AdminReviews";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("contacts");
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
    <section className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      {/* MOBILE HEADER */}
      <div className="lg:hidden bg-white shadow-sm border-b px-4 py-3 flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-800">🔐 Admin Panel</h2>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
        >
          {sidebarOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* SIDEBAR */}
      <div className={`
        ${sidebarOpen ? 'block' : 'hidden'} lg:block
        w-full lg:w-64 bg-white shadow-lg
        ${sidebarOpen ? 'absolute lg:relative z-50 h-full' : ''}
      `}>
        {/* DESKTOP HEADER */}
        <div className="hidden lg:block p-6 border-b">
          <h2 className="text-xl font-bold text-gray-800">🔐 Admin Panel</h2>
        </div>

        {/* NAVIGATION */}
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => {setActiveTab("contacts"); setSidebarOpen(false);}}
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
                onClick={() => {setActiveTab("images"); setSidebarOpen(false);}}
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
                onClick={() => {setActiveTab("experience"); setSidebarOpen(false);}}
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
                onClick={() => {setActiveTab("featured"); setSidebarOpen(false);}}
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
                onClick={() => {setActiveTab("speaker"); setSidebarOpen(false);}}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                  activeTab === "speaker"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                🎤 <span>Speaker At</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {setActiveTab("reviews"); setSidebarOpen(false);}}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                  activeTab === "reviews"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                ⭐ <span>Reviews</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* LOGOUT */}
        <div className="p-4 mt-auto">
          <button
            onClick={logout}
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {/* OVERLAY FOR MOBILE */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* MAIN CONTENT */}
      <div className="flex-1 p-4 lg:p-6 overflow-auto">
        <div className="bg-white rounded-xl shadow p-4 lg:p-6 min-h-full">
          {activeTab === "contacts" && <AdminContacts adminKey={adminKey} />}
          {activeTab === "images" && <AdminImagesTab adminKey={adminKey} />}
          {activeTab === "experience" && <AdminExperience adminKey={adminKey} />}
          {activeTab === "featured" && <AdminFeatured adminKey={adminKey} />}
          {activeTab === "speaker" && <AdminSpeaker adminKey={adminKey} />}
          {activeTab === "reviews" && <AdminReviews adminKey={adminKey} />}
        </div>
      </div>
    </section>
  );
}
