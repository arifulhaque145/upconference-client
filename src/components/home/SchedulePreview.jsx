const sessions = [
  { title: "Opening Keynote", time: "10:00 AM" },
  { title: "AI & Society", time: "11:30 AM" },
  { title: "Cybersecurity Panel", time: "2:00 PM" },
];

export default function SchedulePreview() {
  return (
    <section className="p-6">
      <h2 className="text-xl font-bold text-center mb-4">
        Schedule Highlights
      </h2>
      <ul className="max-w-md mx-auto space-y-3">
        {sessions.map((session, idx) => (
          <li key={idx} className="border-b pb-2">
            <p className="font-medium">{session.title}</p>
            <p className="text-sm text-gray-600">{session.time}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
