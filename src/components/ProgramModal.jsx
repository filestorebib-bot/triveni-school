import React, { useState } from "react";
import { X, Share2, Check, BookOpen, Clock, Award, CheckCircle2, ChevronLeft, ChevronRight, Layers, FileText } from "lucide-react";

export default function ProgramModal({ program, onClose, onOpenSyllabus }) {
  const [copied, setCopied] = useState(false);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  if (!program) return null;

  const handleShare = async () => {
    const shareData = {
      title: `${program.classTitle} - Triveni Secondary School Plant Science`,
      text: `Explore ${program.classTitle} (${program.stream}) at Triveni Secondary School, Katari-4, Udayapur.`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Fallback to clipboard
        navigator.clipboard?.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } else {
      navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const nextImage = () => {
    setActiveImgIndex((prev) => (prev + 1) % program.images.length);
  };

  const prevImage = () => {
    setActiveImgIndex((prev) => (prev - 1 + program.images.length) % program.images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-emerald-950/75 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden text-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-emerald-900 via-emerald-800 to-green-900 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-lime-400 text-emerald-950 font-black text-lg flex items-center justify-center shadow-md">
              {program.grade}
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-lime-300">
                Department of Plant Science · Full Curriculum
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white">
                {program.classTitle} — {program.stream}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="px-3 py-1.5 rounded-lg bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Share this Program"
            >
              {copied ? <Check className="w-4 h-4 text-lime-300" /> : <Share2 className="w-4 h-4" />}
              <span>{copied ? "Link Copied!" : "Share Program"}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Top Info Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-200 text-emerald-800">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-gray-500">Duration</div>
                <div className="text-xs font-bold text-emerald-900">{program.duration}</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-lime-50 border border-lime-200 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-lime-200 text-lime-800">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-gray-500">Theory / Practical Ratio</div>
                <div className="text-xs font-bold text-lime-900">{program.ratio}</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-100 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-200 text-amber-800">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-gray-500">Board Authority</div>
                <div className="text-xs font-bold text-amber-900">NEB / CDC Approved</div>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800 mb-2">
              Program Overview
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
              {program.overview}
            </p>
          </div>

          {/* Image Slider / Carousel */}
          {program.images && program.images.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800">
                  Class Field Activities & Laboratory Projects
                </h3>
                <span className="text-xs text-gray-500">
                  {activeImgIndex + 1} of {program.images.length}
                </span>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-video max-h-72 bg-emerald-950 shadow-md">
                <img 
                  src={program.images[activeImgIndex].url}
                  alt={program.images[activeImgIndex].caption}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 text-white">
                  <p className="text-xs sm:text-sm font-medium drop-shadow">
                    {program.images[activeImgIndex].caption}
                  </p>
                </div>
                {program.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Core Competencies & Highlights */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800 mb-2">
              Key Competencies & Practical Outcomes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {program.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Subject Breakdown Table */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800">
                Prescribed Subjects & Practical Weightage
              </h3>
              {onOpenSyllabus && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenSyllabus(program.grade);
                  }}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-900 underline flex items-center gap-1"
                >
                  <FileText className="w-3.5 h-3.5" /> View Chapter Syllabus
                </button>
              )}
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-emerald-900 text-white">
                  <tr>
                    <th className="py-2.5 px-4 font-semibold">Subject Code</th>
                    <th className="py-2.5 px-4 font-semibold">Subject Title</th>
                    <th className="py-2.5 px-4 font-semibold">Credit Hrs</th>
                    <th className="py-2.5 px-4 font-semibold">Practical Ratio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {program.subjects.map((sub, sIdx) => (
                    <tr key={sIdx} className="hover:bg-emerald-50/40 transition-colors">
                      <td className="py-2.5 px-4 font-mono font-semibold text-emerald-800">{sub.code}</td>
                      <td className="py-2.5 px-4 font-medium text-gray-900">{sub.name}</td>
                      <td className="py-2.5 px-4 text-gray-600">{sub.credits}</td>
                      <td className="py-2.5 px-4">
                        <span className="px-2 py-0.5 rounded-md font-bold text-[11px] bg-lime-100 text-emerald-800">
                          {sub.practicalRatio}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* OJT Relevance Note */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900">
            <strong>OJT & Practical Requisite:</strong> {program.ojtRelevance}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Official Triveni Secondary School Plant Science Curriculum
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-bold transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
