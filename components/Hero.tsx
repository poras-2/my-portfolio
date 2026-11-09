"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Download, Mail, Shield, Terminal, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import CyberCanvas from "./CyberCanvas";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const { personal } = PORTFOLIO_DATA;
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for professional roles
  useEffect(() => {
    const currentFullText = personal.typingTitles[titleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullText.length) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % personal.typingTitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, personal.typingTitles]);

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Intro */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Status / Affiliation Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 w-fit text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-300">BKBIET Pilani</span>
              <span className="text-slate-500">•</span>
              <span className="text-cyan-400">CGPA 8.01/10</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">PORAS</span>
              </h1>

              {/* Dynamic Typewriter Heading */}
              <div className="flex items-center space-x-2 text-lg sm:text-xl md:text-2xl font-semibold text-slate-300 min-h-[36px]">
                <span className="text-cyan-400 font-mono select-none">&gt;</span>
                <span className="text-slate-200">{displayText}</span>
                <span className="w-2 h-6 bg-blue-500 inline-block animate-pulse ml-0.5" />
              </div>
            </div>

            {/* Verified Introduction */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {personal.heroIntro}
            </p>

            {/* Location & Focus Micro-Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
              <div className="flex items-center space-x-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Pilani, Rajasthan, India</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>Security Research Focus</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Linux &amp; Systems</span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700 hover:border-slate-600 shadow-md transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-400">CONNECT //</span>
              
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Poras GitHub profile"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                title="GitHub: poras-2"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Poras LinkedIn profile"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-400 border border-slate-800 hover:border-slate-700 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personal.email}`}
                aria-label="Send email to Poras"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-slate-700 transition-colors"
                title={personal.email}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Cyber Network Visual */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-lg p-2 rounded-3xl bg-slate-900/40 border border-slate-800/80 shadow-2xl relative">
              {/* Header bar styled like a technical monitor */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800/80 text-xs font-mono text-slate-400">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-slate-400 text-[11px] ml-2">cyber-telemetry.sys</span>
                </div>
                <span className="text-cyan-400/90 text-[11px]">ACTIVE // INTERACTIVE</span>
              </div>

              {/* Canvas Visual */}
              <CyberCanvas />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
