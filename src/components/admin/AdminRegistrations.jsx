import { useState } from "react";

export default function AdminRegistrations() {
  const [users, setUsers] = useState([
    {
      id: Date.now().toString(),
      fullName: "Tanvir Hasan",
      email: "tanvir@example.com",
      phone: "01888888888",
      ticketType: "VIP",
    },
    {
      id: (Date.now() + 1).toString(),
      fullName: "Sara Rahman",
      email: "sara@example.com",
      phone: "01777777777",
      ticketType: "General Admission",
    },
  ]);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this registration?")) {
      setUsers((prev) => prev.filter((u) => u.id !== id));
    }
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Registered Users</h2>

      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2">Full Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Ticket Type</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-4">
                  No registrations yet.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="px-4 py-2">{user.fullName}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.phone}</td>
                  <td className="px-4 py-2">{user.ticketType}</td>
                  <td className="px-4 py-2 text-center space-x-2">
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
