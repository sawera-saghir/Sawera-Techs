import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#020208]/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
            : 'bg-transparent border-b border-white/5 py-4 sm:py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-3.5 group relative z-50">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden p-0.5 border border-white/15 bg-[#090818] shadow-[0_0_15px_rgba(245,105,255,0.25)] group-hover:shadow-[0_0_25px_rgba(245,105,255,0.5)] group-hover:border-brand/50 transition-all duration-300 flex items-center justify-center">
              <img
                src="/logo.png"
                alt="SAWERA TECHS Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white flex items-center font-sans">
                <span className="text-silver-gradient group-hover:text-white transition-colors">SAWERA</span>
                <span className="text-silver-gradient ml-1.5 group-hover:text-purple-300 transition-colors">TECHS</span>
                <span className="text-brand inline-block ml-0.5 animate-pulse font-mono font-bold">.</span>
              </span>
              <span className="text-[9px] tracking-[0.25em] font-mono uppercase text-zinc-400 -mt-1 hidden sm:block">
                AI &amp; SOFTWARE STUDIO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/30 to-brand/30 border border-brand/40 -z-10 shadow-[0_0_12px_rgba(245,105,255,0.25)]" />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs lg:text-sm text-black bg-brand hover:bg-brand/90 transition-all duration-200 shadow-[0_0_20px_rgba(245,105,255,0.35)] hover:shadow-[0_0_30px_rgba(245,105,255,0.6)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative z-50 w-10 h-10 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center text-zinc-200 hover:text-brand hover:border-brand/40 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden transition-all duration-300 flex flex-col justify-between p-6 pt-28 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4">
          <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase px-3">
            Navigation Menu
          </p>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center justify-between p-4 rounded-2xl border text-lg font-medium transition-all ${
                  isActive
                    ? 'border-brand/50 bg-brand/10 text-brand shadow-[0_0_20px_rgba(245,105,255,0.2)]'
                    : 'border-white/5 bg-zinc-950/60 text-zinc-300 hover:border-white/20'
                }`}
              >
                <span>{link.name}</span>
                <ArrowUpRight className={`w-5 h-5 ${isActive ? 'text-brand' : 'text-zinc-600'}`} />
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
          <Link
            to="/contact"
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-black bg-brand shadow-[0_0_25px_rgba(245,105,255,0.4)]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <div className="text-center text-xs text-zinc-500 font-mono pt-2">
            SAWERA TECHS · Led by Sawera Saghir (Founder &amp; CEO)
          </div>
        </div>
      </div>
    </>
  );
}

