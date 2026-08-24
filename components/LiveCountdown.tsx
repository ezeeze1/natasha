'use client';

import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  ExternalLink, 
  Info, 
  Calendar,
  Vote
} from 'lucide-react';
import { motion } from 'motion/react';

export const LiveCountdown: React.FC = () => {
  // Prospective 2027 Election Target Date (e.g. Feb 20, 2027 08:00 WAT)
  const targetDate = new Date('2027-02-20T08:00:00+01:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [showPvcModal, setShowPvcModal] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section id="countdown" className="py-12 bg-emerald-950 text-white relative overflow-hidden border-y-2 border-emerald-600/40">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 pointer-events-none"></div>

      {/* Top PDP Tri-Color Ribbon */}
      <div className="absolute top-0 left-0 right-0 h-1.5 flex">
        <div className="w-1/3 bg-emerald-600"></div>
        <div className="w-1/3 bg-white"></div>
        <div className="w-1/3 bg-red-600"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-2">
        <div className="bg-slate-900/95 border-2 border-emerald-600/40 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-md relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800">
            {/* Left Info Header */}
            <div className="space-y-2 text-center lg:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-white" />
                <span>Prospective 2027 PDP Election Window</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Countdown to the 2027 General Elections
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/90">
                Informational clock tracking the anticipated electoral period for Kogi Central Senatorial District under the PDP flag.
              </p>
            </div>

            {/* Countdown Digit Boxes */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 w-full sm:w-auto">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((unit, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col items-center justify-center bg-slate-950 border border-emerald-800/60 rounded-xl p-3 sm:px-5 sm:py-3 min-w-[70px] sm:min-w-[85px]"
                >
                  <span className="font-mono text-xl sm:text-3xl font-bold text-emerald-400">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mandatory Statutory INEC Disclaimer Notice Box */}
          <div className="mt-6 bg-slate-950/80 border border-amber-600/40 rounded-xl p-4 flex flex-col sm:flex-row items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs text-slate-300">
              <span className="font-semibold text-amber-300">
                Official Electoral Timetable Notice & Verification Disclaimer:
              </span>
              <p className="leading-relaxed">
                Notice: Election dates, voter registration schedules, and official election timetables are subject to official confirmation and formal statutory declaration by the <b>Independent National Electoral Commission (INEC)</b>. Visitors and Kogi Central constituents are advised to verify authoritative election schedules directly at{' '}
                <a 
                  href="https://inecnigeria.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-300 underline hover:text-white font-medium"
                >
                  inecnigeria.org
                </a>.
              </p>
            </div>
            
            <button
              onClick={() => setShowPvcModal(true)}
              className="mt-2 sm:mt-0 shrink-0 inline-flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors border border-emerald-600"
            >
              <Vote className="w-3.5 h-3.5 text-emerald-200" />
              <span>Voter Registration Info</span>
            </button>
          </div>

        </div>
      </div>

      {/* Voter Information Modal */}
      {showPvcModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 border border-emerald-700 rounded-2xl max-w-md w-full p-6 text-white shadow-2xl relative"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Vote className="w-5 h-5 text-emerald-400" />
                <h3 className="font-serif font-bold text-lg text-white">Voter Guidance & PVC Info</h3>
              </div>
              <button
                onClick={() => setShowPvcModal(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-3 text-xs text-slate-300">
              <p>
                As part of civic education for Kogi Central constituents, ensure you are fully prepared for electoral participation:
              </p>
              <ul className="space-y-2 list-disc list-inside bg-slate-950 p-3 rounded-lg border border-slate-800">
                <li><b>Check PVC Status:</b> Verify that your Permanent Voter Card (PVC) is active and un-damaged.</li>
                <li><b>Voter Transfer:</b> If you recently relocated to Adavi, Ajaokuta, Ogori-Magongo, Okehi, or Okene, request a polling unit transfer via INEC portal.</li>
                <li><b>Official Sources Only:</b> Rely exclusively on INEC published guidelines for registration deadlines.</li>
              </ul>
              <div className="p-2.5 bg-emerald-950/80 rounded-lg border border-emerald-800/80 text-emerald-200">
                Sen. Natasha Akpoti-Uduaghan encourages all eligible citizens to exercise their constitutional franchise peacefully.
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-between items-center">
              <a
                href="https://inecnigeria.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-400 hover:underline flex items-center gap-1"
              >
                <span>Visit INEC Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={() => setShowPvcModal(false)}
                className="bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs px-4 py-2 rounded-lg"
              >
                Close Notice
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
