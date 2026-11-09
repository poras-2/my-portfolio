"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import ResearchInterests from "@/components/ResearchInterests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setResumeModalOpen(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#0B1020] text-[#F8FAFC]">
      {/* Background radial gradient mesh */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.12),rgba(11,16,32,0))] pointer-events-none z-0" />
      
      {/* Sticky Top Navbar */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Sections */}
      <main className="flex-grow relative z-10">
        <Hero onOpenResume={handleOpenResume} />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <ResearchInterests />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={handleOpenResume} />

      {/* Dedicated Resume Download & Instructions Modal */}
      <ResumeModal isOpen={resumeModalOpen} onClose={handleCloseResume} />
    </div>
  );
}
