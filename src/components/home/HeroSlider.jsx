import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { whatsappLink } from "../../data/siteData";

const slides = [
  {
    id: 1,
    eyebrow: "Chapter I",
    title: "A Luxury Study\nEnvironment",
    subtitle:
      "Individually chambered seating, premium finishes and an atmosphere built for serious preparation.",
    img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 2,
    eyebrow: "Chapter II",
    title: "A Peaceful\nLearning Space",
    subtitle:
      "Silent zones, filtered light and a calm environment designed to keep your focus unbroken.",
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 3,
    eyebrow: "Chapter III",
    title: "24×7 Smart\nDigital Library",
    subtitle:
      "Round-the-clock access, high-speed connectivity and security that never sleeps — so neither do your ambitions.",
    img: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1920&auto=format&fit=crop",
  },
];

const SEAT_ROWS = 4;
const SEAT_COLS = 6;

function LiveSeatPanel() {
  const [seats, setSeats] = useState(() =>
    Array.from({ length: SEAT_ROWS * SEAT_COLS }, () => Math.random() > 0.42)
  );

  useEffect(() => {
    const id = setInterval(() => {
      setSeats((prev) => {
        const next = [...prev];
        const idx = Math.floor(Math.random() * next.length);
        next[idx] = !next[idx];
        return next;
      });
    }, 1800);
    return () => clearInterval(id);
  }, []);

  const available = seats.filter((s) => !s).length;

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="glass-panel hidden lg:flex w-72 flex-col gap-4 rounded-2xl p-5"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="eyebrow !text-[0.62rem]">Live Seat Map</p>
          <p className="font-display text-2xl text-ivory">
            {available} <span className="text-sm font-body text-mist font-normal">seats open</span>
          </p>
        </div>
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
        </span>
      </div>
      <div className="grid grid-cols-6 gap-2">
        {seats.map((occupied, i) => (
          <motion.span
            key={i}
            animate={{ backgroundColor: occupied ? "rgba(212,175,55,0.85)" : "rgba(255,255,255,0.12)" }}
            transition={{ duration: 0.6 }}
            className="aspect-square w-full rounded-[4px]"
          />
        ))}
      </div>
      <div className="flex items-center gap-4 text-[11px] text-mist">
        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-[2px] bg-gold/85" /> Occupied</span>
        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-[2px] bg-white/15" /> Available</span>
      </div>
    </motion.div>
  );
}

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(id);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-navy-deep">
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <motion.div style={{ y }} className="absolute inset-0 -top-10">
            <img src={slide.img} alt={slide.title} className="h-[120%] w-full object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/60 to-navy-deep" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/70 via-transparent to-navy-deep/40" />
        </motion.div>
      </AnimatePresence>

      {/* floating decorative shapes */}
      <motion.div
        className="pointer-events-none absolute top-24 right-[12%] h-40 w-40 rounded-full border border-gold/20"
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-32 left-[8%] h-24 w-24 rounded-full bg-gold/10 blur-2xl"
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative flex h-full items-center pt-20">
        <div className="flex w-full flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="eyebrow mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-gold/70" />
                  {slide.eyebrow}
                </span>
                <h1 className="whitespace-pre-line font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.05] text-ivory">
                  {slide.title}
                </h1>
                <p className="mt-6 max-w-lg text-base md:text-lg text-mist">{slide.subtitle}</p>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Button as="link" to="/contact" icon={FiArrowRight}>Join Now</Button>
              <Button as="link" to="/facilities" variant="ghost">View Facilities</Button>
              <Button as="a" href={whatsappLink()} target="_blank" variant="dark">Contact Us</Button>
            </motion.div>
          </div>

          <LiveSeatPanel />
        </div>
      </Container>

      {/* slide controls */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {slides.map((s, i) => (
              <button
                key={s.id}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className="group relative h-1.5 w-10 overflow-hidden rounded-full bg-white/15"
              >
                {i === index && (
                  <motion.span
                    layoutId="slide-progress"
                    className="absolute inset-y-0 left-0 rounded-full bg-gold"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6.5, ease: "linear" }}
                  />
                )}
                {i !== index && <span className="absolute inset-y-0 left-0 w-0 rounded-full bg-gold" />}
              </button>
            ))}
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full glass-panel-light text-ivory hover:text-gold"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={() => setIndex((i) => (i + 1) % slides.length)}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full glass-panel-light text-ivory hover:text-gold"
            >
              <FiChevronRight />
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
}
