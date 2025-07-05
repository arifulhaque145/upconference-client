import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/admin/DashboardHeader";
import DashboardSidebar from "../components/admin/DashboardSidebar";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />

      <div className="flex-1 bg-gray-100">
        <DashboardHeader />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
