"use client";

import React from "react";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-20 bg-[#040406] border-t border-white/10 px-6 py-20 md:px-12 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto flex flex-col justify-between">
        {/* Main CTA Area */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-16 border-b border-white/10 gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1 text-xs font-mono text-amber-300 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>COMMISSIONS & COLLABORATIONS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-tight">
              Let&apos;s Build Next-Gen <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Digital Experiences.
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="mailto:contact@kinetic.studio"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-4 text-sm font-mono font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(245,158,11,0.4)]"
            >
              <Mail className="w-4 h-4" />
              <span>INITIATE CONTACT</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 text-xs font-mono text-white/80 backdrop-blur-md transition-all duration-300 hover:border-amber-400/30 hover:bg-white/[0.08] hover:text-white"
            >
              <span>BACK TO TOP</span>
              <span className="text-amber-400">↑</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits & Socials */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-3">
            <span className="text-white font-semibold">KINETIC PORTFOLIO</span>
            <span>© 2026</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GITHUB</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>X / TWITTER</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LINKEDIN</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
