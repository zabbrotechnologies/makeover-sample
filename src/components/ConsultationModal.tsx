"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  defaultService = "Personal Makeover Intensive",
}: ConsultationModalProps) {
  const [selectedService, setSelectedService] = useState(defaultService);
  const [location, setLocation] = useState<"Paris Atelier" | "New York Studio" | "Virtual Diagnostic">("Paris Atelier");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#08080a]/85 backdrop-blur-xl"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#0c0c10] border border-white/15 rounded-3xl p-6 sm:p-10 text-white shadow-[0_25px_70px_rgba(0,0,0,0.8)] z-10 overflow-hidden"
          >
            {/* Background champagne aura */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-champagne/15 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {!isSubmitted ? (
              <div>
                {/* Header */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-champagne">
                    PRIVATE ADMISSIONS · INTAKE DOSSIER
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-2">
                  Begin Your <span className="italic text-champagne-light">Transformation</span>
                </h3>
                <p className="text-xs sm:text-sm text-white/60 font-light max-w-lg mb-6 leading-relaxed">
                  Every intake commences with an unhurried 45-minute private consultation with Camille Moreau. Cohorts are capped at 300 clients globally per year.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Location selector */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-2">
                      Preferred Residency
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(["Paris Atelier", "New York Studio", "Virtual Diagnostic"] as const).map((loc) => (
                        <button
                          key={loc}
                          type="button"
                          onClick={() => setLocation(loc)}
                          className={`py-2 px-2 text-[11px] font-mono rounded-xl border transition-all text-center ${
                            location === loc
                              ? "border-champagne bg-champagne/15 text-champagne-light font-medium"
                              : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20"
                          }`}
                        >
                          {loc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Service selector */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-2">
                      Primary Focus Area
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-[#14141a] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-champagne transition-colors"
                    >
                      <option value="Personal Makeover Intensive">01 · Personal Makeover 3-Day Intensive</option>
                      <option value="Makeup & Cosmetic Mastery">02 · Makeup &amp; Radiant Cosmetic Mastery</option>
                      <option value="Haircut Architecture">03 · Facial Bone Geometry Haircut Sculpting</option>
                      <option value="Spectral Color Analysis">04 · Spectral Draping &amp; 36-Tone Harmonization</option>
                      <option value="Wardrobe & Capsule Curation">05 · Wardrobe Audit &amp; Italian Capsule Curation</option>
                      <option value="Occasion & Red Carpet Stewardship">06 · Keynote, Gala &amp; Red Carpet Stewardship</option>
                    </select>
                  </div>

                  {/* Name & Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Elena Vance"
                        className="w-full bg-[#14141a] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-champagne transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-1.5">
                        Private Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="elena@example.com"
                        className="w-full bg-[#14141a] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-champagne transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Notes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-1.5">
                        Direct Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+33 6 12 34 56 78"
                        className="w-full bg-[#14141a] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-champagne transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-white/50 mb-1.5">
                        Notes or Lifestyle Goals
                      </label>
                      <input
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Upcoming keynote, executive transition..."
                        className="w-full bg-[#14141a] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-champagne transition-colors"
                      />
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl border border-champagne bg-gradient-to-r from-champagne-dark via-champagne to-champagne-light text-[#08080a] font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(185,151,98,0.4)] hover:brightness-105 active:scale-[0.98] disabled:opacity-50"
                    >
                      {isSubmitting ? "TRANSMITTING INTAKE..." : "TRANSMIT INQUIRY TO CONCIERGE →"}
                    </button>
                    <p className="text-center font-mono text-[9px] text-white/40 uppercase tracking-widest mt-2.5">
                      STRICT DISCRETION GUARANTEED · 24-HOUR RESPONSE
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-champagne/20 border border-champagne/40 flex items-center justify-center text-champagne mb-5">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-3">
                  Intake Dossier <span className="italic text-champagne">Received</span>
                </h4>
                <p className="text-sm text-white/70 max-w-md font-light leading-relaxed mb-6">
                  Thank you, <span className="text-white font-medium">{name}</span>. Camille Moreau’s private studio concierge has logged your inquiry for the{" "}
                  <span className="text-champagne-light font-medium">{location}</span>. Our direct liaison will be in touch within 24 business hours.
                </p>
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 text-left w-full max-w-sm font-mono text-[11px] text-white/70 mb-6 space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-white/40">DOSSIER REF:</span>
                    <span className="text-champagne-light">MM-2026-{(Math.random() * 8999 + 1000).toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">SERVICE:</span>
                    <span className="text-white truncate max-w-[180px]">{selectedService}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">LOCATION:</span>
                    <span className="text-white">{location}</span>
                  </div>
                </div>
                <button
                  onClick={handleReset}
                  className="py-2.5 px-8 rounded-full border border-champagne/50 text-champagne-light font-mono text-xs uppercase tracking-widest hover:bg-champagne/15 transition-all"
                >
                  RETURN TO ATELIER
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
