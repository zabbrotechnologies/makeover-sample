"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Sparkles, ArrowUpRight } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: "Creative Dev" | "3D & WebGL" | "Spatial UI";
  year: string;
  award: string;
  description: string;
  metrics: { label: string; value: string };
  tags: string[];
  gradient: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "aura-kinetic",
    title: "Aura Kinetic Experience",
    category: "3D & WebGL",
    year: "2026",
    award: "Awwwards Site of the Month",
    description:
      "A spatial interactive showroom featuring real-time light refraction, custom GLSL post-processing shaders, and tactile scroll-linked kinetic typography.",
    metrics: { label: "Frame Rate", value: "60 FPS Locked" },
    tags: ["Three.js", "WebGL", "Next.js", "Framer Motion"],
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    id: "chronos-horology",
    title: "Chronos Haute Horlogerie",
    category: "Creative Dev",
    year: "2026",
    award: "FWA of the Day",
    description:
      "Sub-pixel canvas scrubbing configurator for luxury Swiss tourbillons with micro-mechanical exploded view animations and interactive sound design.",
    metrics: { label: "Asset Compression", value: "92% WebP Ratio" },
    tags: ["Canvas API", "Audio API", "TypeScript", "Tailwind CSS"],
    gradient: "from-yellow-500/20 via-amber-600/10 to-transparent",
  },
  {
    id: "solaris-hypercar",
    title: "Solaris Aerodynamics",
    category: "Spatial UI",
    year: "2025",
    award: "CSSDA Best Innovation",
    description:
      "Telemetry-driven digital twin visualization for electric hypercars, tracking fluid wind tunnel simulations dynamically mapped to user inertia.",
    metrics: { label: "Render Latency", value: "0.2ms Draw" },
    tags: ["Compute Shaders", "Scrollytelling", "React 18", "SVG Filters"],
    gradient: "from-orange-500/20 via-red-500/10 to-transparent",
  },
  {
    id: "monolith-journal",
    title: "Monolith Editorial Archive",
    category: "Creative Dev",
    year: "2025",
    award: "Awwwards Developer Award",
    description:
      "Avant-garde editorial publication challenging conventional web layout constraints with fluid kinetic grids and variable typography deformation.",
    metrics: { label: "Lighthouse Score", value: "100 / 100" },
    tags: ["Next.js App Router", "Tailwind CSS", "CSS Grid", "Lenis Scroll"],
    gradient: "from-amber-400/20 via-stone-700/10 to-transparent",
  },
  {
    id: "neura-synthesizer",
    title: "Neura Generative Soundscape",
    category: "3D & WebGL",
    year: "2025",
    award: "Webby Honoree",
    description:
      "Interactive procedural synthesizer that renders reactive waveforms and harmonic particles directly synchronized to cursor velocity and scroll.",
    metrics: { label: "Audio Synthesis", value: "Procedural WebAudio" },
    tags: ["Web Audio API", "Canvas 2D", "Mathematical Curves", "Motion"],
    gradient: "from-amber-600/20 via-yellow-700/10 to-transparent",
  },
  {
    id: "valence-protocol",
    title: "Valence Liquidity Matrix",
    category: "Spatial UI",
    year: "2024",
    award: "FWA of the Month",
    description:
      "Glassmorphic financial telemetry dashboard featuring dense real-time transaction pipelines rendered with WebGL particle buffers.",
    metrics: { label: "Throughput", value: "120K Nodes" },
    tags: ["WebGL 2.0", "GPU Instancing", "Next.js", "Design System"],
    gradient: "from-yellow-400/20 via-amber-500/10 to-transparent",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Creative Dev", "3D & WebGL", "Spatial UI"];

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative z-20 bg-[#060608] px-6 py-28 md:px-12 lg:px-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1 text-xs font-mono text-amber-300 mb-4">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>SELECTED ARCHIVE // 2024 — 2026</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase">
              Curated <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="mt-3 text-neutral-400 max-w-xl text-base font-light">
              A curated repertoire of high-impact digital experiences combining sensory storytelling, bespoke shaders, and tactile performance.
            </p>
          </div>

          {/* Nano Banana Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] p-1.5 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                  activeFilter === cat
                    ? "text-black font-semibold shadow-md"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {activeFilter === cat && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-300 rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Glassmorphism Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group relative rounded-2xl border border-white/10 bg-[#0e0e13]/70 backdrop-blur-xl p-7 transition-all duration-500 hover:border-amber-400/40 hover:bg-[#15151c]/90 hover:shadow-[0_0_40px_rgba(245,158,11,0.12)] flex flex-col justify-between overflow-hidden"
              >
                {/* Dynamic Gradient Accents */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                />
                
                {/* Top Metas */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono tracking-widest text-amber-400/90 uppercase">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-white/40">
                      {project.year}
                    </span>
                  </div>

                  {/* Award Badge */}
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 px-2.5 py-1 text-[10px] font-mono text-amber-300 mb-4">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>{project.award}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-200 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-neutral-400 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Meta & Metric */}
                <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase text-white/40">
                      {project.metrics.label}
                    </span>
                    <span className="text-xs font-mono font-bold text-amber-300">
                      {project.metrics.value}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[10px] font-mono text-white/60 group-hover:border-amber-500/20 group-hover:text-white/80 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <a
                    href={`#${project.id}`}
                    onClick={(e) => e.preventDefault()}
                    className="flex items-center justify-between w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs font-mono text-white group-hover:border-amber-400/40 group-hover:bg-amber-400/10 transition-all duration-300"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4 text-amber-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
