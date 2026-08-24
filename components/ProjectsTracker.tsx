'use client';

import React, { useState } from 'react';
import { usePortalData } from '@/context/PortalDataContext';
import { ConstituencyProject } from '@/lib/portal-data';
import { 
  Briefcase, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Search, 
  Filter, 
  BarChart3, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';

export const ProjectsTracker: React.FC = () => {
  const { projects } = usePortalData();
  const [selectedLga, setSelectedLga] = useState<string>('All');
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProject, setActiveProject] = useState<ConstituencyProject | null>(null);

  const lgaList = ['All', 'District Wide', 'Adavi', 'Ajaokuta', 'Ogori-Magongo', 'Okehi', 'Okene'];
  const sectorList = ['All', 'Healthcare', 'Education', 'Power & Energy', 'Water & Sanitation', 'Roads & Infrastructure', 'Empowerment'];

  const filteredProjects = projects.filter((proj) => {
    const matchesLga = selectedLga === 'All' || proj.lga === selectedLga;
    const matchesSector = selectedSector === 'All' || proj.sector === selectedSector;
    const matchesSearch = 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.lga.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesLga && matchesSector && matchesSearch;
  });

  return (
    <section id="projects" className="py-16 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider border border-emerald-300">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
            <Briefcase className="w-3.5 h-3.5 text-emerald-800" />
            <span>Constituency Projects Tracker</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900">
            Kogi Central Development & Infrastructure
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Real-time status updates on healthcare facilities, solar electrification, educational grants, motorized boreholes, and township road construction delivered under Sen. Natasha&apos;s PDP mandate.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 via-slate-200 to-red-600 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by keyword..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white"
              />
            </div>

            {/* LGA Selector */}
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
              <select
                value={selectedLga}
                onChange={(e) => setSelectedLga(e.target.value)}
                className="w-full py-2 px-3 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
              >
                {lgaList.map((lga) => (
                  <option key={lga} value={lga}>LGA: {lga}</option>
                ))}
              </select>
            </div>

            {/* Sector Selector */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-emerald-700 shrink-0" />
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full py-2 px-3 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
              >
                {sectorList.map((sec) => (
                  <option key={sec} value={sec}>Sector: {sec}</option>
                ))}
              </select>
            </div>

          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span>Showing <b>{filteredProjects.length}</b> constituency projects</span>
            <button
              onClick={() => {
                setSelectedLga('All');
                setSelectedSector('All');
                setSearchQuery('');
              }}
              className="text-emerald-800 font-semibold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Status & LGA Header */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <MapPin className="w-3 h-3" />
                    <span>{proj.lga}</span>
                  </span>

                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                    proj.status === 'Completed'
                      ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                      : 'bg-amber-100 text-amber-900 border border-amber-300'
                  }`}>
                    {proj.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-base text-slate-900 leading-snug">
                  {proj.title}
                </h3>

                {/* Sector Badge */}
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  {proj.sector}
                </span>

                {/* Description */}
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {proj.description}
                </p>

                {/* Progress Bar */}
                <div className="space-y-1 pt-2">
                  <div className="flex justify-between text-[11px] font-semibold text-slate-700">
                    <span>Implementation Stage</span>
                    <span className="text-emerald-800">{proj.progressPercentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-full transition-all duration-500"
                      style={{ width: `${proj.progressPercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Impact Metric & Footer Trigger */}
              <div className="pt-4 mt-4 border-t border-slate-100 space-y-2">
                <div className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <span className="font-semibold text-slate-800">Impact: </span>
                  {proj.impactMetric}
                </div>

                <div className="flex justify-between items-center text-xs text-slate-500">
                  <span>Target/Completion: {proj.completionDate}</span>
                  <button
                    onClick={() => setActiveProject(proj)}
                    className="text-emerald-800 font-bold hover:underline"
                  >
                    View Record
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-lg w-full p-6 text-slate-900 shadow-2xl relative space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                <MapPin className="w-4 h-4" />
                <span>{activeProject.lga} Local Govt Area</span>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="text-slate-400 hover:text-slate-800 p-1"
              >
                ✕
              </button>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded">
                {activeProject.sector}
              </span>
              <h3 className="font-serif font-bold text-xl text-slate-900 mt-2">
                {activeProject.title}
              </h3>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold uppercase text-[10px] text-slate-500">Project Overview</span>
                <p className="leading-relaxed">{activeProject.description}</p>
              </div>

              <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-200 text-emerald-900 space-y-1">
                <span className="font-bold uppercase text-[10px] text-emerald-700">Constituency Benefit</span>
                <p className="leading-relaxed font-semibold">{activeProject.impactMetric}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex justify-between items-center text-xs">
              <span className="text-slate-500">Status: <b>{activeProject.status} ({activeProject.progressPercentage}%)</b></span>
              <button
                onClick={() => setActiveProject(null)}
                className="bg-emerald-800 hover:bg-emerald-900 text-white font-semibold px-4 py-2 rounded-lg"
              >
                Close Details
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
