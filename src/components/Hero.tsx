/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Flame, Shield, ArrowUpRight, Award, Zap } from "lucide-react";
import { IMAGES } from "../data";

interface HeroProps {
  onExploreWorks: () => void;
  onAuditClick: () => void;
}

export default function Hero({ onExploreWorks, onAuditClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#0a0a0c]"
    >
      {/* Background radial soft ambient glow flares */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[130px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] translate-x-1/2 translate-y-1/2 rounded-full bg-purple-600/10 blur-[150px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Decorative vertical visual layout line */}
      <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent hidden xl:block" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side: Minimalist Headline & Brand Positioning Statement */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Tagline / Context Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-blue-400 mb-6 shadow-md"
          >
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            9+ YEARS BRIDGING COMPLEXITY & EXPERIENCE
          </motion.div>

          {/* Master Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-white leading-[0.9] mb-6"
          >
            DESIGNING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              EXPERIENCES
            </span> <br />
            AT SCALE.
          </motion.h1>

          {/* Professional Narrative Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mb-10"
          >
            Senior UX/UI Specialist combining professional IT logic with creative agency visual design. Dedicated to removing friction from enterprise dashboards, industrial safety apps, and large e-commerce ecosystems.
          </motion.p>

          {/* Quick Core Statistics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-3 gap-6 md:gap-10 border-y border-white/10 py-6 w-full max-w-xl mb-10 text-left"
          >
            <div>
              <div className="font-display font-black text-3xl md:text-4xl text-white tracking-tight flex items-end">
                9+<span className="text-blue-400 text-xl ml-0.5 font-bold">Yrs</span>
              </div>
              <div className="text-[11px] font-mono tracking-wider uppercase text-slate-500 mt-2">
                Industry Practice
              </div>
            </div>
            <div>
              <div className="font-display font-black text-3xl md:text-4xl text-white tracking-tight flex items-end">
                3<span className="text-purple-400 text-xl ml-0.5 font-bold">Lg</span>
              </div>
              <div className="text-[11px] font-mono tracking-wider uppercase text-slate-500 mt-2">
                Core Ecosystems
              </div>
            </div>
            <div>
              <div className="font-display font-black text-3xl md:text-4xl text-white tracking-tight flex items-end">
                100%
              </div>
              <div className="text-[11px] font-mono tracking-wider uppercase text-slate-500 mt-2">
                Digital Adoption
              </div>
            </div>
          </motion.div>

          {/* Core Action Call-To-Actions (CTAs) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <button
              id="hero-primary-cta"
              onClick={onExploreWorks}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold text-sm uppercase tracking-widest shadow-lg shadow-blue-900/40 hover:bg-blue-500 transition-all flex items-center justify-center gap-2 cursor-pointer duration-300"
            >
              Selected Case Studies <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>

            <button
              id="hero-secondary-cta"
              onClick={onAuditClick}
              className="px-8 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer duration-300 text-white"
            >
              UX Audit <Award className="w-4 h-4 text-purple-400" />
            </button>
          </motion.div>

        </div>

        {/* Right Side: Responsive, Dynamic Levitation Container housing 3D profile picture */}
        <div className="lg:col-span-5 flex justify-center relative">
          
          {/* Subtle Cybernetic Aura Backing */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-600/20 blur-[50px] -z-10" />

          {/* Outer Levitation Shell */}
          <div className="relative animate-float w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            
            {/* Visual Glass Edge borders */}
            <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-blue-500/10 to-purple-600/15 opacity-45 blur-xs -z-10 animate-pulse" />
            
            {/* Main Image Container Frame */}
            <div className="w-full h-full rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl relative group">
              <img
                id="hero-avatar"
                src={IMAGES.profile}
                alt="Thirumalai - Senior UXUI Designer 3D Avatar Profile"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Minimal Accent Glass Panel Overlays */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between shadow-xl">
                <div className="flex flex-col">
                  <div className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                    Thirumalai <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">LOCATION: APAC / GLOBAL REMOTE</div>
                </div>
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-blue-400" />
                </div>
              </div>
            </div>

            {/* Float details strictly using human labels and premium craft indicators */}
            <div className="absolute -top-4 -right-4 p-3 rounded-xl bg-[#0a0a0c] border border-white/10 shadow-2xl flex flex-col items-center">
              <Flame className="w-5 h-5 text-amber-400 mb-1" />
              <div className="text-[10px] font-mono text-slate-500">STATUS</div>
              <div className="font-display font-medium text-xs text-white">OPEN FOR PROJECTS</div>
            </div>

          </div>

        </div>

      </div>

      {/* Dynamic continuous absolute indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
        <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">SCROLL FOR SECRETS</span>
        <div className="w-1 h-3 rounded-full bg-blue-400 animate-bounce" />
      </div>

    </section>
  );
}
