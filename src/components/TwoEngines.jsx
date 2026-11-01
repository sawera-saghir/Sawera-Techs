import React from 'react';
import { Laptop, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TwoEngines() {
  return (
    <section className="relative w-full bg-[#030309] py-28 sm:py-36 overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-900/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-5">
            <span className="h-[1px] w-8 bg-brand" />
            TWO DELIVERY ENGINES
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            One mission. <br className="hidden sm:inline" />
            <span className="text-silver-purple">Two ways we deliver.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Most agencies either consult on strategy or simply write code. We do both, and each makes the other stronger.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Engine 1: Client Engineering Studio */}
          <div className="relative rounded-3xl p-8 sm:p-12 border border-white/10 bg-[#080714] hover:border-brand/40 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono font-bold text-white/90 bg-white/10 border border-white/15 px-3 py-1 rounded-full uppercase tracking-wider">
                  Engine 01
                </span>
                <span className="text-xs font-mono text-brand">
                  FOR FOUNDERS &amp; BUSINESSES
                </span>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-900/50 to-brand/20 border border-brand/30 flex items-center justify-center text-brand mb-8 group-hover:scale-105 transition-transform shadow-[0_0_25px_rgba(245,105,255,0.25)]">
                <Laptop className="w-7 h-7" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Client Engineering Studio
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
                We design and build bespoke software platforms, SaaS products, full-stack applications, and internal AI automation pipelines for ambitious founders and established businesses.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                {[
                  "Direct access to principal systems engineers",
                  "Type-safe production architectures with zero debt",
                  "Fixed or milestone pricing with transparent timelines",
                  "Full intellectual property transfer on delivery"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 hover:border-brand/50 hover:bg-white/10 text-white font-medium text-sm transition-all group/btn"
            >
              <span>Explore Client Services</span>
              <ArrowUpRight className="w-4 h-4 text-brand group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </Link>
          </div>

          {/* Engine 2: Proprietary Product Lab */}
          <div className="relative rounded-3xl p-8 sm:p-12 border border-white/10 bg-[#080714] hover:border-brand/40 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono font-bold text-white/90 bg-white/10 border border-white/15 px-3 py-1 rounded-full uppercase tracking-wider">
                  Engine 02
                </span>
                <span className="text-xs font-mono text-purple-300">
                  INTERNAL R&amp;D LAB
                </span>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-900/50 to-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-8 group-hover:scale-105 transition-transform shadow-[0_0_25px_rgba(192,132,252,0.25)]">
                <Cpu className="w-7 h-7" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Proprietary Product Lab
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
                The strongest proof of what we can build is what we have already built. We engineer, launch, and operate our own software products, stress-testing bleeding-edge AI models and 3D frameworks.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                {[
                  "Appointix: AI Hyperlocal Service Marketplace",
                  "AuraTalk AI: Real-Time Neural Avatar Engine",
                  "Petstan: Interactive 3D WebGL Pet Platform",
                  "Proprietary R&D in Roman Urdu & Multilingual NLP"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/work"
              className="inline-flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 hover:border-purple-400/50 hover:bg-white/10 text-white font-medium text-sm transition-all group/btn"
            >
              <span>Inspect Internal Platforms</span>
              <ArrowUpRight className="w-4 h-4 text-purple-400 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

