'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Landmark, 
  ShieldCheck, 
  Vote, 
  ExternalLink, 
  ChevronUp,
  MapPin,
  HelpCircle
} from 'lucide-react';
import { usePortalData } from '@/context/PortalDataContext';

interface FooterProps {
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  const { profile } = usePortalData();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-12 pb-8 border-t-4 border-red-600">
      {/* PDP Flag Tri-Color Band at Top of Footer */}
      <div className="h-1.5 w-full flex -mt-12 mb-8">
        <div className="w-1/3 bg-emerald-600"></div>
        <div className="w-1/3 bg-white"></div>
        <div className="w-1/3 bg-red-600"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              {/* Logo space with Natasha3 Image */}
              <div className="relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-emerald-500 via-white to-red-600 shadow-md shrink-0">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 border border-white">
                  <Image
                    src={profile.logoUrl}
                    alt="Sen. Natasha Logo"
                    fill
                    sizes="48px"
                    referrerPolicy="no-referrer"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif font-bold text-lg text-white">
                    {profile.fullName}
                  </h3>
                  <span className="bg-red-600 text-white font-extrabold text-[10px] px-1.5 py-0.5 rounded uppercase">
                    PDP
                  </span>
                </div>
                <p className="text-xs text-emerald-400 font-bold">
                  Peoples Democratic Party • Kogi Central Senatorial District
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Public information and parliamentary service portal dedicated to legislative accountability, Ajaokuta steel industrial advocacy, youth scholarship grants, and transparent constituency development in Kogi State.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Adavi, Ajaokuta, Ogori-Magongo, Okehi & Okene LGAs</span>
            </div>
          </div>

          {/* Portal Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider text-emerald-400">
              Portal Directory
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#biography" className="hover:text-emerald-300 transition-colors">
                  Biography & Legal Background
                </a>
              </li>
              <li>
                <a href="#parliamentary" className="hover:text-emerald-300 transition-colors">
                  10th Senate Bills & Motions
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-emerald-300 transition-colors">
                  Constituency Projects Tracker
                </a>
              </li>
              <li>
                <a href="#election-2027" className="hover:text-emerald-300 transition-colors">
                  2027 Electoral Calendar & PDP Info
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-emerald-300 transition-colors">
                  Press Statement Archive
                </a>
              </li>
              <li>
                <a href="#sources" className="hover:text-emerald-300 transition-colors">
                  Verified Public Citations
                </a>
              </li>
            </ul>
          </div>

          {/* Statutory Links & Action Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider text-emerald-400">
              Statutory Verification
            </h4>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-2 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">NASS Profile ID:</span>
                <span className="font-mono text-emerald-400 font-bold">#624</span>
              </div>
              <a
                href={profile.nassProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline flex items-center gap-1 text-[11px]"
              >
                <span>National Assembly Official Record</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <button
              onClick={onOpenInquiry}
              className="w-full flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs py-2.5 rounded-xl transition-all border border-emerald-600"
            >
              <HelpCircle className="w-4 h-4 text-emerald-200" />
              <span>Submit Legislative Feedback</span>
            </button>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Sen. Natasha Akpoti-Uduaghan Public Portal.
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://inecnigeria.org" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-slate-300"
            >
              INEC Nigeria Portal
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-emerald-400 flex items-center gap-1 font-semibold"
            >
              <span>Back to Top</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
