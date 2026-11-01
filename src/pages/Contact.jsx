import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Clock, ShieldCheck, CheckCircle2, Sparkles, Send, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '../data/projectsData';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web App',
    budget: '$5,000 - $15,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setSubmitted(true);
    // Trigger celebratory confetti
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f569ff', '#c084fc', '#ffffff', '#9333ea']
    });
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#020208] text-white">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[50vh] flex flex-col justify-end overflow-hidden bg-[#020208] pb-16 pt-36">
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
            <span className="text-brand font-semibold">CONTACT</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-6">
            <span className="h-[1px] w-8 bg-brand" />
            GET IN TOUCH
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[1.05] mb-8 max-w-4xl">
            Let's build your part of <br />
            <span className="text-silver-purple">the future.</span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 leading-relaxed max-w-2xl font-normal">
            Whether you're a founder with an early product vision, a growing business looking to automate, or an enterprise needing specialized software engineering, let's talk.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10" />
      </section>

      {/* CONTACT FORM & INFORMATION */}
      <section className="relative w-full bg-[#030309] py-24 sm:py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Contact Details */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Start a conversation.
                </h2>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
                  Have a project in mind or want to explore how SAWERA TECHS can build your digital ecosystem? Reach out directly or fill out the project inquiry form.
                </p>

                <div className="flex flex-col gap-6 mb-10">
                  <div className="p-6 rounded-2xl bg-[#080714] border border-white/10 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-brand flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                        EMAIL US DIRECTLY
                      </div>
                      <a
                        href="mailto:contact@saweratechs.com"
                        className="text-base sm:text-lg font-bold text-white hover:text-brand transition-colors font-mono"
                      >
                        contact@saweratechs.com
                      </a>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#080714] border border-white/10 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-brand flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                        RAPID RESPONSE
                      </div>
                      <div className="text-sm font-semibold text-white mt-0.5">
                        Guaranteed response within 24 hours
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/30 to-brand/10 border border-brand/20">
                  <div className="text-xs font-mono font-bold text-brand uppercase tracking-wider mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    ENGINEERING INTEGRITY GUARANTEE
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Your inquiry is reviewed directly by our Founder &amp; CEO, Sawera Saghir. We sign strict NDAs before technical deep-dives to protect your intellectual property.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-[#080714] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand/10 blur-[130px] rounded-full pointer-events-none" />

                {submitted ? (
                  <div className="py-16 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-brand/20 border-2 border-brand flex items-center justify-center text-brand mb-6 shadow-[0_0_30px_rgba(245,105,255,0.4)] animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      Inquiry Received!
                    </h3>
                    <p className="text-zinc-300 text-sm max-w-md leading-relaxed mb-8">
                      Thank you for reaching out to SAWERA TECHS. Sawera Saghir and our engineering team will review your specifications and get in touch within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl border border-white/20 bg-white/5 text-xs font-mono text-zinc-300 hover:text-white hover:border-brand transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Sawera / Alex Smith"
                          className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-sm transition-all"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                          Service Focus
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-brand text-sm transition-all"
                        >
                          <option value="Full-Stack Web App">Full-Stack Web App</option>
                          <option value="Applied AI & LLM Systems">Applied AI &amp; LLM Systems</option>
                          <option value="AI Automation Pipeline">AI Automation Pipeline</option>
                          <option value="Mobile App (React Native)">Mobile App (React Native)</option>
                          <option value="3D WebGL / Spatial Platform">3D WebGL / Spatial Platform</option>
                          <option value="Architecture Advisory">Architecture Advisory</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                          Estimated Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-brand text-sm transition-all"
                        >
                          <option value="< $5,000">&lt; $5,000</option>
                          <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                          <option value="$15,000 - $35,000">$15,000 - $35,000</option>
                          <option value="$35,000+">$35,000+</option>
                          <option value="Undecided / Advisory">Undecided / Advisory</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                        Project Overview &amp; Goals *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about the software you need built, target timeline, and any existing systems or technical constraints..."
                        className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-sm transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl font-bold text-black bg-brand hover:bg-brand/90 transition-all duration-200 shadow-[0_0_25px_rgba(245,105,255,0.4)] hover:shadow-[0_0_35px_rgba(245,105,255,0.65)] hover:scale-[1.01] flex items-center justify-center gap-2 text-sm mt-2"
                    >
                      <span>Submit Project Inquiry</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS SECTION */}
      <section className="relative w-full bg-[#020208] py-28 sm:py-36 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono tracking-widest text-brand uppercase mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-brand" />
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Everything you need to know.
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-[#080714] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:text-brand transition-colors"
                  >
                    <span className="font-bold text-base sm:text-lg text-white">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-brand flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-sm text-zinc-300 leading-relaxed border-t border-white/5 mt-2">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

