"use client";

import React from "react";
import { ArrowUp, Download, Mail, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface FooterProps {
  onOpenResume: () => void;
}

export default function Footer({ onOpenResume }: FooterProps) {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 pt-14 pb-10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Col 1: Identity & Statement */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                PORAS
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Computer Science Engineering Student at BKBIET Pilani. Passionate about cybersecurity research, system defensibility, and building high-integrity software.
            </p>
            <div className="pt-2 text-cyan-400 font-mono text-[11px]">
              CGPA: 8.01/10 • Second Year CSE
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-2.5">
            <span className="font-mono text-slate-300 uppercase tracking-wider block">
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#home" className="hover:text-cyan-300 transition-colors">Home</a>
              <a href="#about" className="hover:text-cyan-300 transition-colors">About Me</a>
              <a href="#skills" className="hover:text-cyan-300 transition-colors">Technical Skills</a>
              <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
              <a href="#certifications" className="hover:text-cyan-300 transition-colors">Certifications</a>
              <a href="#education" className="hover:text-cyan-300 transition-colors">Education</a>
              <a href="#research" className="hover:text-cyan-300 transition-colors">Research Areas</a>
              <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
            </div>
          </div>

          {/* Col 3: Actions & Back to top */}
          <div className="md:col-span-3 flex flex-col justify-between space-y-4">
            <div>
              <span className="font-mono text-slate-300 uppercase tracking-wider block mb-3">
                Portfolio Documents
              </span>
              <button
                onClick={onOpenResume}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                className="ml-auto p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
                title="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Verification Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 gap-3">
          <div>
            © {new Date().getFullYear()} Poras. All verified rights reserved.
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            <span>AUTHENTIC DATA // ZERO FABRICATED METRICS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
