import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowUpRight, CheckCircle2, Shield, Heart, Lightbulb, Award, Target, UserCheck, Rocket } from 'lucide-react';
import { values } from '../data/projectsData';
import CTASection from '../components/CTASection';

export default function About() {
  const timeline = [
    {
      year: "2024",
      badge: "ORIGIN",
      title: "Engineer-Led Studio Founded",
      desc: "Founded by Sawera Saghir (Founder & CEO) with a direct focus on engineering modern software, custom AI systems, and scalable web applications without traditional agency overhead."
    },
    {
      year: "2024",
      badge: "PROPRIETARY R&D",
      title: "Building Internal Engines",
      desc: "Invested heavily in autonomous agents, real-time voice synthesis, and WebGL rendering—culminating in the launch of our internal Innovation Lab."
    },
    {
      year: "2025",
      badge: "DEPLOYMENT",
      title: "Flagship Systems Shipped",
      desc: "Shipped three active production prototypes: Appointix (multilingual AI marketplace), AuraTalk AI (neural video conversational agent), and Petstan (interactive 3D WebGL marketplace)."
    },
    {
      year: "2026",
      badge: "SCALE",
      title: "Global Technical Partnerships",
      desc: "Partnering directly with founders, startups, and growing enterprises worldwide to engineer mission-critical digital systems."
    }
  ];

  const valueIcons = [Shield, Heart, Lightbulb, Award, Target];

  return (
    <div className="relative min-h-screen flex flex-col bg-[#020208] text-white">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[55vh] flex flex-col justify-end overflow-hidden bg-[#020208] pb-20 pt-40">
        {/* Ambient lighting & mesh */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-violet-700/25 via-purple-900/15 to-transparent" />
          <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[600px] h-[500px] bg-violet-700/20 blur-[160px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020208] to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-500 uppercase mb-8">
            <Link to="/" className="hover:text-white transition-colors">
              HOME
            </Link>
            <span>/</span>
            <span className="text-brand font-semibold">COMPANY</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-6">
            <span className="h-[1px] w-8 bg-brand" />
            OUR STORY
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[1.05] mb-8 max-w-4xl">
            Engineering software &amp; <br />
            <span className="text-silver-purple">applied AI platforms.</span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 leading-relaxed max-w-2xl font-normal">
            <span className="text-white font-semibold">SAWERA TECHS</span> is a software and AI engineering studio focused on building custom web applications, SaaS products, AI-powered systems, and digital platforms.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10" />
      </section>

      {/* STORY & TIMELINE SECTION */}
      <section className="relative w-full bg-[#030309] py-32 overflow-hidden border-t border-white/5">
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-brand/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Story Column */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase">
                <span className="h-[1px] w-8 bg-brand" />
                OUR ORIGIN
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Built by engineers who ship real software.
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                SAWERA TECHS is a specialized software and AI engineering studio created to eliminate the typical disconnect between product vision and real technical execution.
              </p>

              <div className="p-6 rounded-3xl border border-white/10 bg-[#080714] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-brand" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  "We work directly with founders and teams to turn ambitious product requirements into reliable code."
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-3">
                  — Sawera Saghir, Founder &amp; CEO
                </p>
              </div>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                Rather than treating software as generic deliverables, we operate as strategic technical co-creators. We design clean data models, select proven technologies, and deploy systems that are resilient, scalable, and easy to maintain.
              </p>
            </div>

            {/* Right Timeline Column */}
            <div className="relative flex flex-col pl-6 sm:pl-8 border-l border-white/10">
              <div className="flex flex-col gap-10">
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Glowing Bullet */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-[#030309] bg-brand shadow-[0_0_12px_rgba(245,105,255,0.6)] group-hover:scale-125 transition-transform" />

                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono font-bold text-brand uppercase">
                        {item.year}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase px-2 py-0.5 rounded bg-white/5 border border-white/5">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-silver-purple transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION (FOUNDER & CEO CARD) */}
      <section className="relative w-full bg-[#020208] py-32 overflow-hidden border-t border-white/5">
        {/* Glow backdrop behind founder card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-brand/10 blur-[200px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 flex flex-col items-center">
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-6">
              <span className="h-[1px] w-8 bg-brand" />
              OUR LEADERSHIP
              <span className="h-[1px] w-8 bg-brand" />
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl leading-tight">
              Founders who directly engineer <br className="hidden md:block" />
              <span className="text-silver-purple">the systems they design.</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-4">
              Direct access to the executive engineer who architected the vision and oversees every line of production code.
            </p>
          </div>

          {/* Single Prominent Founder & CEO Showcase */}
          <div className="relative group max-w-md w-full">
            {/* Outer Radial Purple Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-purple-600/30 via-brand/40 to-violet-600/30 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Main Founder Card Container */}
            <div className="relative w-full rounded-3xl overflow-hidden bg-[#0a0818] border border-white/20 group-hover:border-brand/70 shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-500 flex flex-col">
              {/* Photo Area */}
              <div className="relative overflow-hidden h-[420px] sm:h-[480px] w-full bg-[#05050f]">
                {/* Background ambient lighting */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-transparent to-[#0a0818] z-10" />

                <img
                  src="/founder.jpg"
                  alt="Sawera Saghir - Founder & CEO of SAWERA TECHS"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Shimmer sweep effect */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

                {/* Founder Badge overlay */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-brand/40 text-brand text-xs font-mono font-semibold shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-brand animate-pulse" />
                    FOUNDER &amp; CEO
                  </div>
                </div>

                {/* Office Signage Accent Tag */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono tracking-widest uppercase">
                    SAWERA TECHS
                  </div>
                </div>

                {/* Bottom Fade Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0818] to-transparent z-15" />
              </div>

              {/* Founder Information Details */}
              <div className="p-8 relative z-20 bg-[#0a0818]">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                    Sawera Saghir
                  </h3>
                  <span className="text-xs font-mono text-brand font-bold uppercase tracking-wider">
                    EXECUTIVE LEAD
                  </span>
                </div>

                <p className="text-silver-purple text-sm font-mono tracking-wide font-medium mb-4">
                  Founder &amp; Chief Executive Officer
                </p>

                <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-normal">
                  Systems Architect, Full-Stack Engineer, and AI Strategist leading SAWERA TECHS. Sawera directs overall product vision, engineering standards, and proprietary R&amp;D across generative AI, neural media pipelines, and modern cloud applications.
                </p>

                {/* Highlight Badges */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col">
                    <span className="text-white font-bold text-sm">Full-Stack &amp; AI</span>
                    <span className="text-zinc-400 text-[10px] mt-0.5">Systems Architecture</span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col">
                    <span className="text-white font-bold text-sm">100% Direct</span>
                    <span className="text-zinc-400 text-[10px] mt-0.5">Founder Collaboration</span>
                  </div>
                </div>

                {/* Metallic Accent Line */}
                <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-brand via-purple-400 to-transparent rounded-full shadow-[0_0_12px_rgba(245,105,255,0.6)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="relative w-full bg-[#030309] py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-5">
              <span className="h-[1px] w-8 bg-brand" />
              OUR PRINCIPLES
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Our core values.
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              These principles guide how we write software, interact with clients, and architect long-term digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, idx) => {
              const Icon = valueIcons[idx % valueIcons.length];
              return (
                <div
                  key={idx}
                  className="rounded-3xl p-8 border border-white/10 bg-[#080714] hover:border-brand/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-silver-purple transition-colors">
                      {val.title}
                    </h3>

                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span>SAWERA TECHS Standard</span>
                    <span className="text-brand">✦</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}

