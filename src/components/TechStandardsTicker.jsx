import React from 'react';
import { techStandards } from '../data/projectsData';
import { Cpu, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';

export default function TechStandardsTicker() {
  const icons = [Cpu, Sparkles, Zap, Layers, ShieldCheck];

  return (
    <section className="relative w-full py-16 bg-[#030309] border-y border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[150px] bg-purple-700/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[150px] bg-brand/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-mono tracking-widest text-brand uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5 text-brand animate-pulse" />
          ARCHITECTURAL STANDARDS
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
          Engineered for stability, speed, and real-world scale.
        </h2>
        <p className="text-zinc-400 text-sm max-w-2xl mx-auto mt-2 font-normal">
          We build software using modern, verified toolchains—grounded in type safety, modular architecture, and predictable low-latency runtime performance.
        </p>
      </div>

      {/* Infinite Marquee Track */}
      <div className="relative w-full overflow-hidden flex py-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="animate-marquee flex items-center gap-6">
          {[...techStandards, ...techStandards].map((tech, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-white/10 bg-[#090818]/80 backdrop-blur-md hover:border-brand/50 hover:bg-[#120e2e]/90 transition-all duration-300 group shadow-lg min-w-[320px]"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-brand group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(245,105,255,0.4)] transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-mono font-bold tracking-wider text-zinc-100 group-hover:text-brand transition-colors uppercase">
                    {tech.label}
                  </span>
                  <span className="text-xs text-zinc-400 font-sans mt-0.5">
                    {tech.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

