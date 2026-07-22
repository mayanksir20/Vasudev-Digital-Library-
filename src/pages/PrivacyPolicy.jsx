import PageTransition from "../components/layout/PageTransition";
import SEO from "../components/layout/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import { business } from "../data/siteData";

const sections = [
  {
    title: "1. Introduction",
    body: `This Privacy Policy explains how ${business.name} ("we", "us", "our") collects, uses and protects information you share with us through our website, in person, or over phone and WhatsApp.`,
  },
  {
    title: "2. Information We Collect",
    body: "We may collect your name, phone number, email address and any message you submit through our contact or feedback forms. This information is provided voluntarily by you.",
  },
  {
    title: "3. How We Use Your Information",
    body: "Information you share is used solely to respond to your enquiries, process membership requests, and improve our facilities based on your feedback. We do not sell or rent your personal information to third parties.",
  },
  {
    title: "4. Data Storage",
    body: "Feedback submitted through our website is stored locally within your own browser for demonstration purposes on this static site, and any enquiry sent to us directly is retained only as long as needed to respond to you.",
  },
  {
    title: "5. Third-Party Links",
    body: "Our website may contain links to third-party services such as WhatsApp or Google Maps. We are not responsible for the privacy practices of these external services.",
  },
  {
    title: "6. Security",
    body: "We take reasonable measures to protect any information you share with us, but no method of transmission over the internet is entirely secure.",
  },
  {
    title: "7. Your Rights",
    body: "You may request that we update or delete any personal information you have shared with us by contacting us directly using the details on our Contact page.",
  },
  {
    title: "8. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Continued use of our website after changes are posted constitutes acceptance of the revised policy.",
  },
  {
    title: "9. Contact Us",
    body: `For any questions about this Privacy Policy, please reach us at ${business.email} or call +91 ${business.phones[0]}.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <PageTransition>
      <SEO
        title="Privacy Policy | Vasudev Digital Library"
        description="Read the Privacy Policy of Vasudev Digital Library, Akbarpur. Learn how we collect, use, store and protect your personal information when you use our website and library services."
        keywords="Privacy Policy, Vasudev Digital Library, Library Privacy Policy, Data Protection, User Privacy, Akbarpur Library, Digital Library Privacy"
        image="https://vasudevdigitallibrary.com/og-image.jpg"
        path="/privacy-policy"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ]}
      />
      <PageHero
        crumb="Privacy Policy"
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated: July 2026"
      />

      <section className="section-pad bg-navy-deep">
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-heading text-lg font-semibold text-ivory">
                  {s.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
