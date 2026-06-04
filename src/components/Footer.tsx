/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowUp, Sparkles, Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const handleScrollTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="main-footer" className="bg-[#0a0a0c] border-t border-white/10 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Left Side: Professional Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="flex items-center gap-2">
            <span className="font-display font-black text-white text-md tracking-wider">THIRUMALAI</span>
            <span className="text-[10px] text-slate-500 font-mono mt-0.5">/ SENIOR UX/UI SPECIALIST</span>
          </div>
          <p className="text-xs text-slate-500 max-w-sm">
            Leveraging 9+ years of industry experience. Actively building modular, high-impact design ecosystems and technical integrations.
          </p>
        </div>

        {/* Center: Social/Direct Communication Anchors with min 44px boundaries */}
        <div className="flex items-center gap-4">
          <a
            id="footer-email-icon"
            href="mailto:thirumalai8494@gmail.com"
            title="Send Email"
            className="w-11 h-11 rounded-full bg-white/3 border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-white/10 hover:border-blue-500/20 transition-all focus:outline-none animate-none"
            style={{ width: "44px", height: "44px" }}
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            id="footer-linkedin-icon"
            href="https://linkedin.com"
            target="_blank"
            title="LinkedIn Profile"
            rel="noreferrer"
            className="w-11 h-11 rounded-full bg-white/3 border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-white/10 hover:border-blue-500/20 transition-all focus:outline-none animate-none"
            style={{ width: "44px", height: "44px" }}
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Right Side: Back to top shortcut trigger */}
        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
          <button
            id="scroll-top-btn"
            onClick={handleScrollTop}
            className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all focus:outline-none hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
            style={{ width: "44px", height: "44px" }}
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
          <span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest leading-none">
            © 2026 THIRUMALAI. ALL RIGHTS RESERVED
          </span>
        </div>

      </div>
    </footer>
  );
}
