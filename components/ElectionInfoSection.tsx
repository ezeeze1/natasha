'use client';

import React from 'react';
import { 
  Vote, 
  Award, 
  Users, 
  Calendar, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  FileText
} from 'lucide-react';
import { motion } from 'motion/react';

export const ElectionInfoSection: React.FC = () => {
  return (
    <section id="election-2027" className="py-16 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider border border-emerald-300">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
            <Vote className="w-3.5 h-3.5 text-emerald-800" />
            <span>2027 Electoral Calendar & PDP Context</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900">
            2027 Election Public Information & PDP Platform
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Factual background on Peoples Democratic Party (PDP) developments, Certificate of Return presentation, and community engagement in Kogi Central Senatorial District.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 via-slate-200 to-red-600 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Fact Card 1: Certificate of Return & August 2026 Inauguration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden relative border-2 border-emerald-600/40">
          
          {/* Top PDP Tri-Color Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-2 flex">
            <div className="w-1/3 bg-emerald-600"></div>
            <div className="w-1/3 bg-white"></div>
            <div className="w-1/3 bg-red-600"></div>
          </div>
          
          {/* Subtle Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-emerald-600/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-red-600/15 rounded-full blur-2xl"></div>

          <div className="lg:col-span-7 space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/90 text-red-200 text-xs font-black uppercase tracking-wider border border-red-600 shadow-sm">
              <Award className="w-3.5 h-3.5 text-red-400" />
              <span className="text-red-300 font-extrabold">Official PDP Party Milestone</span>
            </div>

            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-red-500 leading-tight">
              PDP Certificate of Return Presentation & August 2026 Campaign Inauguration
            </h3>

            <p className="text-xs sm:text-sm text-red-200 font-medium leading-relaxed">
              In August 2026, Senator Natasha Akpoti-Uduaghan officially received the Peoples Democratic Party (PDP) Certificate of Return following party consensus. Simultaneously, the Kogi Central PDP inaugurated its 2027 campaign organisation in Okene to coordinate public information and voter mobilization.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-red-950/80 p-3 rounded-xl border border-red-700/80 space-y-1">
                <div className="text-xs font-bold text-red-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
                  <span className="text-red-300">Grassroots Alignment</span>
                </div>
                <p className="text-[11px] text-red-100 font-medium">
                  Leadership structure established across Adavi, Ajaokuta, Ogori-Magongo, Okehi, and Okene.
                </p>
              </div>

              <div className="bg-red-950/80 p-3 rounded-xl border border-red-700/80 space-y-1">
                <div className="text-xs font-bold text-red-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
                  <span className="text-red-300">Peaceful Civic Participation</span>
                </div>
                <p className="text-[11px] text-red-100 font-medium">
                  Focus on voter education, PVC collection awareness, and transparent democratic engagement.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-red-300">
              <span className="flex items-center gap-1 text-red-300 font-semibold">
                <Calendar className="w-3.5 h-3.5 text-red-400" />
                <span>Verified Reporting: August 2026</span>
              </span>
              <span className="text-red-500">•</span>
              <a 
                href="https://punchng.com/2027-natasha-receives-pdp-certificate-rallies-supporters/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-200 hover:underline flex items-center gap-1 font-bold"
              >
                <span>Read Punch Newspaper Report</span>
                <ExternalLink className="w-3 h-3 text-red-400" />
              </a>
            </div>
          </div>

          {/* Right Column: PDP Values & Key Objectives */}
          <div className="lg:col-span-5 relative z-10">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
              <h4 className="font-serif font-bold text-lg text-white border-b border-slate-800 pb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-400" />
                <span>Public Information Principles</span>
              </h4>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-900 text-emerald-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                  <div>
                    <b className="text-white">Record-Based Governance:</b> Presenting verified legislative achievements in the 10th Senate as the benchmark for representation.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-900 text-emerald-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                  <div>
                    <b className="text-white">Ajaokuta Industrial Advocacy:</b> Sustaining national focus on steel development and job creation for Kogi youth.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-900 text-emerald-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                  <div>
                    <b className="text-white">Constituency Inclusivity:</b> Equitable project distribution across all 5 LGAs regardless of political affiliation.
                  </div>
                </div>
              </div>

              <div className="p-3 bg-emerald-950/60 rounded-xl border border-emerald-800/80 text-[11px] text-emerald-200">
                <b>Statutory Reminder:</b> Official election dates and voting procedures are regulated by INEC under the Electoral Act 2022.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
