import React, { useState } from "react";
import { 
  Briefcase, CheckCircle2, Clock, Building2, FileText, 
  Camera, ExternalLink, ShieldCheck, Sprout, Layers, ArrowRight
} from "lucide-react";
import { OJT_DETAILS } from "../data/schoolData";

export default function OjtSection({ onSelectImage }) {
  const [activeOjtTab, setActiveOjtTab] = useState("ojt-12");

  const currentOjt = OJT_DETAILS.grades.find((g) => g.id === activeOjtTab) || OJT_DETAILS.grades[2];

  return (
    <section id="ojt" className="py-16 bg-gradient-to-b from-transparent via-emerald-50/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-lime-100 text-emerald-900 border border-lime-200/80 mb-3">
            <Briefcase className="w-4 h-4 text-emerald-700" />
            <span>Practical Field Attachment & Internship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
            On-the-Job Training (OJT) Programs
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
            {OJT_DETAILS.overview}
          </p>
        </div>

        {/* Partner Institutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {OJT_DETAILS.partnerInstitutions.map((partner, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-2xl bg-white border border-emerald-100 shadow-sm flex items-start gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  {partner.badge}
                </span>
                <h4 className="text-xs font-bold text-emerald-950 mt-1">
                  {partner.name}
                </h4>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  {partner.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* OJT 10, 11, 12 Interactive Detailed Panel */}
        <div className="glass-panel rounded-3xl border border-emerald-100 shadow-xl overflow-hidden p-6 sm:p-10 space-y-8">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-3 border-b border-gray-100 pb-4">
            {OJT_DETAILS.grades.map((grade) => (
              <button
                key={grade.id}
                onClick={() => setActiveOjtTab(grade.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
                  activeOjtTab === grade.id
                    ? "bg-emerald-800 text-white shadow-lg scale-105"
                    : "bg-gray-100 hover:bg-emerald-50 text-gray-700"
                }`}
              >
                <span>{grade.grade}</span>
                <span className="text-[11px] opacity-80">({grade.duration.split(" ")[0]})</span>
              </button>
            ))}
          </div>

          {/* Active OJT Breakdown Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
            {/* Left Main Details */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-lime-100 text-emerald-900">
                    {currentOjt.duration}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                    {currentOjt.creditHours}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-emerald-950">
                  {currentOjt.title} — {currentOjt.grade}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Strategic Focus:</strong> {currentOjt.focus}
                </p>
              </div>

              {/* Core Practical Tasks */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-2">
                  <Sprout className="w-4 h-4 text-emerald-600" />
                  Prescribed Field Practical Tasks & Logbook Requirements
                </h4>
                <div className="space-y-2.5">
                  {currentOjt.coreTasks.map((task, tIdx) => (
                    <div 
                      key={tIdx}
                      className="p-3.5 rounded-xl bg-white border border-gray-100 shadow-sm flex items-start gap-3 text-xs text-gray-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Deliverables Card */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-gradient-to-br from-emerald-900 to-green-950 text-white shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-lime-300 text-xs font-bold uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>Formal Evaluation & Deliverables</span>
              </div>
              <h4 className="text-lg font-bold">
                Field Viva & Report Defense
              </h4>
              <p className="text-xs text-emerald-100 leading-relaxed">
                {currentOjt.deliverables}
              </p>
              <div className="pt-3 border-t border-emerald-800/80 text-[11px] text-emerald-200 space-y-1.5">
                <p>• Verified by Farm Mentors & NEB External Examiners.</p>
                <p>• Daily observation records logged in bound format.</p>
                <p>• Practical grades count toward final Secondary Certification.</p>
              </div>
              <a
                href="#contact"
                className="w-full mt-2 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-emerald-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md block text-center"
              >
                <span>Inquire About Field Attachment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Student Practical Photo Gallery (Marigold, Spraying, Soil Testing, Harvesting) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Photo Evidence & Field Archives
              </span>
              <h3 className="text-xl font-bold text-emerald-950">
                Students at Work in the Fields of Katari
              </h3>
            </div>
            <span className="text-xs text-gray-500 hidden sm:inline">
              Click any photo to zoom & read field details
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {OJT_DETAILS.gallery.map((photo, pIdx) => (
              <div
                key={pIdx}
                onClick={() => onSelectImage && onSelectImage(photo)}
                className="group relative rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white cursor-pointer glass-card-hover"
              >
                <div className="aspect-[4/3] overflow-hidden bg-emerald-950 relative">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent flex items-end p-4 text-white">
                    <div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-lime-400 text-emerald-950">
                        {photo.category}
                      </span>
                      <h4 className="text-sm font-bold text-white mt-1 group-hover:text-lime-300 transition-colors">
                        {photo.title}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="p-3 text-xs text-gray-600 line-clamp-2">
                  {photo.description}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
