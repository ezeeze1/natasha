'use client';

import React, { useState } from 'react';
import { usePortalData } from '@/context/PortalDataContext';
import { NewsArticle } from '@/lib/portal-data';
import { 
  Newspaper, 
  Calendar, 
  ExternalLink, 
  Share2, 
  CheckCircle2, 
  ChevronRight,
  Filter
} from 'lucide-react';
import { motion } from 'motion/react';

export const NewsSection: React.FC = () => {
  const { news } = usePortalData();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const categories = ['All', 'PDP Campaign & Election', 'Senate Proceedings', 'Constituency Projects'];

  const filteredNews = selectedCategory === 'All'
    ? news
    : news.filter(n => n.category === selectedCategory);

  return (
    <section id="news" className="py-16 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider border border-emerald-300">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
            <Newspaper className="w-3.5 h-3.5 text-emerald-800" />
            <span>News & Media Updates</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900">
            Recent Press Coverage & PDP Statements
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Curated reporting from national newspapers and official parliamentary press releases regarding Kogi Central Senatorial District and PDP developments.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 via-slate-200 to-red-600 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                selectedCategory === cat
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredNews.map((article) => (
            <div
              key={article.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 font-semibold text-emerald-800">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </span>
                  <span className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    {article.category}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-base text-slate-900 leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>

                <div className="bg-emerald-50/60 p-3 rounded-xl border border-emerald-100 text-[11px] text-emerald-900 font-medium">
                  &quot;{article.highlightText}&quot;
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Source: {article.sourceName}</span>
                <button
                  onClick={() => setActiveArticle(article)}
                  className="text-emerald-800 font-bold hover:underline flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-xl w-full p-6 text-slate-900 shadow-2xl relative space-y-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Calendar className="w-4 h-4 text-emerald-700" />
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span className="font-semibold text-slate-700">{activeArticle.sourceName}</span>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="text-slate-400 hover:text-slate-800 p-1"
              >
                ✕
              </button>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase bg-emerald-100 text-emerald-900 px-2.5 py-1 rounded">
                {activeArticle.category}
              </span>
              <h3 className="font-serif font-bold text-xl text-slate-900 mt-2 leading-snug">
                {activeArticle.title}
              </h3>
            </div>

            <div className="prose prose-xs text-slate-700 space-y-3 whitespace-pre-line text-xs sm:text-sm leading-relaxed">
              {activeArticle.fullContent}
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs flex items-center justify-between">
              <span className="text-slate-600">Original Publication Source:</span>
              <a
                href={activeArticle.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-800 font-bold hover:underline flex items-center gap-1"
              >
                <span>{activeArticle.sourceName} Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="pt-3 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="bg-slate-800 hover:bg-slate-900 text-white font-semibold text-xs px-4 py-2 rounded-lg"
              >
                Close Article
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
