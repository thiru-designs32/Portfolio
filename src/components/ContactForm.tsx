/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Send, CheckCircle, Mail, MapPin, Linkedin, HelpCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    type: "hiring",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please input a valid email format";
    }
    if (!formData.message.trim()) tempErrors.message = "Please write a short message regarding your requirements";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API delivery delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        org: "",
        type: "hiring",
        message: ""
      });
      // Auto-hide success check after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0a0a0c] border-t border-white/10">
      {/* Ambient background blur circles */}
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LANDING CONTENT: 9+ Years Pitch and credentials */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-4">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                GET IN TOUCH
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight mb-4">
                Let's Craft the Next Big Paradigm
              </h2>
              <p className="text-sm text-slate-400 font-light leading-relaxed mb-8">
                Whether you want to recruit for a leadership-oriented senior UX role, consult on a sophisticated B2B dashboard, or review a design system, drop a note! Let's merge technical logic and clean UI.
              </p>
            </div>

            {/* Structured Contact Credentials */}
            <div className="space-y-5 border-t border-white/10 pt-8">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Direct Email Address</h4>
                  <a
                     id="contact-email-link"
                     href="mailto:thirumalai8494@gmail.com"
                     className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    thirumalai8494@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Current Location</h4>
                  <p className="text-sm font-semibold text-white">APAC / Singapore-Standard timezone & Global Remote</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Linkedin className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Professional Link</h4>
                  <a
                    id="linkedin-profile-link"
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-white hover:text-blue-400 transition-colors flex items-center gap-1"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* INTERACTIVE COMPLIANT FORM */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative shadow-2xl">
              
              {submitSuccess ? (
                <div id="contact-success-panel" className="py-16 text-center flex flex-col items-center justify-center animate-fadeIn text-left">
                  <CheckCircle className="w-16 h-16 text-emerald-400 mb-6 animate-pulse" />
                  <h3 className="font-display font-black text-2xl text-white tracking-tight">Message Delivered Successfully!</h3>
                  <p className="text-sm text-slate-400 max-w-md mt-2 font-light">
                    Thank you. I've received your request and will review the details alongside my 9+ years capacity stack. Expect a response inside 24 hours.
                  </p>
                  <button
                    id="back-to-form-btn"
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-8 px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-xs tracking-wider uppercase transition-all border border-white/10"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form id="portfolio-contact-form" onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="flex flex-col">
                      <label htmlFor="fullname" className="text-[10px] text-slate-400 font-mono uppercase tracking-wider mb-2 font-semibold">
                        Your Full Name *
                      </label>
                      <input
                        id="fullname"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`px-4 py-3 rounded-xl bg-[#0a0a0c]/50 border text-sm text-white focus:outline-none focus:border-blue-400 transition-all ${
                          errors.name ? "border-red-500" : "border-white/10"
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-[10px] text-red-400 mt-1.5 font-mono">{errors.name}</span>}
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-[10px] text-slate-400 font-mono uppercase tracking-wider mb-2 font-semibold">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`px-4 py-3 rounded-xl bg-[#0a0a0c]/50 border text-sm text-white focus:outline-none focus:border-blue-400 transition-all ${
                          errors.email ? "border-red-500" : "border-white/10"
                        }`}
                        placeholder="john@company.com"
                      />
                      {errors.email && <span className="text-[10px] text-red-400 mt-1.5 font-mono">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company / Hub Input */}
                    <div className="flex flex-col">
                      <label htmlFor="organization" className="text-[10px] text-slate-400 font-mono uppercase tracking-wider mb-2">
                        Organization (Optional)
                      </label>
                      <input
                        id="organization"
                        type="text"
                        value={formData.org}
                        onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                        className="px-4 py-3 rounded-xl bg-[#0a0a0c]/50 border border-white/10 text-sm focus:outline-none focus:border-blue-400 transition-all text-white"
                        placeholder="Enterprise Inc."
                      />
                    </div>

                    {/* Inquiry Type Select - Touch friendly dropdown */}
                    <div className="flex flex-col">
                      <label htmlFor="inquiry-type" className="text-[10px] text-slate-400 font-mono uppercase tracking-wider mb-2 font-semibold">
                        Collaboration Intent
                      </label>
                      <select
                        id="inquiry-type"
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="px-4 py-3 rounded-xl bg-[#0a0a0c]/50 border border-white/10 text-sm focus:outline-none focus:border-blue-400 transition-all text-slate-300 min-h-[44px]"
                      >
                        <option value="hiring" className="bg-[#0a0a0c]">Permanent Senior UX Recruiting</option>
                        <option value="consulting" className="bg-[#0a0a0c]">B2B Dashboard Design Consulting</option>
                        <option value="design-system" className="bg-[#0a0a0c]">Custom Design System Architecture</option>
                        <option value="coffee" className="bg-[#0a0a0c]">Virtual Coffee / Mentorship</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col">
                    <label htmlFor="msg" className="text-[10px] text-slate-400 font-mono uppercase tracking-wider mb-2 font-semibold">
                      Your Project Message Brief *
                      <span className="text-[9px] text-slate-500 lowercase ml-1">(min 44px height hit check)</span>
                    </label>
                    <textarea
                      id="msg"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`px-4 py-3 rounded-xl bg-[#0a0a0c]/50 border text-sm text-white focus:outline-none focus:border-blue-400 transition-all resize-none ${
                        errors.message ? "border-red-500" : "border-white/10"
                      }`}
                      placeholder="Hi Thirumalai, we saw your 9+ years UX capacity checklist..."
                    />
                    {errors.message && <span className="text-[10px] text-red-400 mt-1.5 font-mono">{errors.message}</span>}
                  </div>

                  {/* Submit Button - minimum 48px height target for high mobility ergonomics */}
                  <button
                    id="submit-form-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-extrabold text-sm tracking-widest uppercase hover:from-blue-500 hover:to-purple-500 hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed border border-white/10 shadow-lg shadow-blue-950/20 duration-300"
                    style={{ minHeight: "48px" }} // Fitts Law alignment
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        TRANSMITTING PARAMETERS...
                      </>
                    ) : (
                      <>
                        TRANSMIT SECURE INQUIRY <Send className="w-4 h-4 text-white" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
