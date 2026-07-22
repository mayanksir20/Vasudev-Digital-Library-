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
        title="Facilities | Vasudev Digital Library - Premium 24x7 Study Library in Akbarpur"
        description="Explore the world-class facilities at Vasudev Digital Library in Akbarpur, Uttar Pradesh. Enjoy 24x7 access, fully air-conditioned study rooms, individual study cabins, high-speed WiFi, CCTV surveillance, power backup, ergonomic seating, RO drinking water and a peaceful environment for UPSC, SSC, Banking, Railway, PCS, NEET and other competitive exam aspirants."
        keywords="Library Facilities, Vasudev Digital Library, Best Library in Akbarpur, Digital Library Akbarpur, AC Study Library, Silent Study Room, Reading Room, Individual Study Cabin, WiFi Library, CCTV Security, 24x7 Library, Competitive Exam Library, Study Space in Akbarpur"
        image="https://vasudevdigitallibrary.com/og-image.jpg"
        path="/facilities"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Facilities", path: "/facilities" },
        ]}
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
