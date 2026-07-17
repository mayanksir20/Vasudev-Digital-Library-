import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { safetyTimeline } from "../../data/siteData";

export default function SafetyTimeline() {
  return (
    <section className="section-pad relative bg-navy">
      <Container>
        <SectionHeading
          eyebrow="Safety & Comfort"
          title="A journey through every safeguard"
          subtitle="From the moment you enter to the moment you rest — safety is built into every step of your day here."
        />

        <div className="relative mt-16">
          <div className="hairline absolute left-4 top-0 bottom-0 w-px md:left-1/2" />
          <div className="space-y-10">
            {safetyTimeline.map((item, i) => {
              const leftSide = i % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: leftSide ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex items-start gap-6 pl-12 md:w-1/2 md:pl-0 ${
                    leftSide ? "md:mr-auto md:pr-12 md:text-right md:flex-row-reverse" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gold-gradient font-heading text-xs font-bold text-navy-deep md:left-1/2 md:-translate-x-1/2">
                    {i + 1}
                  </span>
                  <div className="glass-panel rounded-2xl p-5 flex-1">
                    <h3 className="font-heading text-base font-semibold text-ivory">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-mist">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
