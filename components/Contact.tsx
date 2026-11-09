"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, AlertCircle, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Contact() {
  const { personal } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "ready" | "copied">("idle");

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) errs.subject = "Please enter a subject";
    if (!formData.message.trim()) {
      errs.message = "Please enter your message";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message should be at least 10 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build genuine mailto URL
    const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoLink = `mailto:${personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    // Launch mailto
    window.location.href = mailtoLink;
    setSubmissionStatus("ready");
  };

  const handleCopyMessageBody = () => {
    const fullText = `To: ${personal.email}\nSubject: [Portfolio Contact] ${formData.subject}\nFrom: ${formData.name} <${formData.email}>\n\n${formData.message}`;
    navigator.clipboard.writeText(fullText);
    setSubmissionStatus("copied");
    setTimeout(() => setSubmissionStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-cyan-400 mb-3">
            <span>COMMUNICATION // REACH OUT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let&apos;s Connect
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            I&apos;m always interested in connecting with people working in technology, software development, and cybersecurity. Feel free to reach out for internship opportunities, technical discussions, and collaborations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3" />
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono tracking-wider text-slate-400 uppercase px-1">
              DIRECT REACH //
            </h3>

            {/* Email Card */}
            <div className="glass-panel p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group">
              <div className="flex items-center space-x-3.5 min-w-0">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-slate-400 uppercase block">Email Address</span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors truncate block"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personal.email, "email")}
                title="Copy email to clipboard"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                {copiedField === "email" ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group">
              <div className="flex items-center space-x-3.5 min-w-0">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-slate-400 uppercase block">Phone / Mobile</span>
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors truncate block font-mono"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personal.phone, "phone")}
                title="Copy phone to clipboard"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                {copiedField === "phone" ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase block">Professional Network</span>
                  <span className="text-sm sm:text-base font-semibold text-white group-hover:text-blue-300 transition-colors">
                    LinkedIn // poras-900323392
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase block">Code Repositories</span>
                  <span className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    GitHub // poras-2
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </a>

            {/* Location Card */}
            <div className="glass-panel p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-center space-x-3 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Location: Pilani, Rajasthan, India • Open to remote &amp; on-site opportunities</span>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 bg-slate-900/70 border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <span>Send a Message</span>
              </h3>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/50 px-2.5 py-1 rounded border border-cyan-800/50">
                DIRECT MAIL PROTOCOL
              </span>
            </div>

            {/* Transparent Delivery Notice (Strict Anti-Fabrication Rule) */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 mb-6 text-xs text-slate-400 flex items-start space-x-2.5">
              <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                This form operates transparently without unverified server backends: submitting launches your configured email client with your message formatted directly to <strong className="text-slate-200">{personal.email}</strong>, or you can copy the prepared draft.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Satya Nadella / Technical Recruiter"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border ${
                      errors.name ? "border-rose-500" : "border-slate-800 focus:border-blue-500"
                    } text-sm text-white placeholder-slate-600 focus:outline-none transition-colors`}
                  />
                  {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Your Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border ${
                      errors.email ? "border-rose-500" : "border-slate-800 focus:border-blue-500"
                    } text-sm text-white placeholder-slate-600 focus:outline-none transition-colors`}
                  />
                  {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                  Subject <span className="text-rose-400">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Internship opportunity / Technical discussion"
                  className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border ${
                    errors.subject ? "border-rose-500" : "border-slate-800 focus:border-blue-500"
                  } text-sm text-white placeholder-slate-600 focus:outline-none transition-colors`}
                />
                {errors.subject && <p className="text-xs text-rose-400 mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                  Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your team, research project, or internship role..."
                  className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border ${
                    errors.message ? "border-rose-500" : "border-slate-800 focus:border-blue-500"
                  } text-sm text-white placeholder-slate-600 focus:outline-none transition-colors`}
                />
                {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="w-4 h-4" />
                  <span>Open in Mail Client</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyMessageBody}
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-colors"
                >
                  {submissionStatus === "copied" ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Draft Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-cyan-400" />
                      <span>Copy Draft to Clipboard</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
