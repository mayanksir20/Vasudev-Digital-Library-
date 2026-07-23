import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCheck,
  FiUsers,
  FiShield,
  FiClock,
  FiAward,
  FiSend,
  FiPercent,
} from "react-icons/fi";
import PageTransition from "../components/layout/PageTransition";
import SEO from "../components/layout/SEO";
import PageHero from "../components/ui/PageHero";
import GlassCard from "../components/ui/GlassCard";
import Button from "../components/ui/Button";

export default function Membership() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    duration: "1 Month",
    membersCount: "1",
    shift: "10 Hours Shift",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, duration, membersCount, shift, message } = formData;

    let whatsappMsg = `*New Membership Inquiry - Vasudev Digital Library*\n\n`;
    whatsappMsg += `👤 *Name:* ${name}\n`;
    whatsappMsg += `📞 *Phone:* ${phone}\n`;
    whatsappMsg += `⏳ *Duration:* ${duration}\n`;
    whatsappMsg += `👥 *Total Members:* ${membersCount}\n`;
    whatsappMsg += `⏰ *Shift / Plan:* ${shift}\n`;
    if (message) whatsappMsg += `💬 *Note:* ${message}\n`;

    if (parseInt(membersCount) >= 5) {
      whatsappMsg += `\n🎁 *Applied for Special Group Discount (5+ Members)!*`;
    }

    const encodedUrl = encodeURIComponent(whatsappMsg);
    window.open(`https://wa.me/918948810093?text=${encodedUrl}`, "_blank");
  };

  const plans = [
    {
      title: "Standard Shift",
      price: "₹499*",
      period: "per month",
      desc: "Ideal for regular students looking for focused study hours.",
      features: [
        "5 Hours Daily Access",
        "Assigned Study Desk",
        "High-Speed WiFi",
        "RO Drinking Water",
        "Personal Charging Port",
        "AC Reading Room",
      ],
    },
    {
      title: "Extended Shift",
      price: "₹799*",
      period: "per month",
      popular: true,
      desc: "Our best & most popular plan for serious aspirants preparing all day.",
      features: [
        "10 Hours Daily Access",
        "Spacious Study Cabin",
        "High-Speed WiFi",
        "Power Backup & CCTV",
        "Discussion Room Access",
        "Personal Charging Port",
        "Free Locker Facility",
      ],
    },
    {
      title: "Long Hours Plan",
      price: "₹999*",
      period: "per month",
      desc: "Designed for intensive preparation and longer sitting hours.",
      features: [
        "15 Hours Daily Access",
        "Premium Assigned Desk",
        "High-Speed WiFi",
        "Power Backup & CCTV",
        "Priority Support",
        "Personal Charging Port",
        "Free Locker Facility",
      ],
    },
    {
      title: "Full Day 24x7 Access",
      price: "₹1,299*",
      period: "per month",
      desc: "Total flexibility — jab man aaye tab aao aur padho.",
      features: [
        "24x7 Unrestricted Access",
        "Come Anytime, Study Anytime",
        "Dedicated Premium Space",
        "High-Speed WiFi",
        "Unlimited Study Material Access",
        "Free Locker & RO Water",
      ],
    },
  ];

  return (
    <PageTransition>
      <SEO
        title="Membership Plans | Vasudev Digital Library - Akbarpur"
        description="Choose flexible and affordable membership plans at Vasudev Digital Library, Akbarpur. Enjoy 24x7 access, individual cabins, high-speed WiFi, and special group discounts for 5 or more members."
        keywords="Library Membership, Vasudev Digital Library Plans, Library Fees Akbarpur, Study Room Membership, 24x7 Library Pricing"
        image="https://vasudevdigitallibrary.com/og-image.jpg"
        path="/membership"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Membership", path: "/membership" },
        ]}
      />

      <div className="relative shadow-[0_20px_20px_-10px_rgba(0,0,0,0.5)] z-20">
        <PageHero
          crumb="Membership"
          eyebrow="Flexible & Affordable Plans"
          title="Invest in your future with the right environment"
          subtitle="Transparent pricing with zero hidden charges. Choose a plan that fits your preparation style and join Akbarpur's finest digital library."
        />
      </div>

      <section className="section-pad relative bg-navy">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-bold">
              Pricing Tiers
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-ivory mt-3">
              Simple Plans for Every Aspirant
            </h2>
            <p className="text-mist mt-3">
              Select a monthly or long-term plan tailored to your exam schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 pt-12">
            {plans.map((plan, index) => {
              if (plan.popular) {
                return (
                  <motion.div
                    key={plan.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex flex-col justify-between rounded-3xl p-6 bg-navy-deep/90 border-2 border-gold/60 shadow-[0_0_40px_rgba(212,175,55,0.25)] pt-14 mt-4 lg:mt-0"
                  >
                    {/* Popular Chip */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gold-gradient text-center text-navy-deep text-xs font-bold px-5 py-2 rounded-full uppercase tracking-wider shadow-xl z-30">
                      Most Popular
                    </div>

                    <div>
                      <h3 className="font-heading text-xl font-bold text-ivory">
                        {plan.title}
                      </h3>
                      <p className="text-mist text-sm mt-2">{plan.desc}</p>

                      <div className="my-6 flex items-baseline gap-2">
                        <span className="font-display text-4xl font-bold text-gold">
                          {plan.price}
                        </span>
                        <span className="text-mist text-xs">{plan.period}</span>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feat, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 text-sm text-ivory/80"
                          >
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/10 text-gold text-xs">
                              <FiCheck />
                            </span>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      as="link"
                      to="/contact"
                      variant="primary"
                      className="w-full text-center"
                    >
                      Choose Plan
                    </Button>
                  </motion.div>
                );
              }

              return (
                <GlassCard
                  key={plan.title}
                  delay={index * 0.1}
                  className="relative flex flex-col justify-between border border-white/10 pt-6"
                >
                  <div>
                    <h3 className="font-heading text-xl font-bold text-ivory">
                      {plan.title}
                    </h3>
                    <p className="text-mist text-sm mt-2">{plan.desc}</p>

                    <div className="my-6 flex items-baseline gap-2">
                      <span className="font-display text-4xl font-bold text-gold">
                        {plan.price}
                      </span>
                      <span className="text-mist text-xs">{plan.period}</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-sm text-ivory/80"
                        >
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/10 text-gold text-xs">
                            <FiCheck />
                          </span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    as="link"
                    to="/contact"
                    variant="outline"
                    className="w-full text-center border border-gold/40 text-gold hover:bg-gold/10"
                  >
                    Choose Plan
                  </Button>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Group Offer Banner */}
      <section className="py-12 bg-navy-deep border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-3xl bg-gradient-to-r from-gold/10 via-navy to-gold/5 p-8 md:p-12 border border-gold/20">
            <div className="flex items-center gap-6">
              <div className="hidden sm:flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/20 text-gold text-3xl shrink-0">
                <FiPercent />
              </div>
              <div>
                <span className="text-gold text-xs tracking-widest uppercase font-bold">
                  Group Benefit Offer
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-ivory mt-1">
                  Joining with 5 or more friends?
                </h3>
                <p className="text-mist text-sm md:text-base mt-2 max-w-xl">
                  Group studies boost preparation! Get an exclusive special
                  discount on monthly fees when you enroll 5 or more members
                  together.
                </p>
              </div>
            </div>
            <a href="#membership-form" className="shrink-0">
              <Button variant="primary" className="!px-8 !py-3">
                Claim Group Offer
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Membership Inquiry & WhatsApp Form Section */}
      <section id="membership-form" className="section-pad relative bg-navy">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-bold">
              Direct Booking
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-ivory mt-2">
              Book Your Seat Now
            </h2>
            <p className="text-mist mt-2">
              Fill out the form below. Your details will be sent directly to our
              official WhatsApp (+91 8948810093) for instant confirmation.
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 space-y-6 shadow-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-ivory/80 font-heading mb-2">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Verma"
                  className="w-full bg-navy-deep/80 border border-white/10 rounded-xl px-4 py-3 text-ivory placeholder:text-mist/50 focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-ivory/80 font-heading mb-2">
                  WhatsApp Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9876543210"
                  className="w-full bg-navy-deep/80 border border-white/10 rounded-xl px-4 py-3 text-ivory placeholder:text-mist/50 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-ivory/80 font-heading mb-2">
                  Select Duration
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full bg-navy-deep/80 border border-white/10 rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="1 Month">1 Month</option>
                  <option value="3 Months">3 Months (Save 10%)</option>
                  <option value="6 Months">6 Months (Save 15%)</option>
                  <option value="1 Year">1 Year (Best Value)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-ivory/80 font-heading mb-2">
                  Total Members Joining
                </label>
                <select
                  name="membersCount"
                  value={formData.membersCount}
                  onChange={handleChange}
                  className="w-full bg-navy-deep/80 border border-white/10 rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="1">1 Member (Individual)</option>
                  <option value="2">2 Members</option>
                  <option value="3">3 Members</option>
                  <option value="4">4 Members</option>
                  <option value="5">5 Members (Special Group Offer!)</option>
                  <option value="6+">6+ Members (Mega Group Offer!)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-ivory/80 font-heading mb-2">
                  Select Plan / Shift
                </label>
                <select
                  name="shift"
                  value={formData.shift}
                  onChange={handleChange}
                  className="w-full bg-navy-deep/80 border border-white/10 rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="5 Hours Shift (₹499)">5 Hours Shift (₹499)</option>
                  <option value="10 Hours Shift (₹799)">10 Hours Shift - Best (₹799)</option>
                  <option value="15 Hours Shift (₹999)">15 Hours Shift (₹999)</option>
                  <option value="Full Day 24x7 (₹1,299)">Full Day 24x7 (₹1,299)</option>
                </select>
              </div>
            </div>

            {(formData.membersCount === "5" ||
              formData.membersCount === "6+") && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-xl bg-gold/15 border border-gold/30 text-gold text-sm flex items-center gap-3"
              >
                <FiUsers className="text-xl shrink-0" />
                <span>
                  🎉 <strong>Great news!</strong> Since you are registering with
                  5+ members, you qualify for our{" "}
                  <strong>Special Group Fee Discount</strong>. This will be
                  applied when you send the message!
                </span>
              </motion.div>
            )}

            <div>
              <label className="block text-xs uppercase tracking-wider text-ivory/80 font-heading mb-2">
                Additional Message / Query (Optional)
              </label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mention any specific timing or requirement..."
                className="w-full bg-navy-deep/80 border border-white/10 rounded-xl px-4 py-3 text-ivory placeholder:text-mist/50 focus:outline-none focus:border-gold transition-colors resize-none"
              ></textarea>
            </div>

            <div className="pt-2 text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-gold-gradient text-navy-deep font-bold px-8 py-4 rounded-xl shadow-lg shadow-gold/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <FiSend /> Send Booking Details to WhatsApp (+91 8948810093)
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </PageTransition>
  );
}