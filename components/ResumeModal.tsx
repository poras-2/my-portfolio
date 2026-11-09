"use client";

import React, { useEffect, useState } from "react";
import { X, Download, FileText, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const resumePath = PORTFOLIO_DATA.personal.resumePath;

  const copyPath = () => {
    navigator.clipboard.writeText(`public${resumePath}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-700/80 p-6 md:p-8 shadow-2xl text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close resume dialog"
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-5">
          <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 id="resume-modal-title" className="text-xl font-bold tracking-tight text-white">
              Resume // Poras
            </h3>
            <p className="text-sm text-slate-400">
              B.Tech Computer Science Engineering • BKBIET Pilani
            </p>
          </div>
        </div>

        {/* Status / Notice Box */}
        <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/70 mb-5 text-sm space-y-2">
          <div className="flex items-start space-x-2.5">
            <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-slate-200">Dedicated Resume Location Configured</p>
              <p className="text-slate-400 text-xs mt-0.5">
                Target location: <code className="px-1.5 py-0.5 rounded bg-slate-950 text-cyan-300 font-mono text-[11px]">{`public${resumePath}`}</code>
              </p>
            </div>
          </div>
        </div>

        {/* Direct Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <a
            href={resumePath}
            download="Poras_Resume.pdf"
            className="flex-1 inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all text-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume PDF</span>
          </a>

          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-colors text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open in Tab</span>
          </a>
        </div>

        {/* Instructions for Updating */}
        <div className="border-t border-slate-800 pt-4 text-xs text-slate-400 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-slate-300">File placement instruction:</span>
            <button
              onClick={copyPath}
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
            >
              {copied ? "Copied!" : "Copy Path"}
            </button>
          </div>
          <p className="text-[12px] leading-relaxed text-slate-400">
            To update with a newly exported PDF, simply save your file as{" "}
            <code className="text-cyan-300">Poras_Resume.pdf</code> directly into the{" "}
            <code className="text-slate-200">public/</code> directory of this project.
          </p>
        </div>
      </div>
    </div>
  );
}
