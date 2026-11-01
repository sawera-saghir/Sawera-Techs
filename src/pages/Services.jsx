import React from 'react';
import { Link } from 'react-router-dom';
import { coreServices } from '../data/projectsData';
import { ArrowUpRight, Sparkles, CheckCircle2, Search, Compass, Cpu, TrendingUp } from 'lucide-react';
import CTASection from '../components/CTASection';

export default function Services() {
  const processSteps = [
    {
      num: "01",
      icon: Search,
      title: "Discover",
      desc: "We map your business objectives, data requirements, and technical constraints into a clear, actionable digital architecture blueprint."
    },
    {
      num: "02",
      icon: Compass,
      title: "Design",
      desc: "We architect the complete database schemas, API contracts, interactive UX flows, and AI prompts with strict type definitions."
    },
    {
      num: "03",
      icon: Cpu,
      title: "Build",
      desc: "We write clean, modular, production-tested code in high-velocity sprints. You get continuous staging visibility and weekly demo builds."
    },
    {
      num: "04",
      icon: TrendingUp,
      title: "Scale",
      desc: "We configure containerized cloud infrastructure, automated CI/CD deployment pipelines, error telemetry, and zero-downtime scaling."
    }
  ];

  const collaborationModels = [
    {
      title: "For Founders & Startups",
      tag: "MVP & NEW PRODUCTS",
      desc: "Turn early product concepts, MVPs, and technical requirements into production-ready software platforms capable of securing users and raising capital."
    },
    {
      title: "For Growing Businesses",
      tag: "AUTOMATION & SYSTEMS",
      desc: "Modernize internal operations, automate manual workflows, and integrate custom AI assistants and voice agents into your existing business stack."
    },
    {
      title: "Specialized Engineering Studio",
      tag: "DEEP TECH & R&D",
      desc: "Collaborate directly with hands-on systems engineers to build specialized full-stack, WebGL 3D, and real-time computer vision applications."
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-[#020208] text-white">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[55vh] flex flex-col justify-end overflow-hidden bg-[#020208] pb-20 pt-40">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-violet-700/25 via-purple-900/15 to-transparent" />
          <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[600px] h-[500px] bg-violet-700/20 blur-[160px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020208] to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-500 uppercase mb-8">
            <Link to="/" className="hover:text-white transition-colors">
              HOME
            </Link>
            <span>/</span>
            <span className="text-brand font-semibold">SERVICES</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-6">
            <span className="h-[1px] w-8 bg-brand" />
            WHAT WE DO
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[1.05] mb-8 max-w-4xl">
            Services that turn digital <br />
            <span className="text-silver-purple">ambition into systems.</span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 leading-relaxed max-w-2xl font-normal">
            Beyond our proprietary platforms, we partner with founders and businesses to design, architect, and deploy production-ready digital systems with disciplined engineering.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10" />
      </section>

      {/* CORE SERVICES GRID */}
      <section className="relative w-full bg-[#030309] py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((svc, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-8 border border-white/10 bg-[#080714] hover:border-brand/40 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(245,105,255,0.12)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-2xl font-black font-mono text-silver-gradient">
                      {svc.num}
                    </span>
                    <span className="text-xs font-mono tracking-widest text-brand uppercase">
                      SERVICE
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-silver-purple transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-8">
                    {svc.desc}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase mb-3">
                    KEY CAPABILITIES
                  </div>
                  <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
                    {svc.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION (DISCOVER, DESIGN, BUILD, SCALE) */}
      <section className="relative w-full bg-[#020208] py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-5">
              <span className="h-[1px] w-8 bg-brand" />
              HOW WE WORK
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              From ambition <br className="hidden sm:inline" />
              <span className="text-silver-purple">to outcome.</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              A structured, transparent engineering lifecycle designed to turn ambitious concepts into resilient software without guesswork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl p-8 border border-white/10 bg-[#080714] hover:border-brand/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-2xl font-black font-mono text-silver-gradient">
                        {step.num}
                      </span>
                      <Icon className="w-6 h-6 text-brand" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-silver-purple transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-mono text-brand">
                    Phase {step.num} Execution
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COLLABORATION MODELS */}
      <section className="relative w-full bg-[#030309] py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-5">
              <span className="h-[1px] w-8 bg-brand" />
              COLLABORATION MODELS
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              How we partner with you.
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              Whether you need end-to-end platform architecture or specialized AI module integration, we adapt to your engagement needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaborationModels.map((model, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-8 border border-white/10 bg-[#080714] hover:border-brand/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono font-bold tracking-widest text-brand uppercase mb-4 px-3 py-1 rounded bg-brand/10 border border-brand/20 inline-block">
                    {model.tag}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-silver-purple transition-colors">
                    {model.title}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {model.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-white transition-colors uppercase tracking-wider font-mono"
                  >
                    <span>Discuss Requirements</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}

