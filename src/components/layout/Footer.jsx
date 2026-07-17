import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiYoutube, FiTwitter, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Container from "../ui/Container";
import { business, telLink } from "../../data/siteData";

const pages = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Study Material", to: "/study-material" },
  { label: "Facilities", to: "/facilities" },
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
    <footer className="relative border-t border-gold/10 bg-navy-deep pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-gradient font-display text-lg font-bold text-navy-deep">V</span>
              <span className="font-display text-lg font-semibold text-ivory">Vasudev Digital Library</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-mist">
              A premium, distraction-free study sanctuary in Akbarpur — built for aspirants
              who take their preparation seriously.
            </p>
            <div className="mt-5 flex gap-3">
              {[FiFacebook, FiInstagram, FiYoutube, FiTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full glass-panel-light text-ivory/80 transition-colors hover:text-gold hover:border-gold/50"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Pages</h4>
            <ul className="space-y-3">
              {pages.map((p) => (
                <li key={p.to}>
                  <Link to={p.to} className="text-sm text-mist transition-colors hover:text-gold">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Leadership</h4>
            <ul className="space-y-4 text-sm text-mist">
              <li>
                <span className="block text-ivory font-medium">{business.director}</span>
                Director
              </li>
              <li>
                <span className="block text-ivory font-medium">{business.founder}</span>
                {business.founderTitle}
              </li>
            </ul>
            <div className="mt-5">
              <h4 className="eyebrow mb-3">Legal</h4>
              <ul className="space-y-2">
                {legal.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-mist transition-colors hover:text-gold">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Contact</h4>
            <ul className="space-y-4 text-sm text-mist">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 shrink-0 text-gold" />
                {business.address.full}
              </li>
              {business.phones.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <FiPhone className="shrink-0 text-gold" />
                  <a href={telLink(p)} className="hover:text-gold transition-colors">+91 {p}</a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <FiMail className="shrink-0 text-gold" />
                <a href={`mailto:${business.email}`} className="hover:text-gold transition-colors">{business.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col-reverse items-center justify-between gap-4 text-xs text-mist md:flex-row">
          <p>© {new Date().getFullYear()} Vasudev Digital Library. All rights reserved.</p>
          <p>Crafted with care for every aspirant who walks through our doors.</p>
        </div>
      </Container>
    </footer>
  );
}
