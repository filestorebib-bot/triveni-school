import React from "react";
import { X, Calendar, FileText, Download, Printer, Share2, Check, ShieldCheck, Building2, User } from "lucide-react";

export default function NoticeModal({ notice, onClose }) {
  const [copied, setCopied] = React.useState(false);

  if (!notice) return null;

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([
      `=======================================================\n` +
      `TRIVENI SECONDARY SCHOOL - DEPARTMENT OF PLANT SCIENCE\n` +
      `Katari-4, Udayapur, Koshi Province, Nepal\n` +
      `Phone: 035-450-154 | Email: info@trivenischool.edu.np\n` +
      `=======================================================\n\n` +
      `Document Ref: ${notice.documentRef || "TSS/NOT/2083"}\n` +
      `Date (A.D.): ${notice.date}\n` +
      `Date (B.S.): ${notice.bsDate || "२०८३"}\n` +
      `Category: ${notice.category}\n\n` +
      `SUBJECT: ${notice.title}\n\n` +
      `-------------------------------------------------------\n` +
      `${notice.content || notice.summary}\n` +
      `-------------------------------------------------------\n\n` +
      `Issued By: ${notice.author || "Department Administration"}\n`
    ], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${notice.id}-${notice.category.toLowerCase()}-notice.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-emerald-950/70 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-white/95 rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden text-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-gradient-to-r from-emerald-900 via-emerald-800 to-green-900 text-white">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-emerald-700/60 text-emerald-200">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                Official School Notice Viewer
              </span>
              <p className="text-sm font-bold text-white leading-tight">
                Ref: {notice.documentRef || "TSS/OFFICIAL-2083"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print Notice"
              className="p-2 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100 transition-colors"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleCopyLink}
              title="Copy Notice Link"
              className="p-2 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={handleDownload}
              title="Download Document"
              className="p-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium flex items-center gap-1.5 text-xs transition-colors px-3"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 ml-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Official Document Paper Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#fdfdfc] relative">
          {/* Watermark seal in background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.035] select-none">
            <Building2 className="w-96 h-96 text-emerald-950" />
          </div>

          {/* School Official Letterhead */}
          <div className="border-b-2 border-emerald-800 pb-5 mb-6 text-center">
            <div className="flex justify-center items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Government of Nepal Approved Technical Secondary Program
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-emerald-950 tracking-tight">
              TRIVENI SECONDARY SCHOOL
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-emerald-800">
              त्रिवेणी माध्यमिक विद्यालय · बाली विज्ञान विभाग (Department of Plant Science)
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Katari-4, Udayapur, Koshi Province, Nepal | Tel: 035-450-154 | Email: info@trivenischool.edu.np
            </p>
          </div>

          {/* Document Meta Row */}
          <div className="flex flex-wrap items-center justify-between text-xs text-gray-600 gap-2 mb-6 bg-emerald-50/80 p-3 rounded-xl border border-emerald-100/80">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-emerald-900">Reference No:</span>
              <span className="font-mono bg-white px-2 py-0.5 rounded border border-emerald-200 text-emerald-800">
                {notice.documentRef || "TSS/PS/2083"}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                <span>Date: <strong>{notice.date}</strong> ({notice.bsDate || "२०८३"})</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-emerald-200/80 text-emerald-900">
                {notice.category}
              </span>
            </div>
          </div>

          {/* Notice Subject Title */}
          <div className="mb-5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
              NOTICE SUBJECT
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
              {notice.title}
            </h1>
          </div>

          {/* Full Notice Content */}
          <div className="prose prose-emerald max-w-none text-gray-700 text-sm leading-relaxed space-y-4 whitespace-pre-line bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            {notice.content || notice.summary}
          </div>

          {/* Official Sign-off and Stamp Section */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap items-end justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-gray-500">
              <Building2 className="w-4 h-4 text-emerald-700" />
              <span>Published by: <strong>{notice.author || "Department Office, Katari-4"}</strong></span>
            </div>

            <div className="text-center sm:text-right">
              <div className="inline-block border border-dashed border-emerald-400/80 bg-emerald-50/60 rounded-xl px-4 py-2.5 mb-1 text-center">
                <div className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider">
                  Official Verification
                </div>
                <div className="text-xs font-serif italic text-emerald-700 font-semibold">
                  Triveni Sec. School Stamp
                </div>
              </div>
              <p className="text-gray-500 font-medium">Administration / Plant Science Department</p>
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="px-5 py-3.5 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Official circular for students, guardians & faculty members.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-bold transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
