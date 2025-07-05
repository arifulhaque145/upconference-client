import { Link } from "react-router-dom";

export default function SpeakerCard({ speaker }) {
  return (
    <div className="bg-white shadow rounded-xl p-4 text-center w-full sm:w-[260px] transition-transform hover:scale-105 duration-200">
      <img
        src={speaker.photoUrl || "/default.png"}
        alt={speaker.name}
        className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">{speaker.name}</h3>
      <p className="text-sm text-gray-600">{speaker.title}</p>
      {speaker.organization && (
        <p className="text-xs text-gray-500 mb-4">{speaker.organization}</p>
      )}
      <Link
        to={`/speakers/${speaker.id}`}
        className="mt-2 inline-block bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700"
      >
        Details
      </Link>
    </div>
  );
}
