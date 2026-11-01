import React from 'react';
import { MessageSquare, Layers, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EngagementRoadmap() {
  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Tell us what you're building",
      desc: "Share your product concept, operational challenges, or architectural requirements through a direct technical consultation. No sales pitch, just real technical evaluation."
    },
    {
      step: "02",
      icon: Layers,
      title: "Define the solution",
      desc: "We analyze your constraints and formulate a precise technical blueprint—selecting the right database, AI models, frontend framework, and deployment pipeline with fixed milestones."
    },
    {
      step: "03",
      icon: Code,
      title: "Build and iterate",
      desc: "We engineer your software in transparent high-velocity sprints. You get continuous staging access, weekly demo walkthroughs, and direct repository visibility."
    }
  ];

  return (
    <section className="relative w-full bg-[#030309] py-28 sm:py-36 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-5">
            <span className="h-[1px] w-8 bg-brand" />
            HOW WE START
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            From first conversation <br className="hidden sm:inline" />
            <span className="text-silver-purple">to working software.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            We remove the mystery from software development. Our engagement process is straightforward, structured, and focused entirely on shipping reliable production code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl p-8 border border-white/10 bg-[#080714] hover:border-brand/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-2xl font-black font-mono text-silver-gradient">
                      {item.step}
                    </span>
                    <span className="text-xs font-mono tracking-widest text-brand uppercase">
                      PHASE {item.step}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-silver-purple transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>Fast Onboarding</span>
                  <ArrowRight className="w-4 h-4 text-brand group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

