"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Compass, Layers, Sparkles } from "lucide-react";

interface OverlayProps {
  onOpenEnquiry?: () => void;
}

export default function Overlay({ onOpenEnquiry }: OverlayProps) {
  // Bind to global page scroll
  const { scrollYProgress } = useScroll();

  // -------------------------------------------------------------
  // STAGE 1: 0% CENTER OPENING
  // -------------------------------------------------------------
  const centerOpacity = useTransform(scrollYProgress, [0, 0.14, 0.24], [1, 1, 0]);
  const centerTranslateY = useTransform(scrollYProgress, [0, 0.24], [0, -70]);
  const centerScale = useTransform(scrollYProgress, [0, 0.24], [1, 0.92]);

  // -------------------------------------------------------------
  // STAGE 2: 30% LEFT ALIGNED (THE MUA TRANSFORMATION)
  // -------------------------------------------------------------
  const leftOpacity = useTransform(scrollYProgress, [0.18, 0.28, 0.42, 0.52], [0, 1, 1, 0]);
  const leftTranslateX = useTransform(scrollYProgress, [0.18, 0.3, 0.42, 0.52], [-60, 0, 0, -40]);

  // -------------------------------------------------------------
  // STAGE 3: 60% RIGHT ALIGNED (PRO MUA MASTERY)
  // -------------------------------------------------------------
  const rightOpacity = useTransform(scrollYProgress, [0.48, 0.58, 0.72, 0.82], [0, 1, 1, 0]);
  const rightTranslateX = useTransform(scrollYProgress, [0.48, 0.6, 0.72, 0.82], [60, 0, 0, 40]);

  // -------------------------------------------------------------
  // STAGE 4: 85% TRANSITION DOWN
  // -------------------------------------------------------------
  const bottomHintOpacity = useTransform(scrollYProgress, [0.78, 0.86, 0.96], [0, 1, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-6 md:p-12">
      {/* ------------------------------------------------------------- */}
      {/* STAGE 1: PUSHPALATHA / OPENING POSITIONING                     */}
      {/* ------------------------------------------------------------- */}
      <motion.div
        style={{
          opacity: centerOpacity,
          y: centerTranslateY,
          scale: centerScale,
        }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-auto"
      >
        {/* Subtle Brand Tag */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-xl mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#b99762]" />
          <span className="text-[10px] font-mono tracking-ultra text-[#dfc79c] uppercase">
            NANDHAS CREATION // PRIVATE MENTORSHIP
          </span>
        </div>

        {/* Monumental Editorial Name */}
        <h1 className="hero-display font-serif text-white font-normal select-text tracking-[-0.03em] uppercase leading-[0.88]">
          <span className="block text-gradient-silver">PUSHPALATHA</span>
        </h1>

        {/* Refined Sub-Badge */}
        <div className="mt-4 flex items-center gap-3 text-xs md:text-sm font-mono tracking-widest text-[#b99762] uppercase">
          <span>MAKEUP EDUCATOR</span>
          <span className="text-white/30">•</span>
          <span>BUSINESS MENTOR</span>
        </div>

        {/* Narrative Headline */}
        <p className="mt-8 text-base md:text-xl text-neutral-300 max-w-xl font-light tracking-wide leading-relaxed font-sans">
          Engineering the transition from an undervalued freelance artist to an in-demand, high-ticket beauty entrepreneur.
        </p>

        {/* Primary Action Button */}
        <div className="mt-10 flex items-center gap-4">
          <button
            onClick={onOpenEnquiry}
            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#b99762] to-[#dfc79c] px-7 py-3 text-xs font-mono font-bold tracking-widest uppercase text-black shadow-lg shadow-[#b99762]/20 transition-all hover:scale-105 active:scale-95"
          >
            <span>ENQUIRE NOW</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <a
            href="#mastery"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-xs font-mono tracking-widest uppercase text-white/80 backdrop-blur-md hover:border-[#b99762]/40 hover:text-white transition-all"
          >
            <span>EXPLORE CURRICULUM</span>
          </a>
        </div>
      </motion.div>

      {/* ------------------------------------------------------------- */}
      {/* STAGE 2: 30% LEFT - FROM MAKEUP ARTIST TO BUSINESS OWNER       */}
      {/* ------------------------------------------------------------- */}
      <motion.div
        style={{
          opacity: leftOpacity,
          x: leftTranslateX,
        }}
        className="absolute inset-y-0 left-6 md:left-16 lg:left-24 flex items-center justify-start max-w-lg text-left pointer-events-auto"
      >
        <div className="liquid-glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-widest text-[#b99762]">
            <Compass className="w-4 h-4" />
            <span>01 // THE STRATEGIC PARADIGM SHIFT</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white leading-[1.05]">
            FROM MAKEUP ARTIST <br />
            <span className="italic text-[#dfc79c]">TO BUSINESS OWNER.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            Mastering foundation blending and brushwork is only 20% of your career. Without luxury client psychology, price anchoring, and predictable booking systems, talent remains broke.
          </p>

          <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <span className="block text-[10px] uppercase text-white/40">Average Pricing Shift</span>
              <span className="text-lg font-bold text-[#dfc79c]">₹8K → ₹35K+</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-white/40">Career Trajectory</span>
              <span className="text-lg font-bold text-white">Full-Scale Studio</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ------------------------------------------------------------- */}
      {/* STAGE 3: 60% RIGHT - PRO MUA MASTERY REVEAL                    */}
      {/* ------------------------------------------------------------- */}
      <motion.div
        style={{
          opacity: rightOpacity,
          x: rightTranslateX,
        }}
        className="absolute inset-y-0 right-6 md:right-16 lg:right-24 flex items-center justify-end max-w-lg ml-auto text-left pointer-events-auto"
      >
        <div className="liquid-glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-widest text-[#b99762]">
            <Layers className="w-4 h-4" />
            <span>02 // FLAGSHIP MENTORSHIP</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white leading-[1.05]">
            PRO MUA <br />
            <span className="italic text-[#dfc79c]">MASTERY.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            The comprehensive offline residency that equips you with editorial bridal precision, camera-grade finishes, and the 2X Revenue System to dominate your regional market.
          </p>

          <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-white/70">Capped at 12 Artists / Batch</span>
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#dfc79c] hover:text-white transition-colors"
            >
              <span>Apply for Cohort</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* ------------------------------------------------------------- */}
      {/* STAGE 4: TRANSITION CUE                                       */}
      {/* ------------------------------------------------------------- */}
      <motion.div
        style={{ opacity: bottomHintOpacity }}
        className="absolute bottom-12 inset-x-0 flex flex-col items-center justify-center text-center pointer-events-auto"
      >
        <a
          href="#about"
          className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/60 px-6 py-2.5 backdrop-blur-xl transition-all duration-300 hover:border-[#b99762]/50 hover:bg-[#b99762]/10"
        >
          <span className="text-xs font-mono tracking-widest text-white/80 uppercase group-hover:text-[#dfc79c]">
            Explore The Full Story
          </span>
          <ArrowDown className="w-4 h-4 text-[#b99762] transition-transform duration-300 group-hover:translate-y-1" />
        </a>
      </motion.div>
    </div>
  );
}
