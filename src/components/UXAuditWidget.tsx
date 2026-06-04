/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Check, Info, Award, HelpCircle, ShieldCheck } from "lucide-react";
import { UX_GUIDELINES } from "../data";
import { UXGuidelineCheck } from "../types";

export default function UXAuditWidget() {
  const [selectedGuideline, setSelectedGuideline] = useState<UXGuidelineCheck | null>(UX_GUIDELINES[0]);
  const [checklist, setChecklist] = useState<UXGuidelineCheck[]>(UX_GUIDELINES);

  const toggleCheck = (id: string) => {
    setChecklist(
      checklist.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  return (
    <section id="ux-checklist" className="relative py-24 bg-[#0a0a0c] border-t border-white/10">
      {/* Background radial flare */}
      <div className="absolute top-1/2 left-10 w-80 h-80 rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5 text-blue-400" />
            HUMAN-CENTERED DESIGN AUDIT
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            The Interactive UX Guarantee
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl font-light">
            I don't just design pretty interfaces; I strictly structure my code to honor human cognitive bandwidth and operational limitations. Toggle the compliance metrics below:
          </p>
        </div>

        {/* Audit Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT: Checkboxes lists */}
          <div className="lg:col-span-6 flex flex-col gap-3 text-left">
            {checklist.map((item) => {
              const isActive = selectedGuideline?.id === item.id;
              return (
                <div
                  id={`ux-guideline-card-${item.id}`}
                  key={item.id}
                  onClick={() => setSelectedGuideline(item)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isActive
                      ? "bg-white/10 border-blue-500/50 shadow-xl"
                      : "bg-white/3 border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Fitts law compliant tap target for checkbox */}
                  <button
                    id={`checkbox-btn-${item.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCheck(item.id);
                    }}
                    className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors focus:outline-none ${
                      item.status
                        ? "bg-blue-600 border-blue-600 text-white"
                        : "border-slate-600 hover:border-blue-400"
                    }`}
                    style={{ minWidth: '24px', minHeight: '24px' }} // Ensures compliance with target sizing
                    aria-label={`Toggle verification status of ${item.name}`}
                  >
                    {item.status && <Check className="w-4 h-4 stroke-[3px]" />}
                  </button>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-white tracking-wide">{item.name}</h4>
                      <span className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
                        item.status 
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                          : "bg-red-500/10 text-red-400 border border-red-500/20"
                      }`}>
                        {item.status ? "Verified" : "Bypassed"}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 font-light leading-relaxed">{item.criterion}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Detailed Explanation Visualizer */}
          <div className="lg:col-span-6 flex">
            {selectedGuideline ? (
              <div
                id="ux-audit-detail-panel"
                className="w-full p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col justify-between text-left relative overflow-hidden shadow-2xl"
              >
                {/* Visual grid guide accents background */}
                <div className="absolute inset-0 bg-[radial-gradient(var(--color-blue-500)_1px,transparent_1px)] [background-size:16px_16px] opacity-5 pointer-events-none" />

                <div className="space-y-6 relative z-10 animate-fadeIn h-full flex flex-col justify-between">
                  <div className="space-y-5">
                    {/* Top Status */}
                    <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-bold uppercase">
                      <ShieldCheck className="w-4 h-4 text-blue-400" />
                      ENGINEERING SPECIFICATION REPORT
                    </div>

                    {/* Headline */}
                    <div>
                      <h3 className="font-display font-black text-2xl text-white tracking-tight">{selectedGuideline.name}</h3>
                      <p className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-wide">
                        ESTABLISHED METRIC GUIDEWAY
                      </p>
                    </div>

                    {/* Technical details explaining the execution */}
                    <div className="p-4 rounded-xl bg-[#0a0a0c]/40 border border-white/10">
                      <h5 className="text-[10px] text-slate-500 font-mono uppercase tracking-wider mb-2">Physical Code Implementation</h5>
                      <p className="text-sm text-slate-300 leading-relaxed font-light">
                        {selectedGuideline.explanation}
                      </p>
                    </div>
                  </div>

                  {/* Highlight statement */}
                  <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                    <p className="text-xs text-slate-300 font-light italic leading-relaxed">
                      "By baking cognitive principles directly into client CSS & structural React parameters, we reduce user training times and minimize critical operating errors across platforms."
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full p-8 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-center text-slate-500">
                <div className="flex flex-col items-center gap-2">
                  <HelpCircle className="w-8 h-8 text-slate-700" />
                  <p className="text-sm">Select any guideline from the checklist list to view implementation reports.</p>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
