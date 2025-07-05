export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-800 text-white py-20 px-6 text-center">
      <h1 className="text-5xl font-bold mb-4">ConfX 2025</h1>
      <p className="text-xl mb-6">
        Join global thought leaders – July 10–12, 2025
      </p>
      <a href="/register">
        <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
          Register Now
        </button>
      </a>
    </div>
  );
}
