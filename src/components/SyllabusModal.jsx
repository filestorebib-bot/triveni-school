import React, { useState } from "react";
import { X, Download, BookOpen, Layers, CheckCircle2, FileText, Printer, Check } from "lucide-react";
import { SYLLABUS_DATA } from "../data/schoolData";

export default function SyllabusModal({ initialGrade = "9", isOpen, onClose }) {
  const [selectedGrade, setSelectedGrade] = useState(initialGrade);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentSyllabus = SYLLABUS_DATA.grades.find((g) => g.grade === selectedGrade) || SYLLABUS_DATA.grades[0];

  const handleDownload = () => {
    let syllabusText = `=======================================================\n`;
    syllabusText += `${currentSyllabus.title}\n`;
    syllabusText += `${currentSyllabus.nepaliTitle}\n`;
    syllabusText += `Triveni Secondary School, Department of Plant Science, Katari-4, Udayapur\n`;
    syllabusText += `Total Credits: ${currentSyllabus.totalCredits} | Split: ${currentSyllabus.theoryPracticalSplit}\n`;
    syllabusText += `=======================================================\n\n`;

    currentSyllabus.units.forEach((unit) => {
      syllabusText += `\nSUBJECT: ${unit.subject} (${unit.code}) - ${unit.hours}\n`;
      syllabusText += `-------------------------------------------------------\n`;
      syllabusText += `CHAPTER OUTLINE:\n`;
      unit.chapters.forEach((ch) => {
        syllabusText += `  • ${ch}\n`;
      });
      syllabusText += `\nPRACTICAL EXPERIMENTS & LAB WORK:\n`;
      unit.practicals.forEach((p) => {
        syllabusText += `  [✓] ${p}\n`;
      });
      syllabusText += `\n`;
    });

    const element = document.createElement("a");
    const file = new Blob([syllabusText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `Class-${selectedGrade}-PlantScience-Syllabus-Triveni.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-emerald-950/75 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden text-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-emerald-900 via-emerald-800 to-green-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-lime-400 text-emerald-950">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-lime-300">
                Official NEB Curriculum Breakdown
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white">
                Technical Plant Science Syllabus Viewer
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print Syllabus"
              className="p-2 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100 transition-colors"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-lg bg-lime-400 hover:bg-lime-300 text-emerald-950 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download Syllabus</span>
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

        {/* Grade Selection Tabs */}
        <div className="flex items-center gap-2 px-6 py-3 bg-emerald-50 border-b border-emerald-100 overflow-x-auto">
          {["9", "10", "11", "12"].map((gr) => (
            <button
              key={gr}
              onClick={() => setSelectedGrade(gr)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                selectedGrade === gr
                  ? "bg-emerald-800 text-white shadow-md scale-105"
                  : "bg-white text-gray-700 hover:bg-emerald-100/60 border border-emerald-200/50"
              }`}
            >
              <span>Class {gr} Syllabus</span>
              {selectedGrade === gr && (
                <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Syllabus Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Header Summary */}
          <div className="bg-gradient-to-br from-emerald-50 to-white p-5 rounded-2xl border border-emerald-100">
            <h3 className="text-lg font-bold text-emerald-950 mb-1">
              {currentSyllabus.title}
            </h3>
            <p className="text-sm text-emerald-800 font-serif mb-3">
              {currentSyllabus.nepaliTitle}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
              <span className="px-2.5 py-1 rounded-md bg-white border border-gray-200 font-semibold">
                Credits: {currentSyllabus.totalCredits}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-lime-100 text-lime-900 font-semibold">
                Weightage: {currentSyllabus.theoryPracticalSplit}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-900 font-semibold">
                Board: {currentSyllabus.examinationSystem}
              </span>
            </div>
          </div>

          {/* Detailed Units */}
          <div className="space-y-6">
            {currentSyllabus.units.map((unit, uIdx) => (
              <div 
                key={uIdx}
                className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-gray-100">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 mr-2">
                      {unit.code}
                    </span>
                    <span className="text-base font-bold text-gray-900">
                      {unit.subject}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                    Total: {unit.hours}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Theory Chapters */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2.5 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" /> Theoretical Core Chapters
                    </h4>
                    <ul className="space-y-2 text-xs text-gray-700">
                      {unit.chapters.map((ch, cIdx) => (
                        <li key={cIdx} className="p-2 rounded-lg bg-gray-50 border border-gray-100 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Practical Experiments */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-lime-800 mb-2.5 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Prescribed Practicals & Lab Experiments
                    </h4>
                    <ul className="space-y-2 text-xs text-gray-700">
                      {unit.practicals.map((pr, pIdx) => (
                        <li key={pIdx} className="p-2 rounded-lg bg-emerald-50/60 border border-emerald-100 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{pr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-xs">
          <span className="text-gray-500">
            Approved curriculum guidelines as prescribed by CDC / National Examinations Board, Nepal.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
