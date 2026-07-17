import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Members Guided" },
  { value: 120, suffix: "", label: "Study Chambers" },
  { value: 24, suffix: "×7", label: "Access & Security" },
  { value: 98, suffix: "%", label: "Member Satisfaction" },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl text-gold-gradient">
      {display}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <div className="mt-20 grid grid-cols-2 gap-8 border-t border-gold/10 pt-14 md:grid-cols-4">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          className="text-center"
        >
          <Counter value={s.value} suffix={s.suffix} />
          <p className="mt-2 text-sm text-mist font-heading">{s.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
