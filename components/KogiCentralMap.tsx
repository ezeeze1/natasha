'use client';

import React, { useState } from 'react';
import { usePortalData } from '@/context/PortalDataContext';
import { LGADetail } from '@/lib/portal-data';
import { 
  MapPin, 
  Building, 
  Users, 
  CheckCircle2, 
  Layers, 
  Compass
} from 'lucide-react';
import { motion } from 'motion/react';

export const KogiCentralMap: React.FC = () => {
  const { lgas } = usePortalData();
  const [activeLga, setActiveLga] = useState<LGADetail>(lgas[0] || {
    name: 'Adavi',
    headquarters: 'Ogaminana',
    keyFocus: 'Industrial infrastructure & water',
    highlights: ['Solar water project']
  });

  return (
    <section className="py-16 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider border border-emerald-300">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
            <Compass className="w-3.5 h-3.5 text-emerald-800" />
            <span>Kogi Central District Profile</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900">
            5 Local Government Areas Represented
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Detailed breakdown of population, economic sectors, and PDP developmental priority areas across Kogi Central Senatorial District.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 via-slate-200 to-red-600 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Interactive LGA Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {lgas.map((lga) => {
            const isSelected = activeLga.name === lga.name;

            return (
              <button
                key={lga.name}
                onClick={() => setActiveLga(lga)}
                className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between h-full ${
                  isSelected
                    ? 'bg-emerald-900 text-white border-emerald-700 shadow-md ring-2 ring-emerald-600'
                    : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-emerald-50 hover:border-emerald-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <MapPin className={`w-4 h-4 ${isSelected ? 'text-emerald-400' : 'text-slate-400'}`} />
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-emerald-800 text-emerald-200' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {lga.completedProjectsCount} Projects
                  </span>
                </div>
                <div className="mt-3">
                  <span className="text-xs font-bold font-serif block leading-snug">
                    {lga.name.replace(' Local Government Area', '')}
                  </span>
                  <span className={`text-[11px] block mt-0.5 ${isSelected ? 'text-emerald-200' : 'text-slate-500'}`}>
                    HQ: {lga.headquarters}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected LGA Focus Card */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <Building className="w-4 h-4" />
              <span>Headquarters: {activeLga.headquarters}</span>
            </div>

            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
              {activeLga.name}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeLga.overview}
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Key Economic & Social Pillars</span>
              <div className="flex flex-wrap gap-2">
                {activeLga.keySectors.map((sector) => (
                  <span 
                    key={sector} 
                    className="bg-slate-800 text-emerald-300 border border-slate-700 text-xs px-3 py-1 rounded-lg font-medium"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
            <h4 className="font-serif font-bold text-base text-white border-b border-slate-800 pb-2">
              LGA Key Statistics
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Estimated Population:</span>
                <span className="font-semibold text-white">{activeLga.populationEstimate}</span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Tracked Interventions:</span>
                <span className="font-semibold text-emerald-400">{activeLga.completedProjectsCount} Major Projects</span>
              </div>

              <div className="flex justify-between items-center py-1">
                <span className="text-slate-400">Senate Oversight:</span>
                <span className="font-semibold text-white">Direct Constituency Office</span>
              </div>
            </div>

            <a
              href="#projects"
              className="block text-center w-full bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs py-2.5 rounded-xl transition-colors"
            >
              Filter Projects for {activeLga.headquarters}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
