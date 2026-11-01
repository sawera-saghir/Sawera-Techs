import React from 'react';
import { ShieldCheck, Users, FileCode, CheckCircle2 } from 'lucide-react';

export default function HowWeWork() {
  const principles = [
    {
      num: "01",
      icon: ShieldCheck,
      title: "Clear Ownership",
      desc: "Every project is directly led and architected by our leadership team. We take end-to-end accountability for system reliability, code cleanliness, and security from line one."
    },
    {
      num: "02",
      icon: Users,
      title: "Direct Engineering Collaboration",
      desc: "No non-technical account managers or agency middlemen. You collaborate directly with hands-on systems engineers who understand every component of your stack."
    },
    {
      num: "03",
      icon: FileCode,
      title: "Documented Architecture",
      desc: "We write clean, modular, self-documenting code accompanied by structured architectural diagrams, OpenAPI specs, and setup instructions so your platform is maintainable for years."
    }
  ];

  return (
    <section className="relative w-full bg-[#020208] py-28 sm:py-36 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-5">
            <span className="h-[1px] w-8 bg-brand" />
            HOW WE WORK
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Built with engineering discipline. <br className="hidden sm:inline" />
            <span className="text-silver-purple">Delivered without agency fluff.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            We focus on technical clarity, direct communication, and maintainable production code that gives your business an unfair advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="relative rounded-3xl p-8 border border-white/10 bg-[#080714] hover:border-brand/40 transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">
                      STANDARD {item.num}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-brand/60" />
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

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-brand">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Guaranteed Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

