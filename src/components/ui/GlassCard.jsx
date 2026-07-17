import { motion } from "framer-motion";

/**
 * Reusable glassmorphic card with hover lift + gold glow.
 */
export default function GlassCard({ children, className = "", delay = 0, hover = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -6, transition: { duration: 0.3 } } : undefined}
      className={`glass-panel rounded-2xl p-6 md:p-7 group relative overflow-hidden ${className}`}
    >
      <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {children}
    </motion.div>
  );
}
