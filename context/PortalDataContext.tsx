'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  SENATOR_PROFILE, 
  BIO_MILESTONES, 
  LEGISLATIVE_BILLS, 
  CONSTITUENCY_PROJECTS, 
  NEWS_ARTICLES, 
  VERIFIED_SOURCES, 
  LGA_DETAILS,
  BioMilestone,
  LegislativeBill,
  ConstituencyProject,
  NewsArticle,
  VerifiedSource,
  LGADetail
} from '@/lib/portal-data';

interface PortalDataState {
  profile: typeof SENATOR_PROFILE;
  bioMilestones: BioMilestone[];
  bills: LegislativeBill[];
  projects: ConstituencyProject[];
  news: NewsArticle[];
  sources: VerifiedSource[];
  lgas: LGADetail[];
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  updateProfile: (newProfile: Partial<typeof SENATOR_PROFILE>) => void;
  // Bills CRUD
  addBill: (bill: Omit<LegislativeBill, 'id'>) => void;
  updateBill: (id: string, bill: Partial<LegislativeBill>) => void;
  deleteBill: (id: string) => void;
  // Projects CRUD
  addProject: (project: Omit<ConstituencyProject, 'id'>) => void;
  updateProject: (id: string, project: Partial<ConstituencyProject>) => void;
  deleteProject: (id: string) => void;
  // News CRUD
  addNews: (newsItem: Omit<NewsArticle, 'id'>) => void;
  updateNews: (id: string, newsItem: Partial<NewsArticle>) => void;
  deleteNews: (id: string) => void;
  // Bio CRUD
  addBio: (bioItem: Omit<BioMilestone, 'id'>) => void;
  updateBio: (id: string, bioItem: Partial<BioMilestone>) => void;
  deleteBio: (id: string) => void;
  // LGA Update
  updateLGA: (index: number, lga: Partial<LGADetail>) => void;
  // Reset
  resetToDefaults: () => void;
}

const PortalDataContext = createContext<PortalDataState | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'kogi_central_portal_data_v2';

export const PortalDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState(SENATOR_PROFILE);
  const [bioMilestones, setBioMilestones] = useState<BioMilestone[]>(BIO_MILESTONES);
  const [bills, setBills] = useState<LegislativeBill[]>(LEGISLATIVE_BILLS);
  const [projects, setProjects] = useState<ConstituencyProject[]>(CONSTITUENCY_PROJECTS);
  const [news, setNews] = useState<NewsArticle[]>(NEWS_ARTICLES);
  const [sources, setSources] = useState<VerifiedSource[]>(VERIFIED_SOURCES);
  const [lgas, setLgas] = useState<LGADetail[]>(LGA_DETAILS);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Hydrate from localStorage on initial load
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.profile) setProfile(parsed.profile);
        if (parsed.bioMilestones) setBioMilestones(parsed.bioMilestones);
        if (parsed.bills) setBills(parsed.bills);
        if (parsed.projects) setProjects(parsed.projects);
        if (parsed.news) setNews(parsed.news);
        if (parsed.sources) setSources(parsed.sources);
        if (parsed.lgas) setLgas(parsed.lgas);
      }
    } catch (e) {
      console.error('Failed to load portal data from localStorage', e);
    }
  }, []);

  // Sync hash #admin
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#admin') {
        setIsAdminOpen(true);
      }
    };

    if (window.location.hash === '#admin') {
      setIsAdminOpen(true);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Helper to persist state
  const saveState = (updated: {
    profile?: typeof SENATOR_PROFILE;
    bioMilestones?: BioMilestone[];
    bills?: LegislativeBill[];
    projects?: ConstituencyProject[];
    news?: NewsArticle[];
    sources?: VerifiedSource[];
    lgas?: LGADetail[];
  }) => {
    try {
      const stateToSave = {
        profile: updated.profile ?? profile,
        bioMilestones: updated.bioMilestones ?? bioMilestones,
        bills: updated.bills ?? bills,
        projects: updated.projects ?? projects,
        news: updated.news ?? news,
        sources: updated.sources ?? sources,
        lgas: updated.lgas ?? lgas,
      };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stateToSave));
    } catch (e) {
      console.error('Failed to save portal data', e);
    }
  };

  const updateProfile = (newProfile: Partial<typeof SENATOR_PROFILE>) => {
    setProfile(prev => {
      const updated = { ...prev, ...newProfile };
      saveState({ profile: updated });
      return updated;
    });
  };

  // Bills Actions
  const addBill = (bill: Omit<LegislativeBill, 'id'>) => {
    setBills(prev => {
      const newBill: LegislativeBill = { ...bill, id: `bill-${Date.now()}` };
      const updated = [newBill, ...prev];
      saveState({ bills: updated });
      return updated;
    });
  };

  const updateBill = (id: string, updatedFields: Partial<LegislativeBill>) => {
    setBills(prev => {
      const updated = prev.map(b => (b.id === id ? { ...b, ...updatedFields } : b));
      saveState({ bills: updated });
      return updated;
    });
  };

  const deleteBill = (id: string) => {
    setBills(prev => {
      const updated = prev.filter(b => b.id !== id);
      saveState({ bills: updated });
      return updated;
    });
  };

  // Projects Actions
  const addProject = (project: Omit<ConstituencyProject, 'id'>) => {
    setProjects(prev => {
      const newProj: ConstituencyProject = { ...project, id: `proj-${Date.now()}` };
      const updated = [newProj, ...prev];
      saveState({ projects: updated });
      return updated;
    });
  };

  const updateProject = (id: string, updatedFields: Partial<ConstituencyProject>) => {
    setProjects(prev => {
      const updated = prev.map(p => (p.id === id ? { ...p, ...updatedFields } : p));
      saveState({ projects: updated });
      return updated;
    });
  };

  const deleteProject = (id: string) => {
    setProjects(prev => {
      const updated = prev.filter(p => p.id !== id);
      saveState({ projects: updated });
      return updated;
    });
  };

  // News Actions
  const addNews = (newsItem: Omit<NewsArticle, 'id'>) => {
    setNews(prev => {
      const newItem: NewsArticle = { ...newsItem, id: `news-${Date.now()}` };
      const updated = [newItem, ...prev];
      saveState({ news: updated });
      return updated;
    });
  };

  const updateNews = (id: string, updatedFields: Partial<NewsArticle>) => {
    setNews(prev => {
      const updated = prev.map(n => (n.id === id ? { ...n, ...updatedFields } : n));
      saveState({ news: updated });
      return updated;
    });
  };

  const deleteNews = (id: string) => {
    setNews(prev => {
      const updated = prev.filter(n => n.id !== id);
      saveState({ news: updated });
      return updated;
    });
  };

  // Bio Actions
  const addBio = (bioItem: Omit<BioMilestone, 'id'>) => {
    setBioMilestones(prev => {
      const newItem: BioMilestone = { ...bioItem, id: `bio-${Date.now()}` };
      const updated = [...prev, newItem];
      saveState({ bioMilestones: updated });
      return updated;
    });
  };

  const updateBio = (id: string, updatedFields: Partial<BioMilestone>) => {
    setBioMilestones(prev => {
      const updated = prev.map(b => (b.id === id ? { ...b, ...updatedFields } : b));
      saveState({ bioMilestones: updated });
      return updated;
    });
  };

  const deleteBio = (id: string) => {
    setBioMilestones(prev => {
      const updated = prev.filter(b => b.id !== id);
      saveState({ bioMilestones: updated });
      return updated;
    });
  };

  // LGA Action
  const updateLGA = (index: number, lgaField: Partial<LGADetail>) => {
    setLgas(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], ...lgaField };
      saveState({ lgas: updated });
      return updated;
    });
  };

  const resetToDefaults = () => {
    setProfile(SENATOR_PROFILE);
    setBioMilestones(BIO_MILESTONES);
    setBills(LEGISLATIVE_BILLS);
    setProjects(CONSTITUENCY_PROJECTS);
    setNews(NEWS_ARTICLES);
    setSources(VERIFIED_SOURCES);
    setLgas(LGA_DETAILS);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <PortalDataContext.Provider
      value={{
        profile,
        bioMilestones,
        bills,
        projects,
        news,
        sources,
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
        resetToDefaults,
      }}
    >
      {children}
    </PortalDataContext.Provider>
  );
};

export const usePortalData = () => {
  const context = useContext(PortalDataContext);
  if (!context) {
    throw new Error('usePortalData must be used within a PortalDataProvider');
  }
  return context;
};
