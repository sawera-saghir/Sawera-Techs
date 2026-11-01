import React from 'react';
import { ArrowUpRight, Sparkles, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="relative w-full bg-[#020208] py-28 sm:py-36 overflow-hidden border-t border-white/5">
      {/* Radiant Glow Behind CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-purple-800/25 via-brand/20 to-violet-900/25 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/30 bg-brand/10 text-xs font-mono tracking-widest text-brand uppercase mb-6 shadow-[0_0_15px_rgba(245,105,255,0.25)]">
          <Sparkles className="w-3.5 h-3.5 text-brand animate-pulse" />
          START A CONVERSATION
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
          Have a product idea <br />
          <span className="text-silver-purple">worth building?</span>
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Tell us about your project, the business problem you are solving, or the software you need built. We evaluate feasibility and share a clear architectural path forward within 48 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm text-black bg-brand hover:bg-brand/90 transition-all duration-200 shadow-[0_0_30px_rgba(245,105,255,0.45)] hover:shadow-[0_0_45px_rgba(245,105,255,0.7)] hover:scale-[1.02]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            to="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-sm text-zinc-200 border border-white/15 bg-white/5 hover:border-brand/40 hover:bg-white/10 transition-all"
          >
            <span>Explore Case Studies</span>
            <ArrowUpRight className="w-4 h-4 text-brand" />
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 text-xs font-mono text-zinc-400">
          <Mail className="w-4 h-4 text-brand" />
          <span>Direct Founder Desk:</span>
          <span className="text-zinc-200 font-semibold underline decoration-brand/50">contact@saweratechs.com</span>
        </div>
      </div>
    </section>
  );
}

