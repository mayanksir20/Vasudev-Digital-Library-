import PageTransition from "../components/layout/PageTransition";
import SEO from "../components/layout/SEO";
import PageHero from "../components/ui/PageHero";
import StudyMaterialSection from "../components/home/StudyMaterialSection";
import CTASection from "../components/home/CTASection";

export default function StudyMaterial() {
  return (
    <PageTransition>
      <SEO
        title="Study Material | Vasudev Digital Library - Notes & Resources for Competitive Exams"
        description="Access high-quality study material at Vasudev Digital Library in Akbarpur. Explore notes, books, current affairs and learning resources for UPSC, SSC, Banking, Railway, UP Police, PCS, Teaching, NEET, JEE and other competitive examinations."
        keywords="Study Material, UPSC Notes, SSC Study Material, Banking Notes, Railway Exam Notes, UP Police Preparation, PCS Notes, Current Affairs, Competitive Exam Study Material, Vasudev Digital Library, Digital Library Akbarpur, Best Study Library"
        image="https://vasudevdigitallibrary.com/og-image.jpg"
        path="/study-material"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Study Material", path: "/study-material" },
        ]}
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
