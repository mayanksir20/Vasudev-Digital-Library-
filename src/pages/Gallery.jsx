import PageTransition from "../components/layout/PageTransition";
import SEO from "../components/layout/SEO";
import PageHero from "../components/ui/PageHero";
import GallerySection from "../components/home/GallerySection";
import VideoGallery from "../components/home/VideoGallery";

export default function Gallery() {
  return (
    <PageTransition>
      <SEO
        title="Gallery | Vasudev Digital Library - Premium Study Library in Akbarpur"
        description="Explore the gallery of Vasudev Digital Library in Akbarpur. View our premium 24x7 air-conditioned study rooms, individual study cabins, modern interiors, high-speed WiFi facilities, CCTV security and comfortable learning environment for competitive exam aspirants."
        keywords="Vasudev Digital Library Gallery, Library Photos, Study Library Akbarpur, Digital Library Images, Reading Room Gallery, AC Library, Study Cabin Photos, Best Library in Akbarpur, Silent Study Room, Library Interior"
        image="https://vasudevdigitallibrary.com/og-image.jpg"
        path="/gallery"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ]}
      />
      <div className="relative shadow-[0_20px_20px_-10px_rgba(0,0,0,0.5)] z-20">
        <PageHero
          crumb="Gallery"
          eyebrow="See It For Yourself"
          title="A visual tour of Vasudev Digital Library"
          subtitle="Every hall, every chamber, every quiet corner — captured."
        />
      </div>
      <GallerySection />
      <VideoGallery />
    </PageTransition>
  );
}
