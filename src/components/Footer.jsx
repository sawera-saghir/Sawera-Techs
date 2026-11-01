import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Twitter, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#010106] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-950/20 blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col">
            <Link to="/" className="flex items-center gap-3.5 group mb-6">
              <div className="w-10 h-10 rounded-xl overflow-hidden p-0.5 border border-white/15 bg-[#090818] shadow-[0_0_15px_rgba(245,105,255,0.25)] flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="SAWERA TECHS"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white flex items-center">
                  <span className="text-silver-gradient">SAWERA</span>
                  <span className="text-silver-gradient ml-1.5">TECHS</span>
                  <span className="text-brand ml-0.5 font-mono">.</span>
                </span>
                <span className="text-[9px] tracking-[0.25em] font-mono uppercase text-zinc-400 -mt-1">
                  AI &amp; SOFTWARE STUDIO
                </span>
              </div>
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-6">
              SAWERA TECHS is an engineering-first studio designing and building custom web applications, SaaS platforms, and applied AI systems. Led directly by Founder &amp; CEO, Sawera Saghir.
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for new Q1-Q2 client engineering</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col">
            <h4 className="text-xs font-mono tracking-widest text-white uppercase font-bold mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link to="/" className="text-zinc-400 hover:text-brand transition-colors">
                Home
              </Link>
              <Link to="/work" className="text-zinc-400 hover:text-brand transition-colors">
                Delivered Work
              </Link>
              <Link to="/services" className="text-zinc-400 hover:text-brand transition-colors">
                Core Services
              </Link>
              <Link to="/about" className="text-zinc-400 hover:text-brand transition-colors">
                About &amp; Leadership
              </Link>
              <Link to="/contact" className="text-zinc-400 hover:text-brand transition-colors">
                Contact &amp; Inquiries
              </Link>
            </div>
          </div>

          {/* Platforms & R&D */}
          <div className="flex flex-col">
            <h4 className="text-xs font-mono tracking-widest text-white uppercase font-bold mb-4">
              Platforms &amp; Lab
            </h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link to="/work/appointix" className="text-zinc-400 hover:text-brand transition-colors flex items-center justify-between">
                <span>Appointix</span>
                <span className="text-[10px] font-mono text-zinc-600">AI Marketplace</span>
              </Link>
              <Link to="/work/auratalk" className="text-zinc-400 hover:text-brand transition-colors flex items-center justify-between">
                <span>AuraTalk AI</span>
                <span className="text-[10px] font-mono text-zinc-600">Neural Video</span>
              </Link>
              <Link to="/work/petstan" className="text-zinc-400 hover:text-brand transition-colors flex items-center justify-between">
                <span>Petstan</span>
                <span className="text-[10px] font-mono text-zinc-600">3D WebGL</span>
              </Link>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="flex flex-col">
            <h4 className="text-xs font-mono tracking-widest text-white uppercase font-bold mb-4">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-3 text-sm text-zinc-400">
              <a
                href="mailto:contact@saweratechs.com"
                className="hover:text-brand transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-brand" />
                <span>contact@saweratechs.com</span>
              </a>
              <div className="flex items-center gap-2 text-zinc-400">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Global Remote Delivery</span>
              </div>
              <Link
                to="/contact"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-white transition-colors uppercase tracking-wider font-mono"
              >
                <span>Submit Inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-semibold">SAWERA TECHS</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-silver-gradient">Founded &amp; Led by Sawera Saghir (Founder &amp; CEO)</span>
            <span className="text-brand">✦</span>
            <span>Type-Safe &amp; AI-Powered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

