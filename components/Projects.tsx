"use client";

import React, { useState } from "react";
import { ExternalLink, Layers, Sparkles, CheckCircle2, Clock, AlertCircle, X } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolioData";

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getStatusBadge = (status: ProjectItem["status"], statusNote?: string) => {
    switch (status) {
      case "Completed":
        return (
          <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Completed</span>
          </span>
        );
      case "Ongoing":
        return (
          <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-amber-500/15 text-amber-300 border border-amber-500/30">
            <Clock className="w-3.5 h-3.5 text-amber-400 animate-spin" />
            <span>{statusNote || "Ongoing"}</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-blue-500/15 text-blue-300 border border-blue-500/30">
            <span>In Development</span>
          </span>
        );
    }
  };

  return (
    <section id="projects" className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-cyan-400 mb-3">
            <span>SHOWCASE // BUILT &amp; ACTIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Featured Projects &amp; Hackathons
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Practical software development initiatives exploring user workflows, application structure, and competitive hackathon problem solving.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl p-6 sm:p-7 bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Category & Status Row */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs">
                  <span className="font-mono text-slate-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  {getStatusBadge(project.status, project.statusNote)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mt-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mt-5 space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                    Key Highlights:
                  </span>
                  <ul className="space-y-1.5">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & Actions */}
              <div className="mt-6 pt-5 border-t border-slate-800 space-y-4">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3 pt-1">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>View on GitHub</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
                      <span>Repository Info</span>
                    </button>
                  )}

                  {project.id === "voyagehack-4" && (
                    <span className="text-[11px] font-mono text-amber-400/90 italic">
                      Live hackathon in progress
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Projects with Repos in preparation */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative w-full max-w-md rounded-2xl bg-slate-900 border border-slate-700 p-6 text-slate-100 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">
                    {selectedProject.title}
                  </h4>
                  <span className="text-xs font-mono text-cyan-400">
                    Repository Status Notice
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2 mb-4">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <p>
                    {selectedProject.id === "voyagehack-4"
                      ? "VoyageHack 4.0 is currently ongoing. In accordance with hackathon guidelines, public repository links and technical architecture will be published upon conclusion of the judging rounds."
                      : "This project was built as an AI-assisted development showcase. Source code repository is being organized for clean public publishing on GitHub under poras-2."}
                  </p>
                </div>
              </div>

              <div className="flex justify-end space-x-2">
                <a
                  href={PORTFOLIO_DATA.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
                >
                  <span>Visit GitHub Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
