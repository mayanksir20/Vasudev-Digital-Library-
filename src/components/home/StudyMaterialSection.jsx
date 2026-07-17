import { FiBookOpen } from "react-icons/fi";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import { studyMaterials } from "../../data/siteData";

export default function StudyMaterialSection({ compact = false }) {
  const items = compact ? studyMaterials.slice(0, 6) : studyMaterials;

  return (
    <section className="section-pad relative bg-navy">
      <Container>
        <SectionHeading
          eyebrow="Study Material"
          title="Curated resources for every major exam"
          subtitle="Notes, previous year papers and current affairs — organised by exam, kept current."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <GlassCard key={s.title} delay={(i % 6) * 0.06}>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold text-xl">
                <FiBookOpen />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-ivory">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{s.desc}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
