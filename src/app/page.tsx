"use client";

import React, { useState } from "react";
import LiquidGlassNavbar from "@/components/LiquidGlassNavbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import PushpalathaMentor from "@/components/PushpalathaMentor";
import EnquiryModal from "@/components/EnquiryModal";

export default function Home() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#08080a] text-white selection:bg-[#b99762] selection:text-[#08080a]">
      {/* 03 — Floating Liquid Glass Navigation */}
      <LiquidGlassNavbar onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      {/* 05 — Core Canvas Scroll Sequence with Parallax Storytelling Overlay */}
      <ScrollyCanvas
        totalFrames={192}
        framePrefix="/sequence/frame_"
        frameExtension=".webp"
        padLength={3}
      >
        <Overlay onOpenEnquiry={() => setIsEnquiryOpen(true)} />
      </ScrollyCanvas>

      {/* 06 — Pushpalatha Editorial Experience & Conversion Architecture */}
      <div className="relative z-20">
        <PushpalathaMentor onOpenEnquiry={() => setIsEnquiryOpen(true)} />
      </div>

      {/* 10 & 12 — Interactive Liquid Glass Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </main>
  );
}
