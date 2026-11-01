import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Marquee } from './components/Marquee';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectGallery } from './components/ProjectGallery';
import { TestingProcess } from './components/TestingProcess';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { HUDControls } from './components/HUDControls';

export function AppContent() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash === '#resume') {
      setIsResumeOpen(true);
    }
    const handleHash = () => {
      if (window.location.hash === '#resume') {
        setIsResumeOpen(true);
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0D0F] text-[#F4F5F2] font-sans selection:bg-[#C6FF4D] selection:text-[#0B0D0F] flex flex-col justify-between transition-colors duration-300">
      {/* Sticky Translucent Header */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenShortcuts={() => setIsShortcutsOpen(true)}
      />

      {/* Main Page Flow */}
      <main id="main-content" className="flex-1 print:hidden">
        {/* Hero Section with Interactive Quality Interface */}
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* Philosophy Marquee Strip */}
        <Marquee />

        {/* 01 / About Section */}
        <AboutSection />

        {/* 02 / Technical Toolkit */}
        <SkillsSection />

        {/* 03 / Selected Work & Case Studies */}
        <ProjectGallery />

        {/* Signature Testing Philosophy Section */}
        <TestingProcess />

        {/* 04 / Experience Timeline */}
        <ExperienceTimeline />

        {/* 05 / Certifications & Active Learning */}
        <CertificationsSection />

        {/* 06 / Contact Section */}
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Full Resume Viewer Modal */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}

      {/* Keyboard HUD Navigation Modal */}
      <HUDControls
        isOpen={isShortcutsOpen}
        onClose={(val) => setIsShortcutsOpen(typeof val === 'boolean' ? val : false)}
        onOpenResume={() => {
          setIsShortcutsOpen(false);
          setIsResumeOpen(true);
        }}
      />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
