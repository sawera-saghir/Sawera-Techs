import React from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/projectsData';
import { ArrowUpRight, Sparkles, CheckCircle2, Shield, Code, Cpu, Eye } from 'lucide-react';
import CTASection from '../components/CTASection';

export default function Work() {
  const standards = [
    {
      title: "Engineering-First Delivery",
      desc: "Systems engineered directly by practitioners who design them—no outsourced layers, no junior placeholders, and no compromise on type safety."
    },
    {
      title: "Direct Technical Collaboration",
      desc: "Work directly with hands-on systems engineers led by our Founder & CEO, ensuring rapid technical clarity and zero friction during sprints."
    },
    {
      title: "Documented Architecture",
      desc: "Every system ships with structured API documentation, system diagrams, and clear maintenance guides so you retain total code autonomy."
    },
    {
      title: "Transparent Project Scope",
      desc: "Milestone-driven roadmaps with predictable timelines and fixed delivery parameters. You always know exactly what is being built and deployed."
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
            <span className="text-brand font-semibold">WORK</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-6">
            <span className="h-[1px] w-8 bg-brand" />
            DELIVERED WORK &amp; CASE STUDIES
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[1.05] mb-8 max-w-4xl">
            Products engineered for <br />
            <span className="text-silver-purple">real-world impact.</span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 leading-relaxed max-w-2xl font-normal">
            Explore technical case studies and software applications engineered by SAWERA TECHS—spanning applied AI, neural video engines, and spatial 3D platforms.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10" />
      </section>

      {/* CASE STUDIES LIST */}
      <section className="relative w-full bg-[#030309] py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 flex flex-col gap-16">
          {caseStudies.map((project, idx) => (
            <div
              key={project.id}
              className="rounded-3xl border border-white/10 bg-[#080714] overflow-hidden hover:border-brand/40 transition-all duration-300 group shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left Visual Area */}
                <div className="lg:col-span-6 relative h-80 sm:h-96 lg:h-auto overflow-hidden bg-zinc-950">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#080714]/20 to-[#080714]" />

                  {/* Status Overlay */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/75 backdrop-blur-md border border-white/15 text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Right Content Area */}
                <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold tracking-widest text-brand uppercase">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-zinc-500">
                        {project.year}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 group-hover:text-silver-purple transition-colors">
                      {project.title}
                    </h2>

                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {project.desc}
                    </p>

                    {/* What We Built Box */}
                    <div className="p-5 rounded-2xl bg-black/40 border border-white/5 mb-8">
                      <div className="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-widest mb-1">
                        WHAT WE ARCHITECTED:
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                        {project.whatWeBuilt}
                      </p>
                    </div>

                    {/* Metrics Row */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <div className="text-sm font-bold text-white font-mono text-silver-gradient">
                            {m.value}
                          </div>
                          <div className="text-[10px] font-mono text-zinc-400 mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link & Technologies */}
                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-zinc-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={project.slug}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-brand hover:bg-brand/90 transition-all shadow-[0_0_20px_rgba(245,105,255,0.3)] hover:scale-[1.02]"
                    >
                      <span>Read Deep Dive</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ENGINEERING STANDARDS */}
      <section className="relative w-full bg-[#020208] py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-5">
              <span className="h-[1px] w-8 bg-brand" />
              HOW WE DELIVER
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Engineering standards <br />
              <span className="text-silver-purple">you can verify.</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              We eliminate technical debt before it starts with rigorous code reviews, automated linting, end-to-end integration tests, and structured type safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {standards.map((std, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl border border-white/10 bg-[#080714] hover:border-brand/40 transition-all duration-300 group flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-brand flex-shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-silver-purple transition-colors">
                    {std.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {std.desc}
                  </p>
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

