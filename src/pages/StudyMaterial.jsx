import PageTransition from "../components/layout/PageTransition";
import SEO from "../components/layout/SEO";
import PageHero from "../components/ui/PageHero";
import StudyMaterialSection from "../components/home/StudyMaterialSection";
import CTASection from "../components/home/CTASection";

export default function StudyMaterial() {
  return (
    <PageTransition>
      <SEO
        title="Study Material"
        description="Curated study material at Vasudev Digital Library — UPSC, SSC, Bank, Railway, UP Police, Teaching, State PCS notes and current affairs."
        path="/study-material"
      />
      <div className="relative shadow-[0_20px_20px_-10px_rgba(0,0,0,0.5)] z-20">
        <PageHero
          crumb="Study Material"
          eyebrow="Curated Resources"
          title="Everything you need, organised by exam"
          subtitle="From UPSC to State PCS — access curated notes, previous year papers and current affairs digests, kept up to date."
        />
      </div>
      <StudyMaterialSection />
      <CTASection />
    </PageTransition>
  );
}
