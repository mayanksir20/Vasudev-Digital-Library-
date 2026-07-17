import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { whatsappLink } from "../../data/siteData";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      </div>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel flex flex-col items-center gap-8 rounded-3xl p-10 text-center md:flex-row md:justify-between md:text-left"
        >
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ivory">
              Your seat at Vasudev is waiting.
            </h2>
            <p className="mt-2 text-mist text-sm md:text-base">
              Visit us, call us, or start a conversation on WhatsApp today.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button as="link" to="/contact" icon={FiArrowRight}>Join Now</Button>
            <Button as="a" href={whatsappLink()} target="_blank" variant="ghost">Message on WhatsApp</Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
