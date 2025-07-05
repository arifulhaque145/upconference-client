import { useState } from "react";
import SpeakerCard from "../components/speakers/SpeakerCard";

const mockSpeakers = [
  {
    id: 1,
    name: "Tanvir Hasan",
    title: "CTO, TechX",
    organization: "TechX Solutions",
    photoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sarah Ali",
    title: "Cybersecurity Expert",
    organization: "SecureNet",
    photoUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Dr. Anika Rahman",
    title: "AI Researcher",
    organization: "University of Dhaka",
    photoUrl: "https://randomuser.me/api/portraits/women/55.jpg",
  },
];

const organizations = [
  "All",
  ...new Set(mockSpeakers.map((s) => s.organization).filter(Boolean)),
];

export default function Speakers() {
  const [query, setQuery] = useState("");
  const [filterOrg, setFilterOrg] = useState("All");

  // Filter speakers by search and organization filter
  const filtered = mockSpeakers.filter((s) => {
    const matchesQuery =
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.title.toLowerCase().includes(query.toLowerCase());
    const matchesOrg = filterOrg === "All" || s.organization === filterOrg;
    return matchesQuery && matchesOrg;
  });

  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Our Speakers</h2>

      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by name or title..."
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-md"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-xs"
          value={filterOrg}
          onChange={(e) => setFilterOrg(e.target.value)}
        >
          {organizations.map((org, idx) => (
            <option key={idx} value={org}>
              {org}
            </option>
          ))}
        </select>
      </div>

      {/* Speakers Grid */}
      <div className="flex flex-wrap gap-6 justify-center">
        {filtered.length > 0 ? (
          filtered.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))
        ) : (
          <p className="text-center">No speakers found.</p>
        )}
      </div>
    </section>
  );
}
