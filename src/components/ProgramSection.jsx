import React, { useState } from "react";
import { 
  GraduationCap, Share2, Check, ArrowRight, BookOpen, 
  Layers, Clock, CheckCircle2, ChevronLeft, ChevronRight,
  ExternalLink, Sparkles
} from "lucide-react";
import { PROGRAMS_DATA } from "../data/schoolData";

export default function ProgramSection({ onSelectProgram, onOpenSyllabus }) {
  const [shareFeedback, setShareFeedback] = useState({}); // { [grade]: boolean }

  const handleShare = async (prog) => {
    const shareData = {
      title: `${prog.classTitle} - Triveni Secondary School Plant Science`,
      text: `Check out ${prog.classTitle} (${prog.stream}) technical agricultural curriculum at Triveni Secondary School, Katari-4, Udayapur!`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        navigator.clipboard?.writeText(window.location.href);
        setShareFeedback((prev) => ({ ...prev, [prog.grade]: true }));
        setTimeout(() => setShareFeedback((prev) => ({ ...prev, [prog.grade]: false })), 2000);
      }
    } else {
      navigator.clipboard?.writeText(window.location.href);
      setShareFeedback((prev) => ({ ...prev, [prog.grade]: true }));
      setTimeout(() => setShareFeedback((prev) => ({ ...prev, [prog.grade]: false })), 2000);
    }
  };

  return (
    <section id="program" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-200/80 mb-3">
            <GraduationCap className="w-4 h-4 text-emerald-700" />
            <span>Academic Pathway (Technical Secondary Education)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
            Plant Science Programs: Class 9 to 12
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
            Our 4-year technical vocational curriculum combines secondary academics with comprehensive 
            agronomy, floriculture, soil chemistry, and practical field work.
          </p>
        </div>

        {/* 4 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROGRAMS_DATA.map((prog) => (
            <div
              key={prog.grade}
              className="glass-panel rounded-3xl border border-emerald-100 shadow-xl overflow-hidden flex flex-col justify-between glass-card-hover group"
            >
              {/* Card Header Banner */}
              <div className="p-6 bg-gradient-to-r from-emerald-900 to-green-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-lime-400 text-emerald-950 font-black text-xl flex items-center justify-center shadow-lg">
                    {prog.grade}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-lime-300">
                      Class {prog.grade} Curriculum
                    </span>
                    <h3 className="text-lg font-black text-white">
                      {prog.classTitle}
                    </h3>
                  </div>
                </div>

                {/* Dedicated Share Button */}
                <button
                  onClick={() => handleShare(prog)}
                  className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  title="Share program details"
                >
                  {shareFeedback[prog.grade] ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-lime-300" />
                      <span className="text-lime-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share</span>
                    </>
                  )}
                </button>
              </div>

              {/* Card Media Preview (Embedded mini carousel image) */}
              <div className="relative aspect-[16/9] max-h-56 overflow-hidden bg-emerald-950">
                <img
                  src={prog.images[0].url}
                  alt={prog.images[0].caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4 text-white">
                  <p className="text-xs font-medium text-emerald-100 drop-shadow line-clamp-1">
                    {prog.images[0].caption}
                  </p>
                </div>
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-lime-300 border border-white/10">
                  {prog.images.length} Photos Available
                </div>
              </div>

              {/* Card Body Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-100">
                      {prog.duration}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-lime-50 text-lime-800 border border-lime-200">
                      {prog.ratio}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-gray-100 text-gray-700">
                      {prog.subjects.length} Core Subjects
                    </span>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-4">
                    {prog.overview}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5">
                    {prog.highlights.slice(0, 3).map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenSyllabus && onOpenSyllabus(prog.grade)}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-950 flex items-center gap-1"
                  >
                    <BookOpen className="w-3.5 h-3.5" /> View Syllabus
                  </button>

                  <button
                    onClick={() => onSelectProgram && onSelectProgram(prog)}
                    className="px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-all group-hover:translate-x-1"
                  >
                    <span>Read Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
