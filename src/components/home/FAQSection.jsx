import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { faqs } from "../../data/siteData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-pad relative bg-navy-deep">
      <Container>
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-gold/10">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={f.q} className="py-2">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-heading text-base md:text-lg text-ivory">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold"
                  >
                    <FiPlus />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-mist">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
