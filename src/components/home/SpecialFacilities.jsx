import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { specialFacilities } from "../../data/siteData";
// Apni facility ki image yahan import karein (path apne folder ke hisaab se check kar lein)
import facilityImg from "../../assets/images/banner-blue.webp";

export default function SpecialFacilities() {
  return (
    <section className="section-pad relative bg-navy-deep overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.04] blur-3xl" />

      <Container>
        <SectionHeading
          eyebrow="Special Facilities"
          title="Designed for Ultimate Focus"
          subtitle="Not every hour of study looks the same — so neither does our library."
        />

        {/* Split Layout: Left side Facilities, Right side Image with Overlay */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Side: Facilities List (Takes 7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specialFacilities.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: (i % 2) * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl border border-gold/10 bg-navy/60 p-5 transition-colors hover:border-gold/40"
              >
                <span className="font-display text-xs text-gold/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-heading text-base font-semibold text-ivory">
                  {f.title}
                </h3>
                <p className="mt-1.5 text-xs text-mist leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Attractive Image Section with Overlay (Takes 5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-gold/20 shadow-2xl group">
              {/* Facility Image */}
              <img
                src={facilityImg}
                alt="Library special facilities"
                className="w-full h-[690px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />

              {/* Attractive Highlight Box inside Image section */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-navy/80 backdrop-blur-md border border-gold/20">
                <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                  Premium Environment
                </span>
                <h4 className="mt-1 font-display text-xl text-ivory">
                  Quiet, Air-Conditioned & Ergonomic
                </h4>
                <p className="mt-1 text-xs text-mist leading-relaxed">
                  Har ek seat par dedicated charging ports, high-speed Wi-Fi,
                  aur comfortable lighting di gayi hai taaki aap bina kisi
                  distraction ke padh sakein.
                </p>
              </div>
            </div>

            {/* Decorative Glow behind the image */}
            <div className="absolute -inset-1 -z-10 rounded-3xl bg-gold/10 blur-xl opacity-50" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
