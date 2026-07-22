import { motion } from "framer-motion";
import PageTransition from "../components/layout/PageTransition";
import SEO from "../components/layout/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import GlassCard from "../components/ui/GlassCard";
import StatsCounter from "../components/home/StatsCounter";
import { business } from "../data/siteData";
import founderImg from "../assets/images/s verma.webp";
import directorImg from "../assets/images/aman.webp";

const values = [
  {
    title: "Mission",
    desc: "To provide every aspirant in Akbarpur access to a premium, distraction-free study environment — regardless of background or budget.",
  },
  {
    title: "Vision",
    desc: "To be the most trusted name in disciplined, outcome-driven study spaces across the region.",
  },
  {
    title: "Discipline",
    desc: "Strict silent zones, individually assigned chambers and a culture of focus woven into every corner.",
  },
  {
    title: "Success Environment",
    desc: "A setting engineered around consistency — the same seat, same silence, same structure, every single day.",
  },
  {
    title: "Premium Atmosphere",
    desc: "Air-conditioned comfort, elegant interiors and thoughtful details that make long hours feel effortless.",
  },
];

// siteData.js
export const leaders = [
  {
    name: business.founder,
    role: business.founderTitle,
    note: "The founding vision behind Vasudev Digital Library — built from a commitment to community and education in Akbarpur.",
    img: founderImg, // Import kari hui image
  },
  {
    name: business.director,
    role: "Director",
    note: "Oversees the library's day-to-day operations, ensuring every member experiences the same standard of excellence.",
    img: directorImg, // Import kari hui image
  },
];

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About Vasudev Digital Library | Best Study Library in Akbarpur"
        description="Learn about Vasudev Digital Library in Akbarpur, Uttar Pradesh. Discover our mission, vision, premium 24x7 study environment, air-conditioned study cabins, high-speed WiFi, CCTV security and commitment to helping students achieve their goals."
        keywords="About Vasudev Digital Library, Library in Akbarpur, Best Study Library, Digital Library Akbarpur, Reading Room, AC Library, Silent Study Room, Study Cabin"
        image="https://vasudevdigitallibrary.com/og-image.jpg"
        path="/about"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <div className="relative shadow-[0_20px_20px_-10px_rgba(0,0,0,0.5)] z-20">
        <PageHero
          crumb="About"
          eyebrow="Our Story"
          title="Built for aspirants who take their preparation seriously"
          subtitle="Vasudev Digital Library began with a simple observation: environment shapes outcome. Every element here — from lighting to layout — exists to remove distraction and build momentum."
        />
      </div>

      <section className="section-pad bg-navy-deep">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="What Drives Us"
            title="Mission, vision & the discipline behind it"
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <GlassCard key={v.title} delay={i * 0.08}>
                <span className="font-display text-xs text-gold/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold text-ivory">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {v.desc}
                </p>
              </GlassCard>
            ))}
          </div>
          <StatsCounter />
        </Container>
      </section>

      <section className="section-pad bg-navy">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="The people behind Vasudev"
          />

          <div className="mt-16 space-y-16">
            {leaders.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col md:flex-row gap-10 items-center ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/3">
                  <div className="aspect-square overflow-hidden rounded-3xl border border-gold/20 shadow-2xl">
                    <img
                      src={l.img}
                      alt={l.name}
                      className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-2/3 glass-panel p-8 md:p-10 rounded-3xl">
                  <h3 className="font-display text-3xl text-ivory">{l.name}</h3>
                  <p className="text-sm eyebrow mt-2 !text-gold">{l.role}</p>
                  <p className="mt-6 text-mist leading-relaxed text-lg italic">
                    "{l.note}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
