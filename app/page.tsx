'use client';

import React, { useState } from 'react';
import { PortalDataProvider } from '@/context/PortalDataContext';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { LiveCountdown } from '@/components/LiveCountdown';
import { BiographySection } from '@/components/BiographySection';
import { ParliamentarySection } from '@/components/ParliamentarySection';
import { ProjectsTracker } from '@/components/ProjectsTracker';
import { ElectionInfoSection } from '@/components/ElectionInfoSection';
import { NewsSection } from '@/components/NewsSection';
import { KogiCentralMap } from '@/components/KogiCentralMap';
import { PublicInquiryModal } from '@/components/PublicInquiryModal';
import { Footer } from '@/components/Footer';
import { AdminDashboard } from '@/components/AdminDashboard';

function MainPortal() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleExploreProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      {/* Top Sticky Navigation Bar */}
      <Navbar 
        onOpenInquiry={() => setInquiryModalOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onExploreProjects={handleExploreProjects} />

        {/* Live Election Window Countdown & INEC Disclaimer */}
        <LiveCountdown />

        {/* Candidate Biography & Career Timeline */}
        <BiographySection />

        {/* 10th Assembly Parliamentary Service: Bills & Committees */}
        <ParliamentarySection />

        {/* Constituency Projects Tracker */}
        <ProjectsTracker />

        {/* 2027 Election Public Information & PDP Context */}
        <ElectionInfoSection />

        {/* News & Press Statements Feed */}
        <NewsSection />

        {/* Kogi Central District 5 LGAs Breakdown */}
        <KogiCentralMap />
      </main>

      {/* Footer */}
      <Footer onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* Constituent Public Legislative Inquiry Modal */}
      <PublicInquiryModal 
        isOpen={inquiryModalOpen} 
        onClose={() => setInquiryModalOpen(false)} 
      />

      {/* Admin Dashboard Overlay (accessible via /#admin) */}
      <AdminDashboard />
    </div>
  );
}

export default function Home() {
  return (
    <PortalDataProvider>
      <MainPortal />
    </PortalDataProvider>
  );
}
