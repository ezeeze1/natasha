'use client';

import React, { useState, useEffect } from 'react';
import { usePortalData } from '@/context/PortalDataContext';
import { 
  Lock, 
  ShieldCheck, 
  X, 
  Save, 
  RotateCcw, 
  Plus, 
  Trash2, 
  Edit3, 
  Check, 
  UserCheck, 
  FileText, 
  Briefcase, 
  Newspaper, 
  BookOpen, 
  MapPin, 
  LogOut,
  ExternalLink,
  Layers
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { 
    profile, 
    bioMilestones, 
    bills, 
    projects, 
    news, 
    lgas, 
    isAdminOpen, 
    setIsAdminOpen,
    updateProfile,
    addBill,
    updateBill,
    deleteBill,
    addProject,
    updateProject,
    deleteProject,
    addNews,
    updateNews,
    deleteNews,
    addBio,
    updateBio,
    deleteBio,
    updateLGA,
    resetToDefaults
  } = usePortalData();

  // Auth State
  const [isAuthenticated, setIsAuthenticated] = useState(() => typeof window !== 'undefined' && sessionStorage.getItem('admin_authenticated') === 'true');
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  // Active Admin Tab
  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'bills' | 'news' | 'bio' | 'lgas'>('profile');

  // Success Notification
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');

  // Local Profile Form State
  const [profileForm, setProfileForm] = useState(profile);
  const [prevProfile, setPrevProfile] = useState(profile);

  if (profile !== prevProfile) {
    setPrevProfile(profile);
    setProfileForm(profile);
  }

  // New Items Modal States
  const [editingBill, setEditingBill] = useState<any | null>(null);
  const [editingProject, setEditingProject] = useState<any | null>(null);
  const [editingNews, setEditingNews] = useState<any | null>(null);
  const [editingBio, setEditingBio] = useState<any | null>(null);

  if (!isAdminOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate credentials against requirements
    if (usernameInput.trim().toLowerCase() === 'ezekielsamson1@gmail.com' && passwordInput === 'sezuo2020') {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_authenticated', 'true');
      setAuthError('');
      setUsernameInput('');
      setPasswordInput('');
      showNotification('Administrator authenticated successfully');
    } else {
      setAuthError('Invalid credentials. Please verify administrator email and password.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_authenticated');
    window.location.hash = '';
    setIsAdminOpen(false);
  };

  const handleClose = () => {
    window.location.hash = '';
    setIsAdminOpen(false);
  };

  const showNotification = (msg: string) => {
    setSaveSuccessMsg(msg);
    setTimeout(() => {
      setSaveSuccessMsg('');
    }, 3500);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(profileForm);
    showNotification('Senator profile updated successfully!');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div className="bg-slate-900 border-2 border-emerald-500/40 text-white rounded-2xl w-full max-w-6xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Top Header Bar */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-red-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center font-black shadow-md">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-lg text-white leading-tight">
                Portal Management Dashboard
              </h2>
              <p className="text-xs text-emerald-300 font-medium">
                Live Administrative Control Panel • PDP Senatorial Portal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600/80 hover:bg-red-700 text-white text-xs font-bold transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Logout</span>
              </button>
            )}
            <button
              onClick={handleClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Notification Banner */}
        {saveSuccessMsg && (
          <div className="bg-emerald-600 text-white px-6 py-2.5 text-xs sm:text-sm font-bold flex items-center justify-between animate-fadeIn shrink-0">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>{saveSuccessMsg}</span>
            </div>
            <span className="text-emerald-200 text-xs">Live Changes Applied</span>
          </div>
        )}

        {/* BODY AREA */}
        {!isAuthenticated ? (
          /* LOGIN FORM */
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center my-auto max-w-md mx-auto w-full text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-red-600 p-[2px] shadow-xl">
              <div className="w-full h-full rounded-[14px] bg-slate-900 flex items-center justify-center text-white">
                <Lock className="w-8 h-8 text-emerald-400" />
              </div>
            </div>

            <div>
              <h3 className="font-serif font-bold text-2xl text-white">Administrator Sign In</h3>
              <p className="text-xs text-slate-400 mt-1">
                Enter your administrative credentials to manage portal content live.
              </p>
            </div>

            {authError && (
              <div className="w-full p-3 rounded-xl bg-red-950/80 border border-red-600 text-red-200 text-xs font-semibold text-left">
                {authError}
              </div>
            )}

            <form onSubmit={handleLogin} className="w-full space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Administrator Email / Username
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter administrator email"
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="Enter administrator password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-sm shadow-lg transition-all"
              >
                Sign In to Dashboard
              </button>
            </form>
          </div>
        ) : (
          /* AUTHENTICATED DASHBOARD */
          <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
            
            {/* Sidebar Tabs */}
            <div className="w-full md:w-64 bg-slate-950 p-4 border-b md:border-b-0 md:border-r border-slate-800 flex md:flex-col gap-2 overflow-x-auto shrink-0">
              <button
                onClick={() => setActiveTab('profile')}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left whitespace-nowrap ${
                  activeTab === 'profile'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <UserCheck className="w-4 h-4 shrink-0" />
                <span>Senator Profile & Hero</span>
              </button>

              <button
                onClick={() => setActiveTab('projects')}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left whitespace-nowrap ${
                  activeTab === 'projects'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <Briefcase className="w-4 h-4 shrink-0" />
                <span>Projects ({projects.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('bills')}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left whitespace-nowrap ${
                  activeTab === 'bills'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <FileText className="w-4 h-4 shrink-0" />
                <span>Legislative Bills ({bills.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('news')}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left whitespace-nowrap ${
                  activeTab === 'news'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <Newspaper className="w-4 h-4 shrink-0" />
                <span>News & Media ({news.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('bio')}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left whitespace-nowrap ${
                  activeTab === 'bio'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <BookOpen className="w-4 h-4 shrink-0" />
                <span>Biography ({bioMilestones.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('lgas')}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left whitespace-nowrap ${
                  activeTab === 'lgas'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <MapPin className="w-4 h-4 shrink-0" />
                <span>LGA Profiles ({lgas.length})</span>
              </button>

              <div className="mt-auto pt-4 border-t border-slate-800 hidden md:block">
                <button
                  onClick={() => {
                    if (confirm('Are you sure you want to reset all portal data to official defaults?')) {
                      resetToDefaults();
                      showNotification('All portal content reset to official default data.');
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-900 hover:bg-red-950 text-slate-400 hover:text-red-300 text-xs font-bold transition-colors border border-slate-800 hover:border-red-600"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All to Defaults</span>
                </button>
              </div>
            </div>

            {/* Content Tab Panel */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6">
              
              {/* TAB 1: SENATOR PROFILE */}
              {activeTab === 'profile' && (
                <form onSubmit={handleSaveProfile} className="space-y-6 max-w-3xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-serif font-bold text-white">Senator Profile & Visual Assets</h3>
                      <p className="text-xs text-slate-400">Edit titles, party affiliation, portrait URL, logo URL, and National Assembly links.</p>
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Profile Changes</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Full Name</label>
                      <input
                        type="text"
                        value={profileForm.fullName}
                        onChange={(e) => setProfileForm({ ...profileForm, fullName: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-semibold focus:border-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Title / Designation</label>
                      <input
                        type="text"
                        value={profileForm.title}
                        onChange={(e) => setProfileForm({ ...profileForm, title: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-semibold focus:border-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Assembly</label>
                      <input
                        type="text"
                        value={profileForm.assembly}
                        onChange={(e) => setProfileForm({ ...profileForm, assembly: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-semibold focus:border-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Political Party</label>
                      <input
                        type="text"
                        value={profileForm.party}
                        onChange={(e) => setProfileForm({ ...profileForm, party: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-semibold focus:border-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-emerald-400 mb-1">Hero Portrait Image URL</label>
                      <input
                        type="url"
                        value={profileForm.portraitUrl}
                        onChange={(e) => setProfileForm({ ...profileForm, portraitUrl: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none"
                      />
                      <p className="text-[11px] text-slate-400 mt-1">Current URL: {profileForm.portraitUrl}</p>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-emerald-400 mb-1">Navbar/Footer Compressed Logo URL</label>
                      <input
                        type="url"
                        value={profileForm.logoUrl}
                        onChange={(e) => setProfileForm({ ...profileForm, logoUrl: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none"
                      />
                      <p className="text-[11px] text-slate-400 mt-1">Current URL: {profileForm.logoUrl}</p>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-300 mb-1">National Assembly Official Profile URL</label>
                      <input
                        type="url"
                        value={profileForm.nassProfileUrl}
                        onChange={(e) => setProfileForm({ ...profileForm, nassProfileUrl: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </form>
              )}

              {/* TAB 2: PROJECTS */}
              {activeTab === 'projects' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-serif font-bold text-white">Constituency Projects</h3>
                      <p className="text-xs text-slate-400">Add, edit, or delete constituency projects across all 5 LGAs.</p>
                    </div>
                    <button
                      onClick={() => setEditingProject({
                        title: '',
                        lga: 'District Wide',
                        sector: 'Healthcare',
                        status: 'Ongoing',
                        progressPercentage: 50,
                        description: '',
                        impactMetric: '',
                        completionDate: '2026'
                      })}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add New Project</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {projects.map((proj) => (
                      <div key={proj.id} className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-900 text-emerald-200">
                              {proj.lga}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300">
                              {proj.sector}
                            </span>
                            {proj.year && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                                {proj.year}
                              </span>
                            )}
                            <span className="text-xs font-bold text-emerald-400">
                              {proj.progressPercentage}%
                            </span>
                          </div>
                          <h4 className="font-bold text-sm text-white">{proj.title}</h4>
                          <p className="text-xs text-slate-400">{proj.description}</p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => setEditingProject(proj)}
                            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-400"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm('Delete this project?')) {
                                deleteProject(proj.id);
                                showNotification('Project deleted');
                              }
                            }}
                            className="p-2 rounded-lg bg-slate-800 hover:bg-red-950 text-red-400"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: LEGISLATIVE BILLS */}
              {activeTab === 'bills' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-serif font-bold text-white">Legislative Bills</h3>
                      <p className="text-xs text-slate-400">Manage sponsored legislation and Senate motions.</p>
                    </div>
                    <button
                      onClick={() => setEditingBill({
                        code: 'SB. ',
                        title: '',
                        status: 'In Committee',
                        date: '2026',
                        summary: '',
                        impact: '',
                        category: 'Governance'
                      })}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add New Bill</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {bills.map((bill) => (
                      <div key={bill.id} className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-900 text-red-200">
                              {bill.code}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300">
                              {bill.status}
                            </span>
                          </div>
                          <h4 className="font-bold text-sm text-white">{bill.title}</h4>
                          <p className="text-xs text-slate-400">{bill.summary}</p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => setEditingBill(bill)}
                            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-400"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm('Delete this bill?')) {
                                deleteBill(bill.id);
                                showNotification('Bill deleted');
                              }
                            }}
                            className="p-2 rounded-lg bg-slate-800 hover:bg-red-950 text-red-400"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: NEWS */}
              {activeTab === 'news' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-serif font-bold text-white">News & Media Feed</h3>
                      <p className="text-xs text-slate-400">Add or edit press coverage and PDP announcements.</p>
                    </div>
                    <button
                      onClick={() => setEditingNews({
                        title: '',
                        date: 'August 2026',
                        sourceName: 'Press Bureau',
                        sourceUrl: 'https://nass.gov.ng',
                        category: 'PDP Campaign & Election',
                        summary: '',
                        fullContent: '',
                        highlightText: ''
                      })}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add News Article</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {news.map((item) => (
                      <div key={item.id} className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-900 text-red-100">
                              {item.category}
                            </span>
                            <span className="text-xs text-slate-400">{item.date}</span>
                          </div>
                          <h4 className="font-bold text-sm text-white">{item.title}</h4>
                          <p className="text-xs text-slate-400">{item.summary}</p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => setEditingNews(item)}
                            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-400"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm('Delete this news article?')) {
                                deleteNews(item.id);
                                showNotification('Article deleted');
                              }
                            }}
                            className="p-2 rounded-lg bg-slate-800 hover:bg-red-950 text-red-400"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: BIO MILESTONES */}
              {activeTab === 'bio' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-serif font-bold text-white">Biography Timeline</h3>
                      <p className="text-xs text-slate-400">Manage career and public service milestones.</p>
                    </div>
                    <button
                      onClick={() => setEditingBio({
                        year: '2026',
                        title: '',
                        category: 'Parliamentary',
                        description: '',
                        details: '',
                        location: 'Kogi Central'
                      })}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Milestone</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {bioMilestones.map((bio) => (
                      <div key={bio.id} className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-900 text-emerald-100">
                              {bio.year}
                            </span>
                            <span className="text-xs text-slate-400">{bio.category}</span>
                          </div>
                          <h4 className="font-bold text-sm text-white">{bio.title}</h4>
                          <p className="text-xs text-slate-400">{bio.description}</p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => setEditingBio(bio)}
                            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-400"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm('Delete this milestone?')) {
                                deleteBio(bio.id);
                                showNotification('Milestone deleted');
                              }
                            }}
                            className="p-2 rounded-lg bg-slate-800 hover:bg-red-950 text-red-400"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 6: LGA PROFILES */}
              {activeTab === 'lgas' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-white">LGA Profile Details</h3>
                    <p className="text-xs text-slate-400">Edit local government statistics and overviews.</p>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {lgas.map((lga, idx) => (
                      <div key={idx} className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
                        <h4 className="font-bold text-sm text-emerald-400">{lga.name}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-semibold text-slate-400">Headquarters</label>
                            <input
                              type="text"
                              value={lga.headquarters}
                              onChange={(e) => updateLGA(idx, { headquarters: e.target.value })}
                              className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-semibold text-slate-400">Population Estimate</label>
                            <input
                              type="text"
                              value={lga.populationEstimate}
                              onChange={(e) => updateLGA(idx, { populationEstimate: e.target.value })}
                              className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <label className="block text-[11px] font-semibold text-slate-400">Overview</label>
                            <textarea
                              rows={2}
                              value={lga.overview}
                              onChange={(e) => updateLGA(idx, { overview: e.target.value })}
                              className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>

      {/* MODAL EDIT PROJECT */}
      {editingProject && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 text-white rounded-2xl max-w-lg w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <h3 className="font-bold text-base">{editingProject.id ? 'Edit Project' : 'Add New Project'}</h3>
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold mb-1">Project Title</label>
                <input
                  type="text"
                  value={editingProject.title}
                  onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                  className="w-full p-2 rounded bg-slate-950 border border-slate-700 text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold mb-1">LGA</label>
                  <select
                    value={editingProject.lga}
                    onChange={(e) => setEditingProject({ ...editingProject, lga: e.target.value as any })}
                    className="w-full p-2 rounded bg-slate-950 border border-slate-700 text-white"
                  >
                    <option value="Adavi">Adavi</option>
                    <option value="Ajaokuta">Ajaokuta</option>
                    <option value="Ogori-Magongo">Ogori-Magongo</option>
                    <option value="Okehi">Okehi</option>
                    <option value="Okene">Okene</option>
                    <option value="District Wide">District Wide</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-1">Sector</label>
                  <select
                    value={editingProject.sector || 'Healthcare'}
                    onChange={(e) => setEditingProject({ ...editingProject, sector: e.target.value as any })}
                    className="w-full p-2 rounded bg-slate-950 border border-slate-700 text-white"
                  >
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Power & Energy">Power & Energy</option>
                    <option value="Water & Sanitation">Water & Sanitation</option>
                    <option value="Roads & Infrastructure">Roads & Infrastructure</option>
                    <option value="Empowerment">Empowerment</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold mb-1">Status</label>
                  <select
                    value={editingProject.status || 'Ongoing'}
                    onChange={(e) => setEditingProject({ ...editingProject, status: e.target.value as any })}
                    className="w-full p-2 rounded bg-slate-950 border border-slate-700 text-white"
                  >
                    <option value="Completed">Completed</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Approved / In Procurement">Approved / In Procurement</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-1">Progress %</label>
                  <input
                    type="number"
                    value={editingProject.progressPercentage}
                    onChange={(e) => setEditingProject({ ...editingProject, progressPercentage: Number(e.target.value) })}
                    className="w-full p-2 rounded bg-slate-950 border border-slate-700 text-white"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold mb-1">Year (Optional)</label>
                  <input
                    type="number"
                    value={editingProject.year || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, year: e.target.value ? Number(e.target.value) : undefined })}
                    placeholder="e.g. 2025"
                    className="w-full p-2 rounded bg-slate-950 border border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Target/Completion Date</label>
                  <input
                    type="text"
                    value={editingProject.completionDate || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, completionDate: e.target.value })}
                    className="w-full p-2 rounded bg-slate-950 border border-slate-700 text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-1">Description</label>
                <textarea
                  rows={2}
                  value={editingProject.description}
                  onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                  className="w-full p-2 rounded bg-slate-950 border border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Impact Metric / Benefit</label>
                <input
                  type="text"
                  value={editingProject.impactMetric || ''}
                  onChange={(e) => setEditingProject({ ...editingProject, impactMetric: e.target.value })}
                  className="w-full p-2 rounded bg-slate-950 border border-slate-700 text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold mb-1">Source Name (Optional)</label>
                  <input
                    type="text"
                    value={editingProject.source || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, source: e.target.value })}
                    placeholder="e.g. Vanguard / THISDAY"
                    className="w-full p-2 rounded bg-slate-950 border border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Source URL (Optional)</label>
                  <input
                    type="url"
                    value={editingProject.sourceUrl || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, sourceUrl: e.target.value })}
                    placeholder="https://..."
                    className="w-full p-2 rounded bg-slate-950 border border-slate-700 text-white"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button onClick={() => setEditingProject(null)} className="px-3 py-1.5 rounded bg-slate-800 text-xs">Cancel</button>
              <button
                onClick={() => {
                  if (editingProject.id) {
                    updateProject(editingProject.id, editingProject);
                  } else {
                    addProject(editingProject);
                  }
                  setEditingProject(null);
                  showNotification('Project saved!');
                }}
                className="px-4 py-1.5 rounded bg-emerald-600 text-xs font-bold"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL EDIT BILL */}
      {editingBill && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 text-white rounded-2xl max-w-lg w-full p-6 space-y-4">
            <h3 className="font-bold text-base">{editingBill.id ? 'Edit Legislative Bill' : 'Add New Legislative Bill'}</h3>
            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold mb-1">Bill Code (e.g. SB. 248)</label>
                  <input
                    type="text"
                    value={editingBill.code}
                    onChange={(e) => setEditingBill({ ...editingBill, code: e.target.value })}
                    className="w-full p-2 rounded bg-slate-950 border border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Status</label>
                  <input
                    type="text"
                    value={editingBill.status}
                    onChange={(e) => setEditingBill({ ...editingBill, status: e.target.value })}
                    className="w-full p-2 rounded bg-slate-950 border border-slate-700 text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-1">Bill Title</label>
                <input
                  type="text"
                  value={editingBill.title}
                  onChange={(e) => setEditingBill({ ...editingBill, title: e.target.value })}
                  className="w-full p-2 rounded bg-slate-950 border border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Summary</label>
                <textarea
                  rows={2}
                  value={editingBill.summary}
                  onChange={(e) => setEditingBill({ ...editingBill, summary: e.target.value })}
                  className="w-full p-2 rounded bg-slate-950 border border-slate-700 text-white"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button onClick={() => setEditingBill(null)} className="px-3 py-1.5 rounded bg-slate-800 text-xs">Cancel</button>
              <button
                onClick={() => {
                  if (editingBill.id) {
                    updateBill(editingBill.id, editingBill);
                  } else {
                    addBill(editingBill);
                  }
                  setEditingBill(null);
                  showNotification('Legislative bill saved!');
                }}
                className="px-4 py-1.5 rounded bg-emerald-600 text-xs font-bold"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL EDIT NEWS */}
      {editingNews && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 text-white rounded-2xl max-w-lg w-full p-6 space-y-4">
            <h3 className="font-bold text-base">{editingNews.id ? 'Edit News Article' : 'Add News Article'}</h3>
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold mb-1">Article Title</label>
                <input
                  type="text"
                  value={editingNews.title}
                  onChange={(e) => setEditingNews({ ...editingNews, title: e.target.value })}
                  className="w-full p-2 rounded bg-slate-950 border border-slate-700 text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold mb-1">Source Name</label>
                  <input
                    type="text"
                    value={editingNews.sourceName}
                    onChange={(e) => setEditingNews({ ...editingNews, sourceName: e.target.value })}
                    className="w-full p-2 rounded bg-slate-950 border border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Date</label>
                  <input
                    type="text"
                    value={editingNews.date}
                    onChange={(e) => setEditingNews({ ...editingNews, date: e.target.value })}
                    className="w-full p-2 rounded bg-slate-950 border border-slate-700 text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-1">Summary</label>
                <textarea
                  rows={2}
                  value={editingNews.summary}
                  onChange={(e) => setEditingNews({ ...editingNews, summary: e.target.value })}
                  className="w-full p-2 rounded bg-slate-950 border border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Full Article Content</label>
                <textarea
                  rows={3}
                  value={editingNews.fullContent}
                  onChange={(e) => setEditingNews({ ...editingNews, fullContent: e.target.value })}
                  className="w-full p-2 rounded bg-slate-950 border border-slate-700 text-white"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button onClick={() => setEditingNews(null)} className="px-3 py-1.5 rounded bg-slate-800 text-xs">Cancel</button>
              <button
                onClick={() => {
                  if (editingNews.id) {
                    updateNews(editingNews.id, editingNews);
                  } else {
                    addNews(editingNews);
                  }
                  setEditingNews(null);
                  showNotification('News article saved!');
                }}
                className="px-4 py-1.5 rounded bg-emerald-600 text-xs font-bold"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL EDIT BIO */}
      {editingBio && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 text-white rounded-2xl max-w-lg w-full p-6 space-y-4">
            <h3 className="font-bold text-base">{editingBio.id ? 'Edit Milestone' : 'Add Milestone'}</h3>
            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold mb-1">Year / Period</label>
                  <input
                    type="text"
                    value={editingBio.year}
                    onChange={(e) => setEditingBio({ ...editingBio, year: e.target.value })}
                    className="w-full p-2 rounded bg-slate-950 border border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Category</label>
                  <input
                    type="text"
                    value={editingBio.category}
                    onChange={(e) => setEditingBio({ ...editingBio, category: e.target.value })}
                    className="w-full p-2 rounded bg-slate-950 border border-slate-700 text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-1">Title</label>
                <input
                  type="text"
                  value={editingBio.title}
                  onChange={(e) => setEditingBio({ ...editingBio, title: e.target.value })}
                  className="w-full p-2 rounded bg-slate-950 border border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Description</label>
                <textarea
                  rows={2}
                  value={editingBio.description}
                  onChange={(e) => setEditingBio({ ...editingBio, description: e.target.value })}
                  className="w-full p-2 rounded bg-slate-950 border border-slate-700 text-white"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button onClick={() => setEditingBio(null)} className="px-3 py-1.5 rounded bg-slate-800 text-xs">Cancel</button>
              <button
                onClick={() => {
                  if (editingBio.id) {
                    updateBio(editingBio.id, editingBio);
                  } else {
                    addBio(editingBio);
                  }
                  setEditingBio(null);
                  showNotification('Milestone saved!');
                }}
                className="px-4 py-1.5 rounded bg-emerald-600 text-xs font-bold"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
