import { Outlet } from "react-router-dom";
import FooterSection from "../components/shared/FooterSection";
import HeaderSection from "../components/shared/HeaderSection";

export default function MainLayout() {
  return (
    <div>
      <HeaderSection />
      <Outlet />
      <FooterSection />
    </div>
  );
}
