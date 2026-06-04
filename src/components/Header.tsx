/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Selected Works", href: "#works" },
    { label: "Skills", href: "#skills" },
    { label: "UX Guarantee", href: "#ux-checklist" },
    { label: "Contact", href: "#contact" }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0c]/70 backdrop-blur-xl border-b border-white/10 py-4 shadow-xl shadow-black/40"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo and Title */}
        <a
          id="logo-brand"
          href="#home"
          onClick={(e) => handleScrollTo(e, "#home")}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-display font-bold text-white shadow-lg shadow-blue-500/10 group-hover:scale-105 transition-transform">
            TM
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#0a0a0c] border border-white/10 flex items-center justify-center">
              <Sparkles className="w-2 h-2 text-blue-400" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-white tracking-wide text-md group-hover:text-blue-400 transition-colors leading-none">
              Thirumalai
            </span>
            <span className="text-[10px] text-slate-400 font-mono mt-1 tracking-wider uppercase leading-none">
              Senior UX/UI Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Link Targets */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                id={`nav-link-${item.href.slice(1)}`}
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`px-4 py-2 rounded-full text-xs uppercase font-semibold tracking-wider transition-all ${
                  isActive
                    ? "bg-white/10 text-blue-400 border border-white/20 shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                {item.label}
              </a>
            );
          })}

          <a
            id="cta-resume-header"
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 font-bold text-xs tracking-wider uppercase border border-white/10 shadow-lg shadow-blue-900/35 transition-all flex items-center gap-1.5"
          >
            Work Together <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none border border-white/10"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden absolute top-full left-0 w-full bg-[#0a0a0c]/90 border-b border-white/10 shadow-2xl py-6 px-6 flex flex-col gap-3 animate-fadeIn backdrop-blur-xl"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                id={`mobile-nav-link-${item.href.slice(1)}`}
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`py-3 px-4 rounded-xl text-base font-semibold transition-all flex items-center justify-between ${
                  isActive
                    ? "bg-white/10 text-blue-400 border-l-4 border-blue-400"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                {item.label}
                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
              </a>
            );
          })}
          <a
            id="mobile-cta-resume"
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="mt-2 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-center tracking-wider uppercase text-sm shadow-lg shadow-blue-500/10"
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  );
}
