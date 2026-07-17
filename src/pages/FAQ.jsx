import PageTransition from "../components/layout/PageTransition";
import SEO from "../components/layout/SEO";
import PageHero from "../components/ui/PageHero";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";

export default function FAQ() {
  return (
    <PageTransition>
      <SEO
        title="Frequently Asked Questions"
        description="Answers to common questions about Vasudev Digital Library — timings, seating, safety, fees and enrolment."
        path="/faq"
      />
      <PageHero
        crumb="FAQ"
        eyebrow="Have Questions?"
        title="Everything you might want to know"
        subtitle="Can't find your answer here? Reach out to us directly on WhatsApp or by phone."
      />
      <FAQSection />
      <CTASection />
    </PageTransition>
  );
}
