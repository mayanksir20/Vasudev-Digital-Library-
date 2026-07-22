import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import FacilityIcon from "../ui/IconMap";
import { facilities } from "../../data/siteData";
import bgImage from "../../assets/images/wave-1.webp"; // Apna folder path check kar lein

export default function WhyChooseUs() {
  const featured = facilities.slice(0, 12);

  return (
    <section
      className="section-pad relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay taaki text readable rahe */}
      <div className="absolute inset-0 bg-navy/60" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Every detail, considered"
          subtitle="From the temperature of the room to the light on your desk — everything here is designed around one goal: your focus."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((f, i) => (
            <GlassCard key={f.title} delay={(i % 6) * 0.06}>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold text-xl">
                <FacilityIcon name={f.icon} />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-ivory">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{f.desc}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
