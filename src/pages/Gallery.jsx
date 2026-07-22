import PageTransition from "../components/layout/PageTransition";
import SEO from "../components/layout/SEO";
import PageHero from "../components/ui/PageHero";
import GallerySection from "../components/home/GallerySection";
import VideoGallery from "../components/home/VideoGallery";

export default function Gallery() {
  return (
    <PageTransition>
      <SEO
        title="Gallery"
        description="Browse photos and videos of Vasudev Digital Library's reading halls, study chambers and facilities in Akbarpur."
        path="/gallery"
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
