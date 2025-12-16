import { useEffect, useState } from "react";

export default function AdminContacts({ adminKey }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contacts`, {
        headers: { "x-admin-key": adminKey },
      });
      const data = await res.json();
      setContacts(data.contacts);
    } catch {
      alert("Unauthorized or Server Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const deleteOne = async (id) => {
    if (!confirm("Delete this contact?")) return;

    await fetch(`${import.meta.env.VITE_API_URL}/api/contact/${id}`, {
      method: "DELETE",
      headers: { "x-admin-key": adminKey },
    });

    fetchContacts();
  };

  const deleteAll = async () => {
    if (!confirm("Delete ALL contacts?")) return;

    await fetch(`${import.meta.env.VITE_API_URL}/api/contacts`, {
      method: "DELETE",
      headers: { "x-admin-key": adminKey },
    });

    fetchContacts();
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h3 className="text-xl font-semibold">All Contacts</h3>
        <button
          onClick={deleteAll}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete All
        </button>
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block">
        <table className="w-full border">
          <thead className="bg-gray-100">
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
                  No contacts found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARDS */}
      <div className="md:hidden space-y-4">
        {contacts.map((c) => (
          <div key={c._id} className="border rounded-lg p-4 bg-white">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold">{c.name}</h4>
              <button
                onClick={() => deleteOne(c._id)}
                className="bg-red-500 text-white px-2 py-1 rounded text-sm"
              >
                Delete
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-2">{c.email}</p>
            <p className="text-sm text-gray-700">{c.message}</p>
          </div>
        ))}
        {contacts.length === 0 && (
          <div className="text-center p-6 text-gray-500">
            No contacts found
          </div>
        )}
      </div>
    </div>
  );
}
