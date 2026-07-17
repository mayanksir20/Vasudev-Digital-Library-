import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiEye, FiX, FiAward } from "react-icons/fi";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import { certificates } from "../../data/siteData";

export default function Certificates() {
  const [preview, setPreview] = useState(null);

  return (
    <section className="section-pad relative bg-navy-deep">
      <Container>
        <SectionHeading
          eyebrow="Recognised & Approved"
          title="Certified for your trust"
          subtitle="Vasudev Digital Library operates under verified government registrations and safety approvals."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((c, i) => (
            <GlassCard key={c.title} delay={i * 0.08} className="flex flex-col items-start">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold text-xl">
                <FiAward />
              </span>
              <h3 className="mt-5 font-heading text-base font-semibold text-ivory">{c.title}</h3>
              <p className="mt-1 text-xs text-mist">{c.issuer} · {c.year}</p>
              <button
                onClick={() => setPreview(c)}
                className="mt-5 flex items-center gap-2 text-xs font-heading font-semibold text-gold hover:gap-3 transition-all"
              >
                <FiEye /> Preview
              </button>
            </GlassCard>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/80 backdrop-blur-sm p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel relative w-full max-w-md rounded-2xl p-8 text-center"
            >
              <button
                onClick={() => setPreview(null)}
                aria-label="Close preview"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full glass-panel-light text-ivory"
              >
                <FiX />
              </button>
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-navy-deep text-2xl">
                <FiAward />
              </span>
              <h3 className="mt-5 font-display text-2xl text-ivory">{preview.title}</h3>
              <p className="mt-2 text-sm text-mist">Issued by {preview.issuer} · {preview.year}</p>
              <p className="mt-4 text-xs text-mist/70">
                Full certificate copies are available for viewing at our front desk on request.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
