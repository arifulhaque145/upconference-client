import { createBrowserRouter } from "react-router-dom";
import AdminOverview from "../components/admin/AdminOverview";
import AdminRegistrations from "../components/admin/AdminRegistrations";
import AdminSessions from "../components/admin/AdminSessions";
import AdminSpeakers from "../components/admin/AdminSpeakers";
import SessionDetails from "../components/sessions/SessionDetails";
import SpeakerDetails from "../components/speakers/SpeakerDetails";
import AdminLayout from "../layouts/AdminLayout";
import MainLayout from "../layouts/MainLayout";
import Admin from "../pages/Admin";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Schedule from "../pages/Schedule";
import Speakers from "../pages/Speakers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-5xl font-thin">404 Not Found</h1>
      </div>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "speakers",
        element: <Speakers />,
      },
      {
        path: "speakers/:id",
        element: <SpeakerDetails />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "schedule/:id",
        element: <SessionDetails />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "admin",
        element: <Admin />, // Assuming this is a public/admin landing page, not the full admin dashboard
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-5xl font-thin">404 Not Found</h1>
      </div>
    ),
    children: [
      {
        path: "home",
        element: <Admin />,
      },
      {
        path: "overview",
        element: <AdminOverview />,
      },
      {
        path: "speakers",
        element: <AdminSpeakers />,
      },
      {
        path: "sessions",
        element: <AdminSessions />,
      },
      {
        path: "registrations",
        element: <AdminRegistrations />,
      },
    ],
  },
]);

export default router;
