/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Briefcase, ArrowUpRight, FolderHeart } from "lucide-react";
import { Project } from "../types";
import { PROJECTS_DATA } from "../data";

interface WorksSectionProps {
  onSelectProject: (project: Project) => void;
}

export default function WorksSection({ onSelectProject }: WorksSectionProps) {
  return (
    <section id="works" className="relative py-24 bg-[#0a0a0c] border-t border-white/10">
      {/* Decorative background visual ambient flare */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-72 h-72 rounded-full bg-purple-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-4">
            <Briefcase className="w-3.5 h-3.5 text-blue-400" />
            SELECTED ECOSYSTEMS
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-inside">
            Featured Case Studies
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl font-light">
            An curated archive of platforms demonstrating how I remove friction to optimize digital transaction performance and workflow accuracy.
          </p>
        </div>

        {/* CSS Bento grid layout showcasing projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {PROJECTS_DATA.map((project) => (
            <article
              id={`project-card-${project.id}`}
              key={project.id}
              className="frosted-card group rounded-2xl overflow-hidden shadow-xl flex flex-col text-left"
            >
              
              {/* Product Card Thumbnail - calibrated to 4:3 aspect ratio */}
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-[#0a0a0c] border-b border-white/10">
                <img
                  id={`project-img-${project.id}`}
                  src={project.thumbnail}
                  alt={`${project.title} Interface PreviewMockup`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-700"
                />
                
                {/* Visual Glass Tag overlay indicating segment */}
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                  {project.category.split(" & ")[0]}
                </div>
              </div>

              {/* Information body with calculated proximity margins */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-extrabold text-white text-lg tracking-tight group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-1 tracking-wide uppercase">
                    ROLE: {project.role}
                  </p>
                  <p className="text-sm text-slate-400 font-light leading-relaxed mt-3">
                    {project.description}
                  </p>
                </div>

                {/* Touch Target standard compliant CTA - min height 44px */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <button
                    id={`open-casestudy-btn-${project.id}`}
                    onClick={() => onSelectProject(project)}
                    className="w-full px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/30 text-white font-semibold text-xs tracking-wider uppercase hover:bg-white/10 hover:text-blue-400 transition-all flex items-center justify-center gap-1.5 focus:outline-none cursor-pointer"
                    style={{ minHeight: "44px" }} // Target accessibility standard
                  >
                    Read Case Study <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
