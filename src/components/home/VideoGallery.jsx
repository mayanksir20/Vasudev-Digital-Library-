import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlay, FiX } from "react-icons/fi";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { videoGallery } from "../../data/siteData";

export default function VideoGallery() {
  const [active, setActive] = useState(null);

  return (
    <section className="section-pad relative bg-navy">
      <Container>
        <SectionHeading
          eyebrow="Video Gallery"
          title="See the library in motion"
          subtitle="A closer look at our reading halls, chambers and the everyday rhythm of Vasudev Digital Library."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {videoGallery.map((v, i) => (
            <motion.button
              key={v.id}
              onClick={() => setActive(v)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img src={v.thumb} alt={v.title} className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-navy-deep/40 transition-colors group-hover:bg-navy-deep/55" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-navy-deep shadow-[0_0_0_8px_rgba(212,175,55,0.15)] transition-transform group-hover:scale-110">
                  <FiPlay className="ml-0.5" />
                </span>
              </span>
              <p className="absolute bottom-4 left-4 right-4 text-left font-heading text-sm font-semibold text-ivory">{v.title}</p>
            </motion.button>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/90 backdrop-blur-md p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel relative w-full max-w-2xl rounded-2xl p-6"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close video"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full glass-panel-light text-ivory"
              >
                <FiX />
              </button>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <img src={active.thumb} alt={active.title} className="h-full w-full object-cover opacity-60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-navy-deep">
                    <FiPlay className="ml-0.5" />
                  </span>
                  <p className="max-w-xs text-sm text-mist">Video playback preview — connect a hosting source to play "{active.title}" in full.</p>
                </div>
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-ivory">{active.title}</h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
