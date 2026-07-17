import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { specialFacilities } from "../../data/siteData";

export default function SpecialFacilities() {
  return (
    <section className="section-pad relative bg-navy-deep overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.04] blur-3xl" />
      <Container>
        <SectionHeading
          eyebrow="Special Facilities"
          title="Spaces built for every kind of focus"
          subtitle="Not every hour of study looks the same — so neither does our library."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specialFacilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl border border-gold/10 bg-navy/60 p-6 transition-colors hover:border-gold/40"
            >
              <span className="font-display text-xs text-gold/70">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-heading text-lg font-semibold text-ivory">{f.title}</h3>
              <p className="mt-2 text-sm text-mist leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
