import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import SchedulePreview from "../components/home/SchedulePreview";
import SpeakersPreview from "../components/home/SpeakersPreview";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SpeakersPreview />
      <SchedulePreview />
    </div>
  );
}
