const speakers = [
  { name: "Dr. Anika Rahman", title: "AI Researcher", img: "/img/anika.jpg" },
  { name: "Tanvir Hasan", title: "CTO, TechX", img: "/img/tanvir.jpg" },
  { name: "Sarah Ali", title: "Cybersecurity Expert", img: "/img/sarah.jpg" },
];

export default function SpeakersPreview() {
  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-xl font-bold text-center mb-4">Featured Speakers</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {speakers.map((sp, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-4 w-64 text-center"
          >
            <img
              src={sp.img}
              alt={sp.name}
              className="w-24 h-24 rounded-full mx-auto mb-2"
            />
            <h3 className="font-semibold">{sp.name}</h3>
            <p className="text-sm text-gray-600">{sp.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
