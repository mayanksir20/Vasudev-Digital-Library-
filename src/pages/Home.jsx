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
        title="Vasudev Digital Library | Best 24×7 Premium Study Library in Akbarpur"
        description="Vasudev Digital Library is a premium 24×7 air-conditioned study library in Akbarpur, Uttar Pradesh. Enjoy silent study cabins, high-speed WiFi, CCTV security, power backup and a distraction-free environment for UPSC, SSC, Banking, Railway, PCS, NEET, JEE and other competitive exam preparation."
        keywords="Vasudev Digital Library, Best Library in Akbarpur, Digital Library Akbarpur, Study Library, Reading Room, AC Library, Silent Study Room, 24x7 Library, WiFi Library, Study Cabin, Competitive Exam Library, Library Near Me, Best Reading Room in Ambedkar Nagar"
        image="https://vasudevdigitallibrary.com/og-image.jpg"
        path="/"
        breadcrumbs={[{ name: "Home", path: "/" }]}
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
