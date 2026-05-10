import ContactSection from "./components/homepage/ContactSection";
import FeaturedInventorySection from "./components/homepage/FeaturedInventorySection";
import HeroSection from "./components/homepage/HeroSection";
import StatsSection from "./components/homepage/StatsSection";
import StorySection from "./components/homepage/StorySection";
import TestimonialsSection from "./components/homepage/TestimonialsSection";

export default function Home() {
  return (
    <div className="homepage">
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturedInventorySection />
        <StorySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
}
