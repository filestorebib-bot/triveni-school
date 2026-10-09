import React, { useState } from "react";
import { 
  Bell, Search, Filter, Calendar, FileText, Download, 
  Eye, CheckCircle2, AlertCircle, ArrowRight
} from "lucide-react";
import { NOTICES_DATA } from "../data/schoolData";

export default function NoticesSection({ onSelectNotice }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "OJT", "Admissions", "Practical", "Examinations", "Community"];

  const filteredNotices = NOTICES_DATA.filter((n) => {
    const matchesCat = activeCategory === "All" || n.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = 
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleDownloadQuick = (e, notice) => {
    e.stopPropagation();
    const element = document.createElement("a");
    const file = new Blob([
      `=======================================================\n` +
      `TRIVENI SECONDARY SCHOOL - DEPARTMENT OF PLANT SCIENCE\n` +
      `Katari-4, Udayapur, Koshi Province, Nepal\n` +
      `Phone: 035-450-154 | Email: info@trivenischool.edu.np\n` +
      `=======================================================\n\n` +
      `Notice Ref: ${notice.documentRef}\n` +
      `Date: ${notice.date} (${notice.bsDate})\n` +
      `Category: ${notice.category}\n\n` +
      `TITLE: ${notice.title}\n\n` +
      `-------------------------------------------------------\n` +
      `${notice.content}\n` +
      `-------------------------------------------------------\n\n` +
      `Published By: ${notice.author}\n`
    ], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${notice.id}-${notice.category.toLowerCase()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="notices" className="py-16 bg-gradient-to-b from-transparent via-emerald-50/40 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-200/80 mb-3">
            <Bell className="w-4 h-4 text-emerald-700" />
            <span>Official Announcements & Circulars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
            Notices & Academic Updates
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
            Stay informed with verified circulars regarding OJT submissions, admissions, 
            examination schedules, practical workshops, and community outreach.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="glass-panel rounded-3xl p-5 border border-emerald-100 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-emerald-800 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-emerald-50 border border-gray-200/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search circulars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-white border border-gray-200 focus:outline-none focus:border-emerald-600 shadow-sm"
            />
          </div>
        </div>

        {/* Dynamic Notices Table / Cards Grid */}
        <div className="space-y-4">
          {filteredNotices.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-gray-100 shadow-sm text-gray-500">
              <AlertCircle className="w-8 h-8 text-emerald-600 mx-auto mb-2 opacity-60" />
              <p className="text-sm font-semibold">No notices found matching your criteria.</p>
              <button
                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                className="mt-3 text-xs font-bold text-emerald-800 underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredNotices.map((notice) => (
              <div
                key={notice.id}
                onClick={() => onSelectNotice(notice)}
                className="glass-panel p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-emerald-300 hover:shadow-lg transition-all glass-card-hover cursor-pointer group flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                {/* Left Notice Info */}
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                      {notice.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      <span>{notice.date}</span>
                      <span className="font-serif">({notice.bsDate})</span>
                    </span>
                    <span className="font-mono text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
                      {notice.documentRef}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors leading-snug">
                    {notice.title}
                  </h3>

                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {notice.summary}
                  </p>
                </div>

                {/* Right Action Buttons */}
                <div className="flex items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-gray-100">
                  <button
                    onClick={(e) => handleDownloadQuick(e, notice)}
                    title="Download Notice File"
                    className="p-2.5 rounded-xl bg-gray-100 hover:bg-emerald-100 text-gray-700 hover:text-emerald-900 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onSelectNotice(notice)}
                    className="px-4 py-2 rounded-xl bg-emerald-800 group-hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Notice</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}
