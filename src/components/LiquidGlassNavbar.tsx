"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Phone, Sparkles } from "lucide-react";

interface LiquidGlassNavbarProps {
  onOpenEnquiry: () => void;
}

export default function LiquidGlassNavbar({ onOpenEnquiry }: LiquidGlassNavbarProps) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Mastery", href: "#mastery" },
    { label: "Method", href: "#method" },
    { label: "Stories", href: "#stories" },
    { label: "Booking", href: "#booking" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 sm:px-8 md:px-12 pointer-events-none py-4 md:py-6`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Brand Mark with Specular Liquid Edge */}
          <a
            href="#"
            className={`group relative flex items-center gap-3.5 rounded-full px-4 py-2 transition-all duration-500 ${
              isScrolled ? "liquid-glass-nav-scrolled" : "liquid-glass-nav"
            }`}
          >
            <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-[#b99762] via-[#dfc79c] to-[#fbf7ee] shadow-sm">
              <span className="font-serif text-xs font-black text-black">P</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-bold tracking-[0.24em] text-white uppercase group-hover:text-[#dfc79c] transition-colors">
                PUSHPALATHA
              </span>
              <span className="font-mono text-[8px] tracking-[0.28em] text-[#dfc79c]/80 uppercase">
                NANDHAS CREATION
              </span>
            </div>
          </a>

          {/* Desktop Liquid Glass Island */}
          <nav
            className={`hidden md:flex items-center space-x-8 px-7 py-2.5 rounded-full transition-all duration-500 ${
              isScrolled ? "liquid-glass-nav-scrolled" : "liquid-glass-nav"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-[11px] font-mono tracking-widest text-neutral-300 uppercase transition-colors duration-300 hover:text-white group"
              >
                <span>{link.label}</span>
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#b99762] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Direct quick call on desktop */}
            <a
              href="tel:9363341010"
              className="hidden lg:flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[10px] font-mono tracking-widest text-white/70 backdrop-blur-md transition-all hover:border-[#b99762]/40 hover:text-[#dfc79c]"
            >
              <Phone className="h-3 w-3 text-[#b99762]" />
              <span>9363341010</span>
            </a>

            {/* Primary ENQUIRE NOW Button */}
            <button
              onClick={onOpenEnquiry}
              className="relative inline-flex items-center gap-2 rounded-full border border-[#b99762]/40 bg-gradient-to-r from-[#b99762]/20 via-[#dfc79c]/15 to-[#b99762]/20 px-5 py-2 text-[11px] font-mono font-bold tracking-widest text-[#dfc79c] backdrop-blur-xl shadow-lg shadow-[#b99762]/10 transition-all duration-400 hover:border-[#b99762] hover:bg-[#b99762] hover:text-black hover:shadow-[#b99762]/30 active:scale-95"
            >
              <Sparkles className="h-3 w-3 text-[#b99762] transition-transform duration-300 group-hover:rotate-12" />
              <span>ENQUIRE NOW</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] backdrop-blur-xl text-white transition-all hover:border-[#b99762]/50 hover:bg-white/10"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Liquid Glass Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-[#08080a]/95 backdrop-blur-3xl px-6 pt-28 pb-12 text-white md:hidden"
          >
            <div className="flex flex-col space-y-6">
              <span className="font-mono text-[10px] tracking-ultra text-[#b99762] uppercase">
                NAVIGATION ARCHIVE // NANDHAS CREATION
              </span>
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl font-light text-white/90 hover:text-[#dfc79c] transition-colors flex items-center justify-between border-b border-white/10 pb-3"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-white/40">0{idx + 1}</span>
                </a>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#b99762] to-[#dfc79c] py-3.5 text-xs font-mono font-bold tracking-widest text-black uppercase shadow-xl"
              >
                <span>ENQUIRE NOW</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>

              <div className="flex justify-between items-center text-[10px] font-mono text-white/50 tracking-wider">
                <a href="tel:9363341010" className="hover:text-white">TEL: 9363341010</a>
                <a href="https://instagram.com/nandhas.creation" target="_blank" rel="noreferrer" className="hover:text-white">@NANDHAS.CREATION</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
