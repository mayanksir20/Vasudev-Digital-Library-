import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from "react-icons/fi";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { galleryImages, galleryCategories } from "../../data/siteData";

export default function GallerySection({ compact = false }) {
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const filtered = galleryImages.filter((g) => filter === "All" || g.category === filter);
  const shown = compact ? filtered.slice(0, 6) : filtered;

  const openAt = (img) => setActiveIndex(shown.findIndex((s) => s.id === img.id));
  const close = () => setActiveIndex(null);
  const next = () => setActiveIndex((i) => (i + 1) % shown.length);
  const prev = () => setActiveIndex((i) => (i - 1 + shown.length) % shown.length);

  return (
    <section className="section-pad relative bg-navy-deep">
      <Container>
        <SectionHeading
          eyebrow="Photo Gallery"
          title="A glimpse inside Vasudev"
          subtitle="Reading halls, private chambers and the quiet corners that make this space feel different."
        />

        {!compact && (
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {galleryCategories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-5 py-2 text-xs font-heading font-semibold transition-colors ${
                  filter === c ? "bg-gold-gradient text-navy-deep" : "glass-panel-light text-ivory/70 hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {shown.map((img, i) => (
            <motion.button
              key={img.id}
              onClick={() => openAt(img)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (i % 6) * 0.06, duration: 0.6 }}
              className="group relative mb-4 block w-full overflow-hidden rounded-2xl break-inside-avoid"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-navy-deep/0 opacity-0 transition-all duration-300 group-hover:bg-navy-deep/50 group-hover:opacity-100">
                <FiZoomIn className="text-2xl text-gold" />
              </div>
            </motion.button>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/90 backdrop-blur-md p-6"
          >
            <button
              onClick={close}
              aria-label="Close preview"
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full glass-panel-light text-ivory"
            >
              <FiX />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
              className="absolute left-4 md:left-8 flex h-11 w-11 items-center justify-center rounded-full glass-panel-light text-ivory"
            >
              <FiChevronLeft />
            </button>
            <motion.img
              key={shown[activeIndex]?.id}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              src={shown[activeIndex]?.src}
              alt={shown[activeIndex]?.alt}
              className="max-h-[80vh] max-w-[88vw] rounded-2xl object-contain"
            />
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
              className="absolute right-4 md:right-8 flex h-11 w-11 items-center justify-center rounded-full glass-panel-light text-ivory"
            >
              <FiChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
