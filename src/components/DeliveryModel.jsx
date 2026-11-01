import React from 'react';
import { UserCheck, Sparkles, Rocket } from 'lucide-react';

export default function DeliveryModel() {
  const pillars = [
    {
      num: "01",
      icon: UserCheck,
      title: "Accountable Engineers",
      desc: "Experienced systems architects and developers who take personal responsibility for code quality, edge-case coverage, and system architecture. No junior layers or disconnected PMs.",
      badge: "HUMAN EXPERTISE"
    },
    {
      num: "02",
      icon: Sparkles,
      title: "AI Tools & Automation",
      desc: "We leverage state-of-the-art AI code synthesis, automated test generation, and intelligent scaffolding to compress project cycles without compromising correctness or architectural elegance.",
      badge: "ACCELERATED VELOCITY"
    },
    {
      num: "03",
      icon: Rocket,
      title: "Reliable Delivery",
      desc: "The output is clean, documented, and type-safe software that runs predictably in production and scales seamlessly as your userbase expands.",
      badge: "PRODUCTION GRADE"
    }
  ];

  return (
    <section className="relative w-full bg-[#020208] py-28 sm:py-36 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-5">
            <span className="h-[1px] w-8 bg-brand" />
            THE DELIVERY MODEL
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Human Engineering + <br className="hidden sm:inline" />
            <span className="text-silver-purple">AI-Assisted Workflows</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            We pair accountable human software engineers with modern AI-accelerated workflows. Technical builders make architectural decisions and write core code, while AI tools handle repetitive scaffolding—delivering high-end software at unmatched speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="relative rounded-3xl p-8 border border-white/10 bg-[#080714] hover:border-brand/40 transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(245,105,255,0.12)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono font-bold text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded-full">
                      {pillar.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      PILLAR {pillar.num}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(245,105,255,0.25)]">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-silver-purple transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>Engineered by SAWERA TECHS</span>
                  <span className="text-brand">✦</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

