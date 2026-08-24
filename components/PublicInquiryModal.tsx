'use client';

import React, { useState } from 'react';
import { 
  HelpCircle, 
  Send, 
  CheckCircle2, 
  MapPin, 
  X, 
  Building2,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PublicInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PublicInquiryModal: React.FC<PublicInquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailOrPhone: '',
    lga: 'Okene',
    category: 'Legislative Inquiry',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.message) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      emailOrPhone: '',
      lga: 'Okene',
      category: 'Legislative Inquiry',
      subject: '',
      message: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl max-w-lg w-full p-6 text-slate-900 shadow-2xl relative space-y-4 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2 text-emerald-800">
            <HelpCircle className="w-5 h-5" />
            <h3 className="font-serif font-bold text-lg text-slate-900">
              Constituent Legislative Inquiry & Feedback
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-800 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-emerald-700" />
            </div>
            <h4 className="font-serif font-bold text-xl text-slate-900">
              Inquiry Logged Successfully
            </h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <b>{formData.fullName}</b>. Your constituent message regarding <b>{formData.subject || formData.category}</b> in {formData.lga} LGA has been logged into the public service repository.
            </p>
            <button
              onClick={handleReset}
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs px-6 py-2.5 rounded-xl transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <p className="text-slate-600 text-xs leading-relaxed">
              Submit public legislative questions, report community infrastructure needs, or request information regarding Kogi Central senatorial initiatives.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Ibrahim Lawal"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Email or Phone Number</label>
                <input
                  type="text"
                  value={formData.emailOrPhone}
                  onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                  placeholder="e.g. 0803 000 0000"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Local Government Area *</label>
                <select
                  value={formData.lga}
                  onChange={(e) => setFormData({ ...formData, lga: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                >
                  <option value="Adavi">Adavi LGA</option>
                  <option value="Ajaokuta">Ajaokuta LGA</option>
                  <option value="Ogori-Magongo">Ogori-Magongo LGA</option>
                  <option value="Okehi">Okehi LGA</option>
                  <option value="Okene">Okene LGA</option>
                  <option value="Non-Resident / General Public">Non-Resident / General Public</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                >
                  <option value="Legislative Inquiry">Legislative Inquiry / Bill Question</option>
                  <option value="Constituency Project Issue">Constituency Project Request</option>
                  <option value="Scholarship Grant Question">Scholarship / Bursary Scheme</option>
                  <option value="Community Infrastructure Report">Community Erosion / Power Report</option>
                  <option value="General Public Feedback">General Public Feedback</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Subject Title</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Brief summary of your inquiry"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Inquiry / Feedback Details *</label>
              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Please describe your question or community feedback in detail..."
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white"
              ></textarea>
            </div>

            <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
              <button
                type="button"
                onClick={onClose}
                className="text-slate-500 font-semibold text-xs hover:text-slate-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition-all shadow-xs"
              >
                <Send className="w-3.5 h-3.5 text-emerald-200" />
                <span>Submit Inquiry</span>
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};
