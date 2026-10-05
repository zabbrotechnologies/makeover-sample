"use client";

import React, { useEffect, useState } from "react";
import AudioPlayer from "./AudioPlayer";
import { Menu, X, ArrowRight } from "lucide-react";

interface MakeoverNavbarProps {
  onOpenConsultation?: () => void;
}

export default function MakeoverNavbar({ onOpenConsultation }: MakeoverNavbarProps) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 sm:px-10 md:px-14 flex items-center justify-between border-b ${
          isScrolled
            ? "bg-[#08080a]/90 backdrop-blur-2xl border-white/10 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-[#08080a]/60 backdrop-blur-xl border-white/5 py-5 md:py-6"
        }`}
      >
        {/* Brand / Studio Tag */}
        <a
          className="group flex items-center space-x-2.5 tracking-widest text-xs md:text-sm font-sans font-medium uppercase text-white"
          href="#"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-champagne mr-1 opacity-90 shadow-[0_0_10px_rgba(185,151,98,0.8)] transition-transform duration-500 group-hover:scale-150" />
          <span className="tracking-[0.32em] font-semibold text-white group-hover:text-champagne-light transition-colors">
            MAKEOVER MENTOR
          </span>
          <span className="hidden lg:inline-block text-[10px] font-mono text-white/40 tracking-wider pl-2 border-l border-white/15">
            PARIS · NYC
          </span>
        </a>

        {/* Center Editorial Nav */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12 text-[11px] lg:text-[12px] tracking-[0.22em] uppercase font-mono text-white/70">
          <a
            className="hover:text-champagne-light transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-champagne hover:after:w-full after:transition-all after:duration-300"
            href="#discover"
          >
            DISCOVER
          </a>
          <a
            className="hover:text-champagne-light transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-champagne hover:after:w-full after:transition-all after:duration-300"
            href="#method"
          >
            METHOD
          </a>
          <a
            className="hover:text-champagne-light transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-champagne hover:after:w-full after:transition-all after:duration-300"
            href="#services"
          >
            SERVICES
          </a>
          <a
            className="hover:text-champagne-light transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-champagne hover:after:w-full after:transition-all after:duration-300"
            href="#about"
          >
            ABOUT
          </a>
        </nav>

        {/* Right Concierge & Audio Actions */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          {/* Integrated Ambient Binaural Sound Toggle */}
          <AudioPlayer />

          {/* Book Consultation Trigger */}
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-champagne/40 bg-champagne/10 px-4 py-2 text-[11px] font-mono tracking-widest uppercase text-champagne-light transition-all duration-300 hover:border-champagne hover:bg-champagne hover:text-[#08080a] hover:shadow-[0_0_20px_rgba(185,151,98,0.3)] active:scale-[0.97]"
          >
            <span>CONSULTATION</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/80 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#08080a]/95 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 md:hidden animate-fade-in">
          <nav className="flex flex-col space-y-6 text-base tracking-[0.25em] font-mono uppercase text-white/80">
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-champagne-light flex justify-between items-center"
              href="#discover"
            >
              <span>01 // DISCOVER</span>
              <span className="text-champagne">→</span>
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-champagne-light flex justify-between items-center"
              href="#method"
            >
              <span>02 // METHOD</span>
              <span className="text-champagne">→</span>
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-champagne-light flex justify-between items-center"
              href="#services"
            >
              <span>03 // SERVICES</span>
              <span className="text-champagne">→</span>
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-champagne-light flex justify-between items-center"
              href="#about"
            >
              <span>04 // ABOUT</span>
              <span className="text-champagne">→</span>
            </a>
          </nav>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation?.();
              }}
              className="w-full py-3.5 px-6 rounded-xl border border-champagne bg-champagne text-[#08080a] font-mono text-xs uppercase tracking-widest font-semibold text-center"
            >
              BOOK PRIVATE CONSULTATION →
            </button>
            <p className="text-center font-mono text-[10px] text-white/40 tracking-widest uppercase">
              PARIS · NEW YORK ATELIERS
            </p>
          </div>
        </div>
      )}
    </>
  );
}
