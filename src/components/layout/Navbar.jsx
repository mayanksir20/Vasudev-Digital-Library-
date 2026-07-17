import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "../ui/Button";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Facilities", to: "/facilities" },
  { label: "Study Material", to: "/study-material" },
  { label: "Gallery", to: "/gallery" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-panel shadow-lg shadow-black/20 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-gradient font-display text-lg font-bold text-navy-deep">
            V
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold text-ivory">Vasudev</span>
            <span className="eyebrow !text-[0.58rem] !tracking-[0.22em]">Digital Library</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative font-heading text-sm tracking-wide transition-colors duration-300 ${
                  isActive ? "text-gold" : "text-ivory/80 hover:text-gold"
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative py-1">
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-gold"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button as="link" to="/contact" variant="primary" className="!px-6 !py-2.5">
            Join Now
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full glass-panel-light text-ivory"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden glass-panel mx-4 mt-3 rounded-2xl"
          >
            <div className="flex flex-col gap-1 p-4">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 font-heading text-sm ${
                      isActive ? "bg-gold/10 text-gold" : "text-ivory/85"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <div className="pt-2">
                <Button as="link" to="/contact" variant="primary" className="w-full">
                  Join Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
