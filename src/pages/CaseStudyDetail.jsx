import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { caseStudies } from '../data/projectsData';
import { ArrowLeft, ArrowUpRight, Sparkles, CheckCircle2, Cpu, ShieldCheck } from 'lucide-react';
import CTASection from '../components/CTASection';

export default function CaseStudyDetail() {
  const { id } = useParams();
  const project = caseStudies.find(
    (p) => p.id === id || p.slug === `/work/${id}`
  );

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  // Find next project
  const currentIndex = caseStudies.findIndex((p) => p.id === project.id);
  const nextProject = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <div className="relative min-h-screen flex flex-col bg-[#020208] text-white">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[60vh] flex flex-col justify-end overflow-hidden bg-[#020208] pb-16 pt-36">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-violet-700/25 via-purple-900/15 to-transparent" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[650px] h-[550px] bg-brand/15 blur-[180px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020208] to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          {/* Back button */}
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-brand transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Delivered Work</span>
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-brand/10 border border-brand/30 text-brand">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-zinc-400">
              {project.status}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6 max-w-4xl">
            {project.title}
          </h1>

          <p className="text-lg sm:text-2xl text-silver-purple font-medium max-w-3xl mb-12">
            {project.headline}
          </p>

          {/* Metadata bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10 text-xs font-mono">
            <div>
              <div className="text-zinc-500 uppercase tracking-widest mb-1">CLIENT / ENGAGEMENT</div>
              <div className="text-white font-bold">{project.client}</div>
            </div>
            <div>
              <div className="text-zinc-500 uppercase tracking-widest mb-1">TIMELINE</div>
              <div className="text-white font-bold">{project.year}</div>
            </div>
            <div>
              <div className="text-zinc-500 uppercase tracking-widest mb-1">CORE ARCHITECTURE</div>
              <div className="text-brand font-bold">{project.technologies[0]}</div>
            </div>
            <div>
              <div className="text-zinc-500 uppercase tracking-widest mb-1">VERIFICATION</div>
              <div className="text-emerald-400 font-bold">100% Tested</div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE IMAGE BANNER */}
      <section className="relative w-full max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-zinc-950">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full max-h-[600px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020208] via-transparent to-transparent opacity-60" />
        </div>
      </section>

      {/* CASE STUDY CONTENT: CHALLENGE & SOLUTION */}
      <section className="relative w-full bg-[#030309] py-20 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#080714] border border-white/10 flex flex-col justify-center"
              >
                <div className="text-3xl font-black text-white font-mono text-silver-gradient">
                  {m.value}
                </div>
                <div className="text-xs font-mono tracking-wider text-brand uppercase mt-2">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Problem Statement */}
          <div className="mb-16">
            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-4">
              <span className="h-[1px] w-8 bg-brand" />
              THE CHALLENGE
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">
              The problem we set out to engineer.
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Solution Statement */}
          <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-[#080714] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-4">
              <span className="h-[1px] w-8 bg-brand" />
              THE ARCHITECTURAL SOLUTION
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Engineered for production resilience.
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8">
              {project.solution}
            </p>

            <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest mb-4">
              DELIVERED SYSTEM CAPABILITIES:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-3 text-sm text-zinc-200">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used Grid */}
          <div className="mb-20">
            <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest mb-6">
              SYSTEM TECHNOLOGIES &amp; TOOLCHAIN
            </div>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-mono text-white flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Next Project Footer Card */}
          <div className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-[#080714] flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-brand/40 transition-colors">
            <div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
                NEXT CASE STUDY
              </div>
              <h3 className="text-2xl font-bold text-white">
                {nextProject.title}
              </h3>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                {nextProject.category}
              </p>
            </div>

            <Link
              to={nextProject.slug}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-black bg-brand hover:bg-brand/90 transition-all shadow-[0_0_20px_rgba(245,105,255,0.3)]"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}

