"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { DataLensLogo } from "@/components/ui/DataLensLogo";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress hairline */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[70] origin-left"
        style={{
          scaleX: progress,
          background: "linear-gradient(90deg, #00E676, #0BC97A 60%, #FFD700)",
        }}
      />

      <nav className="fixed top-4 left-4 right-4 z-50 flex justify-center">
        <motion.div
          className="w-full max-w-[1080px] rounded-2xl md:rounded-full border"
          animate={{
            backgroundColor: scrolled || menuOpen ? "rgba(9,9,9,0.72)" : "rgba(9,9,9,0.35)",
            borderColor: scrolled || menuOpen ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)",
          }}
          transition={{ duration: 0.3 }}
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: scrolled ? "0 12px 40px rgba(0,0,0,0.45)" : "none",
          }}
        >
          <div className="px-5 md:px-6 h-[60px] flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5">
              <DataLensLogo size={30} />
              <span className="font-display text-[19px] font-bold tracking-tight">
                Data<span className="text-dl-green">Lens</span>
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-4 py-2 rounded-full text-[13.5px] font-medium text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors duration-200 cursor-pointer"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/#download"
                className="group hidden md:inline-flex items-center gap-2 h-10 px-5 rounded-full bg-dl-green text-[#06140C] text-[13.5px] font-bold cursor-pointer transition-all duration-200 hover:shadow-[0_8px_28px_rgba(0,230,118,0.45)]"
              >
                Get the app
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Mobile hamburger */}
              <button
                className="md:hidden flex flex-col items-center justify-center gap-1.5 w-11 h-11 cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <motion.div
            initial={false}
            animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 flex flex-col gap-1 border-t border-white/[0.07]">
              {navLinks.map((l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-3 text-[15px] font-medium text-white/70 hover:text-white transition-colors duration-150"
                >
                  {l.label}
                  <span className="font-mono text-[10px] text-white/25">0{i + 1}</span>
                </Link>
              ))}
              <Link
                href="/#download"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center h-11 px-5 rounded-full bg-dl-green text-[#06140C] text-sm font-bold"
              >
                Get the app
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </nav>
    </>
  );
}
