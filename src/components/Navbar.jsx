
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Leaf,
  ChevronDown,
  ArrowRight,
  Clock,
  Code2,
  GraduationCap,
} from "lucide-react";

import { SCHOOL_INFO } from "../data/schoolData";

export default function Navbar({ onOpenDeveloper, onSelectGrade }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [classDropdownOpen, setClassDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        setClassDropdownOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Program", href: "#program" },
    { label: "OJT", href: "#ojt" },
    {
      label: "Classes",
      href: "#classes",
      isClassMenu: true,
    },
    { label: "Notices", href: "#notices" },
    { label: "Contact Us", href: "#contact" },
  ];

  const handleClassClick = (grade) => {
    if (onSelectGrade) onSelectGrade(grade);

    setClassDropdownOpen(false);
    setMobileMenuOpen(false);

    window.setTimeout(() => {
      document.querySelector("#classes")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setClassDropdownOpen(false);
  };

  const handleDeveloperClick = () => {
    closeMenu();
    onOpenDeveloper?.();
  };

  const grades = ["9", "10", "11", "12"];

  const desktopLinkClass =
    "inline-flex shrink-0 items-center justify-center whitespace-nowrap " +
    "rounded-xl px-2.5 py-2 text-[12px] font-bold text-slate-700 " +
    "transition-colors hover:bg-emerald-50 hover:text-emerald-800 " +
    "2xl:px-3 2xl:text-[13px]";

  const actionButtonClass =
    "inline-flex shrink-0 items-center justify-center gap-1.5 " +
    "whitespace-nowrap rounded-xl px-3 py-2 text-xs font-bold " +
    "transition-all duration-200";

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* =====================================================
          TOP CONTACT BAR
      ====================================================== */}

      <div className="hidden border-b border-emerald-800/60 bg-gradient-to-r from-emerald-950 via-emerald-900 to-green-950 text-[11px] text-emerald-100 lg:block">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-6 py-2">
          <div className="flex min-w-0 items-center gap-5 2xl:gap-7">
            <span className="inline-flex shrink-0 items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-lime-400" />
              <span>{SCHOOL_INFO.address}</span>
            </span>

            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="inline-flex shrink-0 items-center gap-1.5 transition hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-lime-400" />
              {SCHOOL_INFO.phone}
            </a>

            {SCHOOL_INFO.email && (
              <a
                href={`mailto:${SCHOOL_INFO.email}`}
                className="inline-flex min-w-0 items-center gap-1.5 transition hover:text-white"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-lime-400" />
                <span className="truncate">{SCHOOL_INFO.email}</span>
              </a>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-4">
            {SCHOOL_INFO.officeHours && (
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-emerald-200">
                <Clock className="h-3.5 w-3.5 text-lime-400" />
                {SCHOOL_INFO.officeHours}
              </span>
            )}

            <span className="h-4 w-px bg-emerald-700" />

            <button
              type="button"
              onClick={handleDeveloperClick}
              className="inline-flex items-center gap-1.5 whitespace-nowrap font-bold text-lime-300 transition hover:text-lime-200"
            >
              <Code2 className="h-3.5 w-3.5" />
              Dev: Bibash Lamichhane
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVIGATION
      ====================================================== */}

      <div
        className={`border-b border-emerald-100/80 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 py-2 shadow-lg shadow-emerald-950/5 backdrop-blur-2xl"
            : "bg-white/90 py-3 backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-3 px-3 sm:px-5 lg:gap-4 lg:px-6 2xl:px-8">
          {/* LOGO AND SCHOOL NAME */}

          <a
            href="#home"
            onClick={closeMenu}
            className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3 xl:flex-none"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-800 to-green-600 text-white shadow-md shadow-emerald-900/15 transition-transform hover:scale-105 sm:h-11 sm:w-11 sm:rounded-2xl">
              <Leaf className="h-5 w-5 text-lime-300 sm:h-6 sm:w-6" />
            </div>

            <div className="min-w-0">
              <div className="flex min-w-0 items-center gap-2">
                <span className="truncate text-sm font-black leading-tight tracking-tight text-emerald-950 sm:text-base lg:text-lg">
                  {SCHOOL_INFO.name}
                </span>

                <span className="hidden 2xl:inline-flex shrink-0 items-center rounded-full bg-emerald-100 px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-emerald-800">
                  Govt. Technical
                </span>
              </div>

              <div className="mt-1 flex min-w-0 items-center gap-1 text-[10px] font-medium leading-tight text-emerald-700 sm:text-xs">
                <span className="truncate">{SCHOOL_INFO.department}</span>
                <span className="shrink-0 text-slate-400">·</span>
                <span className="truncate text-slate-500">
                  {SCHOOL_INFO.locationShort}
                </span>
              </div>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}

          <nav
            aria-label="Main navigation"
            className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 xl:flex 2xl:gap-1"
          >
            {navLinks.map((link) => {
              if (link.isClassMenu) {
                return (
                  <div key={link.label} className="group relative shrink-0">
                    <button
                      type="button"
                      onClick={() =>
                        setClassDropdownOpen((previous) => !previous)
                      }
                      aria-expanded={classDropdownOpen}
                      className={`${desktopLinkClass} gap-1`}
                    >
                      Classes (9–12)
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform ${
                          classDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`absolute left-0 top-full z-50 w-60 pt-3 transition-all duration-200 ${
                        classDropdownOpen
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-1 opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
                      }`}
                    >
                      <div className="rounded-2xl border border-emerald-100 bg-white/95 p-2 shadow-xl shadow-emerald-950/10 backdrop-blur-2xl">
                        {grades.map((grade) => (
                          <button
                            key={grade}
                            type="button"
                            onClick={() => handleClassClick(grade)}
                            className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-xs font-bold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-800"
                          >
                            <span className="flex min-w-0 items-center gap-2.5">
                              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
                                {grade}
                              </span>
                              <span className="truncate">
                                Class {grade} Plant Science
                              </span>
                            </span>

                            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
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
                  className={desktopLinkClass}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* DESKTOP ACTION BUTTONS */}

          <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-2.5">
            <a
              href="#notices"
              className={`${actionButtonClass} border border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100`}
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
              </span>
              Latest Notices
            </a>

            <a
              href="#contact"
              className={`${actionButtonClass} bg-gradient-to-r from-emerald-800 to-green-700 text-white shadow-md shadow-emerald-900/10 hover:-translate-y-0.5 hover:from-emerald-700 hover:to-green-600`}
            >
              Admission Inquiry
              <ArrowRight className="h-3.5 w-3.5 shrink-0" />
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-900 transition hover:bg-emerald-100 xl:hidden"
            aria-label="Open mobile navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* =====================================================
          MOBILE DRAWER
      ====================================================== */}

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] xl:hidden">
          {/* BACKDROP */}

          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-default bg-emerald-950/60 backdrop-blur-sm"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          />

          {/* DRAWER PANEL */}

          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="absolute right-0 top-0 flex h-[100dvh] w-[min(88vw,380px)] flex-col overflow-hidden border-l border-white/60 bg-white shadow-2xl"
          >
            {/* DRAWER HEADER */}

            <div className="flex shrink-0 items-center justify-between gap-3 bg-gradient-to-r from-emerald-950 to-green-900 p-4 text-white sm:p-5">
              <a
                href="#home"
                onClick={closeMenu}
                className="flex min-w-0 items-center gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-400 text-emerald-950">
                  <Leaf className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-sm font-black leading-tight">
                    {SCHOOL_INFO.name}
                  </h3>
                  <p className="mt-1 truncate text-[11px] text-lime-300">
                    {SCHOOL_INFO.department}
                  </p>
                </div>
              </a>

              <button
                type="button"
                onClick={closeMenu}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* CONTACT DETAILS */}

            <div className="shrink-0 space-y-2 border-b border-emerald-100 bg-emerald-50/80 px-4 py-3 text-xs text-emerald-900">
              {SCHOOL_INFO.address && (
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                  <span className="min-w-0 break-words">
                    {SCHOOL_INFO.address}
                  </span>
                </div>
              )}

              {SCHOOL_INFO.phone && (
                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="flex items-center gap-2 font-semibold"
                >
                  <Phone className="h-4 w-4 shrink-0 text-emerald-700" />
                  <span>{SCHOOL_INFO.phone}</span>
                </a>
              )}

              {SCHOOL_INFO.email && (
                <a
                  href={`mailto:${SCHOOL_INFO.email}`}
                  className="flex min-w-0 items-center gap-2"
                >
                  <Mail className="h-4 w-4 shrink-0 text-emerald-700" />
                  <span className="truncate">{SCHOOL_INFO.email}</span>
                </a>
              )}
            </div>

            {/* SCROLLABLE NAVIGATION LINKS */}

            <nav
              aria-label="Mobile navigation"
              className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4"
            >
              {navLinks.map((link) => {
                if (link.isClassMenu) {
                  return (
                    <div
                      key={link.label}
                      className="my-2 border-y border-slate-100 py-3"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setClassDropdownOpen((previous) => !previous)
                        }
                        aria-expanded={classDropdownOpen}
                        className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-3 text-sm font-bold text-emerald-900 transition hover:bg-emerald-50"
                      >
                        <span className="flex items-center gap-2.5">
                          <GraduationCap className="h-4 w-4 shrink-0 text-emerald-700" />
                          Plant Science Classes
                        </span>

                        <ChevronDown
                          className={`h-4 w-4 shrink-0 transition-transform ${
                            classDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {classDropdownOpen && (
                        <div className="mt-2 grid grid-cols-2 gap-2 px-1">
                          {grades.map((grade) => (
                            <button
                              key={grade}
                              type="button"
                              onClick={() => handleClassClick(grade)}
                              className="flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-emerald-100 bg-emerald-50 px-2 py-2 text-xs font-bold text-emerald-900 transition hover:bg-emerald-100"
                            >
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-800 text-[10px] text-white">
                                {grade}
                              </span>
                              Class {grade}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    className="flex min-h-11 items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-800"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-emerald-600" />
                  </a>
                );
              })}
            </nav>

            {/* DRAWER FOOTER BUTTONS */}

            <div className="shrink-0 space-y-2 border-t border-slate-200 bg-slate-50 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <a
                href="#contact"
                onClick={closeMenu}
                className="flex min-h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-emerald-800 to-green-700 px-3 py-3 text-xs font-bold text-white shadow-md transition hover:from-emerald-700 hover:to-green-600"
              >
                Get in Touch / Admissions
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>

              <button
                type="button"
                onClick={handleDeveloperClick}
                className="flex min-h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-lime-300 px-3 py-3 text-xs font-bold text-emerald-950 transition hover:bg-lime-200"
              >
                <Code2 className="h-4 w-4 shrink-0" />
                Bibash Lamichhane
              </button>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
