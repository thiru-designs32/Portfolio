/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { User, Shield, Target, Briefcase, GraduationCap, Flame } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      title: "Tactical Empathy",
      desc: "Immersing myself directly on industrial floors, warehouse corridors, or complex checkouts to understand user physical and cognitive hurdles first-hand.",
      icon: Target
    },
    {
      title: "Engineering Alignment",
      desc: "Speaking fluid CSS, JavaScript, SQL, and Object-Oriented principles. This bridges the language gap with engineering teams to keep mockups 100% implementable.",
      icon: Shield
    },
    {
      title: "Systemic Scaling",
      desc: "Constructing rigorous Figma design libraries with robust component definitions, auto-layout tokens, and comprehensive responsive limits to scale platforms effortlessly.",
      icon: Briefcase
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#0a0a0c] border-t border-white/10 overflow-hidden">
      {/* Decorative vertical guide line */}
      <div className="absolute right-10 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-transparent to-transparent hidden xl:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Complete Biography & Transition Chronology */}
          <div className="lg:col-span-6 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-blue-400 uppercase tracking-widest">
              <User className="w-3.5 h-3.5 text-blue-400" />
              THE DESIGNER'S PARADIGM
            </div>
            
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Bridging Technical Rules with Aesthetic Joy
            </h2>

            <div className="space-y-4 text-sm text-slate-400 font-light leading-relaxed">
              <p>
                My professional career didn't start in an standard creative arts studio. As an IT Graduate, my early years were dedicated to system schemas, databases, and structural coding practices.
              </p>
              <p>
                This underlying tech knowledge sparked a crucial career revelation: <strong className="text-white">a system's core power is completely bottlenecked by how easily a human can command it.</strong> That discovery sparked my transformation into a full-scale UX/UI Specialist.
              </p>
              <p>
                Over the last 9+ years, I have crafted high-performance digital architectures. From large B2B supply portfolios in Leykart to complex frontline work checkers in DIGI SOP, I remove ambient noise, secure clear typography systems, and create highly polished interfaces that satisfy both engineering constraints and user goals.
              </p>
            </div>

            {/* Structured History Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div className="flex gap-3 items-start p-4 rounded-xl bg-white/3 border border-white/10 hover:bg-white/5 transition-colors">
                <GraduationCap className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white tracking-wide">IT Graduate Foundation</h4>
                  <p className="text-[11px] text-slate-500 mt-1">Acquired deep knowledge of software structure, Core Java, and relational SQL database normalization.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-4 rounded-xl bg-white/3 border border-white/10 hover:bg-white/5 transition-colors">
                <Flame className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white tracking-wide">Active Senior Practitioner</h4>
                  <p className="text-[11px] text-slate-500 mt-1">Spearheading major system overhauls, building cross-organizational design libraries and guidelines.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Critical Values & Philosophy Cards */}
          <div className="lg:col-span-6 space-y-6 text-left lg:pt-16">
            <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-4">Core Operating Principles</h3>
            <div className="space-y-4">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    id={`about-value-${v.title.toLowerCase().replace(/\s+/g, '-')}`}
                    key={v.title}
                    className="frosted-card p-5 rounded-2xl group"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">{v.title}</h4>
                        <p className="text-xs text-slate-400 font-light mt-1.5 leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
