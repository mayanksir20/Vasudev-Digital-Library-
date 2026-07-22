import { FiBookOpen, FiArrowRight } from "react-icons/fi";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import { studyMaterials } from "../../data/siteData";

export default function StudyMaterialSection({ compact = false }) {
  const items = compact ? studyMaterials.slice(0, 6) : studyMaterials;

  return (
    <section className="section-pad relative bg-navy overflow-hidden">
      {/* Background glow effect for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <Container>
        <SectionHeading
          eyebrow="Study Material"
          title="Curated resources for every major exam"
          subtitle="Notes, previous year papers and current affairs — organised by exam, kept current."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <GlassCard 
              key={s.title} 
              delay={(i % 6) * 0.06}
              className="group relative border border-white/5 hover:border-gold/30 transition-colors duration-500"
            >
              {/* Card Decoration */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <FiArrowRight className="text-gold" />
              </div>

              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/5 text-gold text-2xl group-hover:scale-110 transition-transform duration-500">
                <FiBookOpen />
              </span>
              
              <h3 className="mt-6 font-heading text-xl font-bold text-ivory group-hover:text-gold transition-colors">
                {s.title}
              </h3>
              
              <p className="mt-3 text-sm leading-relaxed text-mist group-hover:text-ivory/80 transition-colors">
                {s.desc}
              </p>

              {/* Bottom accent line */}
              <div className="mt-6 h-1 w-12 bg-gold/20 rounded-full group-hover:w-full transition-all duration-700" />
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}