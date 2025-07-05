import { NavLink } from "react-router-dom";

export default function DashboardSidebar() {
  const navItemClass =
    "block px-4 py-2 rounded hover:bg-indigo-100 text-gray-700";

  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-4 font-bold text-xl border-b">Admin Panel</div>
      <nav className="p-4 space-y-2">
        <NavLink to="/admin/overview" className={navItemClass}>
          Overview
        </NavLink>
        <NavLink to="/admin/speakers" className={navItemClass}>
          Speakers
        </NavLink>
        <NavLink to="/admin/sessions" className={navItemClass}>
          Sessions
        </NavLink>
        <NavLink to="/admin/registrations" className={navItemClass}>
          Registrations
        </NavLink>
      </nav>
    </aside>
  );
}
