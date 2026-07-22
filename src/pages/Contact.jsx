import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import PageTransition from "../components/layout/PageTransition";
import SEO from "../components/layout/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import GlassCard from "../components/ui/GlassCard";
import Button from "../components/ui/Button";
import { business, whatsappLink } from "../data/siteData";

const infoCards = [
  {
    icon: FiMapPin,
    title: "Address",
    lines: [business.address.line1, business.address.line2],
  },
  {
    icon: FiPhone,
    title: "Phone",
    lines: business.phones.map((p) => `+91 ${p}`),
  },
  { icon: FaWhatsapp, title: "WhatsApp", lines: [`+91 ${business.whatsapp}`] },
  { icon: FiMail, title: "Email", lines: [business.email] },
  { icon: FiClock, title: "Working Hours", lines: [business.hours.weekday] },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) return;

    // 1. Hosting ke PHP script par data bhejna (Email ke liye)
    try {
      await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch (error) {
      console.error("Email sending error:", error);
    }

    // 2. WhatsApp par bhi redirect karne ke liye
    const adminWhatsAppNumber = "918948810093"; // Apna WhatsApp number dalein
    const text = `New Website Query:%0A*Name:* ${encodeURIComponent(form.name)}%0A*Phone:* ${encodeURIComponent(form.phone)}%0A*Email:* ${encodeURIComponent(form.email || "N/A")}%0A*Message:* ${encodeURIComponent(form.message)}`;
    const whatsappUrl = `https://wa.me/${adminWhatsAppNumber}?text=${text}`;

    // Thoda sa delay ya direct open
    window.open(whatsappUrl, "_blank");

    // Success state aur form clear karna
    setSent(true);
    setForm({ name: "", phone: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <PageTransition>
      <SEO
        title="Contact Vasudev Digital Library | Best Study Library in Akbarpur"
        description="Contact Vasudev Digital Library in Akbarpur, Uttar Pradesh. Call or WhatsApp us to book your study seat. Visit our premium 24x7 air-conditioned digital library with silent study cabins, high-speed WiFi, CCTV security and a distraction-free environment for competitive exam preparation."
        keywords="Contact Vasudev Digital Library, Library in Akbarpur, Digital Library Akbarpur, Best Study Library, Reading Room Akbarpur, AC Library, Silent Study Room, 24x7 Library, WiFi Library, Library Contact Number, Study Room Near Me"
        image="https://vasudevdigitallibrary.com/og-image.jpg"
        path="/contact"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <div className="relative shadow-[0_20px_20px_-10px_rgba(0,0,0,0.5)] z-20">
        <PageHero
          crumb="Contact"
          eyebrow="Get In Touch"
          title="We'd love to have you visit"
          subtitle="Call us, message us on WhatsApp, or stop by — our team is ready to help you find your seat."
        />
      </div>

      <section className="section-pad bg-navy-deep">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {infoCards.map((c, i) => (
              <GlassCard
                key={c.title}
                delay={i * 0.08}
                hover={false}
                className="lg:col-span-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold text-lg">
                  <c.icon />
                </span>
                <h3 className="mt-4 font-heading text-sm font-semibold text-ivory">
                  {c.title}
                </h3>
                <div className="mt-1.5 space-y-0.5">
                  {c.lines.map((l) => (
                    <p key={l} className="text-xs text-mist">
                      {l}
                    </p>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-navy pt-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-3xl border border-gold/10"
            >
              <iframe
                title="Vasudev Digital Library location"
                src={business.mapEmbed}
                width="100%"
                height="100%"
                style={{
                  minHeight: 420,
                  border: 0,
                  filter: "grayscale(0.3) contrast(1.1)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="glass-panel rounded-3xl p-7 md:p-9 space-y-5"
            >
              <h3 className="font-display text-2xl text-ivory">
                Send us a message
              </h3>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-ivory placeholder:text-mist/50 outline-none focus-visible:outline-2 focus-visible:outline-gold"
                />
                <input
                  required
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-ivory placeholder:text-mist/50 outline-none focus-visible:outline-2 focus-visible:outline-gold"
                />
              </div>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email (optional)"
                className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-ivory placeholder:text-mist/50 outline-none focus-visible:outline-2 focus-visible:outline-gold"
              />
              <textarea
                required
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                className="w-full resize-none rounded-xl bg-white/5 px-4 py-3 text-sm text-ivory placeholder:text-mist/50 outline-none focus-visible:outline-2 focus-visible:outline-gold"
              />
              <div className="flex flex-wrap gap-4">
                <Button type="submit">Send Message</Button>
                <Button
                  as="a"
                  href={whatsappLink()}
                  target="_blank"
                  variant="ghost"
                >
                  Chat on WhatsApp
                </Button>
              </div>
              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 rounded-xl bg-gold/10 px-4 py-3 text-sm text-gold"
                  >
                    <FiCheckCircle /> Thanks! We'll get back to you shortly. For
                    a faster reply, call +91 {business.phones[0]}.
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
