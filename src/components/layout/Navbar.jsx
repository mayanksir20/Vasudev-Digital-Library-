import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "../ui/Button";
import Logo from "../../assets/images/bg-remove-logo.webp";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Facilities", to: "/facilities" },
  { label: "Study Material", to: "/study-material" },
  { label: "Membership", to: "/membership" },
  { label: "Gallery", to: "/gallery" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-navy-deep/90 backdrop-blur-md py-3 shadow-[0_4px_20px_-3px_rgba(212,175,55,0.25)] border-b border-gold/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-3 group relative"
          onClick={() => setOpen(false)}
        >
          <div className="h-16 w-16 md:h-18 md:w-18 bg-white rounded-full overflow-hidden border-2 border-gold/40 shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
            <img
              src={Logo}
              alt="vasudev digital library"
              className="h-full w-full object-cover"
            />
          </div>
        </Link>

        {/* Desktop Nav (Centered) */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md shadow-inner">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full font-heading text-sm transition-all duration-300 ${
                  isActive
                    ? "text-gold bg-gold/10 shadow-sm"
                    : "text-ivory/80 hover:text-ivory hover:bg-white/5"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            as="link"
            to="/contact"
            variant="primary"
            className="!rounded-full px-7 py-2.5 shadow-lg shadow-gold/10 hover:shadow-gold/20 transition-all duration-300"
          >
            Join Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-ivory hover:bg-white/10 transition-colors z-50 relative"
          aria-label="Toggle Menu"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile Slide-in Drawer from Left */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-navy-deep/95 backdrop-blur-2xl border-r border-gold/20 shadow-2xl lg:hidden z-50 flex flex-col p-6 overflow-y-auto"
            >
              {/* Drawer Header / Logo Inside Menu */}
              <div className="flex items-center gap-3 pb-6 mb-6 border-b border-white/10">
                <div className="h-12 w-12 bg-white rounded-full overflow-hidden border border-gold/40 flex items-center justify-center">
                  <img src={Logo} alt="Logo" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-base font-semibold text-ivory">Vasudev</span>
                  <span className="text-[0.6rem] uppercase tracking-[0.2em] text-gold font-bold">Digital Library</span>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-2 flex-1">
                {links.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl font-heading text-sm transition-all duration-200 flex items-center justify-between ${
                        isActive
                          ? "text-gold bg-gold/10 font-medium border-l-2 border-gold"
                          : "text-ivory/80 hover:text-ivory hover:bg-white/5"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>

              {/* Bottom CTA Button inside Drawer */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <Button
                  as="link"
                  to="/contact"
                  variant="primary"
                  className="w-full text-center py-3 rounded-xl"
                  onClick={() => setOpen(false)}
                >
                  Join Now
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}