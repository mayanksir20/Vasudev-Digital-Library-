import { motion } from "framer-motion";

/**
 * Reusable section heading with eyebrow label + display title + optional subtitle.
 * align: "left" | "center"
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-4 max-w-2xl ${alignment}`}
    >
      {eyebrow && (
        <span className="eyebrow flex items-center gap-3">
          <span className="h-px w-8 bg-gold/70" />
          {eyebrow}
          {align === "center" && <span className="h-px w-8 bg-gold/70" />}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-5xl leading-tight ${
          light ? "text-ivory" : "text-ivory"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-mist text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
