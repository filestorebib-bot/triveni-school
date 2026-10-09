import React, { useState } from "react";
import { 
  BookOpen, Layers, CheckCircle2, FileText, Download, 
  ExternalLink, Clock, Award, ArrowRight
} from "lucide-react";
import { PROGRAMS_DATA, SYLLABUS_DATA } from "../data/schoolData";

export default function ClassSyllabusSection({ selectedGrade = "9", onSelectGrade, onOpenSyllabus }) {
  const currentProgram = PROGRAMS_DATA.find((p) => p.grade === selectedGrade) || PROGRAMS_DATA[0];
  const currentSyllabus = SYLLABUS_DATA.grades.find((s) => s.grade === selectedGrade) || SYLLABUS_DATA.grades[0];

  return (
    <section id="classes" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-200/80 mb-3">
            <BookOpen className="w-4 h-4 text-emerald-700" />
            <span>Curriculum & Academic Structure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
            Class Subjects & NEB Syllabus
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
            Select Class 9, 10, 11, or 12 below to inspect the complete academic course load, credit hours, 
            and official NEB/CDC theoretical and practical competencies.
          </p>
        </div>

        {/* Interactive Grade Selector Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-emerald-100/70 border border-emerald-200 shadow-sm gap-1.5">
            {["9", "10", "11", "12"].map((grade) => (
              <button
                key={grade}
                onClick={() => onSelectGrade(grade)}
                className={`px-5 sm:px-8 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  selectedGrade === grade
                    ? "bg-emerald-800 text-white shadow-lg scale-105"
                    : "text-emerald-900 hover:bg-white/60"
                }`}
              >
                <span>Class {grade}</span>
                {selectedGrade === grade && (
                  <span className="w-2 h-2 rounded-full bg-lime-400" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Class View Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-xl space-y-8 animate-fadeIn">
          {/* Header Info */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-7 h-7 rounded-lg bg-lime-400 text-emerald-950 font-black text-xs flex items-center justify-center">
                  {currentProgram.grade}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  {currentProgram.stream}
                </span>
              </div>
              <h3 className="text-2xl font-black text-emerald-950">
                {currentProgram.classTitle} Technical Academic Matrix
              </h3>
            </div>

            <button
              onClick={() => onOpenSyllabus && onOpenSyllabus(currentProgram.grade)}
              className="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-emerald-950 font-bold text-xs flex items-center gap-2 shadow-md transition-all shrink-0"
            >
              <FileText className="w-4 h-4" />
              <span>Open Detailed NEB Syllabus</span>
            </button>
          </div>

          {/* Subjects Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Course List ({currentProgram.subjects.length} Prescribed Subjects)
              </h4>
              <span className="text-xs text-gray-500 font-medium">
                Split: {currentProgram.ratio}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentProgram.subjects.map((sub, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-emerald-200 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {sub.code}
                      </span>
                      <span className="text-[11px] font-semibold text-gray-500">
                        {sub.credits} Credits
                      </span>
                    </div>
                    <h5 className="text-sm font-bold text-emerald-950 mb-1">
                      {sub.name}
                    </h5>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-gray-50 flex items-center justify-between text-xs">
                    <span className="text-gray-500">Practical Component:</span>
                    <span className="px-2 py-0.5 rounded-md font-bold text-[11px] bg-lime-100 text-emerald-800">
                      {sub.practicalRatio} Hands-On
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Syllabus Quick Peek */}
          <div className="bg-emerald-50/70 p-5 rounded-2xl border border-emerald-100/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-bold text-emerald-950">
                Official Examination Scheme & Learning Outcomes
              </div>
              <p className="text-xs text-gray-600">
                Each unit includes defined theory chapters, lab demonstrations, herbarium submissions, and farm viva examinations.
              </p>
            </div>
            <button
              onClick={() => onOpenSyllabus && onOpenSyllabus(currentProgram.grade)}
              className="px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Class {currentProgram.grade} Syllabus</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
