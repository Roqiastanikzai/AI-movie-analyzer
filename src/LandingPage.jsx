import Background from "../components/landing/Background";
import LandingNavbar from "../components/landing/LandingNavbar";
import HeroSection from "../components/landing/HeroSection";
import FeatureSection from "../components/landing/FeatureSection";
import AboutSection from "../components/landing/AboutSection";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/Footer";

function LandingPage({ onEnterApp }) {
  return (
    <div className="min-h-screen bg-[#040611] text-white overflow-x-hidden">
      <Background />

      <LandingNavbar onEnterApp={onEnterApp} />

      <main>
        <HeroSection onEnterApp={onEnterApp} />

        <FeatureSection />

        <AboutSection />

        <CTASection onEnterApp={onEnterApp} />
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;