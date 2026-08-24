'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  FileText, 
  Landmark, 
  Briefcase, 
  Vote, 
  Newspaper, 
  ShieldCheck, 
  Menu, 
  X, 
  Search, 
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { usePortalData } from '@/context/PortalDataContext';

interface NavbarProps {
  onOpenInquiry: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry, searchQuery, setSearchQuery }) => {
  const { profile } = usePortalData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const navItems = [
    { name: 'Biography', href: '#biography', icon: FileText },
    { name: 'Parliamentary Record', href: '#parliamentary', icon: Landmark },
    { name: 'Projects Tracker', href: '#projects', icon: Briefcase },
    { name: '2027 Election Info', href: '#election-2027', icon: Vote },
    { name: 'News & Media', href: '#news', icon: Newspaper },
    { name: 'Verified Sources', href: '#sources', icon: ShieldCheck },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-800/20 shadow-xs transition-all">
      {/* Top Utility Announcement Bar - Full PDP Tri-Color Ribbon */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-900 to-red-700 text-white text-xs py-1.5 px-4 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-emerald-950/80 text-emerald-100 px-2 py-0.5 rounded-full font-bold text-[11px] border border-emerald-400/40 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Kogi Central Senatorial District
            </span>
            <span className="hidden md:inline text-emerald-100 font-semibold">
              Peoples Democratic Party (PDP) <span className="text-red-300">•</span> Power To The People <span className="text-emerald-300">•</span> 10th National Assembly
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-bold">
            <a 
              href={profile.nassProfileUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 hover:underline flex items-center gap-1"
            >
              <span>NASS Profile</span>
              <ExternalLink className="w-3 h-3 text-red-400" />
            </a>
            <span className="text-red-500 font-extrabold">|</span>
            <a 
              href="#sources" 
              className="text-red-400 hover:text-red-300 hover:underline"
            >
              Citations
            </a>
          </div>
        </div>
      </div>

      {/* PDP Flag Tri-Color Thin Bar */}
      <div className="h-1 w-full flex">
        <div className="w-1/3 bg-emerald-600"></div>
        <div className="w-1/3 bg-white border-y border-slate-200"></div>
        <div className="w-1/3 bg-red-600"></div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Brand Logo & Title */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Compressed Natasha Logo Container with PDP Tri-color Ring */}
            <div className="relative w-11 h-11 md:w-13 md:h-13 rounded-full p-[2px] bg-gradient-to-tr from-emerald-600 via-emerald-400 to-red-600 shadow-md group-hover:scale-105 transition-transform overflow-hidden shrink-0">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-emerald-900 border border-white">
                <Image
                  src={profile.logoUrl}
                  alt="Natasha Logo"
                  fill
                  sizes="52px"
                  referrerPolicy="no-referrer"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-bold text-base md:text-lg text-slate-900 leading-tight group-hover:text-emerald-800 transition-colors">
                  {profile.fullName}
                </span>
                <span className="hidden sm:inline-block bg-red-600 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded tracking-wide shadow-2xs">
                  PDP
                </span>
              </div>
              <span className="text-xs font-semibold text-emerald-800">
                Public Information & Legislative Portal
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-emerald-800 hover:bg-emerald-50/80 transition-all"
                >
                  <Icon className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-700" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Search & Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Expandable Search Input */}
            <div className="relative flex items-center">
              <AnimatePresence>
                {showSearchInput && (
                  <motion.input
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 180, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search bills, projects..."
                    className="text-xs pl-8 pr-3 py-1.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                )}
              </AnimatePresence>
              <button
                onClick={() => setShowSearchInput(!showSearchInput)}
                aria-label="Toggle search"
                className="p-2 rounded-lg text-slate-600 hover:text-emerald-800 hover:bg-slate-100 transition-colors"
                title="Search portal"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* Constituent Public Inquiry Trigger */}
            <button
              onClick={onOpenInquiry}
              className="hidden sm:inline-flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-all shadow-xs hover:shadow-md"
            >
              <HelpCircle className="w-3.5 h-3.5 text-emerald-200" />
              <span>Submit Public Inquiry</span>
            </button>

            {/* Mobile Drawer Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 shadow-lg overflow-hidden"
          >
            <div className="flex flex-col gap-1 mb-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-emerald-700" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full flex items-center justify-center gap-2 bg-emerald-800 text-white text-xs font-semibold py-2.5 rounded-lg shadow-xs"
              >
                <HelpCircle className="w-4 h-4 text-emerald-200" />
                <span>Submit Public Legislative Inquiry</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
