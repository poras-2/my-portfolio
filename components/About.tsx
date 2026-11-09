"use client";

import React from "react";
import { GraduationCap, Calendar, Award, Building2, MapPin, Target, ShieldCheck, Binary } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function About() {
  const { personal, quickFacts } = PORTFOLIO_DATA;

  const factIcons: Record<string, React.ReactNode> = {
    Degree: <GraduationCap className="w-5 h-5 text-blue-400" />,
    "Current Year": <Calendar className="w-5 h-5 text-cyan-400" />,
    CGPA: <Award className="w-5 h-5 text-emerald-400" />,
    Institution: <Building2 className="w-5 h-5 text-indigo-400" />,
    Location: <MapPin className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section id="about" className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-cyan-400 mb-3">
            <span>ABOUT // BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 bg-slate-900/70 border border-slate-800 shadow-xl">
            <div className="flex items-center space-x-3 pb-5 mb-5 border-b border-slate-800 text-sm font-mono text-slate-400">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span>PROFILE // ENGINEERING &amp; RESEARCH ORIENTATION</span>
            </div>

            <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
              <p>
                I am a second-year Computer Science Engineering student at{" "}
                <span className="font-semibold text-white">
                  BK Birla Institute of Engineering and Technology, Pilani
                </span>
                , with a CGPA of <span className="font-semibold text-cyan-300">8.01/10</span>.
              </p>
              <p>
                My current technical interests include{" "}
                <span className="text-blue-300 font-medium">cybersecurity</span>,{" "}
                <span className="text-blue-300 font-medium">network security</span>,{" "}
                <span className="text-blue-300 font-medium">Linux systems</span>, programming, and{" "}
                <span className="text-blue-300 font-medium">secure software development</span>.
              </p>
              <p>
                I have experience exploring AI-assisted web development through personal website projects.
                I am currently strengthening my programming and computer science fundamentals while exploring
                the field of cybersecurity research.
              </p>
              <p className="pt-2 text-slate-200 font-medium border-l-2 border-blue-500 pl-4 bg-blue-500/5 py-1 rounded-r-lg">
                &ldquo;My long-term goal is to develop strong technical and research skills and contribute to solving real-world security challenges.&rdquo;
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-800">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start space-x-3">
                <Target className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Security-First Mindset</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Approaching systems with defensibility, root cause comprehension, and resilience.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start space-x-3">
                <Binary className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Systems Foundations</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Solidifying data structures, C++, Linux command line workflows, and networks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information Cards */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <h3 className="text-xs font-mono tracking-wider text-slate-400 uppercase px-1">
              ACADEMIC SNAPSHOT //
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="glass-panel p-4 rounded-xl bg-slate-900/60 hover:bg-slate-800/70 border border-slate-800/80 hover:border-slate-700 transition-all flex items-center space-x-4 group"
                >
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-105 transition-transform">
                    {factIcons[fact.label] || <Award className="w-5 h-5 text-blue-400" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                      {fact.label}
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-white truncate group-hover:text-cyan-300 transition-colors">
                      {fact.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Candidate summary card for internship coordinators */}
            <div className="mt-2 p-5 rounded-xl bg-gradient-to-br from-blue-950/40 to-slate-900/80 border border-blue-500/20 text-xs text-slate-300 space-y-2">
              <span className="font-semibold text-blue-300 uppercase tracking-wider block font-mono">
                Candidate Objective
              </span>
              <p className="text-slate-400 leading-relaxed">
                Actively seeking internship and student research opportunities (such as Microsoft Security Research Intern) where foundational computer science rigor, quick learning capability, and curiosity in systems security can be applied.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
