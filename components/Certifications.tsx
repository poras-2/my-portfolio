"use client";

import React, { useState } from "react";
import {
  Award,
  FileCheck2,
  Calendar,
  Building,
  CheckCircle2,
  X,
  ExternalLink,
  Download,
  User,
  Sparkles,
} from "lucide-react";
import { PORTFOLIO_DATA, CertificationItem } from "@/data/portfolioData";

export default function Certifications() {
  const { certifications } = PORTFOLIO_DATA;
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-20 md:py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-cyan-400 mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>VERIFIED TECHNICAL CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Certifications &amp; Internships
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Verified institutional programming internships and technical workshop certifications.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel rounded-2xl p-6 bg-slate-900/80 border border-slate-800 hover:border-slate-700 shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header Icon + Verified Status */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{cert.status}</span>
                  </span>
                </div>

                {/* Certificate Name */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {cert.title}
                </h3>

                {/* Organization & Date Badges */}
                <div className="mt-3 space-y-1.5 text-xs font-mono text-slate-400">
                  <div className="flex items-start space-x-2">
                    <Building className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 line-clamp-1">{cert.organization}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3.5 line-clamp-3">
                  {cert.description}
                </p>

                {/* Skills tags */}
                {cert.skills && (
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-800/80">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2">
                <button
                  onClick={() => setActiveCert(cert)}
                  className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/20 transition-colors"
                >
                  <FileCheck2 className="w-4 h-4" />
                  <span>Inspect Credential &amp; PDF</span>
                </button>

                {cert.certificateUrl && (
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-slate-700 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Open Tab</span>
                    </a>
                    <a
                      href={cert.certificateUrl}
                      download
                      className="inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-slate-700 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-blue-400" />
                      <span>Download</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Verification Modal */}
        {activeCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveCert(null)}
          >
            <div
              className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700 p-5 sm:p-7 text-slate-100 shadow-2xl space-y-5"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveCert(null)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-start space-x-3 pr-10">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{activeCert.status}</span>
                  </div>
                  <h3 className="font-bold text-white text-lg sm:text-xl leading-tight">
                    {activeCert.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    {activeCert.organization}
                  </p>
                </div>
              </div>

              {/* Certificate Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div>
                  <span className="text-slate-400 font-mono text-[11px] block">Awarded To:</span>
                  <span className="font-semibold text-slate-100 mt-0.5 flex items-center space-x-1.5">
                    <User className="w-3.5 h-3.5 text-blue-400" />
                    <span>{activeCert.recipientName || "Poras"}</span>
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 font-mono text-[11px] block">Issue / Completion Date:</span>
                  <span className="font-semibold text-slate-100 mt-0.5 flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{activeCert.date}</span>
                  </span>
                </div>
                <div className="sm:col-span-2 pt-2 border-t border-slate-800/80">
                  <span className="text-slate-400 font-mono text-[11px] block">Verification &amp; Authentication:</span>
                  <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                    {activeCert.verificationNote}
                  </p>
                </div>
              </div>

              {/* PDF Preview Area */}
              {activeCert.certificateUrl && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center space-x-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Document Preview // {activeCert.title}</span>
                    </span>
                    <a
                      href={activeCert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 inline-flex items-center space-x-1"
                    >
                      <span>Full Screen</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                    <iframe
                      src={`${activeCert.certificateUrl}#toolbar=0&navpanes=0`}
                      title={activeCert.title}
                      className="w-full h-full border-0"
                    />
                  </div>
                </div>
              )}

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-3 border-t border-slate-800">
                {activeCert.certificateUrl && (
                  <>
                    <a
                      href={activeCert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-cyan-400" />
                      <span>Open in New Tab</span>
                    </a>
                    <a
                      href={activeCert.certificateUrl}
                      download
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/20 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Certificate PDF</span>
                    </a>
                  </>
                )}
                <button
                  onClick={() => setActiveCert(null)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-slate-200 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
