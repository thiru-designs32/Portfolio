/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import WorksSection from "./components/WorksSection";
import SkillsSection from "./components/SkillsSection";
import UXAuditWidget from "./components/UXAuditWidget";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import CaseStudyModal from "./components/CaseStudyModal";
import { Project } from "./types";
import { Sparkles, Loader2, Award } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isSiteLoading, setIsSiteLoading] = useState(true);

  // Intersection Observer for scroll highlighting
  useEffect(() => {
    const sections = ["home", "about", "works", "skills", "ux-checklist", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -25% 0px", // Trigger when element is in middle of viewport
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Emulate premium initialization intro duration
    const loaderTimeout = setTimeout(() => {
      setIsSiteLoading(false);
    }, 1100);

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
      clearTimeout(loaderTimeout);
    };
  }, []);

  // Keyboard accessibility: ESC key close case study modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  if (isSiteLoading) {
    return (
      <div className="fixed inset-0 z-50 bg-[#0a0a0c] flex flex-col items-center justify-center text-center">
        {/* Deep ambient background flare for loader */}
        <div className="absolute w-72 h-72 rounded-full bg-blue-500/10 blur-[80px] animate-pulse" />
        
        <div className="relative flex flex-col items-center gap-4 animate-pulse">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-display font-black text-xl shadow-lg shadow-blue-500/20">
            TM
          </div>
          <div className="mt-4 flex flex-col gap-1">
            <span className="font-display font-black text-white text-lg tracking-wider">THIRUMALAI</span>
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest leading-none">
              Initializing UX Portfolio & Guidelines
            </span>
          </div>
          <Loader2 className="w-5 h-5 animate-spin text-blue-400 mt-2" />
        </div>
      </div>
    );
  }

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-[#0a0a0c] text-slate-200 relative">
      
      {/* Structural Global Background Tech Grid Accent overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      {/* Main Responsive Header */}
      <Header activeSection={activeSection} />

      {/* Hero Entrance Section */}
      <Hero
        onExploreWorks={() => handleScrollToSection("works")}
        onAuditClick={() => handleScrollToSection("ux-checklist")}
      />

      {/* Main content flow */}
      <main id="main-content">
        
        {/* Chronological About & Strategy Section */}
        <AboutSection />

        {/* Selected Projects Cards Section */}
        <WorksSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Interactive Skills Radar Grid Selection Section */}
        <SkillsSection />

        {/* Cognitive & Accessibility UX Checklist self-audit widget */}
        <UXAuditWidget />

        {/* Working secure input Contact Form Section */}
        <ContactForm />

      </main>

      {/* Footer copyright with fast indicators */}
      <Footer />

      {/* Full-Screen Case Study Detail Tabbed Lightbox Modal Overlay */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </div>
  );
}
