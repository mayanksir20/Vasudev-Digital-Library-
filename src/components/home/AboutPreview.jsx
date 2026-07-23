import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import StatsCounter from "./StatsCounter";
import AboutPreviewImage from "../../assets/images/banner-1.webp";

export default function AboutPreview() {
  return (
    <section className="section-pad relative bg-navy-deep">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
         <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {/* 1. Pehle Card (Girls Special Cabin Safety Notice) */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="glass-panel w-full rounded-2xl p-5 border border-gold/30 shadow-xl backdrop-blur-md bg-navy/60"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2.5 w-2.5 rounded-full bg-gold animate-pulse" />
                <span className="text-xs font-heading uppercase tracking-wider text-gold font-bold">
                  100% Women Safety & Privacy
                </span>
              </div>
              <p className="text-sm text-ivory/90 leading-relaxed font-sans">
                We provide <strong className="text-gold">personal cabins exclusively for girls</strong>. Separate and secure private rooms designed specially for female aspirants with complete peace of mind.
              </p>
            </motion.div>

            {/* 2. Uske Neeche Image Wala Section */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={AboutPreviewImage}
                  alt="Student studying in a private chamber"
                  className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
              </div>

              {/* Existing 7+ Years Experience Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="glass-panel absolute -bottom-6 -right-4 sm:-right-6 w-60 rounded-2xl p-4 sm:p-5 shadow-2xl z-10"
              >
                <p className="font-display text-3xl text-gold">7+ yrs</p>
                <p className="text-xs sm:text-sm text-mist">
                  of shaping disciplined, focused study habits in Akbarpur.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="About Vasudev"
              title="Where discipline meets a premium learning atmosphere"
              subtitle="Vasudev Digital Library was founded on a simple belief: an aspirant's environment shapes their outcome. Every chamber, every light and every silent corner has been designed to remove distraction and replace it with momentum."
            />
            <div className="mt-8 space-y-5">
              {[
                {
                  title: "Our Mission",
                  desc: "To give every aspirant in Akbarpur access to a premium, distraction-free study environment, regardless of background.",
                },
                {
                  title: "Our Vision",
                  desc: "To become the region's most trusted name in disciplined, outcome-driven study spaces.",
                },
                {
                  title: "Our Discipline",
                  desc: "Strict silent zones, individual chambers and a culture of focus built into every corner of the library.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="flex gap-4 border-l-2 border-gold/30 pl-5"
                >
                  <div>
                    <p className="font-heading text-ivory font-semibold">
                      {item.title}
                    </p>
                    <p className="text-sm text-mist mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-9">
              <Button
                as="link"
                to="/about"
                variant="ghost"
                icon={FiArrowUpRight}
              >
                Discover Our Full Story
              </Button>
            </div>
          </div>
        </div>

        <StatsCounter />
      </Container>
    </section>
  );
}
