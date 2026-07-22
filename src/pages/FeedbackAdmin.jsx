import { motion } from "framer-motion";
import { FiStar, FiTrash2, FiInbox } from "react-icons/fi";
import PageTransition from "../components/layout/PageTransition";
import SEO from "../components/layout/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import useFeedback from "../hooks/useFeedback";

export default function FeedbackAdmin() {
  const { entries, removeEntry, clearAll } = useFeedback();

  return (
    <PageTransition>
      <SEO
        title="Feedback Admin Panel | Vasudev Digital Library"
        description="Secure administrative dashboard for managing and reviewing member feedback submitted through the Vasudev Digital Library website."
        keywords="Feedback Admin, Vasudev Digital Library Admin"
        image="https://vasudevdigitallibrary.com/og-image.jpg"
        path="/feedback-admin"
        robots="noindex,nofollow"
      />
      <PageHero
        crumb="Feedback Admin"
        eyebrow="Internal View"
        title="Submitted Feedback"
        subtitle="All feedback submitted through the website is stored locally in this browser and listed below."
      />

      <section className="section-pad bg-navy-deep pt-0">
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm text-mist">
              {entries.length} submission{entries.length !== 1 ? "s" : ""}
            </p>
            {entries.length > 0 && (
              <button
                onClick={clearAll}
                className="text-xs font-heading font-semibold text-mist hover:text-red-400 transition-colors"
              >
                Clear all
              </button>
            )}
          </div>

          {entries.length === 0 ? (
            <div className="glass-panel flex flex-col items-center gap-4 rounded-3xl p-16 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold text-2xl">
                <FiInbox />
              </span>
              <p className="text-mist text-sm max-w-sm">
                No feedback yet. Submissions made through the Feedback form on
                the homepage will appear here, stored in this browser's local
                storage.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {entries.map((e, i) => (
                <motion.div
                  key={e.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="glass-panel relative rounded-2xl p-6"
                >
                  <button
                    onClick={() => removeEntry(e.id)}
                    aria-label="Delete entry"
                    className="absolute right-4 top-4 text-mist hover:text-red-400 transition-colors"
                  >
                    <FiTrash2 size={15} />
                  </button>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <FiStar
                        key={s}
                        size={13}
                        className={
                          s < e.rating ? "fill-gold text-gold" : "text-mist/30"
                        }
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-ivory leading-relaxed">
                    {e.message}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-mist">
                    <span>
                      {e.name} · {e.phone}
                    </span>
                    <span>{new Date(e.date).toLocaleDateString()}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </Container>
      </section>
    </PageTransition>
  );
}
