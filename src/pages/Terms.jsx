import PageTransition from "../components/layout/PageTransition";
import SEO from "../components/layout/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import { business } from "../data/siteData";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By enrolling at or using the facilities of ${business.name}, you agree to be bound by these Terms & Conditions.`,
  },
  {
    title: "2. Membership & Seating",
    body: "Each member is assigned an individual study chamber for the duration of their membership. Seats are non-transferable without prior approval from management.",
  },
  {
    title: "3. Code of Conduct",
    body: "Members must maintain silence in designated silent zones, keep their assigned space clean, and respect the privacy and focus of fellow members at all times.",
  },
  {
    title: "4. Fees & Refunds",
    body: "Membership fees are payable in advance as per the plan chosen. Refunds, where applicable, are subject to management discretion and our stated refund policy, available on request.",
  },
  {
    title: "5. Facility Use",
    body: "Facilities including WiFi, lockers, discussion areas and reading zones are provided for study purposes only and must be used responsibly.",
  },
  {
    title: "6. Safety & Liability",
    body: "While we maintain CCTV surveillance, fire safety equipment and 24×7 security, the library is not liable for loss of personal belongings. Members are advised to use lockers for valuables.",
  },
  {
    title: "7. Termination",
    body: "Management reserves the right to terminate membership in cases of misconduct, repeated rule violations, or non-payment of dues.",
  },
  {
    title: "8. Changes to Terms",
    body: "These Terms & Conditions may be revised periodically. Continued use of our facilities constitutes acceptance of the updated terms.",
  },
  {
    title: "9. Governing Law",
    body: "These terms are governed by the laws of India and subject to the jurisdiction of courts in Uttar Pradesh.",
  },
];

export default function Terms() {
  return (
    <PageTransition>
      <SEO
        title="Terms & Conditions | Vasudev Digital Library"
        description="Read the Terms & Conditions of Vasudev Digital Library in Akbarpur, Uttar Pradesh. Learn about membership rules, library policies, code of conduct, payments, cancellations, study room usage and visitor guidelines."
        keywords="Terms and Conditions, Vasudev Digital Library, Library Rules, Membership Terms, Study Library Policies, Digital Library Akbarpur, Reading Room Rules, Library Guidelines, Library Membership"
        image="https://vasudevdigitallibrary.com/og-image.jpg"
        path="/terms-and-conditions"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Terms & Conditions", path: "/terms-and-conditions" },
        ]}
      />
      <PageHero
        crumb="Terms & Conditions"
        eyebrow="Legal"
        title="Terms & Conditions"
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
