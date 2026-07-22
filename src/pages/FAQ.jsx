import PageTransition from "../components/layout/PageTransition";
import SEO from "../components/layout/SEO";
import PageHero from "../components/ui/PageHero";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";

export default function FAQ() {
  return (
    <PageTransition>
      <SEO
        title="Frequently Asked Questions | Vasudev Digital Library - Akbarpur"
        description="Find answers to the most frequently asked questions about Vasudev Digital Library in Akbarpur. Learn about membership plans, 24x7 timings, study cabins, WiFi, CCTV security, admission process, fees and library facilities."
        keywords="Vasudev Digital Library FAQ, Library in Akbarpur, Digital Library Questions, Library Membership, Study Library FAQ, 24x7 Library, Reading Room Akbarpur, AC Library, WiFi Library, Study Cabin, Competitive Exam Library"
        image="https://vasudevdigitallibrary.com/og-image.jpg"
        path="/faq"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
        faq={[
          {
            question: "Is Vasudev Digital Library open 24×7?",
            answer:
              "Yes, Vasudev Digital Library is open 24 hours a day, 7 days a week for all registered members.",
          },
          {
            question: "Do you provide high-speed WiFi?",
            answer:
              "Yes, high-speed WiFi is available for all members to support online classes and study resources.",
          },
          {
            question: "Are individual study cabins available?",
            answer:
              "Yes, we provide comfortable individual study cabins to ensure a focused and distraction-free learning environment.",
          },
          {
            question: "Is CCTV security available?",
            answer:
              "Yes, the library is monitored with CCTV cameras to provide a safe and secure environment.",
          },
          {
            question: "How can I join the library?",
            answer:
              "You can visit our library in Akbarpur or contact us by phone or WhatsApp to choose a membership plan and complete the registration process.",
          },
          {
            question: "Who can join Vasudev Digital Library?",
            answer:
              "Students preparing for UPSC, SSC, Banking, Railway, PCS, NEET, JEE and other competitive examinations, as well as college students and professionals, are welcome to join.",
          },
        ]}
      />
      <div className="relative shadow-[0_20px_20px_-10px_rgba(0,0,0,0.5)] z-20">
        <PageHero
          crumb="FAQ"
          eyebrow="Have Questions?"
          title="Everything you might want to know"
          subtitle="Can't find your answer here? Reach out to us directly on WhatsApp or by phone."
        />
      </div>
      <FAQSection />
      <CTASection />
    </PageTransition>
  );
}
