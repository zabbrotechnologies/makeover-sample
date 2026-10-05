"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Gauge, Shield, Terminal } from "lucide-react";

export default function ExperienceMetrics() {
  const specs = [
    {
      icon: Gauge,
      label: "Scrub Frequency",
      value: "60 FPS",
      sub: "Zero jank RAF rendering",
    },
    {
      icon: Zap,
      label: "Playback Latency",
      value: "0.0 MS",
      sub: "Instantaneous canvas scrub",
    },
    {
      icon: Cpu,
      label: "Buffer Strategy",
      value: "Preload Queue",
      sub: "Optimized WebP sequential pipeline",
    },
    {
      icon: Shield,
      label: "Object-Fit Math",
      value: "Dynamic Cover",
      sub: "Retina 2x DPR responsive scaling",
    },
  ];

  return (
    <section className="relative z-20 bg-[#060608] px-6 py-20 md:px-12 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Pill */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono text-white/70 mb-4 backdrop-blur-md">
            <Terminal className="w-3.5 h-3.5 text-amber-400" />
            <span>ARCHITECTURAL BENCHMARKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
            Built For Extreme <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">Fidelity</span>
          </h2>
          <p className="mt-3 text-neutral-400 max-w-xl text-sm sm:text-base font-light">
            Engineered using HTML5 Canvas scrubbing rather than heavy video decoders, eliminating frame seek stutter and delivering continuous tactile scrub control.
          </p>
        </div>

        {/* Spec Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-2xl border border-white/10 bg-[#0b0b0f]/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-amber-400/30 hover:bg-[#121218]"
              >
                <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center mb-4 text-amber-400">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl font-bold font-mono text-white mb-1">
                  {item.value}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-amber-400/90 mb-1">
                  {item.label}
                </div>
                <div className="text-xs text-neutral-400">
                  {item.sub}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
