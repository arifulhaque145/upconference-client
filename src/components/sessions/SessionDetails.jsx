import { Link, useParams } from "react-router-dom";

const mockSessions = [
  {
    id: 1,
    title: "Opening Keynote",
    time: "10:00 AM - 11:00 AM",
    speakerId: 1,
    day: "Day 1",
    track: "Main Hall",
    description:
      "Kick off the conference with inspiring keynote speech covering the future of technology.",
  },
  {
    id: 2,
    title: "AI & Society",
    time: "11:30 AM - 12:30 PM",
    speakerId: 3,
    day: "Day 1",
    track: "Room A",
    description:
      "Explore the impact of artificial intelligence on modern society and ethical considerations.",
  },
  {
    id: 3,
    title: "Cybersecurity Panel",
    time: "2:00 PM - 3:00 PM",
    speakerId: 2,
    day: "Day 2",
    track: "Room B",
    description:
      "Panel discussion featuring experts sharing the latest trends and challenges in cybersecurity.",
  },
];

const mockSpeakers = [
  { id: 1, name: "Tanvir Hasan" },
  { id: 2, name: "Sarah Ali" },
  { id: 3, name: "Dr. Anika Rahman" },
];

export default function SessionDetails() {
  const { id } = useParams();
  const session = mockSessions.find((s) => s.id === Number(id));

  if (!session) {
    return (
      <div className="p-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Session not found</h2>
        <Link to="/schedule" className="text-indigo-600 underline">
          Back to Schedule
        </Link>
      </div>
    );
  }

  const speaker = mockSpeakers.find((s) => s.id === session.speakerId);

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <Link
        to="/schedule"
        className="text-indigo-600 underline mb-4 inline-block"
      >
        &larr; Back to Schedule
      </Link>
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-3xl font-bold mb-2">{session.title}</h2>
        <p className="text-gray-600 mb-1">
          <strong>Time:</strong> {session.time}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Day:</strong> {session.day}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Track:</strong> {session.track}
        </p>
        {speaker && (
          <p className="mb-4">
            <strong>Speaker: </strong>
            <Link
              to={`/speakers/${speaker.id}`}
              className="text-indigo-600 hover:underline"
            >
              {speaker.name}
            </Link>
          </p>
        )}
        <p className="text-gray-700">{session.description}</p>
      </div>
    </section>
  );
}
