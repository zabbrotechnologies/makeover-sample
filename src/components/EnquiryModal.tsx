"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MessageSquare, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    experience: "Practicing MUA (1-3 yrs)",
    city: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Construct WhatsApp message URL as fallback
    const text = encodeURIComponent(
      `Hi Pushpalatha Ma'am, I would like to enquire about PRO MUA MASTERY.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nLevel: ${formData.experience}\nCity: ${formData.city}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/919363341010?text=${text}`, "_blank");
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 select-text">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-xl transition-all"
          />

          {/* Liquid Glass Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/15 bg-[#0f0f14]/90 p-7 sm:p-9 shadow-2xl backdrop-blur-3xl text-white"
          >
            {/* Top Internal Refractive Lens Gradient */}
            <div className="pointer-events-none absolute -top-24 -left-24 h-56 w-56 rounded-full bg-[#b99762]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-[#dfc79c]/15 blur-3xl" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur-md transition-all hover:border-[#b99762]/50 hover:bg-white/[0.1] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            {isSubmitted ? (
              <div className="py-10 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-3xl font-normal text-white">Intake Initiated</h3>
                <p className="mt-3 text-sm text-neutral-300 font-light max-w-xs mx-auto">
                  Redirecting to Pushpalatha Ma&apos;am&apos;s direct admissions desk via WhatsApp...
                </p>
                <div className="mt-6 flex justify-center gap-3">
                  <a
                    href="https://wa.me/919363341010"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#b99762] px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-black transition-all hover:bg-[#dfc79c]"
                  >
                    <span>Open WhatsApp</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ) : (
              <div>
                {/* Header Tag */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#b99762]/30 bg-[#b99762]/10 px-3.5 py-1 text-[10px] font-mono tracking-widest text-[#dfc79c] uppercase mb-4">
                  <Sparkles className="h-3 w-3 text-[#b99762]" />
                  <span>PRIVATE COHORT INTAKE // 2025</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
                  Enquire for <span className="italic text-[#dfc79c]">PRO MUA Mastery.</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  Strictly capped at 12 artists per residency. Direct mentorship with Pushpalatha.
                </p>

                {/* Instant Action Channels */}
                <div className="mt-6 grid grid-cols-3 gap-2.5">
                  <a
                    href="https://wa.me/919363341010?text=Hi%20Pushpalatha%20Ma%27am,%20I%20want%20to%20enquire%20about%20PRO%20MUA%20MASTERY."
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center transition-all hover:border-emerald-500/40 hover:bg-emerald-500/10 group"
                  >
                    <MessageSquare className="h-4 w-4 text-emerald-400 mb-1 transition-transform group-hover:scale-110" />
                    <span className="text-[10px] font-mono tracking-wider text-white/80 uppercase">WhatsApp</span>
                  </a>
                  <a
                    href="tel:9363341010"
                    className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center transition-all hover:border-[#b99762]/40 hover:bg-[#b99762]/10 group"
                  >
                    <Phone className="h-4 w-4 text-[#b99762] mb-1 transition-transform group-hover:scale-110" />
                    <span className="text-[10px] font-mono tracking-wider text-white/80 uppercase">Call Direct</span>
                  </a>
                  <a
                    href="https://instagram.com/nandhas.creation"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center transition-all hover:border-pink-500/40 hover:bg-pink-500/10 group"
                  >
                    <svg className="h-4 w-4 text-[#dfc79c] mb-1 transition-transform group-hover:scale-110 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="text-[10px] font-mono tracking-wider text-white/80 uppercase">Instagram</span>
                  </a>
                </div>

                <div className="my-6 flex items-center gap-3">
                  <div className="h-[1px] flex-1 bg-white/10" />
                  <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500">or send private inquiry</span>
                  <div className="h-[1px] flex-1 bg-white/10" />
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sundaram"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-xs text-white placeholder-white/30 backdrop-blur-md outline-none focus:border-[#b99762] focus:bg-white/[0.07] transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-xs text-white placeholder-white/30 backdrop-blur-md outline-none focus:border-[#b99762] focus:bg-white/[0.07] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                        City / Base
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Chennai / Coimbatore"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-xs text-white placeholder-white/30 backdrop-blur-md outline-none focus:border-[#b99762] focus:bg-white/[0.07] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                      Current MUA Level
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#16161c] px-3.5 py-2.5 text-xs text-white backdrop-blur-md outline-none focus:border-[#b99762] transition-all"
                    >
                      <option value="Aspiring Artist / Starting from scratch">Aspiring Artist / Starting from scratch</option>
                      <option value="Practicing MUA (1-3 yrs) - Stuck at low pricing">Practicing MUA (1-3 yrs) - Stuck at low pricing</option>
                      <option value="Experienced MUA (3+ yrs) - Scaling business & studio">Experienced MUA (3+ yrs) - Scaling business & studio</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#b99762] to-[#dfc79c] py-3 text-xs font-mono font-bold uppercase tracking-widest text-black shadow-lg shadow-[#b99762]/20 transition-all hover:brightness-110"
                  >
                    <span>SUBMIT ADMISSIONS INQUIRY</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
