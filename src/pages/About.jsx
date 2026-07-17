import { motion } from "framer-motion";
import PageTransition from "../components/layout/PageTransition";
import SEO from "../components/layout/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import GlassCard from "../components/ui/GlassCard";
import StatsCounter from "../components/home/StatsCounter";
import { business } from "../data/siteData";

const values = [
  { title: "Mission", desc: "To provide every aspirant in Akbarpur access to a premium, distraction-free study environment — regardless of background or budget." },
  { title: "Vision", desc: "To be the most trusted name in disciplined, outcome-driven study spaces across the region." },
  { title: "Discipline", desc: "Strict silent zones, individually assigned chambers and a culture of focus woven into every corner." },
  { title: "Success Environment", desc: "A setting engineered around consistency — the same seat, same silence, same structure, every single day." },
  { title: "Premium Atmosphere", desc: "Air-conditioned comfort, elegant interiors and thoughtful details that make long hours feel effortless." },
];

const leaders = [
  { name: business.founder, role: business.founderTitle, note: "The founding vision behind Vasudev Digital Library — built from a commitment to community and education in Akbarpur." },
  { name: business.director, role: "Director", note: "Oversees the library's day-to-day operations, ensuring every member experiences the same standard of excellence." },
];

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About Us"
        description="Learn the story, mission and vision behind Vasudev Digital Library — a premium 24x7 study space in Akbarpur, Uttar Pradesh."
        path="/about"
      />
      <PageHero
        crumb="About"
        eyebrow="Our Story"
        title="Built for aspirants who take their preparation seriously"
        subtitle="Vasudev Digital Library began with a simple observation: environment shapes outcome. Every element here — from lighting to layout — exists to remove distraction and build momentum."
      />

      <section className="section-pad bg-navy-deep">
        <Container>
          <SectionHeading align="left" eyebrow="What Drives Us" title="Mission, vision & the discipline behind it" />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <GlassCard key={v.title} delay={i * 0.08}>
                <span className="font-display text-xs text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-heading text-lg font-semibold text-ivory">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{v.desc}</p>
              </GlassCard>
            ))}
          </div>
          <StatsCounter />
        </Container>
      </section>

      <section className="section-pad bg-navy">
        <Container>
          <SectionHeading eyebrow="Leadership" title="The people behind Vasudev" />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            {leaders.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="glass-panel rounded-2xl p-8 text-center"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient font-display text-xl font-bold text-navy-deep">
                  {l.name.charAt(0)}
                </span>
                <h3 className="mt-4 font-display text-xl text-ivory">{l.name}</h3>
                <p className="text-xs eyebrow mt-1 !text-gold/80">{l.role}</p>
                <p className="mt-3 text-sm text-mist leading-relaxed">{l.note}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
