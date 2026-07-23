import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiTwitter,
  FiPhone,
  FiMail,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";
import Container from "../ui/Container";
import { business, telLink, socialLinks } from "../../data/siteData";
import Logo from "../../assets/images/bg-remove-logo.webp";

const pages = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Facilities", to: "/facilities" },
  { label: "Study Material", to: "/study-material" },
  { label: "Gallery", to: "/gallery" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const legal = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/15 bg-navy-deep pt-20 pb-10 text-ivory/80 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gold/5 blur-[120px] pointer-events-none rounded-full" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand & Bio (Col 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="h-12 w-12 bg-white rounded-full overflow-hidden border border-gold/40 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
                <img
                  src={Logo}
                  alt="vasudev digital library"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-heading text-xl font-bold text-ivory tracking-wide">
                Vasudev Digital Library
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-ivory/60 max-w-sm">
              A premium, distraction-free study sanctuary in Akbarpur — built
              for aspirants who take their preparation seriously.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {[
                {
                  Icon: FiFacebook,
                  href: socialLinks.facebook,
                  label: "Facebook",
                },
                {
                  Icon: FiInstagram,
                  href: socialLinks.instagram,
                  label: "Instagram",
                },
                {
                  Icon: FiYoutube,
                  href: socialLinks.youtube,
                  label: "YouTube",
                },
                {
                  Icon: FiTwitter,
                  href: socialLinks.twitter,
                  label: "Twitter",
                },
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 text-ivory/80 transition-all duration-300 hover:text-gold hover:border-gold/40 hover:bg-gold/5 hover:-translate-y-1"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (Col 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-6 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {pages.map((p) => (
                <li key={p.to}>
                  <Link
                    to={p.to}
                    className="text-sm text-ivory/60 transition-colors hover:text-gold flex items-center gap-1 group"
                  >
                    <span className="transition-transform group-hover:translate-x-1">
                      ›
                    </span>{" "}
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Leadership & Legal (Col 3) */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-6 font-heading">
                Leadership
              </h4>
              <ul className="space-y-3 text-sm text-ivory/60">
                <li>
                  <span className="block text-ivory font-medium">
                    {business.director}
                  </span>
                  <span className="text-xs text-gold/80">Director</span>
                </li>
                <li className="pt-1">
                  <span className="block text-ivory font-medium">
                    {business.founder}
                  </span>
                  <span className="text-xs text-gold/80">
                    {business.founderTitle}
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4 font-heading">
                Legal
              </h4>
              <ul className="space-y-2">
                {legal.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-xs text-ivory/60 transition-colors hover:text-gold"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info (Col 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-6 font-heading">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm text-ivory/60">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 shrink-0 text-gold" />
                <span className="leading-relaxed">{business.address.full}</span>
              </li>
              {business.phones.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <FiPhone className="shrink-0 text-gold" />
                  <a
                    href={telLink(p)}
                    className="hover:text-gold transition-colors font-medium text-ivory"
                  >
                    +91 {p}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <FiMail className="shrink-0 text-gold" />
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-gold transition-colors break-all"
                >
                  {business.email}
                </a>
              </li>
            </ul>

            {/* Membership Page Button */}
            <div className="mt-6">
              <Link
                to="/membership"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-gold-gradient text-navy-deep font-heading text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl shadow-md hover:scale-[1.02] transition-all"
              >
                Explore Membership Plans
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="h-px w-full bg-white/10 my-10" />

        {/* Copyright & Credits */}
        <div className="flex flex-col-reverse items-center justify-between gap-4 text-xs text-ivory/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} Vasudev Digital Library. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1">
            Crafted with care for every aspirant who walks through our doors.
          </p>
        </div>
      </Container>
    </footer>
  );
}
