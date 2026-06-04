/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Sparkles, Terminal, Code2, PenTool, CheckCircle, ArrowRight } from "lucide-react";
import { SkillCategory } from "../types";
import { SKILL_CATEGORIES } from "../data";

export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    level: number;
    description: string;
    useCases: string[];
  } | null>(SKILL_CATEGORIES[0].skills[0]);

  return (
    <section id="skills" className="relative py-24 bg-[#0a0a0c] border-t border-white/10">
      {/* Background soft ambient flare */}
      <div className="absolute top-1/2 left-2/3 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-blue-400 uppercase tracking-widest mb-4">
            <Code2 className="w-3.5 h-3.5 text-blue-400" />
            TOOLBOX & SPECIALTIES
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Advanced Design Systems & Implementation
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl font-light">
            Bringing 9+ years of design fidelity coupled with structural programming logical practices to eliminate handoff friction.
          </p>
        </div>

        {/* Master Layout: 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT: Categories and Clickable Skill Tags */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-left justify-center">
            {SKILL_CATEGORIES.map((category) => {
              const isEngineering = category.name.includes("Engineering");
              return (
                <div key={category.name} className="space-y-4">
                  <h3 className="text-xs font-mono font-bold tracking-wider text-slate-500 uppercase flex items-center gap-2">
                    {isEngineering ? <Terminal className="w-4 h-4 text-blue-400" /> : <PenTool className="w-4 h-4 text-purple-400" />}
                    {category.name}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.skills.map((skill) => {
                      const isActive = selectedSkill?.name === skill.name;
                      return (
                        <button
                          id={`skill-btn-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                          key={skill.name}
                          onClick={() => setSelectedSkill(skill)}
                          className={`p-4 rounded-xl text-left transition-all border outline-none group cursor-pointer ${
                            isActive
                              ? "bg-white/10 border-blue-500/50 text-white shadow-lg shadow-blue-900/10"
                              : "bg-white/3 border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                          }`}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-semibold tracking-wide">{skill.name}</span>
                            <span className={`text-[10px] font-mono ${isActive ? "text-blue-400" : "text-slate-500 group-hover:text-slate-300"}`}>
                              {skill.level}%
                            </span>
                          </div>
                          {/* Visual Indicator Progress bar */}
                          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-3">
                            <div
                              className={`h-full transition-all duration-500 ${
                                isActive ? "bg-gradient-to-r from-blue-400 to-purple-500" : "bg-slate-600 group-hover:bg-slate-500"
                              }`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Detail Visualizer Pane (UX Micro-interaction) */}
          <div className="lg:col-span-5 flex">
            <div className="w-full p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col justify-between text-left shadow-2xl relative overflow-hidden">
              {/* Corner abstract decoration shape */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full pointer-events-none" />

              {selectedSkill ? (
                <div className="space-y-6 relative z-10 animate-fadeIn h-full flex flex-col justify-between">
                  <div className="space-y-6">
                    {/* Tool Identifier */}
                    <div>
                      <span className="text-[10px] text-blue-400 font-mono tracking-widest uppercase font-bold">Selected Tool Profile</span>
                      <h4 className="font-display font-black text-2xl text-white mt-1">{selectedSkill.name}</h4>
                      {/* Interactive percentage rating */}
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs font-semibold text-slate-400">Proficiency Index:</span>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold">
                          {selectedSkill.level}% Expert
                        </span>
                      </div>
                    </div>

                    {/* Operational Summary Description */}
                    <div>
                      <h5 className="text-[10px] text-slate-500 font-mono uppercase tracking-wider mb-2">Scope of Expertise</h5>
                      <p className="text-sm text-slate-300 leading-relaxed font-light">{selectedSkill.description}</p>
                    </div>

                    {/* Practical Real-world Actions/Cases */}
                    <div>
                      <h5 className="text-[10px] text-slate-500 font-mono uppercase tracking-wider mb-3">Enterprise Handled Scenarios</h5>
                      <div className="space-y-2.5">
                        {selectedSkill.useCases.map((useCase, idx) => (
                          <div key={idx} className="flex gap-2.5 items-start">
                            <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-300 font-light">{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Aesthetic prompt suggestion block */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-500 font-mono mt-6">
                    <span>9+ YRS PROFESSIONAL PRACTICE</span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-20 text-slate-500">
                  <p className="text-sm">Select any capability tag on the left to review design outcomes.</p>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
