import React, { useState } from 'react';
import { rndNodes } from '../data/projectsData';
import { Mic, Eye, Box, ArrowUpRight, Cpu, Radio, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InnovationLab() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeNode = rndNodes[activeIdx];

  const nodeIcons = [Mic, Eye, Box];

  return (
    <section className="relative w-full bg-[#020208] py-28 sm:py-36 overflow-hidden border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-brand/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-5">
              <span className="h-[1px] w-8 bg-brand" />
              PROPRIETARY INNOVATION LAB
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Experimental technology and internal R&amp;D.
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              Before deploying solutions for client systems, we engineer and battle-test our own technical engines—pushing capabilities across autonomous speech agents, real-time computer vision, and spatial 3D web runtimes.{' '}
              <span className="text-brand font-medium block sm:inline mt-1 sm:mt-0">
                Select an R&amp;D node to inspect:
              </span>
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5">
            <div className="w-2.5 h-2.5 bg-brand rounded-full animate-pulse shadow-[0_0_10px_#f569ff]" />
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-300">
              Lab Status: Live Prototype
            </span>
          </div>
        </div>

        {/* Interactive Layout: Left Orbit / Right Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Orbital Circle Diagram */}
          <div className="lg:col-span-5 flex items-center justify-center min-h-[380px] sm:min-h-[460px]">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] flex items-center justify-center">
              {/* Outer Dashed Orbit Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-purple-500/30 animate-spin-slow">
                {/* Glowing Satellite Beacon on orbit */}
                <div className="absolute top-0 left-1/2 w-4 h-4 -mt-2 -ml-2 rounded-full bg-brand shadow-[0_0_15px_#f569ff,0_0_30px_#f569ff]" />
              </div>

              {/* Inner Concentric Glow Ring */}
              <div className="absolute inset-8 rounded-full border border-white/5 bg-purple-950/20 backdrop-blur-sm" />

              {/* Center Core Brand Disc */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-b from-[#16122c] to-[#080714] border-2 border-white/20 flex flex-col items-center justify-center z-10 shadow-[0_0_40px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(245,105,255,0.2)]">
                <img
                  src="/logo.png"
                  alt="SAWERA TECHS Logo"
                  className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(245,105,255,0.6)]"
                />
                <span className="text-white font-extrabold tracking-widest text-xs sm:text-sm font-mono mt-1 text-silver-gradient">
                  SAWERA
                </span>
                <span className="text-[9px] sm:text-[10px] text-brand tracking-[0.25em] uppercase font-bold font-mono">
                  LABS
                </span>
              </div>

              {/* 3 Orbiting Interactive Nodes */}
              {rndNodes.map((node, idx) => {
                const isActive = idx === activeIdx;
                const Icon = nodeIcons[idx];
                const angleRad = (node.angle - 90) * (Math.PI / 180);
                // Radius in px based on 300px / 400px
                const radius = window.innerWidth < 640 ? 120 : 160;
                const x = Math.cos(angleRad) * radius;
                const y = Math.sin(angleRad) * radius;

                return (
                  <div
                    key={node.id}
                    className="absolute z-20 flex flex-col items-center justify-center cursor-pointer group transition-all duration-300"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    onClick={() => setActiveIdx(idx)}
                  >
                    <div
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-br from-[#2a174a] to-[#120a22] border-2 border-brand shadow-[0_0_35px_rgba(245,105,255,0.5)] scale-110 z-30'
                          : 'bg-[#0d0d16] border border-zinc-700 hover:border-zinc-500 hover:bg-[#161626]'
                      }`}
                    >
                      <Icon
                        className={`w-7 h-7 transition-colors duration-200 ${
                          isActive
                            ? 'text-brand'
                            : 'text-zinc-400 group-hover:text-zinc-200'
                        }`}
                        strokeWidth={1.75}
                      />
                    </div>
                    <span
                      className={`mt-2 text-[10px] sm:text-xs font-mono tracking-wider uppercase transition-colors whitespace-nowrap px-2 py-0.5 rounded-md ${
                        isActive
                          ? 'text-white font-bold bg-brand/20 border border-brand/40 shadow-[0_0_10px_rgba(245,105,255,0.3)]'
                          : 'text-zinc-400 group-hover:text-zinc-200 bg-black/40'
                      }`}
                    >
                      {node.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Active Node Inspector Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-white/10 bg-[#090818]/90 backdrop-blur-xl p-8 sm:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.6)] overflow-hidden">
              {/* Subtle top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent" />

              {/* Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-brand bg-brand/10 border border-brand/30 px-3 py-1 rounded-full">
                    NODE {activeNode.num}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {activeNode.evidenceBadge}
                  </span>
                </div>

                <Link
                  to={activeNode.slug}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:text-white transition-colors group"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {activeNode.title}
              </h3>
              <p className="text-sm font-mono text-purple-300/80 mb-6">
                {activeNode.tagline}
              </p>

              {/* Description */}
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
                {activeNode.desc}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {activeNode.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-black/40 border border-white/5 flex flex-col"
                  >
                    <span className="text-xl sm:text-2xl font-bold text-white font-mono text-silver-gradient">
                      {stat.value}
                    </span>
                    <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                {activeNode.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

