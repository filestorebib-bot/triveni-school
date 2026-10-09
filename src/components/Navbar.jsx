import React, { useState, useEffect } from "react";
import { 
  Menu, X, MapPin, Phone, Mail, Leaf, GraduationCap, 
  ChevronDown, ArrowRight, Sparkles, BookOpen, Clock, Code2
} from "lucide-react";
import { SCHOOL_INFO } from "../data/schoolData";

export default function Navbar({ onOpenDeveloper, onSelectGrade }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [classDropdownOpen, setClassDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Program", href: "#program" },
    { label: "OJT", href: "#ojt" },
    { 
      label: "Class (9, 10, 11, 12)", 
      href: "#classes",
      isClassMenu: true 
    },
    { label: "Notices", href: "#notices" },
    { label: "Contact Us", href: "#contact" }
  ];

  const handleClassClick = (grade) => {
    if (onSelectGrade) onSelectGrade(grade);
    setClassDropdownOpen(false);
    setMobileMenuOpen(false);
    const element = document.querySelector("#classes");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Topmost School Info Contact Bar */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-green-950 text-emerald-100 text-[11px] py-1.5 px-4 border-b border-emerald-800/60 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-lime-400" />
              <span>{SCHOOL_INFO.address}</span>
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-lime-400" />
              <a href={`tel:${SCHOOL_INFO.phone}`} className="font-semibold">{SCHOOL_INFO.phone}</a>
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-lime-400" />
              <a href={`mailto:${SCHOOL_INFO.email}`}>{SCHOOL_INFO.email}</a>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-emerald-300 flex items-center gap-1">
              <Clock className="w-3 h-3 text-lime-400" /> {SCHOOL_INFO.officeHours}
            </span>
            <span className="h-3 w-px bg-emerald-800" />
            <button
              onClick={onOpenDeveloper}
              className="text-lime-300 hover:text-lime-200 font-bold flex items-center gap-1 underline underline-offset-2 transition-colors cursor-pointer"
            >
              <Code2 className="w-3.5 h-3.5" /> Dev: Bibash Lamichhane
            </button>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <div className={`transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-emerald-950/5 border-b border-emerald-100 py-2.5" 
          : "bg-white/90 backdrop-blur-sm border-b border-emerald-100/60 py-3.5"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand & Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-800 to-green-600 flex items-center justify-center text-white shadow-md shadow-emerald-900/20 group-hover:scale-105 transition-transform">
              <Leaf className="w-6 h-6 text-lime-300 group-hover:rotate-12 transition-transform" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-emerald-950 text-base sm:text-lg tracking-tight leading-none group-hover:text-emerald-700 transition-colors">
                  {SCHOOL_INFO.name}
                </span>
                <span className="hidden lg:inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                  Govt. Technical
                </span>
              </div>
              <div className="text-xs font-semibold text-emerald-700 tracking-wide mt-0.5 flex items-center gap-1">
                <span>{SCHOOL_INFO.department}</span>
                <span className="text-gray-400">·</span>
                <span className="text-gray-500 font-normal">{SCHOOL_INFO.locationShort}</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 text-[13px] font-bold text-gray-700">
            {navLinks.map((link) => {
              if (link.isClassMenu) {
                return (
                  <div key={link.label} className="relative group">
                    <button
                      onClick={() => setClassDropdownOpen(!classDropdownOpen)}
                      className="px-3.5 py-2 rounded-xl hover:text-emerald-700 hover:bg-emerald-50/80 transition-colors flex items-center gap-1"
                    >
                      <span>Class (9–12)</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 w-56 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-emerald-100 p-2 space-y-1">
                        {["9", "10", "11", "12"].map((grade) => (
                          <button
                            key={grade}
                            onClick={() => handleClassClick(grade)}
                            className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between transition-colors"
                          >
                            <span className="flex items-center gap-2">
                              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                                {grade}
                              </span>
                              <span>Class {grade} Plant Science</span>
                            </span>
                            <ArrowRight className="w-3 h-3 text-emerald-600" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-2 rounded-xl hover:text-emerald-700 hover:bg-emerald-50/80 transition-colors"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#notices"
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 hover:bg-emerald-100/80 text-emerald-800 border border-emerald-200/60 transition-colors flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Latest Notices</span>
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-800 to-green-700 hover:from-emerald-700 hover:to-green-600 text-white shadow-md shadow-emerald-900/15 hover:shadow-lg transition-all flex items-center gap-1.5"
            >
              <span>Admission Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 transition-colors"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-emerald-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Sidebar */}
          <div className="relative ml-auto w-full max-w-xs sm:max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
            {/* Drawer Header */}
            <div className="p-5 bg-gradient-to-r from-emerald-950 to-green-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-lime-400 text-emerald-950 flex items-center justify-center font-bold">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white leading-tight">
                    {SCHOOL_INFO.name}
                  </h3>
                  <p className="text-[11px] text-lime-300">
                    {SCHOOL_INFO.department}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Contact Header in Drawer */}
            <div className="p-3 bg-emerald-50 border-b border-emerald-100 text-xs text-emerald-900 flex flex-col gap-1">
              <span className="flex items-center gap-1 font-medium">
                <MapPin className="w-3.5 h-3.5 text-emerald-700" /> {SCHOOL_INFO.address}
              </span>
              <span className="flex items-center gap-1 font-semibold">
                <Phone className="w-3.5 h-3.5 text-emerald-700" /> {SCHOOL_INFO.phone}
              </span>
            </div>

            {/* Drawer Navigation Links */}
            <div className="flex-1 p-5 space-y-1">
              {navLinks.map((link) => {
                if (link.isClassMenu) {
                  return (
                    <div key={link.label} className="py-2 border-y border-gray-100 my-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2 px-3">
                        Plant Science Classes
                      </div>
                      <div className="grid grid-cols-2 gap-1.5 px-1">
                        {["9", "10", "11", "12"].map((grade) => (
                          <button
                            key={grade}
                            onClick={() => handleClassClick(grade)}
                            className="p-2.5 rounded-xl bg-emerald-50/70 hover:bg-emerald-100 text-emerald-900 text-xs font-bold flex items-center justify-center gap-2 transition-colors border border-emerald-100"
                          >
                            <span className="w-5 h-5 rounded-md bg-emerald-700 text-white flex items-center justify-center text-[10px]">
                              {grade}
                            </span>
                            <span>Class {grade}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-xl text-sm font-bold text-gray-800 hover:text-emerald-800 hover:bg-emerald-50 transition-colors"
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-5 border-t border-gray-200 bg-gray-50 space-y-2.5">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <span>Get in Touch / Admissions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDeveloper();
                }}
                className="w-full py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-emerald-950 text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Code2 className="w-4 h-4" />
                <span>Dev: Bibash Lamichhane Profile</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
