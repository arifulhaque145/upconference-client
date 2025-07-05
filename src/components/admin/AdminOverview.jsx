import { useEffect, useState } from "react";

export default function AdminOverview() {
  const [speakers, setSpeakers] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    // Simulate fetching from state or API
    const dummySpeakers = [
      { id: "1", name: "Tanvir" },
      { id: "2", name: "Sara" },
    ];
    const dummySessions = [
      { id: "1", title: "React Basics", time: "2025-07-05T14:00" },
      { id: "2", title: "Web3 Future", time: "2025-07-06T09:00" },
      { id: "3", title: "Node.js Tips", time: "2025-07-10T16:00" },
    ];
    const dummyUsers = [
      { id: "1", name: "User1" },
      { id: "2", name: "User2" },
    ];

    setSpeakers(dummySpeakers);
    setSessions(dummySessions);
    setRegistrations(dummyUsers);
  }, []);

  const upcomingSessions = sessions
    .filter((s) => new Date(s.time) > new Date())
    .sort((a, b) => new Date(a.time) - new Date(b.time))
    .slice(0, 3);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Admin Overview</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card title="Total Speakers" count={speakers.length} color="indigo" />
        <Card title="Total Sessions" count={sessions.length} color="green" />
        <Card title="Registrations" count={registrations.length} color="rose" />
      </div>

      {/* Upcoming Sessions */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Upcoming Sessions</h3>
        {upcomingSessions.length === 0 ? (
          <p className="text-gray-500">No upcoming sessions.</p>
        ) : (
          <ul className="space-y-3">
            {upcomingSessions.map((session) => (
              <li key={session.id} className="border p-3 rounded bg-gray-50">
                <div className="font-semibold">{session.title}</div>
                <div className="text-sm text-gray-500">
                  {new Date(session.time).toLocaleString()}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function Card({ title, count, color }) {
  const colorMap = {
    indigo: "bg-indigo-100 text-indigo-800",
    green: "bg-green-100 text-green-800",
    rose: "bg-rose-100 text-rose-800",
  };

  return (
    <div className={`p-4 rounded shadow bg-white`}>
      <div className="text-gray-500 text-sm mb-1">{title}</div>
      <div className={`text-2xl font-bold ${colorMap[color]}`}>{count}</div>
    </div>
  );
}
