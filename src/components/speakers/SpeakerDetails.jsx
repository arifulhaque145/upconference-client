import { useParams, Link } from "react-router-dom";

const mockSpeakers = [
  {
    id: 1,
    name: "Tanvir Hasan",
    title: "CTO, TechX",
    organization: "TechX Solutions",
    photoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Tanvir is the CTO of TechX Solutions with 10 years of experience in software development.",
  },
  {
    id: 2,
    name: "Sarah Ali",
    title: "Cybersecurity Expert",
    organization: "SecureNet",
    photoUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Sarah specializes in cybersecurity and has spoken at many international conferences.",
  },
  {
    id: 3,
    name: "Dr. Anika Rahman",
    title: "AI Researcher",
    organization: "University of Dhaka",
    photoUrl: "https://randomuser.me/api/portraits/women/55.jpg",
    bio: "Dr. Anika is an AI researcher focusing on natural language processing and machine learning.",
  },
];

export default function SpeakerDetails() {
  const { id } = useParams();
  const speaker = mockSpeakers.find((s) => s.id === Number(id));

  if (!speaker) {
    return (
      <div className="p-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Speaker not found</h2>
        <Link to="/speakers" className="text-indigo-600 underline">
          Back to Speakers
        </Link>
      </div>
    );
  }

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <Link
        to="/speakers"
        className="text-indigo-600 underline mb-4 inline-block"
      >
        &larr; Back to Speakers
      </Link>
      <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
        <img
          src={speaker.photoUrl}
          alt={speaker.name}
          className="w-32 h-32 rounded-full mb-4 object-cover"
        />
        <h2 className="text-3xl font-bold mb-2">{speaker.name}</h2>
        <p className="text-lg text-gray-700 mb-1">{speaker.title}</p>
        {speaker.organization && (
          <p className="text-sm text-gray-500 mb-4">{speaker.organization}</p>
        )}
        <p className="text-gray-600">{speaker.bio}</p>
      </div>
    </section>
  );
}
