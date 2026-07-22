import PageTransition from "../components/layout/PageTransition";
import SEO from "../components/layout/SEO";
import PageHero from "../components/ui/PageHero";
import WhyChooseUs from "../components/home/WhyChooseUs";
import SpecialFacilities from "../components/home/SpecialFacilities";
import SafetyTimeline from "../components/home/SafetyTimeline";
import Certificates from "../components/home/Certificates";

export default function Facilities() {
  return (
    <PageTransition>
      <SEO
        title="Facilities"
        description="Explore every facility at Vasudev Digital Library — air conditioning, individual study chambers, high-speed WiFi, safety measures and more."
        path="/facilities"
      />
      <div className="relative shadow-[0_20px_20px_-10px_rgba(0,0,0,0.5)] z-20">
        <PageHero
          crumb="Facilities"
          eyebrow="Everything Included"
          title="A study experience with nothing left to chance"
          subtitle="From comfort to safety, every facility here has been chosen with one goal — helping you focus for longer, without compromise."
        />
      </div>
      <WhyChooseUs />
      <SpecialFacilities />
      <SafetyTimeline />
      <Certificates />
    </PageTransition>
  );
}
