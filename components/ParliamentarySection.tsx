'use client';

import React, { useState } from 'react';
import { usePortalData } from '@/context/PortalDataContext';
import { LegislativeBill } from '@/lib/portal-data';
import { 
  Landmark, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Filter, 
  ShieldCheck, 
  Users, 
  Zap,
  Building2,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';

export const ParliamentarySection: React.FC = () => {
  const { bills, profile } = usePortalData();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeBill, setActiveBill] = useState<LegislativeBill | null>(null);

  const categories = ['All', 'Industry & Steel', 'Infrastructure', 'Education & Youth', 'Healthcare'];

  const filteredBills = selectedCategory === 'All'
    ? bills
    : bills.filter(b => b.category === selectedCategory);

  return (
    <section id="parliamentary" className="py-16 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider border border-emerald-300">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
            <Landmark className="w-3.5 h-3.5 text-emerald-800" />
            <span>10th Assembly Parliamentary Service</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900">
            Legislative Bills, Motions & Committees
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Transparent tracking of sponsored bills, executive motions, and committee oversight led by Sen. Natasha Akpoti-Uduaghan in the Nigerian Senate for PDP Kogi Central.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 via-slate-200 to-red-600 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Committee Leadership Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-red-950/90 text-white p-5 rounded-2xl border-2 border-red-600 shadow-md space-y-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-red-600"></div>
            <div className="flex items-center gap-2 text-red-400 text-xs font-black uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-red-400" />
              <span>Senate Committee Role</span>
            </div>
            <div className="text-base font-bold font-serif text-red-200">Vice-Chairman, Committee on Local Content</div>
            <p className="text-xs text-red-100 font-medium leading-relaxed">
              Oversight of multinational compliance with Nigerian indigenous technology and manpower quotas.
            </p>
          </div>

          <div className="bg-red-950/90 text-white p-5 rounded-2xl border-2 border-red-600 shadow-md space-y-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-red-600"></div>
            <div className="flex items-center gap-2 text-red-400 text-xs font-black uppercase tracking-wider">
              <Zap className="w-4 h-4 text-red-400" />
              <span>Priority Mandate</span>
            </div>
            <div className="text-base font-bold font-serif text-red-200">Ajaokuta Steel Resuscitation</div>
            <p className="text-xs text-red-100 font-medium leading-relaxed">
              Advocating statutory federal funding mechanisms and technical concession partnerships for Kogi Central.
            </p>
          </div>

          <div className="bg-red-950/90 text-white p-5 rounded-2xl border-2 border-red-600 shadow-md space-y-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-red-600"></div>
            <div className="flex items-center gap-2 text-red-400 text-xs font-black uppercase tracking-wider">
              <Users className="w-4 h-4 text-red-400" />
              <span>Committee Membership</span>
            </div>
            <div className="text-base font-bold font-serif text-red-200">Steel Development • Power • Women Affairs</div>
            <p className="text-xs text-red-100 font-medium leading-relaxed">
              Active legislative voting and public hearing management for industrial and social development.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
            <Filter className="w-4 h-4 text-emerald-700" />
            <span>Filter Bills by Sector:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBills.map((bill) => (
            <div
              key={bill.id}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold bg-emerald-100 text-emerald-900 px-2.5 py-1 rounded-md border border-emerald-200">
                    {bill.code}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200 text-slate-800">
                    <Clock className="w-3 h-3 text-emerald-700" />
                    <span>{bill.status}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-lg text-slate-900 leading-snug">
                  {bill.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {bill.summary}
                </p>

                {/* Projected Impact Box */}
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs space-y-1">
                  <span className="font-semibold text-emerald-800 uppercase tracking-wider text-[10px]">
                    Projected Socio-Economic Impact
                  </span>
                  <p className="text-slate-700 font-medium">
                    {bill.impact}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                <span>Introduced: {bill.date}</span>
                <button
                  onClick={() => setActiveBill(bill)}
                  className="text-emerald-800 font-bold hover:underline flex items-center gap-1"
                >
                  <span>Bill Details</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bill Detail Modal */}
      {activeBill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-lg w-full p-6 text-slate-900 shadow-2xl relative space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-800" />
                <span className="font-mono text-xs font-bold bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded">
                  {activeBill.code}
                </span>
              </div>
              <button
                onClick={() => setActiveBill(null)}
                className="text-slate-400 hover:text-slate-800 p-1"
              >
                ✕
              </button>
            </div>

            <div>
              <h3 className="font-serif font-bold text-xl text-slate-900">
                {activeBill.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Category: {activeBill.category} • Status: <span className="font-semibold text-emerald-800">{activeBill.status}</span>
              </p>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold uppercase text-[10px] text-slate-500">Legislative Intent & Provision</span>
                <p className="leading-relaxed">{activeBill.summary}</p>
              </div>

              <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-200 text-emerald-900 space-y-1">
                <span className="font-bold uppercase text-[10px] text-emerald-700">Kogi Central Target Impact</span>
                <p className="leading-relaxed font-medium">{activeBill.impact}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex justify-between items-center text-xs">
              <a
                href={profile.nassProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-800 font-semibold hover:underline flex items-center gap-1"
              >
                <span>Verify at NASS Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={() => setActiveBill(null)}
                className="bg-slate-800 hover:bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
