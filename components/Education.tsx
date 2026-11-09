"use client";

import React from "react";
import { GraduationCap, BookOpen, Award, Building, Calendar, CheckCircle } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-cyan-400 mb-3">
            <span>ACADEMICS // FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Undergraduate engineering training in computer science, system concepts, and computational theory.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3" />
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 md:p-10 bg-slate-900/70 border border-slate-800 shadow-xl relative overflow-hidden">
            
            {/* Ambient accent background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20 shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {education.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-slate-300">
                    <span className="flex items-center space-x-1.5 font-medium">
                      <Building className="w-4 h-4 text-cyan-400" />
                      <span>{education.institution}</span>
                    </span>
                    <span className="text-slate-500 hidden sm:inline">•</span>
                    <span className="text-slate-400">{education.location}</span>
                  </div>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="self-start md:self-center p-3 sm:px-5 sm:py-3 rounded-xl bg-slate-950/80 border border-emerald-500/30 flex items-center space-x-3">
                <Award className="w-6 h-6 text-emerald-400" />
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase block">
                    Current CGPA
                  </span>
                  <span className="text-xl font-bold text-emerald-300 font-mono">
                    {education.cgpa}
                  </span>
                </div>
              </div>
            </div>

            {/* Academic Status Metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-b border-slate-800 text-xs font-mono text-slate-300">
              <div className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-950/50 border border-slate-800/80">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>Current Standing: <strong className="text-white">{education.currentYear}</strong></span>
              </div>
              <div className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-950/50 border border-slate-800/80">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Expected Graduation: <strong className="text-white">{education.expectedGraduation}</strong></span>
              </div>
            </div>

            {/* Key Relevant Coursework */}
            <div className="pt-6">
              <div className="flex items-center space-x-2 mb-4 text-xs font-mono text-slate-400 uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>Key Coursework &amp; Subject Foundations //</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {education.relevantCoursework.map((course) => (
                  <div
                    key={course}
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 flex items-start space-x-2.5 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span className="text-xs font-medium text-slate-200">
                      {course}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
