import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Reusable premium button.
 * variant: "primary" (gold fill) | "ghost" (glass outline) | "dark"
 * as: "button" | "link" (react-router) | "a" (external)
 */
export default function Button({
  children,
  variant = "primary",
  as = "button",
  to,
  href,
  onClick,
  className = "",
  icon: Icon,
  type = "button",
  target,
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-heading text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2";

  const variants = {
    primary:
      "bg-gold-gradient text-navy-deep shadow-[0_8px_30px_-8px_rgba(212,175,55,0.55)] hover:shadow-[0_12px_40px_-6px_rgba(212,175,55,0.7)] hover:-translate-y-0.5",
    ghost:
      "glass-panel-light text-ivory hover:border-gold/60 hover:-translate-y-0.5",
    dark:
      "bg-navy-deep text-gold border border-gold/40 hover:bg-navy hover:-translate-y-0.5",
  };

  const content = (
    <motion.span
      whileTap={{ scale: 0.96 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      {Icon && <Icon className="text-base" />}
    </motion.span>
  );

  if (as === "link" && to) {
    return (
      <Link to={to} className="inline-block">
        {content}
      </Link>
    );
  }

  if (as === "a" && href) {
    return (
      <a href={href} target={target} rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}
