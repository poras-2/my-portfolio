"use client";

import React from "react";
import { Code2, Terminal, ShieldAlert, Cpu, CheckCircle2, Info } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Skills() {
  const { skillCategories } = PORTFOLIO_DATA;

  const categoryIcons: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5 text-blue-400" />,
    Terminal: <Terminal className="w-5 h-5 text-emerald-400" />,
    ShieldAlert: <ShieldAlert className="w-5 h-5 text-cyan-400" />,
    Cpu: <Cpu className="w-5 h-5 text-indigo-400" />,
  };

  const getBadgeStyle = (color?: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-500/15 text-blue-300 border-blue-500/30";
      case "cyan":
        return "bg-cyan-500/15 text-cyan-300 border-cyan-500/30";
      case "slate":
      default:
        return "bg-slate-800 text-slate-300 border-slate-700";
    }
  };

  return (
    <section id="skills" className="py-20 md:py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-cyan-400 mb-3">
            <span>CAPABILITIES // PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technical Skills
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            A transparent and realistic representation of my technical foundation and active areas of study.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3" />
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-panel rounded-2xl p-6 sm:p-7 bg-slate-900/70 border border-slate-800 hover:border-slate-700/90 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Title & Icon */}
                <div className="flex items-center space-x-3 pb-4 mb-4 border-b border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700/70 group-hover:scale-105 transition-transform">
                    {categoryIcons[category.iconName] || <Code2 className="w-5 h-5 text-blue-400" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">{category.description}</p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3 pt-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 flex items-center justify-between transition-colors"
                    >
                      <div className="flex items-center space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span className="text-sm font-medium text-slate-200">
                          {skill.name}
                        </span>
                      </div>

                      {/* Transparent Proficiency Badge (No fake percentage) */}
                      <span
                        className={`text-xs px-2.5 py-1 rounded-md font-mono border ${getBadgeStyle(
                          skill.badgeColor
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-5 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>VERIFIED SKILL SET</span>
                <span className="text-cyan-400/90">TRANSPARENT // NO ARBITRARY GAUGES</span>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical / Accuracy Banner */}
        <div className="mt-10 p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center space-x-3 text-xs text-slate-400 max-w-2xl mx-auto">
          <Info className="w-4 h-4 text-blue-400 shrink-0" />
          <p>
            Proficiency levels adhere strictly to verified academic exposure and self-directed practice, prioritizing honesty and genuine technical growth over inflated ratings.
          </p>
        </div>

      </div>
    </section>
  );
}
