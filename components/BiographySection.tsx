'use client';

import React, { useState } from 'react';
import { usePortalData } from '@/context/PortalDataContext';
import { BioMilestone } from '@/lib/portal-data';
import { 
  GraduationCap, 
  Scale, 
  Factory, 
  Landmark, 
  Calendar, 
  MapPin, 
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const BiographySection: React.FC = () => {
  const { profile, bioMilestones } = usePortalData();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeMilestone, setActiveMilestone] = useState<BioMilestone>(
    bioMilestones.length > 0 ? bioMilestones[bioMilestones.length - 1] : {
      id: 'default-1',
      year: '2023',
      title: 'Elected Senator',
      category: 'Parliamentary',
      description: 'Elected Senator representing Kogi Central Senatorial District under the Peoples Democratic Party (PDP).',
      details: 'Sworn in as 10th Assembly Senator.',
      location: 'National Assembly, Abuja'
    }
  );

  const categories = ['All', 'Education', 'Legal Practice', 'Industrial Advocacy', 'Parliamentary'];

  const filteredMilestones = selectedCategory === 'All'
    ? bioMilestones
    : bioMilestones.filter(m => m.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Education': return GraduationCap;
      case 'Legal Practice': return Scale;
      case 'Industrial Advocacy': return Factory;
      default: return Landmark;
    }
  };

  return (
    <section id="biography" className="py-16 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider border border-emerald-300">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
            <BookOpen className="w-3.5 h-3.5 text-emerald-800" />
            <span>Candidate Biography & Public Record</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900">
            Life, Legal Training & Public Advocacy
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From legal practice in international energy law to championing Nigeria&apos;s steel industrialization and serving as Kogi Central&apos;s Peoples Democratic Party (PDP) Senator in the 10th National Assembly.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 via-slate-200 to-red-600 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Profile Fast Facts Banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs mb-10">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Full Name</span>
            <div className="text-sm font-bold text-slate-900">{profile.fullName}</div>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Education</span>
            <div className="text-sm font-semibold text-slate-900">LL.B (Abuja) • LL.M (Dundee, Scotland)</div>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Senatorial District</span>
            <div className="text-sm font-semibold text-slate-900">Kogi Central (Adavi, Ajaokuta, Ogori, Okehi, Okene)</div>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Political Party</span>
            <div className="text-sm font-bold text-emerald-800">Peoples Democratic Party (PDP)</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline Grid & Highlight Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Milestones List */}
          <div className="lg:col-span-5 space-y-3">
            {filteredMilestones.map((m) => {
              const Icon = getCategoryIcon(m.category);
              const isActive = activeMilestone.id === m.id;

              return (
                <div
                  key={m.id}
                  onClick={() => setActiveMilestone(m)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all ${
                    isActive
                      ? 'bg-emerald-900 text-white border-emerald-700 shadow-md transform translate-x-1'
                      : 'bg-white text-slate-900 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className={`p-1.5 rounded-lg text-xs ${isActive ? 'bg-emerald-800 text-emerald-200' : 'bg-slate-100 text-slate-700'}`}>
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${isActive ? 'bg-emerald-800/80 text-emerald-200' : 'bg-slate-100 text-slate-600'}`}>
                        {m.year}
                      </span>
                    </div>
                    <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded ${
                      isActive ? 'bg-emerald-800/50 text-emerald-200' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {m.category}
                    </span>
                  </div>

                  <h3 className={`font-serif font-bold text-sm sm:text-base mt-2 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                    {m.title}
                  </h3>
                  
                  <p className={`text-xs line-clamp-2 mt-1 ${isActive ? 'text-emerald-100/90' : 'text-slate-600'}`}>
                    {m.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Detailed Card for Active Milestone */}
          <div className="lg:col-span-7 sticky top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMilestone.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold">
                    <Calendar className="w-4 h-4" />
                    <span>Period: {activeMilestone.year}</span>
                    <span>•</span>
                    <MapPin className="w-4 h-4" />
                    <span>{activeMilestone.location}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full">
                    {activeMilestone.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-2xl text-slate-900">
                    {activeMilestone.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-700 mt-2 leading-relaxed">
                    {activeMilestone.description}
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2">
                  <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                    Detailed Record & Public Context
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {activeMilestone.details}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                  <span>Record Type: Verified Historical Bio</span>
                  <a href="#sources" className="text-emerald-700 font-semibold hover:underline flex items-center gap-1">
                    <span>Cross-check Citations</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
