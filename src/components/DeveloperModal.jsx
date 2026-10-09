import React, { useState } from "react";
import { 
  X, Code2, Award, Mail, ExternalLink, Sparkles, Sprout, 
  Layers, Flower2, ShieldCheck, Microscope, HeartHandshake,
  Check, Copy, Phone, MapPin, GraduationCap, Laptop, BookOpen
} from "lucide-react";
import { DEVELOPER_PROFILE } from "../data/schoolData";

export default function DeveloperModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("overview"); // overview, projects, fieldWork

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(DEVELOPER_PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-emerald-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-3xl shadow-2xl border border-emerald-200 overflow-hidden text-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner with Gradient & Glass Accents */}
        <div className="relative bg-gradient-to-r from-emerald-900 via-teal-900 to-green-950 text-white p-6 sm:p-8 overflow-hidden">
          {/* Subtle decorative circles */}
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />
          <div className="absolute right-32 -bottom-20 w-48 h-48 rounded-full bg-lime-400/10 blur-xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close Developer Profile"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 relative z-10">
            {/* Developer Avatar with Animated Glowing Ring */}
            <div className="relative group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-lime-400 to-emerald-400 p-1 shadow-xl">
                <div className="w-full h-full rounded-xl bg-emerald-950 flex flex-col items-center justify-center text-white overflow-hidden relative">
                  <span className="text-2xl sm:text-3xl font-black text-lime-300 font-mono">BL</span>
                  <span className="text-[10px] text-emerald-200 uppercase tracking-widest font-semibold">Dev</span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-lime-400 text-emerald-950 p-1.5 rounded-lg shadow-md">
                <Code2 className="w-4 h-4" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-lime-400/20 text-lime-300 border border-lime-400/30 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-lime-300" />
                Featured Alumnus & Software Engineer
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-baseline gap-3 flex-wrap">
                {DEVELOPER_PROFILE.name}
                <span className="text-lg sm:text-xl font-normal text-emerald-300 font-serif">
                  ({DEVELOPER_PROFILE.nepaliName})
                </span>
              </h1>
              <p className="text-emerald-200 text-sm font-medium mt-1">
                {DEVELOPER_PROFILE.title}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-emerald-300/90 mt-2">
                <span className="flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-lime-400" /> Triveni Plant Science Alumnus
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-lime-400" /> Katari-4, Udayapur, Nepal
                </span>
              </div>
            </div>
          </div>

          {/* Tab Navigation inside Banner */}
          <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/10">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "overview"
                  ? "bg-lime-400 text-emerald-950 shadow-md"
                  : "bg-white/10 hover:bg-white/15 text-white"
              }`}
            >
              Developer Bio & Overview
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "projects"
                  ? "bg-lime-400 text-emerald-950 shadow-md"
                  : "bg-white/10 hover:bg-white/15 text-white"
              }`}
            >
              Software Projects (TMVag & Tankanath)
            </button>
            <button
              onClick={() => setActiveTab("fieldWork")}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "fieldWork"
                  ? "bg-lime-400 text-emerald-950 shadow-md"
                  : "bg-white/10 hover:bg-white/15 text-white"
              }`}
            >
              Field & OJT Expertise Badges
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {activeTab === "overview" && (
            <div className="space-y-6 animate-fadeIn">
              {/* Detailed Bio Card */}
              <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-5 sm:p-6 text-gray-700 leading-relaxed text-sm">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-base mb-2">
                  <Sprout className="w-5 h-5 text-emerald-700" />
                  About Bibash Lamichhane (विवश लामिछाने)
                </div>
                <p className="mb-3">
                  {DEVELOPER_PROFILE.bio}
                </p>
                <p>
                  As an alumnus of Triveni Secondary School’s Department of Plant Science in Katari-4, Udayapur, Bibash has firsthand experience with every layer of Nepal’s agricultural reality—from soil testing and marigold pruning to organic bio-pesticide formulation and commercial seed cultivation. He leverages this domain insight to create bespoke software applications tailored for agriculture, education, and regional development.
                </p>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Academic Background</h3>
                    <p className="text-sm font-semibold text-gray-800 mt-0.5">
                      Animal & Plant Science Technical Education
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Triveni Secondary School, Katari-4, Udayapur
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-lime-100 text-lime-800">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Development Philosophy</h3>
                    <p className="text-sm font-semibold text-gray-800 mt-0.5">
                      Empowering Agriculture through Code
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Modern React, Node, Full-Stack & Offline Mobile Engineering
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Contact Bar */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-900 to-green-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-lime-300">
                    Official Developer Email
                  </div>
                  <div className="text-base sm:text-lg font-mono font-bold text-white mt-0.5 break-all">
                    {DEVELOPER_PROFILE.email}
                  </div>
                </div>
                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={handleCopyEmail}
                    className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors border border-white/20"
                  >
                    {copied ? <Check className="w-4 h-4 text-lime-300" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? "Copied Email!" : "Copy Email"}</span>
                  </button>
                  <a
                    href={`mailto:${DEVELOPER_PROFILE.email}?subject=Inquiry from Triveni School Portal`}
                    className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-lime-400 hover:bg-lime-300 text-emerald-950 text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-md"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Message</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === "projects" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Key Software Products & Community Platforms
              </div>

              <div className="grid grid-cols-1 gap-4">
                {DEVELOPER_PROFILE.projects.map((proj, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl border border-emerald-100 bg-white hover:border-emerald-300 transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-emerald-100 text-emerald-800">
                        {proj.badge}
                      </span>
                      <span className="text-xs font-semibold text-gray-500">
                        Role: {proj.role}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-emerald-950 mb-1.5">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {proj.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-gray-100">
                      <span className="text-xs font-semibold text-gray-400 mr-1">Stack:</span>
                      {proj.technologies.map((tech, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-gray-100 text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "fieldWork" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Field Research & Practical Agricultural Badges
              </div>
              <p className="text-xs text-gray-500">
                Bibash completed intensive practical field work during his academic study in Plant Science at Triveni Secondary School.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {DEVELOPER_PROFILE.fieldExpertise.map((field, fIdx) => (
                  <div 
                    key={fIdx}
                    className="p-5 rounded-2xl border border-gray-100 bg-gradient-to-br from-emerald-50/50 to-white shadow-sm hover:border-emerald-200 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                      {fIdx === 0 && <Flower2 className="w-5 h-5" />}
                      {fIdx === 1 && <ShieldCheck className="w-5 h-5" />}
                      {fIdx === 2 && <Award className="w-5 h-5" />}
                      {fIdx === 3 && <Microscope className="w-5 h-5" />}
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">
                      {field.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {field.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-xs">
          <span className="text-gray-500">
            Proudly built for Triveni Secondary School, Katari-4, Udayapur
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold transition-colors"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
}
