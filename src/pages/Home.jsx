import PageTransition from "../components/layout/PageTransition";
import SEO from "../components/layout/SEO";
import HeroSlider from "../components/home/HeroSlider";
import AboutPreview from "../components/home/AboutPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import SpecialFacilities from "../components/home/SpecialFacilities";
import SafetyTimeline from "../components/home/SafetyTimeline";
import Certificates from "../components/home/Certificates";
import StudyMaterialSection from "../components/home/StudyMaterialSection";
import GallerySection from "../components/home/GallerySection";
import VideoGallery from "../components/home/VideoGallery";
import Testimonials from "../components/home/Testimonials";
// import FeedbackSection from "../components/home/FeedbackSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <PageTransition>
      <SEO
        title="Premium 24×7 Digital Library in Akbarpur"
        description="Vasudev Digital Library — a fully air-conditioned, 24×7 premium study space in Akbarpur with individual chambers, high-speed WiFi and a distraction-free environment."
        path="/"
      />
      <HeroSlider />
      <AboutPreview />
      <WhyChooseUs />
      <SpecialFacilities />
      <SafetyTimeline />
      <Certificates />
      <StudyMaterialSection compact />
      <GallerySection compact />
      <VideoGallery />
      <Testimonials />
      {/* <FeedbackSection /> */}
      <CTASection />
    </PageTransition>
  );
}
