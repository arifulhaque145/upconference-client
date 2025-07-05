import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // From react-icons
import { Link } from "react-router-dom";

export default function HeaderSection() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-indigo-700">
          ConfX
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-indigo-600">
            Home
          </Link>
          <Link to="/speakers" className="hover:text-indigo-600">
            Speakers
          </Link>
          <Link to="/schedule" className="hover:text-indigo-600">
            Schedule
          </Link>
          <Link
            to="/register"
            className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700"
          >
            Register
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-white shadow-md">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/speakers" onClick={() => setOpen(false)}>
            Speakers
          </Link>
          <Link to="/schedule" onClick={() => setOpen(false)}>
            Schedule
          </Link>
          <Link
            to="/register"
            onClick={() => setOpen(false)}
            className="bg-indigo-600 text-white px-3 py-1 rounded"
          >
            Register
          </Link>
        </div>
      )}
    </header>
  );
}
