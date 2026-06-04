/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { X, Calendar, ClipboardList, TrendingUp, Sparkles, Code2, Users, FileText, ArrowRight } from "lucide-react";
import { Project } from "../types";

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<"discovery" | "challenge" | "architecture" | "outcomes">("challenge");

  return (
    <div
      id={`casestudy-modal-${project.id}`}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-5xl rounded-3xl bg-[#0a0a0c]/90 border border-white/15 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] backdrop-blur-2xl">
        
        {/* Modal Top Banner */}
        <div className="relative p-6 sm:p-8 bg-[#0a0a0c] border-b border-white/10 flex items-start justify-between">
          <div className="flex flex-col text-left">
            <span className="text-xs text-blue-400 font-mono tracking-widest uppercase mb-1">{project.category}</span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">{project.title}</h2>
            <p className="text-sm text-slate-400 mt-1">{project.tagline}</p>
          </div>
          <button
            id="close-modal-btn"
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-left focus:outline-none"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Two Column Grid (Sidebar & Dynamic Work area) */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12">
          
          {/* LEFT: Quick Info Sidebar */}
          <aside className="lg:col-span-4 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/10 bg-[#0a0a0c]/40 flex flex-col justify-between text-left">
            <div>
              {/* Core Role Information */}
              <div className="mb-6">
                <h4 className="text-[10px] text-slate-500 font-mono tracking-wider uppercase mb-2">My Direct Role</h4>
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                  <p className="text-sm font-semibold text-white">{project.role}</p>
                </div>
              </div>

              {/* Project Timeframe */}
              <div className="mb-6">
                <h4 className="text-[10px] text-slate-500 font-mono tracking-wider uppercase mb-2">Duration</h4>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>{project.duration}</span>
                </div>
              </div>

              {/* Advanced Tool Stack */}
              <div className="mb-8">
                <h4 className="text-[10px] text-slate-500 font-mono tracking-wider uppercase mb-3">Toolbox Utilized</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.toolsUsed.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Micro Outcome summary highlights inside Sidebar */}
            {project.keyMetrics && (
              <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 shadow-lg shadow-blue-950/10">
                <h4 className="text-[10px] text-blue-400 font-mono tracking-wider uppercase mb-3 flex items-center gap-1.5 font-bold">
                  <TrendingUp className="w-3.5 h-3.5" /> High-Impact Metrics
                </h4>
                <div className="flex flex-col gap-3">
                  {project.keyMetrics.map((met) => (
                    <div key={met.label}>
                      <p className="font-display font-black text-white text-xl leading-none">{met.value}</p>
                      <p className="text-[10px] text-slate-400 mt-1 leading-tight">{met.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>

          {/* RIGHT: Tabbed Content Container (Deep Dive Study) */}
          <main className="lg:col-span-8 flex flex-col">
            
            {/* Horizontal Tabs List */}
            <div className="flex border-b border-white/10 sticky top-0 bg-[#0a0a0c]/85 backdrop-blur-md z-10 overflow-x-auto text-left scrollbar-none">
              {(
                [
                  { id: "challenge", label: "Challenge & Context", icon: ClipboardList },
                  { id: "discovery", label: "Discovery & UX Steps", icon: Users },
                  { id: "architecture", label: "UI Wireframing & Design", icon: Code2 },
                  { id: "outcomes", label: "Direct Business Outcomes", icon: Sparkles }
                ] as const
              ).map((tab) => {
                const Icon = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-4 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                      isSelected
                        ? "border-blue-500 text-blue-400 bg-white/5"
                        : "border-transparent text-slate-400 hover:text-white hover:bg-white/2"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Active Tab Body Detail */}
            <div className="p-6 sm:p-8 text-left space-y-6">
              
              {/* TAB 1: Challenge & Context Statement */}
              {activeTab === "challenge" && (
                <div className="space-y-6 text-left animate-fadeIn">
                  <div>
                    <h3 className="text-sm font-semibold font-mono text-blue-400 uppercase mb-2">The Critical Friction (Problem)</h3>
                    <p className="text-base text-slate-300 leading-relaxed font-light">{project.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold font-mono text-blue-400 uppercase mb-2">The Proposed Solution Blueprint</h3>
                    <p className="text-base text-slate-300 leading-relaxed font-light">{project.solution}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-400/5 border border-amber-400/10">
                    <h4 className="text-xs font-semibold text-amber-300 uppercase mb-1">Constraints & Technical Trade-offs</h4>
                    <p className="text-sm text-slate-300 font-light">{project.challenge}</p>
                  </div>
                </div>
              )}

              {/* TAB 2: Discovery & User Research Journey */}
              {activeTab === "discovery" && (
                <div className="space-y-6 text-left animate-fadeIn">
                  <div>
                    <h3 className="text-sm font-semibold font-mono text-blue-400 uppercase mb-3">Discovery Process (The UX Research Loop)</h3>
                    <p className="text-sm text-slate-400 font-light mb-4 leading-relaxed">
                      To design with high functional empathy, we needed deep proximity to real user environments instead of relying solely on analytical flow charts. Here's how we structured research:
                    </p>
                    <div className="space-y-3">
                      {project.userResearchSteps?.map((step, idx) => (
                        <div key={idx} className="flex gap-4 items-start p-3 rounded-lg bg-white/2 border border-white/5">
                          <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </div>
                          <p className="text-sm text-slate-300 font-light">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <h4 className="text-xs text-slate-400 font-bold uppercase mb-2">Primary UX Persona Paradigm</h4>
                    <p className="text-sm text-slate-300 font-medium">Bespoke Enterprise User</p>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      "Values efficiency over visual clutter. Every extra button increases time-locked errors. I want immediate status visibility and large, predictable touch targets."
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 3: Wireframe architecture & Design parameters */}
              {activeTab === "architecture" && (
                <div className="space-y-6 text-left animate-fadeIn">
                  <div>
                    <h3 className="text-sm font-semibold font-mono text-blue-400 uppercase mb-2">Wireframe Outline Schematic (Simulated)</h3>
                    <p className="text-xs text-slate-400 font-light mb-4">
                      Below is the responsive wireframe canvas structure generated dynamically. It shows a central control panel styled for swift task handling:
                    </p>
                    
                    {/* Interactive CSS simulated blueprint wireframe */}
                    <div className="p-4 rounded-xl border border-blue-500/20 bg-slate-950/80 font-mono text-xs text-slate-400 space-y-3 relative overflow-hidden">
                      <div className="absolute top-2 right-2 text-[9px] bg-sky-950 px-2 py-0.5 rounded text-sky-400 border border-sky-400/20">BLUEPRINT</div>
                      <div className="border border-dashed border-slate-700 p-2 text-center rounded text-slate-500 font-bold">
                        HEADER NAV - PROFILE STATUS [100% FLUID]
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="col-span-1 border border-dashed border-slate-700 p-4 text-center rounded text-[10px] text-slate-500">
                          SIDEBAR COL <br /> Primary Info
                        </div>
                        <div className="col-span-2 border border-dashed border-slate-700 p-4 text-center rounded text-[10px] text-slate-500 flex flex-col justify-between h-20">
                          <span>CENTRAL WORK AREA - GESTALT ROW GROUPS</span>
                          <span className="text-[8px] text-emerald-400">Touch targets: min-height 60px</span>
                        </div>
                      </div>
                      <div className="border border-dashed border-slate-700 p-2 text-center rounded text-slate-500 text-[10px]">
                        STICKY UTILITY CONTAINER - FIXED FOOTER TARGET (Fitts's Law CTA)
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-blue-400 uppercase mb-2">Primary Layout Design Decisions</h4>
                    <ul className="list-disc list-inside text-sm text-slate-300 font-light space-y-2">
                      <li><strong>Law of Proximity:</strong> Spacing intervals have a strict 1:2 ratio to signify logical steps.</li>
                      <li><strong>Fitts's Law:</strong> CTAs occupy at least 48px padding boundaries with visual scales.</li>
                      <li><strong>Color Contrast:</strong> High-purity neon key indicators set over coal backgrounds ensure 100% reading legibility.</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* TAB 4: Business Outcomes & Metric lists */}
              {activeTab === "outcomes" && (
                <div className="space-y-6 text-left animate-fadeIn">
                  <div>
                    <h3 className="text-sm font-semibold font-mono text-blue-400 uppercase mb-2">Strategic Impact & Learnings</h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      This project illustrated that bridging the gap between rigorous engineering constraints and human-centered design is not merely about aesthetic layouts. By introducing systematic Figma design libraries and integrating developer loops early, we delivered major digital adoptions.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Key Project Retrospectives:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.keyInsights.map((insight, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-white/2 border border-white/10">
                          <p className="text-sm text-slate-300 font-light">{insight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </main>

        </div>

        {/* Modal Bottom Sticky bar */}
        <div className="p-4 sm:p-6 bg-[#0a0a0c]/80 border-t border-white/10 flex items-center justify-end">
          <button
            id={`modal-cta-close-${project.id}`}
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-xs tracking-wider uppercase transition-all border border-white/10"
          >
            Finished Reading
          </button>
        </div>

      </div>
    </div>
  );
}
