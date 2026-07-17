import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import PageTransition from "../components/layout/PageTransition";
import SEO from "../components/layout/SEO";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-deep pt-24">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-gold/5 blur-3xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <Container className="relative text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-gold-gradient text-[7rem] leading-none sm:text-[10rem]"
          >
            404
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-2 font-display text-2xl sm:text-3xl text-ivory"
          >
            This chapter hasn't been written yet
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mx-auto mt-3 max-w-md text-mist text-sm md:text-base"
          >
            The page you're looking for may have moved or no longer exists. Let's get you back
            to a familiar page.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8"
          >
            <Button as="link" to="/" icon={FiArrowLeft}>Back to Home</Button>
          </motion.div>
        </Container>
      </section>
    </PageTransition>
  );
}
