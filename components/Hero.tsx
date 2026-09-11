'use client';

import React from 'react';
import Image from 'next/image';
import { 
  CheckCircle2, 
  MapPin, 
  Landmark, 
  Award, 
  ArrowRight, 
  FileText, 
  Vote,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';
import { usePortalData } from '@/context/PortalDataContext';

interface HeroProps {
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects }) => {
  const { profile } = usePortalData();
  return (
    <section className="relative overflow-hidden bg-black text-white pt-8 pb-16 md:pt-12 md:pb-24 border-b-4 border-red-600">
      {/* Decorative Background Grid Pattern */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      {/* PDP Green & Red Glow Accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-red-600/25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-10 right-1/3 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Official Title, Bio Headline, Legislative Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start gap-5"
          >
            {/* Status Badge with PDP Tri-Color Emblem */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-white/20 text-white text-xs font-bold shadow-md backdrop-blur-md">
              <span className="flex items-center gap-1 bg-emerald-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded">
                PDP
              </span>
              <span className="font-extrabold text-white">Peoples Democratic Party</span>
              <span className="text-red-500 font-extrabold">•</span>
              <span className="text-white font-bold">Power To The People</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="inline-block px-3 py-1 rounded bg-red-600 text-white font-black text-xs tracking-wider uppercase shadow-xs">
                10th National Assembly Senator
              </div>
              <h1 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Sen. Natasha Hadiza <br />
                <span className="text-white">
                  Akpoti-Uduaghan
                </span>
              </h1>
              <p className="text-sm sm:text-base text-white max-w-2xl font-bold leading-relaxed">
                Distinguished Senator representing <span className="font-extrabold text-white underline decoration-red-600 decoration-2">Kogi Central Senatorial District</span> under the Peoples Democratic Party (PDP). Championing industrial revival, youth empowerment, local content, and accountable grassroots legislative delivery.
              </p>
            </div>

            {/* Key District & Legislative Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-2">
              <div className="bg-emerald-950/80 border-l-4 border-l-emerald-500 border border-emerald-800/60 rounded-xl p-3.5 backdrop-blur-xs shadow-sm">
                <div className="flex items-center gap-2 text-emerald-400 mb-1">
                  <MapPin className="w-4 h-4 text-emerald-300" />
                  <span className="text-xs font-bold text-emerald-200">Representation</span>
                </div>
                <div className="text-sm font-bold text-white">5 Local Govts</div>
                <div className="text-[11px] text-emerald-200/80">Adavi, Ajaokuta, Ogori-Magongo, Okehi, Okene</div>
              </div>

              <div className="bg-emerald-950/80 border-l-4 border-l-white border border-emerald-800/60 rounded-xl p-3.5 backdrop-blur-xs shadow-sm">
                <div className="flex items-center gap-2 text-white mb-1">
                  <Landmark className="w-4 h-4 text-white" />
                  <span className="text-xs font-bold text-slate-200">Senate Leadership</span>
                </div>
                <div className="text-sm font-bold text-white">Vice-Chairman</div>
                <div className="text-[11px] text-emerald-200/80">Senate Committee on Local Content</div>
              </div>

              <div className="bg-emerald-950/80 border-l-4 border-l-red-500 border border-emerald-800/60 rounded-xl p-3.5 backdrop-blur-xs shadow-sm">
                <div className="flex items-center gap-2 text-red-400 mb-1">
                  <Award className="w-4 h-4 text-red-300" />
                  <span className="text-xs font-bold text-red-200">Key Advocacy</span>
                </div>
                <div className="text-sm font-bold text-white">Ajaokuta Steel</div>
                <div className="text-[11px] text-emerald-200/80">Revitalisation & Industrialisation</div>
              </div>
            </div>

            {/* CTA Buttons - PDP Theme */}
            <div className="flex flex-wrap items-center gap-3 pt-3 w-full">
              <a
                href="#parliamentary"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-lg hover:shadow-emerald-900/50 border border-emerald-400/30"
              >
                <FileText className="w-4 h-4" />
                <span>View Legislative Record</span>
              </a>

              <a
                href="#election-2027"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-lg hover:shadow-red-900/50 border border-red-400/30"
              >
                <Vote className="w-4 h-4 text-white" />
                <span>2027 PDP Campaign Info</span>
              </a>

              <a
                href="#projects"
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-100 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all"
              >
                <span>Constituency Projects</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Candidate Portrait Frame with PDP Tri-Color Ribbon Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group w-full max-w-md">
              {/* Decorative PDP Tri-Color Frame Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 via-white to-red-600 rounded-3xl blur-md opacity-60 group-hover:opacity-90 transition duration-500"></div>

              {/* Card Container */}
              <div className="relative bg-slate-950 border-2 border-emerald-500/40 rounded-2xl overflow-hidden shadow-2xl p-3">
                
                {/* PDP Top Ribbon Bar */}
                <div className="h-2 w-full flex rounded-t-lg overflow-hidden mb-2">
                  <div className="w-1/3 bg-emerald-600"></div>
                  <div className="w-1/3 bg-white"></div>
                  <div className="w-1/3 bg-red-600"></div>
                </div>

                {/* Image Aspect Box with Natasha5 Image */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                  <Image
                    src={profile.portraitUrl}
                    alt={`${profile.fullName} Hero Portrait`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    referrerPolicy="no-referrer"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay for Text Readability at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent"></div>

                  {/* PDP Badge Overlay */}
                  <div className="absolute top-3 right-3 bg-red-600/95 text-white font-black text-xs px-3 py-1 rounded-full shadow-md border border-white/40 flex items-center gap-1.5 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
                    <span>PDP Kogi Central</span>
                  </div>

                  {/* Bottom Text Label */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-emerald-600 text-white font-extrabold text-[10px] px-2 py-0.5 rounded tracking-wider uppercase">
                        Peoples Democratic Party
                      </span>
                    </div>
                    <div className="font-serif font-bold text-xl leading-tight text-white drop-shadow-sm">
                      Sen. Natasha Akpoti-Uduaghan
                    </div>
                    <div className="text-xs text-emerald-200 mt-1 flex items-center justify-between font-medium">
                      <span>Kogi Central Senatorial District</span>
                      <span className="text-red-400 font-extrabold">10th NASS</span>
                    </div>
                  </div>
                </div>

                {/* PDP & Public Attribution Note */}
                <div className="mt-3 px-3 py-2 flex items-center justify-between text-[11px] text-slate-300 bg-emerald-950/80 rounded-xl border border-emerald-800/60">
                  <span className="truncate font-medium">Kogi Central PDP Public Portal</span>
                  <a href="#sources" className="text-emerald-400 hover:text-white hover:underline font-bold shrink-0 ml-2">
                    Verified Record
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
