import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "./Container";

// 1. Apni library ki image yahan import karein
// Path ko sahi jagah point karein, e.g., ../assets/images/hero-bg.jpg
import libraryBg from "../../assets/images/library-2.webp"; 

export default function PageHero({ eyebrow, title, subtitle, crumb }) {
  return (
    <section className="relative overflow-hidden pt-40 pb-28">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src={libraryBg} 
            alt="Vasudev Digital Library interior" 
            className="h-full w-full object-cover object-center"
            // Optionally add a slight scale animation on load
            // initial={{ scale: 1.1 }}
            // animate={{ scale: 1 }}
            // transition={{ duration: 1.5, ease: "easeOut" }}
          />
          {/* Dark Overlay for Readability - Crucial when using images */}
          <div className="absolute inset-0 bg-navy-deep/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent" />
        </div>

      {/* Background Ornaments - Made more subtle over image */}
      <div className="pointer-events-none absolute inset-0 z-10 opacity-40">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-gold/5 blur-[128px]" />
        <div className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-gold/5 blur-[128px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <Container className="relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6 text-center"
        >
          {/* Breadcrumb - Updated text color for image contrast */}
          <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-mist/80 font-semibold">
            <Link to="/" className="hover:text-gold transition-colors duration-300">Home</Link>
            <span className="text-gold/50">—</span>
            <span className="text-gold">{crumb}</span>
          </div>

          {/* Eyebrow */}
          {eyebrow && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 text-gold/90 text-xs tracking-[0.3em] uppercase font-bold"
            >
              <span className="h-px w-10 bg-gradient-to-l from-gold/70 to-transparent" />
              {eyebrow}
              <span className="h-px w-10 bg-gradient-to-r from-gold/70 to-transparent" />
            </motion.span>
          )}

          {/* Title */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-ivory max-w-4xl leading-[1.1] tracking-tight drop-shadow-sm">
            {title.split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-3">{word}</span>
            ))}
          </h1>

          {/* Subtitle - Brightened slightly */}
          {subtitle && (
            <p className="max-w-xl text-mist/90 text-lg md:text-xl font-light leading-relaxed drop-shadow-sm">
              {subtitle}
            </p>
          )}
        </motion.div>
        
        {/* Optional: Scroll Down Indicator */}
        {/* <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
        >
          <div className="h-12 w-6 rounded-full border-2 border-ivory/20 flex justify-center p-1.5">
            <motion.div 
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
              className="w-1.5 h-3 bg-gold/80 rounded-full"
            />
          </div>
          <span className="sr-only">Scroll Down</span>
        </motion.div> */}

      </Container>
      
      {/* Subtle Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent z-20" />
      
    </section>
  );
}