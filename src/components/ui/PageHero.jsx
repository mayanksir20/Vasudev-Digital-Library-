import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "./Container";

export default function PageHero({ eyebrow, title, subtitle, crumb }) {
  return (
    <section className="relative overflow-hidden bg-navy-deep pt-40 pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D4AF37" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-5 text-center"
        >
          <div className="flex items-center gap-2 text-xs text-mist font-heading">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">{crumb}</span>
          </div>
          {eyebrow && <span className="eyebrow flex items-center gap-3"><span className="h-px w-8 bg-gold/70" />{eyebrow}<span className="h-px w-8 bg-gold/70" /></span>}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-ivory max-w-3xl">{title}</h1>
          {subtitle && <p className="max-w-2xl text-mist text-base md:text-lg">{subtitle}</p>}
        </motion.div>
      </Container>
    </section>
  );
}
