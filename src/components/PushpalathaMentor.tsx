"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  Phone,
  CheckCircle2,
  ChevronDown,
  Star,
} from "lucide-react";

interface PushpalathaMentorProps {
  onOpenEnquiry: () => void;
}

export default function PushpalathaMentor({ onOpenEnquiry }: PushpalathaMentorProps) {
  // Active FAQ Accordion state
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Active Curriculum Tab
  const [activeTab, setActiveTab] = useState<number>(0);

  // Booking Form State (Section 10 based on sample #booking)
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "PRO MUA Mastery — 4-Week Offline Residency",
    experience: "Practicing MUA (1-3 yrs) — Want to enter ₹35K+ tier",
    city: "",
    message: "",
  });
  const [isBooked, setIsBooked] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
    const text = encodeURIComponent(
      `Hi Pushpalatha Ma'am, I would like to request an admission / appointment.\n\nName: ${bookingForm.name}\nEmail: ${bookingForm.email}\nPhone: ${bookingForm.phone}\nService: ${bookingForm.service}\nLevel: ${bookingForm.experience}\nCity: ${bookingForm.city}\nNote: ${bookingForm.message}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/919363341010?text=${text}`, "_blank");
    }, 600);
  };

  const curriculumTabs = [
    {
      title: "Module 01",
      subtitle: "Skin Anatomy & 4K Longevity",
      image: "/assets/vanity-atelier.jpg",
      desc: "Deconstruct South Asian skin undertones, cellular hydration, and oil barrier chemistry. Learn how to craft Pushpalatha's signature glass-dew finish that withstands 14 hours of humidity, tears, and temple muhurtham rituals without cracking or oxidizing.",
      points: [
        "Spectral color matching for diverse South Indian warm undertones",
        "Layering micro-pigments without camera flashback or cake texture",
        "Sweatproof sealing techniques for humid wedding halls and stage halogens",
      ],
    },
    {
      title: "Module 02",
      subtitle: "Haute Eye & Facial Architecture",
      image: "/assets/bridal-eye-detail.jpg",
      desc: "Master micro-cut creases, smoked kohl wing architecture, and custom lash clustering designed specifically for Indian eye shapes. Sculpt cheekbones and jawlines based on camera lens distortion.",
      points: [
        "Precision cut-crease, smoked gradient & soft bronze halo artistry",
        "Custom lash cluster architecture tailored to bridal eye geometry",
        "Micro-stroke brow lamination realism with sweat-resistant pigments",
      ],
    },
    {
      title: "Module 03",
      subtitle: "Bridal Repertoire: Classic to Couture",
      image: "/assets/bridal-reception.jpg",
      desc: "Master the complete regional bridal spectrum: Traditional Kanjeevaram Muhurtham, Pastel North-South Fusion, Dramatic Cocktail Sangeet, and Modern Reception Haute Couture in champagne tissue silk.",
      points: [
        "Saree draping mastery (Kanjeevaram silk, Tissue, Net & Box pleats)",
        "Antique temple jewelry placement, oddiyanam & maang tikka anchoring",
        "De-escalation psychology: Keeping nervous brides calm and luminous",
      ],
    },
    {
      title: "Module 04",
      subtitle: "Studio Lighting & Portfolio Optics",
      image: "/assets/masterclass-atelier.jpg",
      desc: "Flawless makeup remains invisible if poorly documented. Learn how to configure studio softboxes, ring lights, and iPhone cinematic profiles to capture magazine-grade 4K reels and photos.",
      points: [
        "iPhone ProRes & macro lens calibration for true-to-life skin textures",
        "Color-accurate studio lighting setup on a realistic initial budget",
        "Art directing bridal editorial poses that look candid and expensive",
      ],
    },
  ];

  const studentProof = [
    {
      name: "Harini Murugan",
      city: "Coimbatore",
      prevPrice: "₹6,000 / Bride",
      nowPrice: "₹38,000 / Bride",
      quote:
        "Before Pushpalatha Ma'am, I was traveling for 12 hours doing makeup for ₹6,000 and struggling to make ends meet. PRO MUA Mastery changed how I speak, price, and deliver. Within 4 months of graduating, I booked 14 high-ticket weddings.",
      tag: "Income Multiplied 6X",
    },
    {
      name: "Swetha Karthik",
      city: "Chennai",
      prevPrice: "Freelance Hustle",
      nowPrice: "Own Studio Founder",
      quote:
        "The 2X Revenue System is not taught anywhere else. Pushpalatha Ma'am personally audited my portfolio and showed me why brides were ghosting me. Now I have brides booking me 8 months in advance with 50% non-refundable advance.",
      tag: "Booked 8 Months Ahead",
    },
    {
      name: "Divya Ranganathan",
      city: "Bengaluru",
      prevPrice: "₹10,000 / Bride",
      nowPrice: "₹45,000 / Bride",
      quote:
        "Her hands-on correction on real human models (not plastic dummy heads) gave me the confidence to handle destination weddings without trembling. The alumni referral network alone pays for the course ten times over.",
      tag: "Celebrity Roster",
    },
  ];

  const faqs = [
    {
      q: "I am a complete beginner with zero makeup experience. Am I eligible for PRO MUA Mastery?",
      a: "Yes. Pushpalatha breaks down foundational brush handling, color physics, and skin preparation from ground zero. You will not learn shortcuts or gimmicks; you will develop muscle memory and luxury technique from the ground up.",
    },
    {
      q: "How is this different from local 1-month makeup diploma courses?",
      a: "Most local academies teach you how to apply makeup on plastic dummy heads with outdated products and zero business training. PRO MUA Mastery is an elite, offline studio residency capped at 12 artists. You work exclusively on live human models, receive 1:1 critique from Pushpalatha, build a high-resolution portfolio with professional lighting, and learn the exact client acquisition scripts to charge ₹35K+.",
    },
    {
      q: "Do I need to purchase a luxury international vanity kit before joining?",
      a: "No. Pushpalatha provides a comprehensive vanity audit on Day 1. You will be taught which budget products outperform ₹6,000 luxury items, saving you ₹50,000+ in unnecessary vanity spending. Full studio practice kits and live models are arranged during training.",
    },
    {
      q: "Will I get real professional photoshoot material for my portfolio?",
      a: "Yes. Every student directly conceptualizes and executes signature bridal looks on professional models under Pushpalatha's creative direction. You leave with magazine-grade 4K photo and video assets ready to launch your luxury brand immediately.",
    },
    {
      q: "What post-mentorship support is provided after the cohort ends?",
      a: "Graduates receive lifetime access to the Nandhas Creation Alumni Circle, monthly virtual business strategy check-ins, direct WhatsApp review from Pushpalatha on bridal inquiries, and overflow bridal booking referrals within your regional territory.",
    },
  ];

  return (
    <div className="relative w-full bg-[#F7F5F0] text-[#181715] font-sans antialiased select-text">
      {/* ================================================== */}
      {/* 02 — THE MUA BUSINESS PROBLEM (Warm Ivory Editorial) */}
      {/* ================================================== */}
      <section className="relative py-24 md:py-36 px-6 md:px-14 border-t border-[#DDD7CB] bg-[#F7F5F0] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#DDD7CB] gap-6">
            <div>
              <span className="font-mono text-[11px] tracking-[0.24em] text-[#6E675C] uppercase block mb-3">
                02 // THE INDUSTRY REALITY
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#181715] font-normal leading-tight">
                The Trap Most <br />
                <span className="italic text-[#947346]">Makeup Artists Never Escape.</span>
              </h2>
            </div>
            <p className="font-mono text-xs text-[#6E675C] max-w-md uppercase tracking-wider leading-relaxed">
              Why 90% of passionate artists remain overworked, underpaid, and exhausted after 5 years in the bridal industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="ivory-card p-8 sm:p-10 rounded-2xl">
              <span className="font-mono text-xs text-[#947346] uppercase tracking-widest block mb-4">
                01 / THE PRICE WAR
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#181715] mb-3 leading-snug">
                Trapped in the ₹5,000–₹10,000 Loop
              </h3>
              <p className="text-sm text-[#6E675C] font-light leading-relaxed">
                Competing against local parlour aunties and Instagram hobbyists on price. Brides haggle for ₹500 discounts because your positioning and imagery look identical to everyone else.
              </p>
            </div>

            <div className="ivory-card p-8 sm:p-10 rounded-2xl">
              <span className="font-mono text-xs text-[#947346] uppercase tracking-widest block mb-4">
                02 / FEAST &amp; FAMINE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#181715] mb-3 leading-snug">
                Extreme Seasonal Inconsistency
              </h3>
              <p className="text-sm text-[#6E675C] font-light leading-relaxed">
                Making money only 4 months a year during peak Tamil muhurtham dates, followed by 8 months of zero predictable revenue, anxiety, and empty calendar slots.
              </p>
            </div>

            <div className="ivory-card p-8 sm:p-10 rounded-2xl">
              <span className="font-mono text-xs text-[#947346] uppercase tracking-widest block mb-4">
                03 / THE FREELANCER BURNOUT
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#181715] mb-3 leading-snug">
                An Artist, Never a Business Owner
              </h3>
              <p className="text-sm text-[#6E675C] font-light leading-relaxed">
                Carrying 20kg kit bags alone at 3:00 AM, doing all the sarees, hair, and makeup without systems, assistants, or contracts, working yourself into complete physical exhaustion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 03 — PUSHPALATHA (THE MENTOR & ATELIER)            */}
      {/* ================================================== */}
      <section id="about" className="py-24 md:py-40 px-6 md:px-14 border-t border-[#DDD7CB] bg-[#FCFBF8] relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Frame: Real Studio Masterclass Atelier Photo */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-[#DDD7CB] shadow-xl bg-[#E7E2D9]">
                <Image
                  src="/assets/masterclass-atelier.jpg"
                  alt="Pushpalatha conducting a private bridal makeup masterclass at Nandhas Creation Atelier"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover filter contrast-[102%]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between font-mono text-[11px] uppercase tracking-widest text-[#DFC79C]">
                  <div>
                    <span className="block text-white font-bold text-lg font-serif normal-case">Pushpalatha</span>
                    <span>Founder, Nandhas Creation</span>
                  </div>
                  <span className="bg-black/50 px-2.5 py-1 rounded backdrop-blur-md text-white/90">15+ YRS LEGACY</span>
                </div>
              </div>
            </div>

            {/* Narrative & Authority */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="font-mono text-[11px] tracking-[0.24em] text-[#6E675C] uppercase block mb-3">
                03 // THE MENTOR BEHIND THE LEGACY
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#181715] font-normal leading-[1.02] mb-6">
                “Artistry Gets You Started. <br />
                <span className="italic text-[#947346]">Business Systems Make You Untouchable.”</span>
              </h2>

              <div className="space-y-4 text-[#6E675C] font-light text-base md:text-lg leading-relaxed">
                <p>
                  Over the past 15 years, Pushpalatha has transformed the bridal artistry standard across Tamil Nadu through <strong>Nandhas Creation</strong>. Having personally styled more than 1,200 brides across Coimbatore, Chennai, and luxury destination weddings, she identified the systemic flaw in Indian makeup academies.
                </p>
                <p>
                  Most academies teach students on plastic dummy heads with outdated products and zero pricing psychology. Pushpalatha built <strong>PRO MUA Mastery</strong> as an elite studio residency: fusing camera-grade South Indian bridal precision with the financial architecture, client positioning, and brand authority required to run an autonomous, high-earning beauty business.
                </p>
              </div>

              {/* Concrete Credentials */}
              <div className="mt-10 pt-8 border-t border-[#DDD7CB] grid grid-cols-3 gap-6">
                <div>
                  <span className="font-serif text-3xl sm:text-5xl text-[#181715] font-normal">1,200+</span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-[#6E675C] mt-1">Brides Styled</span>
                </div>
                <div>
                  <span className="font-serif text-3xl sm:text-5xl text-[#947346] font-normal">500+</span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-[#6E675C] mt-1">Graduates Mentored</span>
                </div>
                <div>
                  <span className="font-serif text-3xl sm:text-5xl text-[#181715] font-normal">12 Max</span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-[#6E675C] mt-1">Cohort Cap</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 04 & 05 — PRO MUA MASTERY & CURRICULUM (Dark Charcoal) */}
      {/* ================================================== */}
      <section id="mastery" className="py-24 md:py-40 px-6 md:px-14 border-t border-white/10 bg-[#181715] text-[#F7F5F0] relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#B99762]/30 bg-[#B99762]/10 px-3.5 py-1 text-[11px] font-mono tracking-widest text-[#DFC79C] uppercase mb-4">
                <Sparkles className="h-3 w-3 text-[#B99762]" />
                <span>04 // FLAGSHIP RESIDENCY</span>
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white font-normal uppercase leading-[0.94]">
                PRO MUA <br />
                <span className="italic text-[#DFC79C]">MASTERY.</span>
              </h2>
            </div>
            <div className="max-w-md text-left md:text-right">
              <p className="text-xs md:text-sm font-mono text-[#B4AA9D] uppercase tracking-wider mb-4">
                4 Intensive Weeks · Hands-on Live Models · Full Studio Residency
              </p>
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#B99762] to-[#DFC79C] px-6 py-2.5 text-xs font-mono font-bold tracking-widest uppercase text-black hover:brightness-110 transition-all shadow-lg"
              >
                <span>ENQUIRE NOW</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Curriculum Modules */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Tabs List */}
            <div className="lg:col-span-5 space-y-3">
              <span className="block font-mono text-[10px] tracking-[0.24em] text-[#B99762] uppercase mb-2">
                05 // CURRICULUM ARCHITECTURE
              </span>
              {curriculumTabs.map((tab, idx) => (
                <button
                  key={tab.title}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    activeTab === idx
                      ? "border-[#B99762] bg-[#22201D] shadow-lg shadow-[#B99762]/10"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="font-mono text-xs text-[#DFC79C] uppercase tracking-wider">
                      {tab.title}
                    </span>
                    <span className="font-mono text-xs text-white/40">0{idx + 1}</span>
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl text-white font-normal">
                    {tab.subtitle}
                  </h4>
                </button>
              ))}
            </div>

            {/* Detailed Tab View with Editorial Image */}
            <div className="lg:col-span-7">
              <div className="liquid-glass-card p-8 sm:p-10 rounded-3xl min-h-[480px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-[1px] w-6 bg-[#B99762]" />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#DFC79C]">
                      {curriculumTabs[activeTab].title} IN-DEPTH
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-4">
                    {curriculumTabs[activeTab].subtitle}
                  </h3>

                  {/* Module Editorial Reference Image */}
                  <div className="relative w-full h-44 sm:h-56 rounded-xl overflow-hidden mb-6 border border-white/10">
                    <Image
                      src={curriculumTabs[activeTab].image}
                      alt={curriculumTabs[activeTab].subtitle}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  <p className="text-sm sm:text-base text-[#E7E2D9] font-light leading-relaxed mb-6">
                    {curriculumTabs[activeTab].desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-[#DFC79C] mb-2">
                      Key Competencies Mastered:
                    </span>
                    {curriculumTabs[activeTab].points.map((pt) => (
                      <div key={pt} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-[#B99762] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-neutral-300 font-light">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400">Live Human Model Practice Every Session</span>
                  <button
                    onClick={onOpenEnquiry}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#DFC79C] hover:text-white uppercase tracking-wider font-semibold"
                  >
                    <span>Request Full Syllabus</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 06 — THE 2X REVENUE SYSTEM (Warm Ivory Editorial)  */}
      {/* ================================================== */}
      <section id="method" className="py-24 md:py-40 px-6 md:px-14 border-t border-[#DDD7CB] bg-[#F7F5F0] relative">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-[11px] tracking-[0.24em] text-[#6E675C] uppercase block mb-3">
              06 // PROPRIETARY BUSINESS FRAMEWORK
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#181715] font-normal leading-tight mb-4">
              The 2X Revenue <span className="italic text-[#947346]">System.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#6E675C] font-light leading-relaxed">
              Artistic skill gives you confidence. The 2X Revenue System builds your bank balance. The exact 4-pillar commercial blueprint Pushpalatha installs into every resident:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="ivory-card p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xl text-[#947346] block mb-4">01</span>
                <h3 className="font-serif text-2xl text-[#181715] mb-2">Prestige Positioning</h3>
                <p className="text-sm text-[#6E675C] font-light leading-relaxed">
                  Transforming your Instagram, lookbook optics, bio, and bride intake workflow so high-net-worth families perceive you as an authoritative bridal stylist, not a commodity vendor.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DDD7CB] font-mono text-[10px] uppercase text-[#947346]">
                Result: Zero Price Haggling
              </div>
            </div>

            <div className="ivory-card p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xl text-[#947346] block mb-4">02</span>
                <h3 className="font-serif text-2xl text-[#181715] mb-2">High-Ticket Pricing</h3>
                <p className="text-sm text-[#6E675C] font-light leading-relaxed">
                  The pricing psychology of packaging Muhurtham, Sangeet, and Reception bundles so your average booking jumps from ₹8,000 to ₹35,000–₹50,000 without friction.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DDD7CB] font-mono text-[10px] uppercase text-[#947346]">
                Result: 50% Advance Deposits
              </div>
            </div>

            <div className="ivory-card p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xl text-[#947346] block mb-4">03</span>
                <h3 className="font-serif text-2xl text-[#181715] mb-2">Direct Bride Leads</h3>
                <p className="text-sm text-[#6E675C] font-light leading-relaxed">
                  Inbound lead generation via cinematic bridal transformation reels, local luxury wedding venue tie-ups, and photographer networks—zero reliance on commission brokers.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DDD7CB] font-mono text-[10px] uppercase text-[#947346]">
                Result: Predictable Monthly Bookings
              </div>
            </div>

            <div className="ivory-card p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xl text-[#947346] block mb-4">04</span>
                <h3 className="font-serif text-2xl text-[#181715] mb-2">Studio &amp; Team Scaling</h3>
                <p className="text-sm text-[#6E675C] font-light leading-relaxed">
                  How to train junior artists to handle bridal party guests and bridesmaids, allowing you to double your revenue per wedding date without working double the hours.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DDD7CB] font-mono text-[10px] uppercase text-[#947346]">
                Result: Autonomous Studio Operations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 07 — HOW THE MENTORSHIP WORKS                      */}
      {/* ================================================== */}
      <section className="py-24 md:py-36 px-6 md:px-14 border-t border-[#DDD7CB] bg-[#FCFBF8] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#947346] block mb-3">
              07 // THE EXPERIENCE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#181715] font-normal uppercase">
              How The Mentorship <span className="italic text-[#947346]">Works.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl border border-[#DDD7CB] bg-[#F7F5F0] flex flex-col justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-[#947346]">STEP 01</span>
              <div className="my-6">
                <h4 className="font-serif text-2xl text-[#181715] mb-2">Vanity &amp; Skill Audit</h4>
                <p className="text-sm text-[#6E675C] font-light leading-relaxed">
                  Pushpalatha examines your current kit, eliminating expired or cakey formulations and saving ₹50K+ in wasted cosmetics.
                </p>
              </div>
              <span className="text-[11px] font-mono text-[#B4AA9D]">Day 01 Intensive</span>
            </div>

            <div className="p-8 rounded-2xl border border-[#DDD7CB] bg-[#F7F5F0] flex flex-col justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-[#947346]">STEP 02</span>
              <div className="my-6">
                <h4 className="font-serif text-2xl text-[#181715] mb-2">Live Model Labs</h4>
                <p className="text-sm text-[#6E675C] font-light leading-relaxed">
                  Daily hands-on practice on diverse real South Indian brides. Pushpalatha physically corrects brush pressure and blending.
                </p>
              </div>
              <span className="text-[11px] font-mono text-[#B4AA9D]">Weeks 1 to 3</span>
            </div>

            <div className="p-8 rounded-2xl border border-[#DDD7CB] bg-[#F7F5F0] flex flex-col justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-[#947346]">STEP 03</span>
              <div className="my-6">
                <h4 className="font-serif text-2xl text-[#181715] mb-2">4K Editorial Shoot</h4>
                <p className="text-sm text-[#6E675C] font-light leading-relaxed">
                  Real bridal models, authentic Kanjeevaram silks, temple jewellery, and studio lighting to produce your launch portfolio.
                </p>
              </div>
              <span className="text-[11px] font-mono text-[#B4AA9D]">Week 4 Graduation</span>
            </div>

            <div className="p-8 rounded-2xl border border-[#DDD7CB] bg-[#F7F5F0] flex flex-col justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-[#947346]">STEP 04</span>
              <div className="my-6">
                <h4 className="font-serif text-2xl text-[#181715] mb-2">Lifetime Circle</h4>
                <p className="text-sm text-[#6E675C] font-light leading-relaxed">
                  Ongoing access to regional bridal inquiries, 1:1 WhatsApp inquiry audits from Pushpalatha, and alumni retreats.
                </p>
              </div>
              <span className="text-[11px] font-mono text-[#B4AA9D]">Ongoing Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 08 — STUDENT STORIES / VERIFIED PROOF              */}
      {/* ================================================== */}
      <section id="stories" className="py-24 md:py-40 px-6 md:px-14 border-t border-[#DDD7CB] bg-[#F7F5F0] relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#DDD7CB] gap-6">
            <div>
              <span className="font-mono text-[11px] tracking-[0.24em] text-[#6E675C] uppercase block mb-3">
                08 // VERIFIED TRANSFORMATIONS
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#181715] font-normal uppercase leading-tight">
                Real Artists. <br />
                <span className="italic text-[#947346]">Documented Growth.</span>
              </h2>
            </div>
            <p className="font-mono text-xs text-[#6E675C] max-w-sm uppercase tracking-wider leading-relaxed">
              No paid influencers. Real practicing makeup artists who scaled their careers under Pushpalatha&apos;s personal guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentProof.map((student) => (
              <div
                key={student.name}
                className="ivory-card p-8 sm:p-9 rounded-2xl flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-block rounded-full border border-[#947346]/30 bg-[#947346]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#947346]">
                      {student.tag}
                    </span>
                    <div className="flex text-[#947346]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="font-serif italic text-lg sm:text-xl text-[#181715] leading-snug mb-8">
                    &ldquo;{student.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-[#DDD7CB]">
                  <div className="flex justify-between items-baseline mb-2 text-xs font-mono">
                    <span className="text-[#6E675C] uppercase">Pricing Shift:</span>
                    <span className="text-[#947346] font-bold">
                      {student.prevPrice} → {student.nowPrice}
                    </span>
                  </div>
                  <div>
                    <span className="block text-base font-serif text-[#181715] font-medium">{student.name}</span>
                    <span className="text-[11px] font-mono text-[#6E675C] uppercase tracking-wider">{student.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 09 — WHO THIS IS FOR (STRICT QUALIFICATION)        */}
      {/* ================================================== */}
      <section className="py-24 md:py-36 px-6 md:px-14 border-t border-[#DDD7CB] bg-[#FCFBF8] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#947346] block mb-3">
              09 // COHORT CRITERIA
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#181715] font-normal uppercase">
              Is This Right <span className="italic text-[#947346]">For You?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For You */}
            <div className="p-8 sm:p-10 rounded-2xl border border-emerald-600/25 bg-emerald-500/[0.04]">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-800 font-bold block mb-4">
                ✓ THIS IS FOR YOU IF:
              </span>
              <ul className="space-y-4 text-sm text-[#181715] font-light">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>You are a freelance MUA tired of working for ₹5,000–₹10,000 and want to enter the ₹35,000+ luxury bridal tier.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>You are a committed beginner wanting to launch directly with high-standard editorial technique and business clarity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>You want direct, unfiltered 1:1 physical hand correction from Pushpalatha rather than watching prerecorded video tutorials.</span>
                </li>
              </ul>
            </div>

            {/* Not For You */}
            <div className="p-8 sm:p-10 rounded-2xl border border-red-500/25 bg-red-500/[0.04]">
              <span className="font-mono text-xs uppercase tracking-widest text-red-800 font-bold block mb-4">
                ✕ THIS IS NOT FOR YOU IF:
              </span>
              <ul className="space-y-4 text-sm text-[#181715] font-light">
                <li className="flex items-start gap-3">
                  <span className="text-red-700 font-mono text-xs shrink-0 mt-0.5">✕</span>
                  <span>You are looking for a cheap, generic course certificate to hang on the wall without practicing on real models.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-700 font-mono text-xs shrink-0 mt-0.5">✕</span>
                  <span>You believe heavy cake makeup and digital face filters are acceptable substitutes for true skin preparation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-700 font-mono text-xs shrink-0 mt-0.5">✕</span>
                  <span>You are unwilling to treat your makeup artistry as a serious, disciplined commercial business.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 10 — THE EDITORIAL BOOKING & ADMISSIONS SECTION    */}
      {/* (Built following sample #booking architecture)      */}
      {/* ================================================== */}
      <section className="sec booking py-24 md:py-36 px-6 md:px-14 border-t border-[#DDD7CB] bg-[#FCFBF8]" id="booking" aria-labelledby="booking-title">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left Column: Sticky Intro + Meta with horizontal dashes */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <span className="font-mono text-[11px] tracking-[0.24em] text-[#6E675C] uppercase block mb-3">
                10 / ADMISSIONS &amp; APPOINTMENTS
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#181715] font-normal leading-[1.05] mb-6" id="booking-title">
                Request an <br />
                <span className="italic text-[#947346]">Appointment.</span>
              </h2>
              <p className="text-base text-[#6E675C] font-light leading-relaxed mb-8">
                Admissions for PRO MUA Mastery cohorts and signature bridal makeover dates are arranged by hand. Send your details below and our admissions desk will reply with the closest available seats within 24 hours.
              </p>

              {/* Editorial Meta List with fine taupe dashes (from sample) */}
              <ul className="space-y-4 font-mono text-xs uppercase tracking-wider text-[#6E675C] border-t border-[#DDD7CB] pt-6 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-[1px] bg-[#B4AA9D] shrink-0" />
                  <span>Strictly 12 artists per cohort — offline studio</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-[1px] bg-[#B4AA9D] shrink-0" />
                  <span>Atelier Studios in Coimbatore &amp; Chennai</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-[1px] bg-[#B4AA9D] shrink-0" />
                  <span>Direct review by Pushpalatha within 24 hours</span>
                </li>
              </ul>

              {/* Quick direct communication links */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="tel:9363341010"
                  className="inline-flex items-center gap-2 rounded-full border border-[#181715]/20 bg-[#181715] px-5 py-2.5 text-xs font-mono tracking-widest uppercase text-white hover:bg-[#947346] transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-[#DFC79C]" />
                  <span>Call 9363341010</span>
                </a>
                <a
                  href="https://wa.me/919363341010"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#DDD7CB] bg-white px-5 py-2.5 text-xs font-mono tracking-widest uppercase text-[#181715] hover:border-[#947346] transition-colors"
                >
                  <span>WhatsApp Desk</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Architectural Underline Form (from sample) */}
            <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-[#DDD7CB] pt-8 lg:pt-0 lg:pl-16">
              {isBooked ? (
                <div className="py-12 text-center bg-[#F7F5F0] p-10 rounded-2xl border border-[#DDD7CB]">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif text-3xl font-normal text-[#181715]">Application Received</h3>
                  <p className="mt-3 text-sm text-[#6E675C] font-light max-w-sm mx-auto">
                    Redirecting to Pushpalatha Ma&apos;am&apos;s admissions desk via WhatsApp for instant priority screening.
                  </p>
                  <div className="mt-6 flex justify-center gap-4">
                    <button
                      onClick={() => setIsBooked(false)}
                      className="text-xs font-mono uppercase tracking-wider text-[#947346] underline underline-offset-4"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-7">
                  {/* Name field */}
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-widest text-[#6E675C] mb-1">
                      Full Name <span className="text-[#947346]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sundaram"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      className="editorial-input"
                    />
                  </div>

                  {/* Email & Phone grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-widest text-[#6E675C] mb-1">
                        Email Address <span className="text-[#947346]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="priya@example.com"
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                        className="editorial-input"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-widest text-[#6E675C] mb-1">
                        Phone / WhatsApp <span className="text-[#947346]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        className="editorial-input"
                      />
                    </div>
                  </div>

                  {/* Service selection */}
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-widest text-[#6E675C] mb-1">
                      Program / Service Interested In <span className="text-[#947346]">*</span>
                    </label>
                    <select
                      value={bookingForm.service}
                      onChange={(e) => setBookingForm({ ...bookingForm, service: e.target.value })}
                      className="editorial-input cursor-pointer"
                    >
                      <option>PRO MUA Mastery — 4-Week Offline Residency</option>
                      <option>2X Revenue System — Business &amp; Pricing Intensive</option>
                      <option>Bespoke Bridal Makeover Consultation (Muhurtham / Reception)</option>
                      <option>Weekend Advanced Hair &amp; Saree Draping Masterclass</option>
                      <option>Not sure yet — Need guidance from Pushpalatha</option>
                    </select>
                  </div>

                  {/* Experience Level & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-widest text-[#6E675C] mb-1">
                        Current Experience Level
                      </label>
                      <select
                        value={bookingForm.experience}
                        onChange={(e) => setBookingForm({ ...bookingForm, experience: e.target.value })}
                        className="editorial-input cursor-pointer"
                      >
                        <option>Aspiring Artist / Starting from scratch</option>
                        <option>Practicing MUA (1-3 yrs) — Want to enter ₹35K+ tier</option>
                        <option>Experienced MUA (3+ yrs) — Scaling studio &amp; team</option>
                        <option>Bride-to-be looking for wedding makeover</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-widest text-[#6E675C] mb-1">
                        Your City / Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Coimbatore, Chennai, Bengaluru"
                        value={bookingForm.city}
                        onChange={(e) => setBookingForm({ ...bookingForm, city: e.target.value })}
                        className="editorial-input"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-widest text-[#6E675C] mb-1">
                      Instagram Handle or Specific Goal (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. @priya.artistry or goal for the upcoming wedding season"
                      value={bookingForm.message}
                      onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
                      className="editorial-input"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-[#181715] px-8 py-4 text-xs font-mono font-bold uppercase tracking-widest text-white hover:bg-[#947346] transition-all shadow-lg active:scale-95"
                    >
                      <span>SUBMIT ADMISSION REQUEST</span>
                      <ArrowUpRight className="h-4 w-4 text-[#DFC79C]" />
                    </button>
                    <span className="font-mono text-[10px] text-[#6E675C] uppercase tracking-wider">
                      Direct admissions response within 24 hours
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 11 — FAQ ACCORDION                                 */}
      {/* ================================================== */}
      <section id="faq" className="py-24 md:py-36 px-6 md:px-14 border-t border-[#DDD7CB] bg-[#F7F5F0] relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#947346] block mb-3">
              11 // CLARITY &amp; POLICIES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#181715] font-normal uppercase">
              Frequently Asked <span className="italic text-[#947346]">Questions.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-[#DDD7CB] bg-[#FCFBF8] overflow-hidden transition-all duration-300 hover:border-[#B4AA9D]"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-serif text-lg sm:text-xl text-[#181715] font-normal">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#947346] shrink-0 transition-transform duration-300 ${
                      activeFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm text-[#6E675C] font-light leading-relaxed border-t border-[#DDD7CB] pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 12 — FINAL ENQUIRY & CLOSING                       */}
      {/* ================================================== */}
      <section className="py-28 md:py-48 px-6 md:px-14 border-t border-[#DDD7CB] bg-[#181715] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B99762]/30 bg-[#B99762]/10 px-4 py-1 text-[11px] font-mono tracking-widest text-[#DFC79C] uppercase mb-8">
            <Sparkles className="h-3.5 w-3.5 text-[#B99762]" />
            <span>THE DEFINING STEP</span>
          </div>

          <h2 className="editorial-statement font-serif text-white font-normal leading-[0.94] mb-8 uppercase tracking-tight">
            READY TO BUILD <br />
            MORE THAN A <br />
            <span className="italic text-[#DFC79C]">MAKEUP CAREER?</span>
          </h2>

          <p className="text-base sm:text-xl text-[#E7E2D9] font-light max-w-xl mx-auto mb-12 leading-relaxed">
            The next private cohort begins soon. Take your seat among the next generation of luxury South Asian bridal entrepreneurs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#booking"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#B99762] to-[#DFC79C] px-9 py-4 text-xs font-mono font-bold tracking-widest uppercase text-black hover:brightness-110 transition-all shadow-2xl active:scale-95"
            >
              <span>ENQUIRE NOW</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="tel:9363341010"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-7 py-4 text-xs font-mono tracking-widest uppercase text-white/90 backdrop-blur-md hover:border-[#B99762] hover:text-white transition-all"
            >
              <Phone className="h-3.5 w-3.5 text-[#B99762]" />
              <span>9363341010</span>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-neutral-400">
            <a
              href="https://instagram.com/nandhas.creation"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-[#DFC79C] transition-colors"
            >
              <svg className="h-3.5 w-3.5 text-[#B99762] fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>@nandhas.creation</span>
            </a>
            <span>•</span>
            <span>DIRECT ADMISSIONS // COIMBATORE · CHENNAI</span>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* LUXURY FOOTER                                      */}
      {/* ================================================== */}
      <footer className="py-14 px-6 md:px-14 border-t border-[#DDD7CB] bg-[#F7F5F0] text-[#6E675C]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-xs tracking-widest uppercase font-bold text-[#181715] block mb-1">
              PUSHPALATHA · NANDHAS CREATION
            </span>
            <p className="text-[11px] font-mono text-[#6E675C]">
              © 2025 NANDHAS CREATION STUDIO. ALL EDITORIAL &amp; CURRICULUM RIGHTS RESERVED.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-8 text-xs font-mono uppercase tracking-widest text-[#6E675C]">
            <a className="hover:text-[#181715] transition-colors" href="#about">ABOUT</a>
            <a className="hover:text-[#181715] transition-colors" href="#mastery">MASTERY</a>
            <a className="hover:text-[#181715] transition-colors" href="#method">METHOD</a>
            <a className="hover:text-[#181715] transition-colors" href="#stories">STORIES</a>
            <a className="hover:text-[#181715] transition-colors" href="#booking">BOOKING</a>
            <a className="hover:text-[#181715] transition-colors" href="#faq">FAQ</a>
            <button onClick={onOpenEnquiry} className="text-[#947346] font-semibold hover:text-[#181715] transition-colors">
              ENQUIRE
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
