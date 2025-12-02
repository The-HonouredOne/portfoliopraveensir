import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();


const adminKey = sessionStorage.getItem("adminKey");



  useEffect(() => {
    if (!adminKey) {
      navigate("/admin");
      return;
    }

    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch("https://portfoliopra-server.onrender.com/api/contacts", {
        headers: {
          "x-admin-key": adminKey,
        },
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setContacts(data.contacts);
    } catch (err) {
      setError("Unauthorized or server error");
    } finally {
      setLoading(false);
    }
  };

  const deleteOne = async (id) => {
    if (!confirm("Delete this contact?")) return;

    try {
      const res = await fetch(`https://portfoliopra-server.onrender.com/api/contact/${id}`, {
        method: "DELETE",
        headers: {
          "x-admin-key": adminKey,
        },
      });

      if (res.ok) {
        fetchContacts();
      } else {
        alert("Failed to delete contact");
      }
    } catch (err) {
      alert("Error deleting contact");
    }
  };

  const deleteAll = async () => {
    if (!confirm("Delete ALL contacts?")) return;

    try {
      const res = await fetch("https://portfoliopra-server.onrender.com/api/contacts", {
        method: "DELETE",
        headers: {
          "x-admin-key": adminKey,
        },
      });

      if (res.ok) {
        fetchContacts();
      } else {
        alert("Failed to delete all contacts");
      }
    } catch (err) {
      alert("Error deleting contacts");
    }
  };

 const logout = () => {
  sessionStorage.removeItem("adminKey");
  window.location.href = "/"; 
};


  if (loading)
    return <p className="text-center mt-20">Loading contacts...</p>;

  return (
    <section className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">📩 All Contacts</h2>
          <div className="flex gap-3">
            <button
              onClick={deleteAll}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Delete All
            </button>

            <button
              onClick={logout}
              className="bg-gray-800 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="overflow-x-auto">
          <table className="w-full border text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Message</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => (
                <tr key={c._id} className="border-t">
                  <td className="p-3">{c.name}</td>
                  <td className="p-3">{c.email}</td>
                  <td className="p-3">{c.message}</td>
                  <td className="p-3">
                    <button
                      onClick={() => deleteOne(c._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {contacts.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center p-6 text-gray-500">
                    No contacts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
