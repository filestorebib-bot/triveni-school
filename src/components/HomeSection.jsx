
import React, { useState, useEffect } from "react";
import {
  Sprout,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  ArrowRight,
  Wheat,
  Flower2,
  Microscope,
  Layers,
  Tractor,
  Briefcase,
  Quote,
  Search,
  Award,
  Sparkles,
  ExternalLink,
  BookOpen,
} from "lucide-react";

import {
  SCHOOL_INFO,
  HERO_CAROUSEL_IMAGES,
  CORE_FOCUS_AREAS,
  ALUMNI_TESTIMONIALS,
  TEACHERS_LIST,
} from "../data/schoolData";

/* =========================================================
   GLASS CARD
========================================================= */

const GlassCard = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl border border-white/70 bg-white/75
      shadow-[0_8px_32px_rgba(15,80,45,0.08)]
      backdrop-blur-2xl transition-all duration-300
      sm:rounded-3xl hover:border-emerald-200
      hover:shadow-[0_16px_50px_rgba(15,80,45,0.13)]
      ${className}`}
  >
    {children}
  </div>
);

/* =========================================================
   SECTION HEADING
========================================================= */

const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
    <span
      className="inline-flex max-w-full items-center justify-center gap-2
        rounded-full border border-emerald-200/80 bg-white/80
        px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em]
        text-emerald-800 shadow-sm backdrop-blur-xl
        min-[400px]:px-4 min-[400px]:text-xs"
    >
      <Sprout className="h-4 w-4 shrink-0" />
      {eyebrow}
    </span>

    <h2
      className="mt-4 text-2xl font-black leading-tight tracking-tight
        text-emerald-950 min-[400px]:text-3xl
        sm:mt-5 sm:text-4xl lg:text-5xl"
    >
      {title}
    </h2>

    {description && (
      <p
        className="mx-auto mt-3 max-w-2xl text-sm leading-7
          text-slate-600 sm:mt-4 sm:text-base"
      >
        {description}
      </p>
    )}
  </div>
);

/* =========================================================
   HOME SECTION
========================================================= */

export default function HomeSection({
  onOpenDeveloper,
  onSelectImage,
  onSelectNotice,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [teacherSearch, setTeacherSearch] = useState("");

  const slides = HERO_CAROUSEL_IMAGES || [];

  /* AUTOMATIC IMAGE SLIDER */

  useEffect(() => {
    if (slides.length < 2) return;

    const timer = setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    if (currentSlide >= slides.length) {
      setCurrentSlide(0);
    }
  }, [currentSlide, slides.length]);

  const nextSlide = () => {
    if (!slides.length) return;

    setCurrentSlide((previous) => (previous + 1) % slides.length);
  };

  const prevSlide = () => {
    if (!slides.length) return;

    setCurrentSlide(
      (previous) => (previous - 1 + slides.length) % slides.length
    );
  };

  /* TEACHER SEARCH */

  const filteredTeachers = (TEACHERS_LIST || []).filter((teacher) => {
    const search = teacherSearch.trim().toLowerCase();

    return (
      (teacher.name || "").toLowerCase().includes(search) ||
      (teacher.subject || "").toLowerCase().includes(search) ||
      (teacher.role || "").toLowerCase().includes(search)
    );
  });

  /* FOCUS AREA ICONS */

  const focusIcons = [
    Wheat,
    Flower2,
    Microscope,
    Layers,
    Tractor,
    Briefcase,
  ];

  /* SCHOOL LEADERSHIP */

  const leadership = [
    {
      key: "coordinator",
      label: "Department Coordinator",
      data: SCHOOL_INFO.coordinator,
      accent: "emerald",
    },
    {
      key: "principal",
      label: "School Principal",
      data: SCHOOL_INFO.principal,
      accent: "lime",
    },
  ];

  return (
    <main
      id="home"
      className="relative isolate overflow-x-clip bg-[#f5faf6] text-slate-800"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -left-40 top-40 h-72 w-72 rounded-full
            bg-emerald-300/20 blur-[100px] sm:h-96 sm:w-96"
        />

        <div
          className="absolute -right-40 top-[850px] h-72 w-72 rounded-full
            bg-lime-300/20 blur-[100px] sm:h-96 sm:w-96"
        />

        <div
          className="absolute left-1/3 top-[1700px] h-72 w-72 rounded-full
            bg-teal-200/20 blur-[100px] sm:h-96 sm:w-96"
        />

        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(#86a891 0.7px, transparent 0.7px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* =====================================================
          1. RESPONSIVE AUTOMATIC HERO SLIDER
      ====================================================== */}

      <section className="px-2 pb-8 pt-3 min-[480px]:px-4 sm:px-6 sm:pb-10 sm:pt-5 lg:px-8">
        <div className="relative mx-auto max-w-[1600px]">
          <div
            className="group relative h-[650px] overflow-hidden rounded-2xl
              border border-white/60 bg-emerald-950
              shadow-[0_20px_60px_rgba(6,55,30,0.18)]
              min-[400px]:h-[630px] min-[480px]:h-[610px]
              sm:h-[650px] sm:rounded-[28px]
              lg:h-[680px] lg:rounded-[36px]"
          >
            {/* SLIDES */}

            {slides.length > 0 ? (
              slides.map((slide, index) => (
                <div
                  key={`${slide.url}-${index}`}
                  className={`absolute inset-0 transition-opacity duration-1000
                    ease-in-out ${
                      currentSlide === index
                        ? "z-10 opacity-100"
                        : "z-0 opacity-0"
                    }`}
                  aria-hidden={currentSlide !== index}
                >
                  <img
                    src={slide.url}
                    alt={slide.title || "Triveni Secondary School"}
                    className={`h-full w-full object-cover object-center
                      transition-transform duration-[7000ms] ease-out ${
                        currentSlide === index
                          ? "scale-105"
                          : "scale-100"
                      }`}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-r
                      from-[#062d1c]/90 via-[#062d1c]/65 to-[#062d1c]/20"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t
                      from-[#062d1c]/80 via-transparent to-black/15"
                  />
                </div>
              ))
            ) : (
              <div
                className="absolute inset-0 bg-gradient-to-br
                  from-emerald-950 via-emerald-800 to-green-600"
              />
            )}

            {/* GLASS DECORATION */}

            <div
              className="pointer-events-none absolute -right-24 -top-24
                z-10 h-64 w-64 rounded-full border border-white/10
                bg-white/5 backdrop-blur-sm sm:h-80 sm:w-80"
            />

            <div
              className="pointer-events-none absolute -bottom-40 right-1/4
                z-10 h-72 w-72 rounded-full border border-white/10
                bg-white/5 backdrop-blur-sm sm:h-96 sm:w-96"
            />

            {/* HERO CONTENT */}

            <div
              className="relative z-20 flex h-full min-h-0 flex-col
                justify-center px-5 py-16
                min-[400px]:px-6 min-[480px]:px-8
                sm:px-12 lg:px-20"
            >
              <div className="max-w-4xl">
                {/* TOP BADGE */}

                <div
                  className="mb-5 inline-flex max-w-full items-center gap-2
                    rounded-2xl border border-white/25 bg-white/10
                    px-3 py-2 text-[10px] font-semibold leading-5
                    tracking-wide text-white shadow-lg backdrop-blur-xl
                    min-[400px]:text-xs sm:mb-7 sm:rounded-full
                    sm:px-4 sm:text-sm"
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full bg-lime-300
                      shadow-[0_0_12px_rgba(190,242,100,0.9)]"
                  />

                  <Sprout className="h-4 w-4 shrink-0 text-lime-300" />

                  <span>
                    Government Technical Vocational Stream · Grades 9–12
                  </span>
                </div>

                <p
                  className="mb-3 text-xs font-bold uppercase
                    tracking-[0.16em] text-lime-200
                    min-[400px]:text-sm sm:mb-4 sm:text-base
                    sm:tracking-[0.22em]"
                >
                  Triveni Secondary School
                </p>

                <h1
                  className="max-w-4xl text-[2.15rem] font-black
                    leading-[1.08] tracking-tight text-white
                    min-[400px]:text-4xl sm:text-5xl
                    md:text-6xl lg:text-7xl"
                >
                  Cultivating Minds.

                  <span className="mt-2 block text-lime-300">
                    Growing the Future.
                  </span>
                </h1>

                <p
                  className="mt-5 max-w-2xl text-sm leading-6
                    text-white/90 sm:mt-7 sm:text-base
                    sm:leading-8 lg:text-lg"
                >
                  Discover quality education, practical agricultural training,
                  and the knowledge to build a more sustainable future through
                  the Department of Plant Science.
                </p>

                {/* RESPONSIVE HERO BUTTONS */}

                <div
                  className="mt-7 flex flex-col items-stretch gap-3
                    min-[480px]:flex-row min-[480px]:flex-wrap
                    min-[480px]:items-center sm:mt-9"
                >
                  <a
                    href="#program"
                    className="inline-flex min-h-12 items-center
                      justify-center gap-2 rounded-xl bg-lime-300
                      px-5 py-3 text-center text-sm font-bold
                      text-emerald-950 shadow-lg transition
                      hover:-translate-y-0.5 hover:bg-lime-200
                      sm:rounded-2xl sm:px-6"
                  >
                    Explore Our Programs
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </a>

                  <a
                    href="#about"
                    className="inline-flex min-h-12 items-center
                      justify-center gap-2 rounded-xl border
                      border-white/30 bg-white/10 px-5 py-3
                      text-center text-sm font-bold text-white
                      backdrop-blur-xl transition hover:bg-white/20
                      sm:rounded-2xl sm:px-6"
                  >
                    Discover Our School
                    <ExternalLink className="h-4 w-4 shrink-0" />
                  </a>

                  {slides.length > 0 && onSelectImage && (
                    <button
                      type="button"
                      onClick={() => onSelectImage(slides[currentSlide])}
                      className="inline-flex min-h-12 items-center
                        justify-center gap-2 rounded-xl border
                        border-white/20 bg-black/15 px-5 py-3
                        text-sm font-semibold text-white
                        backdrop-blur-xl transition hover:bg-white/15
                        sm:rounded-2xl"
                    >
                      View Image
                      <ExternalLink className="h-4 w-4 shrink-0" />
                    </button>
                  )}
                </div>

                {/* TRUST INDICATORS */}

                <div
                  className="mt-7 grid grid-cols-1 gap-3
                    border-t border-white/20 pt-5
                    text-xs text-white/90
                    min-[400px]:grid-cols-2
                    sm:mt-10 sm:flex sm:flex-wrap sm:gap-x-7
                    sm:gap-y-4 sm:pt-6 sm:text-sm"
                >
                  <span className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 shrink-0 text-lime-300" />
                    Technical Education
                  </span>

                  <span className="flex items-center gap-2">
                    <Sprout className="h-5 w-5 shrink-0 text-lime-300" />
                    Practical Learning
                  </span>

                  <span className="flex items-center gap-2">
                    <Award className="h-5 w-5 shrink-0 text-lime-300" />
                    Future-Ready Skills
                  </span>
                </div>
              </div>
            </div>

            {/* SLIDER NAVIGATION */}

            {slides.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="absolute left-2 top-1/2 z-30
                    flex h-9 w-9 -translate-y-1/2 items-center
                    justify-center rounded-full border border-white/30
                    bg-black/25 text-white shadow-lg backdrop-blur-xl
                    transition hover:scale-105 hover:bg-white/30
                    min-[480px]:left-3 sm:left-6 sm:h-12 sm:w-12"
                >
                  <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="absolute right-2 top-1/2 z-30
                    flex h-9 w-9 -translate-y-1/2 items-center
                    justify-center rounded-full border border-white/30
                    bg-black/25 text-white shadow-lg backdrop-blur-xl
                    transition hover:scale-105 hover:bg-white/30
                    min-[480px]:right-3 sm:right-6 sm:h-12 sm:w-12"
                >
                  <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>

                {/* SLIDE INDICATORS */}

                <div
                  className="absolute bottom-4 left-1/2 z-30
                    flex -translate-x-1/2 items-center gap-2
                    rounded-full border border-white/20
                    bg-black/35 px-3 py-2 backdrop-blur-xl
                    sm:bottom-7"
                >
                  {slides.map((slide, index) => (
                    <button
                      key={`${slide.url}-dot-${index}`}
                      type="button"
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Show slide ${index + 1}`}
                      aria-current={
                        currentSlide === index ? "true" : undefined
                      }
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "w-7 bg-lime-300 sm:w-8"
                          : "w-2.5 bg-white/60 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>

                {/* SLIDE NUMBER */}

                <div
                  className="absolute bottom-6 left-6 z-30 hidden
                    font-mono text-xs tracking-widest text-white/80
                    sm:block"
                >
                  {String(currentSlide + 1).padStart(2, "0")}
                  <span className="mx-2 text-white/40">/</span>
                  {String(slides.length).padStart(2, "0")}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          2. WELCOME SECTION
      ====================================================== */}

      <section
        id="about"
        className="px-4 py-12 sm:px-6 sm:py-16 lg:py-24"
      >
        <div
          className="mx-auto grid max-w-7xl items-center gap-8
            lg:grid-cols-2 lg:gap-16"
        >
          <div className="min-w-0">
            <span
              className="inline-flex items-center gap-2 rounded-full
                border border-emerald-200 bg-white/80 px-4 py-2
                text-xs font-bold uppercase tracking-widest
                text-emerald-800 backdrop-blur-xl"
            >
              <Sparkles className="h-4 w-4" />
              Welcome to Triveni
            </span>

            <h2
              className="mt-5 text-2xl font-black leading-tight
                tracking-tight text-emerald-950
                min-[400px]:text-3xl sm:mt-6 sm:text-4xl lg:text-5xl"
            >
              Education That Connects

              <span className="block text-emerald-700">
                Knowledge With Practice.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8">
              Welcome to Triveni Secondary School, Department of Plant Science,
              Katari-4, Udayapur, Nepal. Our technical education approach brings
              classroom learning closer to practical agricultural knowledge
              and real-world skills.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Explore our academic programs, practical learning opportunities,
              faculty, and activities designed to help students prepare for
              their future.
            </p>

            <a
              href="#program"
              className="mt-6 inline-flex min-h-12 items-center
                justify-center gap-2 rounded-xl bg-emerald-800
                px-5 py-3 text-sm font-bold text-white
                shadow-lg shadow-emerald-900/10 transition
                hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              Explore Plant Science
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative min-w-0">
            <div
              className="absolute -inset-2 rounded-3xl
                bg-gradient-to-br from-emerald-200/60
                to-lime-100/60 blur-2xl sm:-inset-4"
            />

            <GlassCard className="relative p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:gap-4">
                {[
                  {
                    icon: BookOpen,
                    title: "Academic Learning",
                    text: "Build a strong foundation through structured education.",
                  },
                  {
                    icon: Sprout,
                    title: "Practical Skills",
                    text: "Connect theory with agricultural practice.",
                  },
                  {
                    icon: Microscope,
                    title: "Scientific Thinking",
                    text: "Develop observation, investigation, and problem-solving.",
                  },
                  {
                    icon: GraduationCap,
                    title: "Career Preparation",
                    text: "Explore pathways for further study and professional growth.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/80
                        bg-white/70 p-4 backdrop-blur-xl transition
                        hover:-translate-y-1 hover:bg-white/95
                        sm:p-5"
                    >
                      <div
                        className="mb-3 flex h-10 w-10 items-center
                          justify-center rounded-xl border border-emerald-100
                          bg-emerald-50 text-emerald-800 sm:mb-4 sm:h-11 sm:w-11"
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="text-sm font-bold text-emerald-950 sm:text-base">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* =====================================================
          3. PRINCIPAL AND COORDINATOR
      ====================================================== */}

      <section
        id="leadership"
        className="px-4 py-12 sm:px-6 sm:py-16 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Leadership"
            title="Guided by Vision. Driven by Education."
            description="Meet the people dedicated to supporting our students, strengthening our institution, and advancing quality technical education."
          />

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8">
            {leadership.map(({ key, label, data, accent }) => (
              <GlassCard
                key={key}
                className="group relative overflow-hidden p-4 sm:p-7 lg:p-8"
              >
                <div
                  className={`pointer-events-none absolute -right-16 -top-16
                    h-48 w-48 rounded-full blur-3xl ${
                      accent === "lime"
                        ? "bg-lime-300/25"
                        : "bg-emerald-300/25"
                    }`}
                />

                <div
                  className="relative flex min-w-0 flex-col
                    items-center gap-5 text-center
                    sm:flex-row sm:items-start sm:gap-6 sm:text-left"
                >
                  {/* LEADER PHOTO */}

                  <div className="w-full shrink-0 sm:w-auto">
                    <div className="relative mx-auto w-fit">
                      <div
                        className={`absolute -inset-2 rounded-[26px] blur-sm ${
                          accent === "lime"
                            ? "bg-lime-300/60"
                            : "bg-emerald-300/60"
                        }`}
                      />

                      {data.photo ? (
                        <img
                          src={data.photo}
                          alt={data.name || label}
                          loading="lazy"
                          className="relative h-44 w-36 rounded-[22px]
                            border-4 border-white object-cover shadow-xl
                            transition duration-500 group-hover:scale-[1.02]
                            sm:h-48 sm:w-40"
                        />
                      ) : (
                        <div
                          className="relative flex h-44 w-36 items-center
                            justify-center rounded-[22px] border-4
                            border-white bg-emerald-100 text-emerald-800
                            shadow-xl sm:h-48 sm:w-40"
                        >
                          <GraduationCap className="h-14 w-14" />
                        </div>
                      )}

                      <div
                        className="absolute -bottom-3 -right-3
                          flex h-10 w-10 items-center justify-center
                          rounded-2xl border-4 border-white
                          bg-emerald-800 text-white shadow-lg"
                      >
                        <GraduationCap className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  {/* LEADER DETAILS */}

                  <div className="min-w-0 w-full flex-1">
                    <span
                      className="inline-flex max-w-full items-center
                        justify-center gap-2 rounded-full border
                        border-emerald-200 bg-white/80 px-3 py-1.5
                        text-[10px] font-bold uppercase tracking-wider
                        text-emerald-800 sm:justify-start sm:text-xs"
                    >
                      <Award className="h-3.5 w-3.5 shrink-0" />
                      {label}
                    </span>

                    <h3
                      className="mt-4 break-words text-xl font-black
                        tracking-tight text-emerald-950 sm:text-2xl"
                    >
                      {data.name}
                    </h3>

                    <p className="mt-1 break-words text-sm font-semibold text-emerald-700">
                      {data.designation}
                    </p>

                    {data.qualification && (
                      <p className="mt-1 break-words text-xs leading-5 text-slate-500">
                        {data.qualification}
                      </p>
                    )}

                    {data.message && (
                      <div
                        className="mt-4 rounded-2xl border border-white/90
                          bg-white/70 p-4 text-left backdrop-blur-xl sm:mt-5"
                      >
                        <Quote className="mb-2 h-5 w-5 text-emerald-500" />

                        <p className="text-sm italic leading-7 text-slate-600">
                          {data.message}
                        </p>
                      </div>
                    )}

                    <div
                      className="mt-5 space-y-3 border-t
                        border-emerald-100 pt-4 text-left"
                    >
                      {data.phone && (
                        <a
                          href={`tel:${data.phone}`}
                          className="flex min-w-0 items-center gap-3
                            text-sm text-slate-600 transition
                            hover:text-emerald-800"
                        >
                          <span
                            className="flex h-9 w-9 shrink-0 items-center
                              justify-center rounded-xl border border-white
                              bg-white/80 text-emerald-700 shadow-sm"
                          >
                            <Phone className="h-4 w-4" />
                          </span>

                          <span className="min-w-0 break-all">
                            {data.phone}
                          </span>
                        </a>
                      )}

                      {data.email && (
                        <a
                          href={`mailto:${data.email}`}
                          className="flex min-w-0 items-center gap-3
                            text-sm text-slate-600 transition
                            hover:text-emerald-800"
                        >
                          <span
                            className="flex h-9 w-9 shrink-0 items-center
                              justify-center rounded-xl border border-white
                              bg-white/80 text-emerald-700 shadow-sm"
                          >
                            <Mail className="h-4 w-4" />
                          </span>

                          <span className="min-w-0 break-all">
                            {data.email}
                          </span>
                        </a>
                      )}

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 pt-2
                          text-sm font-bold text-emerald-800 transition
                          hover:gap-3 hover:text-emerald-600"
                      >
                        Get in touch
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          4. CORE FOCUS AREAS
      ====================================================== */}

      <section
        id="program"
        className="px-4 py-12 sm:px-6 sm:py-16 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Academic Excellence"
            title="Explore Our Focus Areas"
            description="Discover the disciplines and practical skills that connect Plant Science education with modern agricultural opportunities."
          />

          <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {(CORE_FOCUS_AREAS || []).map((area, index) => {
              const Icon = focusIcons[index % focusIcons.length];

              return (
                <GlassCard
                  key={area.code || area.title}
                  className="group min-w-0 p-5 sm:p-7"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center
                        justify-center rounded-2xl border border-emerald-100
                        bg-white/80 text-emerald-800 shadow-sm transition
                        duration-300 group-hover:-translate-y-1
                        group-hover:bg-emerald-800 group-hover:text-white
                        sm:h-14 sm:w-14"
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    {area.code && (
                      <span
                        className="max-w-[55%] break-words rounded-lg
                          border border-emerald-100 bg-white/70
                          px-2 py-1.5 text-right font-mono text-xs
                          font-bold text-emerald-800 sm:px-3"
                      >
                        {area.code}
                      </span>
                    )}
                  </div>

                  <h3
                    className="mt-5 break-words text-base font-extrabold
                      text-emerald-950 transition
                      group-hover:text-emerald-700 sm:mt-6 sm:text-lg"
                  >
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {area.description}
                  </p>

                  <div
                    className="mt-5 flex flex-wrap gap-2
                      border-t border-emerald-100/80 pt-4"
                  >
                    {(area.skills || []).map((skill) => (
                      <span
                        key={skill}
                        className="max-w-full break-words rounded-full
                          border border-emerald-100 bg-white/70
                          px-3 py-1.5 text-xs font-medium text-emerald-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          5. ALUMNI TESTIMONIALS
      ====================================================== */}

      <section
        id="alumni"
        className="px-4 py-12 sm:px-6 sm:py-16 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Alumni Stories"
            title="Learning That Goes Beyond the Classroom"
            description="Discover the experiences and journeys of former students as they pursue further education and professional opportunities."
          />

          <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4 sm:gap-5">
            {(ALUMNI_TESTIMONIALS || []).map((alum) => (
              <GlassCard
                key={alum.id}
                className="flex min-w-0 flex-col justify-between p-5 sm:p-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <Quote className="h-7 w-7 shrink-0 text-emerald-600" />

                    <span
                      className="max-w-[65%] break-words rounded-full
                        border border-emerald-100 bg-white/80
                        px-3 py-1 text-xs font-bold text-emerald-800"
                    >
                      {alum.batch}
                    </span>
                  </div>

                  <p className="mt-5 break-words text-sm italic leading-7 text-slate-600">
                    "{alum.quote}"
                  </p>
                </div>

                <div
                  className="mt-6 flex min-w-0 items-center gap-3
                    border-t border-emerald-100 pt-5"
                >
                  <img
                    src={alum.avatar}
                    alt={alum.name}
                    loading="lazy"
                    className="h-12 w-12 shrink-0 rounded-2xl
                      border-2 border-white object-cover shadow-md"
                  />

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="break-words text-sm font-bold text-emerald-950">
                        {alum.name}
                      </h3>

                      {alum.name?.includes("Bibash") && onOpenDeveloper && (
                        <button
                          type="button"
                          onClick={onOpenDeveloper}
                          className="rounded-md bg-lime-200 px-2 py-0.5
                            text-[10px] font-bold text-emerald-950"
                        >
                          Developer
                        </button>
                      )}
                    </div>

                    <p className="mt-1 break-words text-xs font-semibold text-emerald-700">
                      {alum.currentRole}
                    </p>

                    <p className="mt-1 break-words text-xs text-slate-500">
                      {alum.affiliation}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          6. TEACHERS AND STAFF
      ====================================================== */}

      <section
        id="teachers"
        className="px-4 py-12 sm:px-6 sm:py-16 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Faculty"
            title="Meet Our Dedicated Educators"
            description="Learn about the teachers and academic staff who support student learning and practical skill development."
          />

          <GlassCard className="min-w-0 p-4 sm:p-7 lg:p-10">
            <div
              className="mb-6 flex flex-col gap-4
                md:flex-row md:items-center md:justify-between sm:mb-8"
            >
              <div className="min-w-0">
                <h3 className="text-lg font-extrabold text-emerald-950 sm:text-xl">
                  Faculty & Academic Staff
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Find a teacher by name, role, or subject.
                </p>
              </div>

              <div className="relative w-full md:max-w-sm">
                <Search
                  className="absolute left-4 top-1/2 h-4 w-4
                    -translate-y-1/2 text-emerald-700"
                />

                <input
                  type="search"
                  value={teacherSearch}
                  onChange={(event) => setTeacherSearch(event.target.value)}
                  placeholder="Search teachers..."
                  aria-label="Search teachers by name, role, or subject"
                  className="w-full rounded-2xl border border-emerald-100
                    bg-white/80 py-3.5 pl-11 pr-4 text-sm text-slate-800
                    shadow-sm outline-none backdrop-blur-xl transition
                    placeholder:text-slate-400 focus:border-emerald-400
                    focus:ring-4 focus:ring-emerald-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3 sm:gap-5">
              {filteredTeachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className="flex min-w-0 flex-col justify-between
                    rounded-2xl border border-white/90 bg-white/70
                    p-4 backdrop-blur-xl transition
                    hover:-translate-y-1 hover:bg-white/95
                    hover:shadow-xl hover:shadow-emerald-900/5 sm:p-5"
                >
                  <div className="min-w-0">
                    <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                      {teacher.photo ? (
                        <img
                          src={teacher.photo}
                          alt={teacher.name}
                          loading="lazy"
                          className="h-14 w-14 shrink-0 rounded-2xl
                            border-2 border-white object-cover shadow-md
                            sm:h-16 sm:w-16"
                        />
                      ) : (
                        <div
                          className="flex h-14 w-14 shrink-0 items-center
                            justify-center rounded-2xl bg-emerald-100
                            text-emerald-800 sm:h-16 sm:w-16"
                        >
                          <GraduationCap className="h-7 w-7" />
                        </div>
                      )}

                      <div className="min-w-0 flex-1">
                        <h3 className="break-words text-sm font-bold text-emerald-950 sm:text-base">
                          {teacher.name}
                        </h3>

                        <p className="mt-1 break-words text-sm font-semibold text-emerald-700">
                          {teacher.role}
                        </p>

                        <p className="mt-1 break-words text-xs leading-5 text-slate-500">
                          {teacher.qualification}
                        </p>
                      </div>
                    </div>

                    <div
                      className="mt-5 space-y-3 rounded-xl border
                        border-white/80 bg-white/70 p-3 sm:p-4"
                    >
                      <div className="flex min-w-0 items-start gap-3">
                        <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />

                        <p className="min-w-0 break-words text-xs leading-6 text-slate-600">
                          <span className="font-bold text-emerald-950">
                            Teaching:
                          </span>{" "}
                          {teacher.subject}
                        </p>
                      </div>

                      <div className="flex min-w-0 items-start gap-3">
                        <Award className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />

                        <p className="min-w-0 break-words text-xs leading-6 text-slate-600">
                          <span className="font-bold text-emerald-950">
                            Specialty:
                          </span>{" "}
                          {teacher.specialty}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="mt-5 flex flex-wrap items-center
                      justify-between gap-3 border-t
                      border-emerald-100 pt-4"
                  >
                    {teacher.phone ? (
                      <a
                        href={`tel:${teacher.phone}`}
                        className="inline-flex items-center gap-2
                          text-xs font-semibold text-emerald-800
                          hover:text-emerald-600"
                      >
                        <Phone className="h-4 w-4" />
                        Call
                      </a>
                    ) : (
                      <span />
                    )}

                    {teacher.email && (
                      <a
                        href={`mailto:${teacher.email}`}
                        className="inline-flex items-center gap-2
                          break-all text-xs font-semibold text-slate-600
                          hover:text-emerald-800"
                      >
                        <Mail className="h-4 w-4 shrink-0" />
                        Send Email
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {filteredTeachers.length === 0 && (
                <div
                  className="col-span-full rounded-2xl border
                    border-white/80 bg-white/70 p-8 text-center sm:p-10"
                >
                  <Search className="mx-auto h-8 w-8 text-emerald-600" />

                  <h3 className="mt-4 font-bold text-emerald-950">
                    No teachers found
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    Try another name, role, or subject.
                  </p>
                </div>
              )}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* =====================================================
          7. FINAL CALL TO ACTION
      ====================================================== */}

      <section className="px-4 pb-16 pt-6 sm:px-6 sm:pb-24 sm:pt-8 lg:pb-28">
        <div
          className="relative mx-auto max-w-7xl overflow-hidden
            rounded-3xl border border-white/20
            bg-gradient-to-br from-emerald-950 via-emerald-900
            to-green-800 px-5 py-12 text-center
            shadow-[0_25px_80px_rgba(6,55,30,0.18)]
            sm:rounded-[32px] sm:px-12 sm:py-20"
        >
          <div
            className="pointer-events-none absolute -left-20 -top-20
              h-56 w-56 rounded-full border border-white/10
              bg-white/5 blur-2xl sm:h-64 sm:w-64"
          />

          <div
            className="pointer-events-none absolute -bottom-24 -right-16
              h-64 w-64 rounded-full border border-white/10
              bg-lime-300/10 blur-2xl sm:h-72 sm:w-72"
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <span
              className="inline-flex max-w-full items-center justify-center
                gap-2 rounded-full border border-white/20 bg-white/10
                px-4 py-2 text-[10px] font-bold uppercase
                tracking-widest text-lime-200 backdrop-blur-xl sm:text-xs"
            >
              <Sprout className="h-4 w-4 shrink-0" />
              Your Future Starts Here
            </span>

            <h2
              className="mt-5 text-2xl font-black leading-tight
                tracking-tight text-white min-[400px]:text-3xl
                sm:mt-6 sm:text-4xl lg:text-5xl"
            >
              Ready to Grow With Us?
            </h2>

            <p
              className="mx-auto mt-4 max-w-2xl text-sm
                leading-7 text-white/85 sm:mt-5 sm:text-base sm:leading-8"
            >
              Discover our programs, connect with our school, and explore
              opportunities in technical and agricultural education.
            </p>

            <div
              className="mt-7 flex flex-col justify-center gap-3
                min-[480px]:flex-row min-[480px]:flex-wrap sm:mt-8"
            >
              <a
                href="#program"
                className="inline-flex min-h-12 items-center
                  justify-center gap-2 rounded-xl bg-lime-300
                  px-6 py-3 text-sm font-bold text-emerald-950
                  transition hover:-translate-y-0.5 hover:bg-lime-200
                  sm:rounded-2xl"
              >
                Explore Programs
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#leadership"
                className="inline-flex min-h-12 items-center
                  justify-center gap-2 rounded-xl border
                  border-white/30 bg-white/10 px-6 py-3
                  text-sm font-bold text-white backdrop-blur-xl
                  transition hover:bg-white/20 sm:rounded-2xl"
              >
                Meet Our Leadership
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
