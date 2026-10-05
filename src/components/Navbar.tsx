"use client";

import React, { useState, useEffect } from "react";
import AudioPlayer from "./AudioPlayer";
import { Compass } from "lucide-react";

export default function Navbar() {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " UTC"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-8 py-4 sm:py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="pointer-events-auto flex items-center gap-3 group rounded-full border border-white/10 bg-[#0c0c10]/80 px-4 py-2 backdrop-blur-xl transition-all duration-300 hover:border-amber-400/40 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]"
        >
          <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 to-amber-200">
            <span className="text-[11px] font-black text-black">K</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-mono font-bold tracking-wider text-white uppercase group-hover:text-amber-300 transition-colors">
              KINETIC.STUDIO
            </span>
            <span className="text-[9px] font-mono text-white/40 tracking-tight">
              SCROLLYTELLING ARCHIVE
            </span>
          </div>
        </a>

        {/* Center Live Coordinates / Nano Status */}
        <div className="pointer-events-auto hidden md:flex items-center gap-4 rounded-full border border-white/10 bg-[#0c0c10]/70 px-4 py-2 backdrop-blur-xl text-[11px] font-mono text-white/60">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-white/80">LIVE LAB</span>
          </div>
          <span className="text-white/20">/</span>
          <span>{timeString || "00:00:00 UTC"}</span>
          <span className="text-white/20">/</span>
          <span className="text-amber-400">NEXT 14 CANVAS</span>
        </div>

        {/* Right Action buttons */}
        <div className="pointer-events-auto flex items-center gap-3">
          <AudioPlayer />

          <a
            href="#projects"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs font-mono font-medium text-amber-300 backdrop-blur-md transition-all duration-300 hover:border-amber-400 hover:bg-amber-400 hover:text-black hover:shadow-[0_0_25px_rgba(245,158,11,0.3)]"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>ARCHIVE</span>
          </a>
        </div>
      </div>
    </header>
  );
}
