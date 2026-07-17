import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiStar, FiCheckCircle } from "react-icons/fi";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import useFeedback from "../../hooks/useFeedback";

export default function FeedbackSection() {
  const { addEntry } = useFeedback();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) return;
    addEntry({ ...form, rating });
    setSubmitted(true);
    setForm({ name: "", phone: "", message: "" });
    setRating(5);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <section className="section-pad relative bg-navy">
      <Container>
        <div className="mx-auto max-w-2xl">
          <SectionHeading eyebrow="Feedback" title="Tell us about your experience" />

          <form onSubmit={handleSubmit} className="glass-panel mt-12 rounded-3xl p-7 md:p-10 space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-heading text-mist">Name</label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-ivory placeholder:text-mist/50 outline-none focus-visible:outline-2 focus-visible:outline-gold"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-heading text-mist">Phone</label>
                <input
                  required
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-ivory placeholder:text-mist/50 outline-none focus-visible:outline-2 focus-visible:outline-gold"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-heading text-mist">Message</label>
              <textarea
                required
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Share your experience with us..."
                className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-ivory placeholder:text-mist/50 outline-none focus-visible:outline-2 focus-visible:outline-gold resize-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-heading text-mist">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    aria-label={`Rate ${star} stars`}
                    className="text-2xl transition-transform hover:scale-110"
                  >
                    <FiStar
                      className={
                        star <= (hoverRating || rating) ? "fill-gold text-gold" : "text-mist/30"
                      }
                    />
                  </button>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full sm:w-auto">Submit Feedback</Button>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 rounded-xl bg-gold/10 px-4 py-3 text-sm text-gold"
                >
                  <FiCheckCircle /> Thank you! Your feedback has been recorded.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </Container>
    </section>
  );
}
