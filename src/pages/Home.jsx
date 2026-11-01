import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Code2, Cpu, Box, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import ParticleCanvas from '../components/ParticleCanvas';
import TechStandardsTicker from '../components/TechStandardsTicker';
import DeliveryModel from '../components/DeliveryModel';
import TwoEngines from '../components/TwoEngines';
import InnovationLab from '../components/InnovationLab';
import FeaturedProjects from '../components/FeaturedProjects';
import HowWeWork from '../components/HowWeWork';
import EngagementRoadmap from '../components/EngagementRoadmap';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#020208] text-white">
      {/* HERO SECTION */}
      <section className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden px-4 md:px-12 lg:px-24 pt-32 pb-24">
        {/* Background Canvas & Ambient Lighting */}
        <div className="absolute inset-0 z-0 bg-black overflow-hidden pointer-events-none">
          <ParticleCanvas />

          {/* Cyber Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

          {/* Glowing Purple Radial Orbs */}
          <div className="absolute top-1/4 right-1/4 h-[45vh] w-[45vh] rounded-full bg-brand/15 blur-[140px]" />
          <div className="absolute top-1/3 left-10 h-[35vh] w-[35vh] rounded-full bg-purple-800/15 blur-[130px]" />

          {/* Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020208] to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex w-full max-w-7xl flex-col items-start gap-8 mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-brand/30 bg-brand/10 text-xs sm:text-sm font-semibold tracking-widest text-brand uppercase shadow-[0_0_20px_rgba(245,105,255,0.25)]">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-ping" />
            AI-POWERED WEB &amp; SOFTWARE ENGINEERING STUDIO
          </div>

          {/* Headline */}
          <h1 className="max-w-5xl text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[1.08] font-sans">
            We engineer intelligent applications and{' '}
            <span className="text-silver-purple">digital platforms.</span>
          </h1>

          {/* Subtext and Action Buttons */}
          <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between gap-12 mt-2">
            <div className="flex max-w-3xl flex-col gap-8">
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                <span className="text-white font-semibold">SAWERA TECHS</span> designs and builds custom web applications, AI-powered software, SaaS platforms, and intelligent digital systems for founders and growing businesses. Led directly by Founder &amp; CEO, Sawera Saghir, we engineer reliable technology built around real-world problems.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/contact"
                  className="group flex h-14 items-center justify-center gap-3 rounded-xl bg-brand px-8 font-bold text-black transition-all duration-200 hover:bg-brand/90 hover:scale-[1.02] shadow-[0_0_30px_rgba(245,105,255,0.4)] text-sm"
                >
                  <span>Start a Project</span>
                  <span className="transition-transform group-hover:translate-x-1 font-mono font-bold">
                    →
                  </span>
                </Link>

                <Link
                  to="/work"
                  className="group flex h-14 items-center justify-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900/80 px-8 font-semibold text-zinc-100 transition-all duration-200 hover:border-brand/60 hover:bg-zinc-800 text-sm shadow-md"
                >
                  <span>Explore Our Work</span>
                  <span className="transition-transform group-hover:translate-x-1 text-brand">
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* Quick Metrics / Credibility Badge */}
            <div className="hidden xl:flex flex-col gap-4 p-6 rounded-3xl border border-white/10 bg-[#090818]/80 backdrop-blur-md shadow-2xl min-w-[280px]">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <img
                  src="/logo.png"
                  alt="SAWERA TECHS"
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                    SAWERA TECHS
                  </div>
                  <div className="text-[10px] text-zinc-400 font-mono">
                    VERIFIED ENGINEERING
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand" />
                  <span>Founder-Led Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand" />
                  <span>Zero-Middleman Communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand" />
                  <span>Type-Safe Next.js &amp; LLMs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <TechStandardsTicker />

      {/* The Delivery Model */}
      <DeliveryModel />

      {/* Two Delivery Engines */}
      <TwoEngines />

      {/* Proprietary Innovation Lab */}
      <InnovationLab />

      {/* Featured Systems & Case Studies */}
      <FeaturedProjects />

      {/* How We Work */}
      <HowWeWork />

      {/* Engagement Roadmap */}
      <EngagementRoadmap />

      {/* Call To Action */}
      <CTASection />
    </div>
  );
}

