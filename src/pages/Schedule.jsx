import { useState } from "react";
import { Link } from "react-router-dom";

const mockSessions = [
  {
    id: 1,
    title: "Opening Keynote",
    time: "10:00 AM - 11:00 AM",
    speakerId: 1,
    day: "Day 1",
    track: "Main Hall",
  },
  {
    id: 2,
    title: "AI & Society",
    time: "11:30 AM - 12:30 PM",
    speakerId: 3,
    day: "Day 1",
    track: "Room A",
  },
  {
    id: 3,
    title: "Cybersecurity Panel",
    time: "2:00 PM - 3:00 PM",
    speakerId: 2,
    day: "Day 2",
    track: "Room B",
  },
];

const mockSpeakers = [
  { id: 1, name: "Tanvir Hasan" },
  { id: 2, name: "Sarah Ali" },
  { id: 3, name: "Dr. Anika Rahman" },
];

const days = ["All", ...new Set(mockSessions.map((s) => s.day))];
const tracks = ["All", ...new Set(mockSessions.map((s) => s.track))];

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState("All");
  const [selectedTrack, setSelectedTrack] = useState("All");

  const filteredSessions = mockSessions.filter((session) => {
    const dayMatch = selectedDay === "All" || session.day === selectedDay;
    const trackMatch =
      selectedTrack === "All" || session.track === selectedTrack;
    return dayMatch && trackMatch;
  });

  return (
    <section className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">
        Conference Schedule
      </h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <select
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-xs"
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        <select
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-xs"
          value={selectedTrack}
          onChange={(e) => setSelectedTrack(e.target.value)}
        >
          {tracks.map((track) => (
            <option key={track} value={track}>
              {track}
            </option>
          ))}
        </select>
      </div>

      {/* Sessions List */}
      <ul className="space-y-6">
        {filteredSessions.length > 0 ? (
          filteredSessions.map((session) => {
            const speaker = mockSpeakers.find(
              (s) => s.id === session.speakerId
            );
            return (
              <li
                key={session.id}
                className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <Link to={`/schedule/${session.id}`} className="block">
                  <h3 className="text-xl font-semibold">{session.title}</h3>
                  <p className="text-gray-600 mb-1">{session.time}</p>
                  <p className="text-sm text-gray-500 mb-1">
                    Day: {session.day} | Track: {session.track}
                  </p>
                </Link>
                {speaker && (
                  <Link
                    to={`/speakers/${speaker.id}`}
                    className="text-indigo-600 hover:underline"
                  >
                    Speaker: {speaker.name}
                  </Link>
                )}
              </li>
            );
          })
        ) : (
          <p className="text-center text-gray-500">
            No sessions found for selected filters.
          </p>
        )}
      </ul>
    </section>
  );
}
