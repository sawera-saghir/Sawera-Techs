import React from 'react';
import { caseStudies } from '../data/projectsData';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, ExternalLink } from 'lucide-react';

export default function FeaturedProjects() {
  return (
    <section id="featured-work" className="relative w-full bg-[#030309] py-28 sm:py-36 overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-700/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-brand/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-5">
              <span className="h-[1px] w-8 bg-brand" />
              DELIVERED WORK
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Featured Systems &amp; Case Studies
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              Explore our flagship software platforms—engineered with full-stack precision across applied AI, neural video pipelines, and interactive 3D web applications.
            </p>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-white transition-colors group"
          >
            <span>View All Engineering Work</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-[#080714] hover:border-brand/50 transition-all duration-400 group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(245,105,255,0.15)] flex-1"
            >
              {/* Image Container with overlay */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-950">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080714] via-[#080714]/30 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide bg-black/70 backdrop-blur-md border border-white/15 text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                    {project.status}
                  </span>
                </div>

                {/* Corner link icon */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white group-hover:bg-brand group-hover:text-black group-hover:border-brand transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-[11px] font-mono tracking-widest text-brand uppercase mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-silver-purple transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                {/* Tech Pills & Footer Link */}
                <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/5 text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-white/5 text-zinc-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <Link
                    to={project.slug}
                    className="flex items-center justify-between text-xs font-semibold text-zinc-300 group-hover:text-brand transition-colors pt-2"
                  >
                    <span>Read Architecture Spec</span>
                    <span className="text-brand">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

