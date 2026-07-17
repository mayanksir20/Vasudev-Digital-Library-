import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { testimonials } from "../../data/siteData";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // 5 seconds mein slide hoga
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  // 3 items nikalne ka logic (index se start karke)
  const getVisibleItems = () => {
    return [0, 1, 2].map((offset) => testimonials[(index + offset) % testimonials.length]);
  };

  return (
    <section className="section-pad relative bg-navy-deep overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-1/3 h-80 w-80 rounded-full bg-gold/[0.06] blur-3xl" />
      <Container>
        <SectionHeading eyebrow="Testimonials" title="Words from our members" />

        {/* 3 Grid Layout */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {getVisibleItems().map((t, i) => (
              <motion.div
                key={`${index}-${i}`} // Key change hone par animation trigger hoga
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="glass-panel rounded-3xl p-8 text-center flex flex-col justify-between"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold text-2xl mb-4">
                  <HiOutlineChatBubbleBottomCenterText />
                </span>
                <p className="font-display text-lg italic leading-relaxed text-ivory mb-6">
                  "{t.quote}"
                </p>
                <div>
                  <div className="flex justify-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <FiStar
                        key={starIndex}
                        className={starIndex < t.rating ? "fill-gold text-gold" : "text-mist/40"}
                      />
                    ))}
                  </div>
                  <p className="font-heading text-sm font-semibold text-ivory">{t.name}</p>
                  <p className="text-xs text-mist">{t.exam}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}