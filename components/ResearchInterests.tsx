"use client";

import React from "react";
import { Shield, Network, Bug, Terminal, Lock, Cpu, Compass, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ResearchInterests() {
  const { researchInterests } = PORTFOLIO_DATA;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Shield":
        return <Shield className="w-5 h-5 text-blue-400" />;
      case "Network":
        return <Network className="w-5 h-5 text-cyan-400" />;
      case "Bug":
        return <Bug className="w-5 h-5 text-rose-400" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case "Lock":
        return <Lock className="w-5 h-5 text-amber-400" />;
      case "Cpu":
      default:
        return <Cpu className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="research" className="py-20 md:py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>RESEARCH HORIZONS // ACTIVE STUDY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Areas I&apos;m Exploring
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            My active areas of academic curiosity and technical study. These represent domains where I am actively reading documentation, experimenting with lab environments, and preparing for future research and internship roles.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3" />
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchInterests.map((item) => (
            <div
              key={item.title}
              className="glass-panel rounded-2xl p-6 bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700/80 group-hover:scale-110 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/50">
                    LEARNING &amp; STUDY
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2.5">
                  {item.description}
                </p>
              </div>

              {/* Focus Tags */}
              <div className="mt-5 pt-4 border-t border-slate-800/70">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Key Concepts of Interest:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Research Alignment Note */}
        <div className="mt-12 max-w-3xl mx-auto p-5 rounded-2xl bg-gradient-to-r from-blue-950/30 to-cyan-950/30 border border-blue-500/20 text-center">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <span className="text-cyan-400 font-semibold font-mono">ALIGNMENT NOTE: </span>
            These exploration areas are chosen to establish deep fundamentals necessary for cybersecurity research initiatives, vulnerability assessments, and systems engineering opportunities like the Microsoft Security Research Intern program.
          </p>
        </div>

      </div>
    </section>
  );
}
