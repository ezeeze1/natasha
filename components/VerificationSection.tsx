'use client';

import React from 'react';
import { VERIFIED_SOURCES } from '@/lib/portal-data';
import { 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  FileCheck, 
  Globe
} from 'lucide-react';

export const VerificationSection: React.FC = () => {
  return (
    <section id="sources" className="py-16 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Information Transparency & Source Citations</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900">
            Verified Public Sources & References
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            All biographic facts, parliamentary records, party developments, and portrait media are grounded in verifiable public records and published media.
          </p>
        </div>

        {/* Sources Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VERIFIED_SOURCES.map((src) => (
            <div
              key={src.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-emerald-300 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{src.verificationBadge}</span>
                  </span>

                  <span className="text-[11px] font-semibold text-slate-500 uppercase">
                    {src.type}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-base text-slate-900 leading-snug">
                  {src.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {src.description}
                </p>

                <div className="text-[11px] font-semibold text-slate-500">
                  Publishing Authority: <span className="text-slate-800">{src.organization}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px] truncate max-w-[200px]">
                  {src.url}
                </span>

                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-emerald-900 text-white font-semibold px-3.5 py-2 rounded-xl transition-colors text-xs"
                >
                  <span>Verify Record</span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Commercial & Licensing Disclaimer Note */}
        <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-5 text-xs text-slate-600 space-y-2">
          <div className="flex items-center gap-2 text-slate-800 font-bold">
            <FileCheck className="w-4 h-4 text-emerald-700" />
            <span>Public Information Portal & Media Attribution Notice</span>
          </div>
          <p className="leading-relaxed">
            This public information portal is created as an educational, non-partisan candidate information resource for Kogi Central Senatorial District. Portrait imagery is sourced under Creative Commons licenses via Wikimedia Commons; commercial users should verify specific media attribution guidelines. Electoral timetables must always be cross-referenced with official declarations from the Independent National Electoral Commission (INEC).
          </p>
        </div>

      </div>
    </section>
  );
};
